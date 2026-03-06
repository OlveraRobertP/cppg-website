import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { NavLink } from './NavLink'
import { LanguageSwitcher } from './LanguageSwitcher'
import { MobileNav } from './MobileNav'
import { translations } from '@/lib/i18n'
import { getLocaleFromPath } from '@/lib/i18n'

export function Header() {
  const { pathname } = useLocation()
  const locale = getLocaleFromPath(pathname)
  const base = locale === 'en' ? '/en' : ''
  const t = translations[locale].nav
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-foreground/20 bg-primary shadow-sm">
      <div className="container flex min-h-14 items-center justify-between gap-3 px-5 py-3 sm:gap-4 sm:px-6 md:h-14 md:px-6 md:py-0">
        <Link
          to={base || '/'}
          className="flex min-w-0 shrink items-center sm:min-w-0 sm:shrink"
          aria-label="CPPG – Inicio"
        >
          <span className="relative block h-8 w-[7.5rem] shrink-0 overflow-hidden sm:h-9 sm:max-w-[55vw] sm:w-auto sm:overflow-visible md:max-w-none">
            <img
              src="/images/logo-cppg-1024.png"
              alt="CPPG Carranza Preciado Pulido Guakil"
              className="h-8 w-auto min-w-[12rem] object-cover object-left brightness-0 invert sm:min-w-0 sm:h-9 sm:w-full sm:max-w-full sm:object-contain"
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = '/images/logo-cppg.png'
              }}
            />
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to={base || '/'} inverted>
            {t.home}
          </NavLink>
          <NavLink to={`${base}/areas-de-practica`} inverted>
            {t.areas}
          </NavLink>
          <NavLink to={`${base}/equipo`} inverted>
            {t.team}
          </NavLink>
          <NavLink to={`${base}/blog`} inverted>
            {t.blog}
          </NavLink>
          <NavLink to={`${base}/contacto`} inverted>
            {t.contact}
          </NavLink>
          <LanguageSwitcher className="text-primary-foreground/80 hover:text-primary-foreground" />
          <Button asChild size="sm" variant="secondary">
            <Link to={`${base}/contacto`}>{t.contact}</Link>
          </Button>
        </nav>
        <div className="flex shrink-0 items-center gap-4 md:hidden text-primary-foreground">
          <LanguageSwitcher className="text-primary-foreground/80 hover:text-primary-foreground" />
          <MobileNav base={base} />
        </div>
      </div>
    </header>
  )
}
