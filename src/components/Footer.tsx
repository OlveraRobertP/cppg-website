import { Link, useLocation } from 'react-router-dom'
import { getLocaleFromPath } from '@/lib/i18n'
import { translations } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const PHONE = '55 1313 7404'
const EMAIL = 'saguilar@cppg.mx'

export function Footer({ className }: { className?: string }) {
  const { pathname } = useLocation()
  const locale = getLocaleFromPath(pathname)
  const base = locale === 'en' ? '/en' : ''
  const t = translations[locale]

  const navLinks = [
    { to: `${base}/equipo`, label: t.nav.team },
    { to: `${base}/areas-de-practica`, label: t.nav.areas },
    { to: `${base}/contacto`, label: t.nav.contact },
    { to: `${base}/politica-de-privacidad`, label: t.footer.privacy },
  ]

  return (
    <footer className={cn('border-t border-primary-foreground/20 bg-primary text-primary-foreground', className)}>
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Columna 1: Marca */}
          <div className="flex flex-col">
            <Link to={base || '/'} className="inline-block">
              <span className="text-2xl font-semibold tracking-tight md:text-3xl">CPPG</span>
            </Link>
            <p className="mt-2 text-xs font-medium uppercase tracking-wider text-primary-foreground/70">
              {t.footer.firmName}
            </p>
          </div>

          {/* Columna 2: Menú de navegación */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-primary-foreground">
              {t.footer.menuTitle}
            </h3>
            <nav className="mt-4 flex flex-col gap-3" aria-label="Footer navigation">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors w-fit"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-primary-foreground">
              {t.footer.contactTitle}
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/80">
              <a
                href={`mailto:${EMAIL}`}
                className="hover:text-primary-foreground transition-colors w-fit"
              >
                {EMAIL}
              </a>
              <a
                href={`tel:${PHONE.replace(/\s/g, '')}`}
                className="hover:text-primary-foreground transition-colors w-fit"
              >
                {PHONE}
              </a>
              <p>{t.footer.locations}</p>
            </div>
          </div>

          {/* Columna 4: Brochure CTA */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-primary-foreground">
              {t.footer.brochureTitle}
            </h3>
            <div className="mt-4">
              <Button
                asChild
                variant="secondary"
                size="sm"
                className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-medium px-6"
              >
                <a
                  href="/docs/cppg-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.footer.download}
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-primary-foreground/20 pt-8 text-sm text-primary-foreground/80 sm:flex-row sm:justify-between sm:items-center">
          <p>© {new Date().getFullYear()} CPPG. Carranza, Preciado, Pulido y Guakil, S.C.</p>
        </div>
      </div>
    </footer>
  )
}
