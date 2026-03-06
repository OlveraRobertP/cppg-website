import { Link, useLocation } from 'react-router-dom'
import { getLocaleFromPath, getLocalizedPath, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function LanguageSwitcher({ className }: { className?: string }) {
  const { pathname } = useLocation()
  const locale = getLocaleFromPath(pathname)
  const other: Locale = locale === 'es' ? 'en' : 'es'
  const href = getLocalizedPath(pathname, other)
  return (
    <Link
      to={href}
      className={cn(
        'text-sm font-medium text-muted-foreground hover:text-foreground',
        className
      )}
    >
      {locale === 'es' ? 'EN' : 'ES'}
    </Link>
  )
}
