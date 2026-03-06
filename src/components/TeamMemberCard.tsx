import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { TeamMember } from '@/data/team'

type Props = {
  member: TeamMember
  base: string
  readMoreLabel: string
}

export function TeamMemberCard({ member, base, readMoreLabel }: Props) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 14 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <Card className="overflow-hidden border border-border shadow-sm transition-shadow hover:shadow-md">
        <CardHeader className="p-0">
          <motion.div
            className="relative aspect-[3/4] w-full overflow-hidden rounded-t-xl bg-muted"
            whileHover="hovered"
            initial={false}
          >
            <motion.img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className="h-full w-full object-cover will-change-transform"
              variants={{
                hovered: { scale: 1.05 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              onError={(e) => {
                const target = e.currentTarget
                target.onerror = null
                target.src = '/images/logo-cppg-1024.png'
              }}
            />
            <motion.div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent"
              variants={{ hovered: { opacity: 1 }, initial: { opacity: 0.7 } }}
              initial="initial"
              transition={{ duration: 0.35, ease: 'easeOut' }}
            />
          </motion.div>
        </CardHeader>
        <CardContent className="pt-4">
          <h3 className="font-semibold">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.role}</p>
        </CardContent>
        {member.hasProfile && (
          <CardFooter>
            <Button
              variant="outline"
              size="sm"
              className="border-input text-foreground hover:bg-muted/60"
              asChild
            >
              <Link to={`${base}/equipo/${member.slug}`}>{readMoreLabel}</Link>
            </Button>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  )
}

