import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { BLOG_CATEGORIES, type BlogPost } from '@/data/blogPosts'
import type { Locale } from '@/lib/i18n'
import { ArrowRight } from 'lucide-react'

interface BlogFeaturedProps {
  post: BlogPost
  locale: Locale
  base: string
  readArticleLabel: string
  compactDate: string
}

export function BlogFeatured({
  post,
  locale,
  base,
  readArticleLabel,
  compactDate,
}: BlogFeaturedProps) {
  const title = locale === 'en' && post.titleEn ? post.titleEn : post.title
  const excerpt = locale === 'en' && post.excerptEn ? post.excerptEn : post.excerpt
  const categoryLabel = BLOG_CATEGORIES[post.category][locale]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="border-b border-border pb-10 md:pb-12"
    >
      <div className="grid gap-8 md:grid-cols-[1fr,minmax(280px,380px)] md:items-start">
        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {categoryLabel}
          </span>
          <p className="mt-1 text-sm text-muted-foreground">{compactDate}</p>
          <h2 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
            {excerpt}
          </p>
          <Button
            variant="link"
            className="mt-4 flex items-center gap-2 p-0 text-primary font-medium hover:gap-3 transition-all"
            asChild
          >
            <Link to={`${base}/blog/${post.slug}`}>
              {readArticleLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        {post.image && (
          <div className="overflow-hidden rounded-xl border border-border bg-muted">
            <img
              src={post.image}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>
    </motion.section>
  )
}
