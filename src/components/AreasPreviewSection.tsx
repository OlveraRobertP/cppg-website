import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { AREAS } from '@/data/areas'
import { cn } from '@/lib/utils'
import type { Locale } from '@/lib/i18n'
import { translations } from '@/lib/i18n'

type Props = { base: string; readMoreLabel: string; locale: Locale }

export function AreasPreviewSection({ base, readMoreLabel, locale }: Props) {
  const t = translations[locale].areasPreview
  const areaTitle = (area: (typeof AREAS)[number]) => (locale === 'en' ? area.titleEn : area.title)
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {AREAS.map((area, i) => (
          <motion.article
            key={area.slug}
            role="listitem"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: i * 0.05 }}
            className="transition-shadow duration-200"
          >
            <Link
              to={`${base}/areas-de-practica/${area.slug}`}
              className={cn(
                'group block rounded-xl border border-border bg-card text-card-foreground shadow transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
              )}
              aria-label={`${readMoreLabel}: ${areaTitle(area)}`}
            >
              <Card className="overflow-hidden border-0 shadow-none transition-transform duration-200 group-hover:-translate-y-0.5">
                <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
                  <img
                    src={area.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {areaTitle(area)}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t.cardDescription.replace('{area}', areaTitle(area).toLowerCase())}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center gap-1 text-sm font-medium text-primary">
                  <span>{readMoreLabel}</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </CardFooter>
              </Card>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

