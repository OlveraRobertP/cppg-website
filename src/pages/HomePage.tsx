import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HeroIntro } from '@/components/HeroIntro'
import { StatsSection } from '@/components/StatsSection'
import { QuienesSomosHomeSection } from '@/components/QuienesSomosHomeSection'
import { AreasPreviewSection } from '@/components/AreasPreviewSection'
import { NuestrasOficinasSection } from '@/components/NuestrasOficinasSection'
import { PartnersStatementSection } from '@/components/PartnersStatementSection'
import { SectionTransition } from '@/components/SectionTransition'
import { getLocaleFromPath } from '@/lib/i18n'
import { translations } from '@/lib/i18n'

export function HomePage() {
  const { pathname } = useLocation()
  const locale = getLocaleFromPath(pathname)
  const base = locale === 'en' ? '/en' : ''
  const t = translations[locale].common
  const home = translations[locale].home
  return (
    <div>
      <section
        className="relative flex min-h-[70vh] items-end justify-center overflow-hidden bg-muted/50 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/membrete.jpg)' }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-foreground/25 via-foreground/40 to-foreground/75"
          initial={{ opacity: 0, y: '-38%', scale: 1.08 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.2,
            opacity: { duration: 1, ease: [0.22, 0.61, 0.36, 1] },
            y: { type: 'spring', stiffness: 42, damping: 24 },
            scale: { duration: 1.15, ease: [0.22, 0.61, 0.36, 1] },
          }}
        />
        <div className="container relative z-10 px-4 pb-16 pt-36 md:px-6 md:pb-24 md:pt-44 lg:pt-52">
          <HeroIntro title={home.heroTitle} intro={home.heroIntro} ctaLabel={home.heroCta} ctaTo={`${base}/equipo`} />
        </div>
      </section>
      <SectionTransition>
        <StatsSection />
      </SectionTransition>
      <SectionTransition>
        <QuienesSomosHomeSection locale={locale} base={base} />
      </SectionTransition>
      <SectionTransition>
        <AreasPreviewSection base={base} readMoreLabel={t.readMore} locale={locale} />
      </SectionTransition>
      <NuestrasOficinasSection />
      <SectionTransition>
        <PartnersStatementSection locale={locale} base={base} />
      </SectionTransition>
    </div>
  )
}
