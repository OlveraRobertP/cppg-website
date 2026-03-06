import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getLocaleFromPath } from '@/lib/i18n'
import { translations } from '@/lib/i18n'
import { BLOG_POSTS } from '@/data/blogPosts'
import { formatCompactDate } from '@/lib/blogUtils'
import { BlogCard } from '@/components/BlogCard'
import { BlogFeatured } from '@/components/BlogFeatured'
import { BlogSidebar } from '@/components/BlogSidebar'

export function BlogPage() {
  const { pathname } = useLocation()
  const locale = getLocaleFromPath(pathname)
  const tBlog = translations[locale].blog
  const base = locale === 'en' ? '/en' : ''

  const postsByDate = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const [featured, ...restPosts] = postsByDate

  return (
    <div className="section-alt min-h-screen">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {tBlog.title}
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">{tBlog.intro}</p>
          <p className="mt-1 text-sm font-medium text-muted-foreground">
            {tBlog.tagline}
          </p>
        </motion.header>

        {featured && (
          <BlogFeatured
            post={featured}
            locale={locale}
            base={base}
            readArticleLabel={tBlog.readArticle}
            compactDate={formatCompactDate(featured.date, locale)}
          />
        )}

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:gap-14">
          <main className="min-w-0 flex-1">
            <h2 className="sr-only">{tBlog.moreNews}</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {restPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * (i + 1), duration: 0.3 }}
                >
                  <BlogCard
                    post={post}
                    locale={locale}
                    base={base}
                    readArticleLabel={tBlog.readArticle}
                    minReadLabel={tBlog.minRead}
                    compactDate={formatCompactDate(post.date, locale)}
                  />
                </motion.div>
              ))}
            </div>
          </main>
          <BlogSidebar
            posts={postsByDate}
            locale={locale}
            base={base}
            title={tBlog.recentNews}
            formatCompactDate={(dateStr) => formatCompactDate(dateStr, locale)}
          />
        </div>
      </div>
    </div>
  )
}
