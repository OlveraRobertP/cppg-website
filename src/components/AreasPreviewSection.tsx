import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { AREAS } from '@/data/areas'
import type { Locale } from '@/lib/i18n'
import { translations } from '@/lib/i18n'
import { AreasListItem } from '@/components/AreasListItem'
import { AreasCarouselSlide } from '@/components/AreasCarouselSlide'
import { useHorizontalSnapCarousel } from '@/hooks/useHorizontalSnapCarousel'

const PREVIEW_SLICES = 6
const previewAreas = AREAS.slice(0, PREVIEW_SLICES)

type Props = { base: string; readMoreLabel: string; locale: Locale }

export function AreasPreviewSection({ base, readMoreLabel, locale }: Props) {
  const t = translations[locale].areasPreview
  const carousel = useHorizontalSnapCarousel(previewAreas.length)

  return (
    <section
      className="section-alt container px-4 py-16 md:px-6"
      aria-labelledby="areas-practica-heading"
    >
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h2 id="areas-practica-heading" className="text-2xl font-semibold md:text-3xl">
          {t.title}
        </h2>
        <Link
          to={`${base}/areas-de-practica`}
          className="text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
        >
          {t.viewAll}
        </Link>
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {t.listSectionLabel}
      </p>
      <div role="list" className="mt-4 space-y-5 md:space-y-6">
        {previewAreas.map((area, i) => (
          <motion.div
            key={area.slug}
            role="listitem"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
            transition={{ delay: i * 0.03, duration: 0.35 }}
          >
            <AreasListItem
              area={area}
              locale={locale}
              base={base}
              readMoreLabel={readMoreLabel}
              bulletMax={3}
              role="article"
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-14 border-t border-border/60 pt-14 md:mt-16 md:pt-16">
        <div className="rounded-2xl bg-gradient-to-b from-primary/[0.06] via-transparent to-transparent px-1 pb-2 pt-6 md:rounded-3xl md:pt-8">
          <p className="px-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary/85">
            {t.carouselSectionLabel}
          </p>
          <div className="relative mt-5">
            <button
              type="button"
              className="absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-primary/25 bg-card/95 text-foreground shadow-md backdrop-blur-sm transition hover:border-primary/45 hover:bg-card hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:flex"
              aria-label={t.carouselPrev}
              onClick={() => carousel.scrollToPrevious()}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              className="absolute right-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-primary/25 bg-card/95 text-foreground shadow-md backdrop-blur-sm transition hover:border-primary/45 hover:bg-card hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:flex"
              aria-label={t.carouselNext}
              onClick={() => carousel.scrollToNext()}
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
            <div
              role="region"
              aria-label={t.carouselAriaLabel}
              ref={carousel.scrollerRef}
              onMouseEnter={carousel.onMouseEnter}
              onMouseLeave={carousel.onMouseLeave}
              onFocusCapture={carousel.onFocusCapture}
              onBlurCapture={carousel.onBlurCapture}
              onPointerDown={carousel.onPointerDown}
              onPointerMove={carousel.onPointerMove}
              onPointerUp={carousel.onPointerUp}
              onPointerCancel={carousel.onPointerCancel}
              onPointerLeave={carousel.onPointerLeave}
              onClickCapture={carousel.onClickCapture}
              className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 pt-1 [touch-action:pan-x] cursor-grab active:cursor-grabbing md:gap-6 md:scroll-pl-14 md:scroll-pr-14 md:px-14"
            >
              {previewAreas.map((area) => (
                <div
                  key={`areas-carousel-${area.slug}`}
                  className="w-[min(88vw,40rem)] shrink-0 snap-center self-stretch md:w-[min(calc(100vw-3rem),56rem)]"
                >
                  <AreasCarouselSlide
                    area={area}
                    locale={locale}
                    base={base}
                    readMoreLabel={readMoreLabel}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
