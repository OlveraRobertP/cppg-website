import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Locale } from '@/lib/i18n'
import { PARTNERS_STATEMENT } from '@/data/partnersStatement'
import { TEAM } from '@/data/team'
import { Button } from '@/components/ui/button'

type Props = { locale: Locale; base: string }

export function PartnersStatementSection({ locale, base }: Props) {
  const copy = PARTNERS_STATEMENT[locale]
  const partners = TEAM.filter((m) => m.category === 'socios').map((m) => m.name)

  return (
    <section className="container px-4 py-16 md:px-6 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-border bg-muted/35 px-5 py-12 shadow-sm md:px-10"
      >
        <p className="text-center text-xs font-semibold uppercase tracking-[0.26em] text-muted-foreground">
          {copy.kicker}
        </p>
        <h2 className="mx-auto mt-5 max-w-4xl text-balance text-center text-3xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
          {copy.headline}
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted-foreground md:text-base">
          {partners.join(' · ')}
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="secondary">
            <Link to={`${base}/contacto`}>{copy.ctaLabel}</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

