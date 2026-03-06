import { motion } from 'framer-motion'
import type { TeamMember } from '@/data/team'
import { TeamMemberCard } from '@/components/TeamMemberCard'

type Props = {
  title: string
  members: TeamMember[]
  base: string
  readMoreLabel: string
}

export function TeamCategorySection({ title, members, base, readMoreLabel }: Props) {
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-xl font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </h2>
      <motion.div
        className="grid min-w-0 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {members.map((member) => (
          <TeamMemberCard
            key={member.slug || member.name}
            member={member}
            base={base}
            readMoreLabel={readMoreLabel}
          />
        ))}
      </motion.div>
    </section>
  )
}

