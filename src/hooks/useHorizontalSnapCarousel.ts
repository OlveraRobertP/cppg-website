import {
  useCallback,
  useEffect,
  useRef,
  type FocusEvent,
  type MouseEvent,
  type PointerEvent,
  type RefObject,
} from 'react'

const AUTOPLAY_INTERVAL_MS = 7000
const IDLE_RESUME_MS = 2800
const PROGRAMMATIC_SCROLL_CLEAR_MS = 900

function getCarouselSlideIndex(root: HTMLDivElement): number {
  const slides = Array.from(root.children) as HTMLElement[]
  if (!slides.length) return 0
  const center = root.scrollLeft + root.clientWidth / 2
  let best = 0
  let bestDist = Infinity
  slides.forEach((s, i) => {
    const mid = s.offsetLeft + s.offsetWidth / 2
    const d = Math.abs(mid - center)
    if (d < bestDist) {
      bestDist = d
      best = i
    }
  })
  return best
}

function scrollCarouselRootToIndex(
  root: HTMLDivElement,
  index: number,
  behavior: ScrollBehavior,
) {
  const slides = Array.from(root.children) as HTMLElement[]
  const target = slides[index]
  if (!target) return
  const maxScroll = Math.max(0, root.scrollWidth - root.clientWidth)
  const idealLeft = target.offsetLeft - (root.clientWidth - target.offsetWidth) / 2
  root.scrollTo({
    left: Math.max(0, Math.min(idealLeft, maxScroll)),
    behavior,
  })
}

type HookResult = {
  scrollerRef: RefObject<HTMLDivElement | null>
  scrollToPrevious: () => void
  scrollToNext: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
  onFocusCapture: (e: FocusEvent<HTMLDivElement>) => void
  onBlurCapture: (e: FocusEvent<HTMLDivElement>) => void
  onPointerDown: (e: PointerEvent<HTMLDivElement>) => void
  onPointerMove: (e: PointerEvent<HTMLDivElement>) => void
  onPointerUp: (e: PointerEvent<HTMLDivElement>) => void
  onPointerCancel: (e: PointerEvent<HTMLDivElement>) => void
  onPointerLeave: (e: PointerEvent<HTMLDivElement>) => void
  onClickCapture: (e: MouseEvent<HTMLDivElement>) => void
}

export function useHorizontalSnapCarousel(itemCount: number): HookResult {
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const indexRef = useRef(0)
  const hoverRef = useRef(false)
  const focusWithinRef = useRef(false)
  const userIdleRef = useRef(true)
  const programmaticScrollRef = useRef(false)
  const programmaticEndTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const pointerActiveRef = useRef(false)
  const dragMovedRef = useRef(false)
  const startXRef = useRef(0)
  const startScrollLeftRef = useRef(0)

  const markProgrammaticScroll = useCallback(() => {
    programmaticScrollRef.current = true
    if (programmaticEndTimerRef.current !== undefined) {
      window.clearTimeout(programmaticEndTimerRef.current)
    }
    programmaticEndTimerRef.current = window.setTimeout(() => {
      programmaticScrollRef.current = false
    }, PROGRAMMATIC_SCROLL_CLEAR_MS)
  }, [])

  const scrollToPrevious = useCallback(() => {
    const root = scrollerRef.current
    if (!root || itemCount < 2) return
    const idx = getCarouselSlideIndex(root)
    const next = idx <= 0 ? itemCount - 1 : idx - 1
    indexRef.current = next
    markProgrammaticScroll()
    userIdleRef.current = false
    window.setTimeout(() => {
      userIdleRef.current = true
    }, IDLE_RESUME_MS)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    scrollCarouselRootToIndex(root, next, reduced ? 'auto' : 'smooth')
  }, [itemCount, markProgrammaticScroll])

  const scrollToNext = useCallback(() => {
    const root = scrollerRef.current
    if (!root || itemCount < 2) return
    const idx = getCarouselSlideIndex(root)
    const next = idx >= itemCount - 1 ? 0 : idx + 1
    indexRef.current = next
    markProgrammaticScroll()
    userIdleRef.current = false
    window.setTimeout(() => {
      userIdleRef.current = true
    }, IDLE_RESUME_MS)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    scrollCarouselRootToIndex(root, next, reduced ? 'auto' : 'smooth')
  }, [itemCount, markProgrammaticScroll])

  useEffect(() => {
    const maybeEl = scrollerRef.current
    if (!maybeEl || itemCount < 2) return
    const root: HTMLDivElement = maybeEl

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) return

    let intervalId: ReturnType<typeof setInterval>
    let scrollIdleId: ReturnType<typeof setTimeout>

    const isPaused = () =>
      hoverRef.current || focusWithinRef.current || !userIdleRef.current

    function syncIndexFromScroll() {
      indexRef.current = getCarouselSlideIndex(root)
    }

    function advance() {
      if (isPaused()) return
      const next = (indexRef.current + 1) % itemCount
      indexRef.current = next
      markProgrammaticScroll()
      scrollCarouselRootToIndex(root, next, 'smooth')
    }

    intervalId = window.setInterval(advance, AUTOPLAY_INTERVAL_MS)

    const onScroll = () => {
      if (programmaticScrollRef.current) return
      userIdleRef.current = false
      window.clearTimeout(scrollIdleId)
      scrollIdleId = window.setTimeout(() => {
        userIdleRef.current = true
        syncIndexFromScroll()
      }, IDLE_RESUME_MS)
    }

    root.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.clearInterval(intervalId)
      window.clearTimeout(scrollIdleId)
      if (programmaticEndTimerRef.current !== undefined) {
        window.clearTimeout(programmaticEndTimerRef.current)
      }
      root.removeEventListener('scroll', onScroll)
    }
  }, [itemCount, markProgrammaticScroll])

  const onMouseEnter = useCallback(() => {
    hoverRef.current = true
  }, [])

  const onMouseLeave = useCallback(() => {
    hoverRef.current = false
  }, [])

  const onFocusCapture = useCallback(() => {
    focusWithinRef.current = true
  }, [])

  const onBlurCapture = useCallback(() => {
    const el = scrollerRef.current
    window.requestAnimationFrame(() => {
      if (!el?.contains(document.activeElement)) {
        focusWithinRef.current = false
      }
    })
  }, [])

  const onPointerDown = useCallback((e: PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current
    if (!el) return
    if (e.pointerType !== 'mouse') return
    if (e.button !== 0) return

    pointerActiveRef.current = true
    dragMovedRef.current = false
    startXRef.current = e.clientX
    startScrollLeftRef.current = el.scrollLeft
    userIdleRef.current = false
    el.setPointerCapture(e.pointerId)
  }, [])

  const onPointerMove = useCallback((e: PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current
    if (!el) return
    if (!pointerActiveRef.current) return

    const delta = e.clientX - startXRef.current
    if (Math.abs(delta) > 6) dragMovedRef.current = true
    el.scrollLeft = startScrollLeftRef.current - delta
    userIdleRef.current = false
  }, [])

  const onPointerUp = useCallback((e: PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current
    if (!el) return
    if (pointerActiveRef.current) {
      el.releasePointerCapture(e.pointerId)
    }
    pointerActiveRef.current = false
    window.setTimeout(() => {
      userIdleRef.current = true
    }, IDLE_RESUME_MS)
  }, [])

  const onClickCapture = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!dragMovedRef.current) return
    e.preventDefault()
    e.stopPropagation()
    dragMovedRef.current = false
  }, [])

  return {
    scrollerRef,
    scrollToPrevious,
    scrollToNext,
    onMouseEnter,
    onMouseLeave,
    onFocusCapture,
    onBlurCapture,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel: onPointerUp,
    onPointerLeave: onPointerUp,
    onClickCapture,
  }
}
