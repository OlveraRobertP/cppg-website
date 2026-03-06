import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { getLocaleFromPath } from '@/lib/i18n'
import { translations } from '@/lib/i18n'
import { useCountUp } from '@/hooks/useCountUp'
import { cn } from '@/lib/utils'

const STATS = [
  { value: 12, key: 'years' as const },
  { value: 22, key: 'professionals' as const },
  { value: 2, key: 'offices' as const },
] as const

export function StatsSection({ className }: { className?: string }) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: false, amount: 0.2 })
  const { pathname } = useLocation()
  const locale = getLocaleFromPath(pathname)
  const t = translations[locale].stats

  return (
    <section
      ref={ref}
      className={cn(
        'relative overflow-hidden bg-primary py-16 md:py-20',
        'text-primary-foreground',
        className
      )}
    >
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {STATS.map(({ value, key }) => (
            <StatBlock
              key={key}
              value={value}
              inView={inView}
              label={t[key].label}
              description={t[key].description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatBlock({
  value,
  inView,
  label,
  description,
}: {
  value: number
  inView: boolean
  label: string
  description: string
}) {
  const count = useCountUp(value, inView, 1800)
  return (
    <div className="text-center">
      <p className="text-sm font-medium text-primary-foreground/80">{label}</p>
      <p className="mt-1 text-4xl font-normal tracking-tight md:text-5xl lg:text-6xl">
        {count}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-primary-foreground/90 max-w-sm mx-auto">
        {description}
      </p>
    </div>
  )
}
