import type { Locale } from '@/lib/i18n'

/** Formato compacto tipo Mijares: MM.DD.YYYY para listados y destacados */
export function formatCompactDate(dateStr: string, locale: Locale): string {
  const d = new Date(dateStr)
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const year = d.getFullYear()
  return locale === 'en' ? `${month}.${day}.${year}` : `${day}.${month}.${year}`
}
