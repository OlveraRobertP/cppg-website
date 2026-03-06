import { useState, useEffect } from 'react'

/**
 * Animación de conteo de 0 hasta end cuando inView es true.
 * Duración en ms, easing suave vía progreso lineal (puede mejorarse con easeOut).
 */
export function useCountUp(end: number, inView: boolean, durationMs = 1800): number {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let startTime: number
    let rafId: number

    const step = (timestamp: number) => {
      if (startTime === undefined) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      // Ease out para que el final sea más suave
      const eased = 1 - (1 - progress) ** 2
      setCount(Math.floor(eased * end))
      if (progress < 1) rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [inView, end, durationMs])

  return count
}
