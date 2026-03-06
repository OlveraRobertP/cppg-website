import { Link } from 'react-router-dom'
import type { Locale } from '@/lib/i18n'
import { ABOUT_COPY } from '@/data/about'
import { Button } from '@/components/ui/button'

type Props = { locale: Locale; base: string }

export function QuienesSomosHomeSection({ locale, base }: Props) {
  const copy = ABOUT_COPY[locale]
  return (
    <section className="container px-4 py-16 md:px-6">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{copy.title}</h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>{copy.intro}</p>
            <p>{copy.approach}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to={`${base}/equipo`}>{copy.ctaPrimary}</Link>
            </Button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/5 to-foreground/10" />
          <img
            src="/images/quienes-somos.jpeg"
            alt={copy.title}
            className="relative h-full max-h-[520px] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

