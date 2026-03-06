import { useLocation } from 'react-router-dom'
import { SectionTransition } from '@/components/SectionTransition'
import { getLocaleFromPath } from '@/lib/i18n'
import { translations } from '@/lib/i18n'

const OFFICE_KEYS = ['cdmx', 'gdl'] as const
const OFFICE_LABELS = {
  es: { cdmx: 'Ciudad de México', gdl: 'Guadalajara' },
  en: { cdmx: 'Mexico City', gdl: 'Guadalajara' },
} as const

export function NuestrasOficinasSection() {
  const { pathname } = useLocation()
  const locale = getLocaleFromPath(pathname)
  const t = translations[locale].officesSection
  const labels = OFFICE_LABELS[locale]

  return (
    <SectionTransition>
      <section className="container px-4 py-16 md:px-6 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-foreground">
          {t.title}
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start lg:gap-14">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/5 to-foreground/10" />
            <img
              src="/images/nuestras-oficinas.png"
              alt={t.title}
              className="relative h-full max-h-[420px] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-8">
            {OFFICE_KEYS.map((key) => (
              <div key={key}>
                <h3 className="font-semibold text-foreground">
                  {labels[key]}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t[key]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionTransition>
  )
}
