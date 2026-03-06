import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { TeamCategorySection } from '@/components/TeamCategorySection'
import { getLocaleFromPath } from '@/lib/i18n'
import { translations } from '@/lib/i18n'
import type { TeamCategory } from '@/data/team'
import { TEAM, TEAM_CATEGORIES } from '@/data/team'

export function EquipoPage() {
  const { pathname } = useLocation()
  const locale = getLocaleFromPath(pathname)
  const base = locale === 'en' ? '/en' : ''
  const t = translations[locale].common
  const team = translations[locale].teamPage
  const categoryLabel = (key: TeamCategory) => team.categories[key]
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <h1 className="mb-4 text-3xl font-semibold md:text-4xl">{team.title}</h1>
      <p className="mb-10 max-w-3xl text-muted-foreground">{team.intro}</p>
      {TEAM_CATEGORIES.map((cat) => {
        const members = TEAM.filter((m) => m.category === cat.key)
        if (members.length === 0) return null
        return (
          <TeamCategorySection
            key={cat.key}
            title={categoryLabel(cat.key)}
            members={members}
            base={base}
            readMoreLabel={t.readMore}
          />
        )
      })}
      <div className="mt-4">
        <Button asChild variant="secondary">
          <Link to={`${base}/contacto`}>{t.contact}</Link>
        </Button>
      </div>
    </div>
  )
}
