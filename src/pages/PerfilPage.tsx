import { Link, useParams, useLocation, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { teamProfiles } from '@/data/teamProfiles'
import { TEAM } from '@/data/team'
import { getLocaleFromPath } from '@/lib/i18n'
import { translations } from '@/lib/i18n'

export function PerfilPage() {
  const { slug } = useParams<{ slug: string }>()
  const { pathname } = useLocation()
  const locale = getLocaleFromPath(pathname)
  const base = locale === 'en' ? '/en' : ''
  const t = translations[locale].common
  const nav = translations[locale].nav
  if (!slug || !teamProfiles[slug]) return <Navigate to={`${base}/equipo`} replace />
  const profile = teamProfiles[slug]
  const member = TEAM.find((m) => m.slug === slug)
  const image = member?.image ?? '/images/logo-cppg-1024.png'
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="container px-4 py-12 md:px-6 md:py-16"
    >
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link to={`${base}/equipo`} className="hover:text-foreground">
          {nav.team}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{profile.name}</span>
      </nav>
      <div className="flex flex-col gap-8 md:flex-row md:gap-12">
        <div className="shrink-0">
          <img
            src={image}
            alt={profile.name}
            loading="lazy"
            className="h-64 w-56 object-cover rounded-lg"
            onError={(e) => {
              e.currentTarget.onerror = null
              e.currentTarget.src = '/images/logo-cppg-1024.png'
            }}
          />
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="text-3xl font-semibold md:text-4xl">{profile.name}</h1>
          <p className="mt-2 text-lg text-muted-foreground">{profile.role}</p>
          <div className="mt-8 space-y-6">
            {profile.sections.map((sec, i) => (
              <div key={i}>
                {sec.heading && (
                  <h2 className="mb-2 text-lg font-semibold">{sec.heading}</h2>
                )}
                {sec.content && <p className="text-muted-foreground">{sec.content}</p>}
                {sec.items && sec.items.length > 0 && (
                  <ul className="mt-2 list-disc pl-6 text-muted-foreground">
                    {sec.items.map((item, j) => (
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
        </div>
      </div>
    </motion.div>
  )
}
