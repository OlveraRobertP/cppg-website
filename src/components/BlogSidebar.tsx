import { Link } from 'react-router-dom'
import type { BlogPost } from '@/data/blogPosts'
import type { Locale } from '@/lib/i18n'

interface BlogSidebarProps {
  posts: BlogPost[]
  locale: Locale
  base: string
  title: string
  formatCompactDate: (dateStr: string) => string
}

export function BlogSidebar({
  posts,
  locale,
  base,
  title,
  formatCompactDate,
}: BlogSidebarProps) {
  return (
    <aside className="lg:w-72 lg:shrink-0">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>
      <ul className="mt-4 space-y-5">
        {posts.slice(0, 6).map((post) => {
          const title =
            locale === 'en' && post.titleEn ? post.titleEn : post.title
          return (
            <li key={post.id}>
              <p className="text-xs text-muted-foreground">
                {formatCompactDate(post.date)}
              </p>
              <Link
                to={`${base}/blog/${post.slug}`}
                className="mt-0.5 block text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
