import type { Locale } from '@/lib/i18n'

export const PARTNERS_STATEMENT: Record<
  Locale,
  {
    kicker: string
    headline: string
    ctaLabel: string
  }
> = {
  es: {
    kicker: 'Carranza, Preciado, Pulido y Guakil',
    headline: 'Conversemos hoy: construimos una estrategia legal clara, creativa y práctica para tu caso.',
    ctaLabel: 'Contacto',
  },
  en: {
    kicker: 'Carranza, Preciado, Pulido & Guakil',
    headline: 'Let’s talk today: we’ll shape a clear, creative, and practical legal strategy for your case.',
    ctaLabel: 'Contact',
  },
} as const

