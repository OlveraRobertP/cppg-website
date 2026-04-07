import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { areaContent, getAreaContentForLocale } from '@/data/areaContent'
import type { Locale } from '@/lib/i18n'

type Area = { slug: string; title: string; titleEn: string; image: string }

function getAreaBullets(slug: string, locale: Locale, max: number) {
  const content = areaContent[slug]
  if (!content) return []

  const { sections } = getAreaContentForLocale(content, locale)
  const fromItems = sections.flatMap((s) => s.items ?? []).map((s) => s.trim()).filter(Boolean)
  const fromHeadings = sections
    .map((s) => (s.heading ?? '').trim())
    .filter((h) => h && !['experiencia', 'experience'].includes(h.toLowerCase()))

  const seen = new Set<string>()
  const bullets: string[] = []
  for (const item of [...fromItems, ...fromHeadings]) {
    const key = item.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    bullets.push(item)
    if (bullets.length >= max) break
  }
  return bullets
}

export function AreasListItem({
  area,
  locale,
  base,
  readMoreLabel,
  bulletMax = 3,
  role,
}: {
  area: Area
  locale: Locale
  base: string
  readMoreLabel: string
  bulletMax?: number
  role?: React.AriaRole
}) {
  const title = locale === 'en' ? area.titleEn : area.title
  const bullets = getAreaBullets(area.slug, locale, bulletMax)

  return (
    <article role={role} className="relative">
      <Link
        to={`${base}/areas-de-practica/${area.slug}`}
        className="group block rounded-2xl border border-border/70 bg-card p-6 shadow-[0_1px_0_hsl(var(--border))] transition md:p-7 md:rounded-[1.25rem] hover:border-border hover:shadow-[0_10px_30px_hsl(0_0%_0%/0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-label={`${readMoreLabel}: ${title}`}
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10 lg:gap-12">
          <div className="min-w-0 md:flex-1 md:max-w-[min(100%,42rem)]">
            <h3 className="text-xl font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary md:text-[1.35rem]">
              {title}
            </h3>
            {bullets.length > 0 ? (
              <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/45" aria-hidden />
                    <span className="min-w-0">{b}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-muted-foreground">
                {locale === 'en'
                  ? `Learn more about our experience in ${title.toLowerCase()}.`
                  : `Conoce más sobre nuestra experiencia en ${title.toLowerCase()}.`}
              </p>
            )}
          </div>

          <div className="flex shrink-0 items-center justify-between gap-6 md:justify-end md:gap-10">
            <span className="inline-flex items-center gap-0.5 text-sm font-semibold text-foreground underline-offset-4 transition group-hover:text-primary md:text-base">
              {readMoreLabel}
              <ChevronRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 md:h-[1.125rem] md:w-[1.125rem]"
                aria-hidden
              />
            </span>
            <div className="relative h-[132px] w-[132px] shrink-0 overflow-hidden rounded-2xl border border-border/60 bg-muted md:h-[150px] md:w-[150px]">
              <img
                src={area.image}
                alt=""
                className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
