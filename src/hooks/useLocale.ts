import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { getLocaleFromPath, getLocalizedPath, type Locale } from '@/lib/i18n'

export function useLocale(): { locale: Locale; localizedPath: (path: string) => string } {
  const { pathname } = useLocation()
  const locale = useMemo(() => getLocaleFromPath(pathname), [pathname])
  const localizedPath = useMemo(
    () => (path: string) => getLocalizedPath(path, locale === 'es' ? 'en' : 'es'),
    [locale]
  )
  return { locale, localizedPath }
}
