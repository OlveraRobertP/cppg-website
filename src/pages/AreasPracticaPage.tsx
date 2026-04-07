import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getLocaleFromPath } from '@/lib/i18n'
import { translations } from '@/lib/i18n'
import { AREAS } from '@/data/areas'
import { AreasListItem } from '@/components/AreasListItem'

const INTRO =
  'Combinamos nuestras habilidades y experiencia para satisfacer tus necesidades legales de la mejor manera. Conoce más sobre nuestra experiencia.'

export function AreasPracticaPage() {
  const { pathname } = useLocation()
  const locale = getLocaleFromPath(pathname)
  const base = locale === 'en' ? '/en' : ''
  const t = translations[locale].common
  return (
    <div className="section-alt min-h-screen">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Áreas de práctica</h1>
            <p className="mt-3 text-muted-foreground">{INTRO}</p>
          </div>
          <Link
            to={`${base}/contacto`}
            className="inline-flex items-center rounded-full border border-border/70 bg-background/60 px-4 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur transition hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {t.contact}
          </Link>
        </div>

        <div role="list" className="mt-10 space-y-4">
          {AREAS.map((area, i) => (
            <motion.div
              key={area.slug}
              role="listitem"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ delay: Math.min(i, 10) * 0.02, duration: 0.35 }}
            >
              <AreasListItem
                area={area}
                locale={locale}
                base={base}
                readMoreLabel={t.readMore}
                bulletMax={3}
                role="article"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
