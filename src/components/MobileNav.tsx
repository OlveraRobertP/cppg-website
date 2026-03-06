import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { translations } from '@/lib/i18n'
import { useLocale } from '@/hooks/useLocale'
import { LanguageSwitcher } from './LanguageSwitcher'

type MobileNavProps = { base: string; className?: string }

const navItems = [
  { path: '', key: 'home' as const },
  { path: 'areas-de-practica', key: 'areas' as const },
  { path: 'equipo', key: 'team' as const },
  { path: 'blog', key: 'blog' as const },
  { path: 'contacto', key: 'contact' as const },
]

export function MobileNav({ base, className }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const { locale } = useLocale()
  const t = translations[locale].nav
  return (
    <div className={cn('flex shrink-0 md:hidden', className)}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(!open)}
        aria-label="Menú"
        className="text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground size-10 touch-manipulation"
      >
        {open ? <X className="h-6 w-6 shrink-0" /> : <Menu className="h-6 w-6 shrink-0" />}
      </Button>
      {open && (
        <nav className="absolute left-0 right-0 top-full z-50 mt-2 rounded-lg border border-border bg-background p-4 uppercase text-foreground shadow-md md:hidden">
          {navItems.map(({ path, key }) => (
            <Link
              key={key}
              to={path ? `${base}/${path}` : base || '/'}
              className="block rounded-md px-2 py-2 text-sm hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              {t[key]}
            </Link>
          ))}
          <div className="mt-2 pt-2 border-t border-border">
            <LanguageSwitcher />
          </div>
        </nav>
      )}
    </div>
  )
}
