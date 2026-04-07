import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AREAS } from '@/data/areas'
import type { Locale } from '@/lib/i18n'
import { translations } from '@/lib/i18n'
import { AreasListItem } from '@/components/AreasListItem'

type Props = { base: string; readMoreLabel: string; locale: Locale }

export function AreasPreviewSection({ base, readMoreLabel, locale }: Props) {
  const t = translations[locale].areasPreview
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
      <div role="list" className="mt-8 space-y-5 md:space-y-6">
        {AREAS.slice(0, 6).map((area, i) => (
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
    </section>
  )
}

