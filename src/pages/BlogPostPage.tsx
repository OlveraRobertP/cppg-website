import { Link, useParams, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { getLocaleFromPath } from '@/lib/i18n'
import { translations } from '@/lib/i18n'
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/data/blogPosts'
import { formatCompactDate } from '@/lib/blogUtils'
import { ArrowLeft } from 'lucide-react'

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const { pathname } = useLocation()
  const locale = getLocaleFromPath(pathname)
  const base = locale === 'en' ? '/en' : ''
  const t = translations[locale].blog

  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) {
    return (
      <div className="section-alt min-h-screen">
        <div className="container px-4 py-12 md:px-6 md:py-16">
          <p className="text-muted-foreground">{t.postNotFound}</p>
          <Button variant="link" asChild className="mt-4">
            <Link to={`${base}/blog`}>{t.backToBlog}</Link>
          </Button>
        </div>
      </div>
    )
  }

  const title = locale === 'en' && post.titleEn ? post.titleEn : post.title
  const content = locale === 'en' && post.contentEn ? post.contentEn : post.content
  const categoryLabel = BLOG_CATEGORIES[post.category][locale]

  return (
    <div className="section-alt min-h-screen">
      <article className="container max-w-3xl px-4 py-12 md:px-6 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav aria-label="Breadcrumb" className="mb-10">
            <Link
              to={`${base}/blog`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              {t.backToBlog}
            </Link>
          </nav>
          <header className="border-b border-border pb-8">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {categoryLabel}
            </span>
            <h1 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">
              {title}
            </h1>
            <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
              <time dateTime={post.date}>
                {formatCompactDate(post.date, locale)}
              </time>
              <span aria-hidden>·</span>
              <span>{post.readTimeMinutes} {t.minRead}</span>
            </p>
          </header>
          {post.image && (
            <div className="mt-8 overflow-hidden rounded-xl border border-border bg-muted">
              <img
                src={post.image}
                alt=""
                className="h-auto w-full object-cover"
              />
            </div>
          )}
          <div className="mt-8 space-y-5 text-foreground leading-[1.75]">
            {content.split(/\n\n+/).map((paragraph, i) => (
              <p key={i}>{paragraph.trim()}</p>
            ))}
          </div>
        </motion.div>
      </article>
    </div>
  )
}
