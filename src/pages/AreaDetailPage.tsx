import { Link, useParams, useLocation, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { AREAS } from '@/data/areas'
import { areaContent } from '@/data/areaContent'
import { getLocaleFromPath } from '@/lib/i18n'
import { translations } from '@/lib/i18n'

export function AreaDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { pathname } = useLocation()
  const locale = getLocaleFromPath(pathname)
  const base = locale === 'en' ? '/en' : ''
  const t = translations[locale].common
  if (!slug || !areaContent[slug]) return <Navigate to={`${base}/areas-de-practica`} replace />
  const area = areaContent[slug]
  const areaImage = AREAS.find((a) => a.slug === slug)?.image
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="container px-4 py-12 md:px-6 md:py-16"
    >
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link to={`${base}/areas-de-practica`} className="hover:text-foreground">
          Áreas de práctica
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{area.title}</span>
      </nav>
      {areaImage && (
        <div className="mb-8 aspect-[21/9] w-full overflow-hidden rounded-lg bg-muted">
          <img
            src={areaImage}
            alt={area.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <h1 className="mb-8 text-3xl font-semibold md:text-4xl">{area.title}</h1>
      <div className="prose prose-neutral max-w-none dark:prose-invert">
        {area.sections.map((section, i) => (
          <div key={i} className="mb-8">
            {section.heading && (
              <h2 className="mb-3 text-xl font-semibold">{section.heading}</h2>
            )}
            {section.body && <p className="text-muted-foreground">{section.body}</p>}
            {section.items && section.items.length > 0 && (
              <ul className="mt-2 list-disc pl-6 text-muted-foreground">
                {section.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <Button asChild className="mt-8">
        <Link to={`${base}/contacto`}>{t.contact}</Link>
      </Button>
    </motion.div>
  )
}
