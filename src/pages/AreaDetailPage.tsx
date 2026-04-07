import { Link, useParams, useLocation, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { AREAS } from '@/data/areas'
import { areaContent, getAreaContentForLocale } from '@/data/areaContent'
import { getLocaleFromPath } from '@/lib/i18n'
import { translations } from '@/lib/i18n'
import { textWithEmDashHighlights } from '@/lib/emDashHighlight'

function getSummaryAndServices(area: { sections: { heading?: string; body: string; items?: string[] }[] }) {
  const summary = area.sections.map((s) => (s.body ?? '').trim()).find((b) => b.length > 0) ?? ''

  const items = area.sections.flatMap((s) => s.items ?? []).map((s) => s.trim()).filter(Boolean)
  const headingsWithBody = area.sections
    .filter((s) => (s.heading ?? '').trim() && (s.body ?? '').trim())
    .map((s) => {
      const h = (s.heading ?? '').trim()
      const b = (s.body ?? '').trim()
      // Solo entradas tipo “rubro breve”: no usar el título de secciones largas (p. ej. Trayectoria, Enfoque).
      if (b.length <= 64) return `${h} — ${b}`
      return null
    })
    .filter((x): x is string => Boolean(x))

  const seen = new Set<string>()
  const services: string[] = []
  const skipHeading = new Set(['experiencia', 'experience'])
  for (const it of [...items, ...headingsWithBody]) {
    const key = it.toLowerCase()
    if (!it || seen.has(key)) continue
    if (skipHeading.has(it.toLowerCase())) continue
    seen.add(key)
    services.push(it)
  }

  return { summary, services }
}

export function AreaDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { pathname } = useLocation()
  const locale = getLocaleFromPath(pathname)
  const base = locale === 'en' ? '/en' : ''
  const t = translations[locale].common
  const tNav = translations[locale].nav
  const tArea = translations[locale].areaDetail
  const tAreasPreview = translations[locale].areasPreview
  if (!slug || !areaContent[slug]) return <Navigate to={`${base}/areas-de-practica`} replace />
  const area = getAreaContentForLocale(areaContent[slug], locale)
  const areaImage = AREAS.find((a) => a.slug === slug)?.image
  const { summary, services } = getSummaryAndServices(area)
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="container px-4 py-12 md:px-6 md:py-16"
    >
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link to={`${base}/areas-de-practica`} className="hover:text-foreground">
          {tNav.areas}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{area.title}</span>
      </nav>
      {areaImage && (
        <div className="relative mb-8 aspect-[21/9] w-full overflow-hidden rounded-2xl border border-border/70 bg-muted shadow-[0_10px_30px_hsl(0_0%_0%/0.06)]">
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent"
            aria-hidden
          />
          <img
            src={areaImage}
            alt={area.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{area.title}</h1>
        {summary && (
          <p className="mt-4 max-w-3xl text-muted-foreground">{textWithEmDashHighlights(summary)}</p>
        )}
      </header>

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <section className="min-w-0">
          {services.length > 0 && (
            <div className="rounded-2xl border border-border/80 bg-card/70 p-6 shadow-[0_1px_0_hsl(var(--border))]">
              <h2 className="text-lg font-semibold tracking-tight">{tArea.services}</h2>
              <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {services.slice(0, 10).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" aria-hidden />
                    <span className="min-w-0">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert">
            {area.sections
              .filter((section) => !section.omitFromProse)
              .map((section, i) => {
                const body = (section.body ?? '').trim()
                const hasHeading = Boolean((section.heading ?? '').trim())
                const bodyIsSummaryDuplicate =
                  Boolean(summary && body && body === summary.trim()) && !hasHeading
                return (
                  <div key={i} className="mb-8">
                    {section.heading && <h2 className="mb-3 text-xl font-semibold">{section.heading}</h2>}
                    {body && !bodyIsSummaryDuplicate && (
                      <p className="text-muted-foreground">{textWithEmDashHighlights(section.body)}</p>
                    )}
                    {section.items && section.items.length > 0 && (
                      <ul className="mt-2 list-disc pl-6 text-muted-foreground">
                        {section.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )
              })}
          </div>
        </section>

        <aside className="lg:sticky lg:top-24 h-fit">
          <div className="rounded-2xl border border-border/80 bg-background/60 p-6 shadow-sm backdrop-blur">
            <h3 className="text-base font-semibold tracking-tight">{tArea.ctaTitle}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{tArea.ctaBody}</p>
            <Button asChild className="mt-5 w-full">
              <Link to={`${base}/contacto`}>{t.contact}</Link>
            </Button>
            <Link
              to={`${base}/areas-de-practica`}
              className="mt-3 inline-flex w-full items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {tAreasPreview.viewAll}
            </Link>
          </div>
        </aside>
      </div>
    </motion.div>
  )
}
