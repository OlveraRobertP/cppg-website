import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import type { Locale } from '@/lib/i18n'
import { getAreaBullets } from '@/lib/getAreaBullets'
import { cn } from '@/lib/utils'

type Area = { slug: string; title: string; titleEn: string; image: string }

type Props = {
  area: Area
  locale: Locale
  base: string
  readMoreLabel: string
}

export function AreasCarouselSlide({ area, locale, base, readMoreLabel }: Props) {
  const title = locale === 'en' ? area.titleEn : area.title
  const bullets = getAreaBullets(area.slug, locale, 2)

  return (
    <article className="flex h-full flex-col">
      <Link
        to={`${base}/areas-de-practica/${area.slug}`}
        className={cn(
          'group flex h-full min-h-[280px] flex-col rounded-2xl border border-primary/25 bg-gradient-to-br from-card via-card to-primary/[0.1] p-5 shadow-[0_22px_55px_hsl(214_51%_12%/0.14),0_0_0_1px_hsl(214_51%_12%/0.06)_inset] ring-1 ring-primary/15 transition',
          'hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_28px_64px_hsl(214_51%_12%/0.18)]',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:rounded-[1.35rem] md:p-6',
        )}
        aria-label={`${readMoreLabel}: ${title}`}
      >
        <h3 className="text-balance text-xl font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary md:text-2xl md:leading-snug">
          {title}
        </h3>

        {bullets.length > 0 ? (
          <ul className="mt-3 space-y-1 text-[0.8125rem] leading-snug text-muted-foreground/70">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span
                  className="mt-2 h-0.5 w-0.5 shrink-0 rounded-full bg-muted-foreground/35"
                  aria-hidden
                />
                <span className="line-clamp-2 min-w-0">{b}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="relative mt-4 w-full shrink-0 overflow-hidden rounded-xl border border-primary/20 bg-muted shadow-inner aspect-[16/10]">
          <img
            src={area.image}
            alt=""
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] grayscale-[0.25] contrast-[1.02]"
            loading="lazy"
            decoding="async"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/[0.06] via-transparent to-transparent"
            aria-hidden
          />
        </div>

        <span className="mt-4 inline-flex items-center gap-1 text-base font-semibold text-foreground underline-offset-4 transition group-hover:text-primary md:mt-5 md:text-lg">
          {readMoreLabel}
          <ChevronRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5 md:h-5 md:w-5"
            aria-hidden
          />
        </span>
      </Link>
    </article>
  )
}
