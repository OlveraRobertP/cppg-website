import { areaContent, getAreaContentForLocale } from '@/data/areaContent'
import type { Locale } from '@/lib/i18n'

export function getAreaBullets(slug: string, locale: Locale, max: number): string[] {
  const content = areaContent[slug]
  if (!content) return []

  const { sections } = getAreaContentForLocale(content, locale)
  const fromItems = sections.flatMap((s) => s.items ?? []).map((s) => s.trim()).filter(Boolean)
  const fromHeadings = sections
    .map((s) => (s.heading ?? '').trim())
    .filter((h) => h && !['experiencia', 'experience'].includes(h.toLowerCase()))

  const seen = new Set<string>()
  const bullets: string[] = []
  for (const item of [...fromItems, ...fromHeadings]) {
    const key = item.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    bullets.push(item)
    if (bullets.length >= max) break
  }
  return bullets
}
