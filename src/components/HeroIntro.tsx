import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

type HeroIntroProps = {
  title: string
  intro: string
  ctaLabel: string
  ctaTo: string
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const container: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EASE, staggerChildren: 0.08 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export function HeroIntro({ title, intro, ctaLabel, ctaTo }: HeroIntroProps) {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="text-center">
      <motion.h1 variants={item} className="text-4xl font-normal tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
        {title}
      </motion.h1>
      <motion.p variants={item} className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
        {intro}
      </motion.p>
      <motion.div variants={item} className="mt-8">
        <Button asChild size="lg" variant="secondary">
          <Link to={ctaTo}>{ctaLabel}</Link>
        </Button>
      </motion.div>
    </motion.div>
  )
}
