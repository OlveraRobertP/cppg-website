import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getLocaleFromPath } from '@/lib/i18n'

export function usePageLocale() {
  const { pathname } = useLocation()
  const locale = getLocaleFromPath(pathname)
  useEffect(() => {
    document.documentElement.lang = locale === 'en' ? 'en' : 'es'
  }, [locale])
  return locale
}
