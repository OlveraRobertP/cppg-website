import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  amount?: number
  once?: boolean
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function SectionTransition({
  children,
  className,
  delay = 0,
  y = 48,
  amount = 0.12,
  once = false,
}: Props) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={cn('will-change-transform', className)}
      initial={{ opacity: 0, y, scale: 0.98, filter: 'blur(12px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once, amount }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

