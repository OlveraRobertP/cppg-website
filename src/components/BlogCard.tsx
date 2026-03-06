import { Link } from 'react-router-dom'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { BLOG_CATEGORIES, type BlogPost } from '@/data/blogPosts'
import type { Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

interface BlogCardProps {
  post: BlogPost
  locale: Locale
  base: string
  readArticleLabel: string
  minReadLabel: string
  compactDate: string
  className?: string
}

export function BlogCard({
  post,
  locale,
  base,
  readArticleLabel,
  minReadLabel,
  compactDate,
  className,
}: BlogCardProps) {
  const title = locale === 'en' && post.titleEn ? post.titleEn : post.title
  const excerpt = locale === 'en' && post.excerptEn ? post.excerptEn : post.excerpt
  const categoryLabel = BLOG_CATEGORIES[post.category][locale]

  return (
    <Card
      className={cn(
        'group flex h-full flex-col overflow-hidden border-border bg-card shadow-sm transition-all hover:shadow-md hover:border-primary/20',
        className
      )}
    >
      {post.image && (
        <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
          <img
            src={post.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}
      <CardHeader className="space-y-1.5 pb-2">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {categoryLabel}
        </span>
        <p className="text-xs text-muted-foreground">{compactDate}</p>
        <h2 className="text-lg font-semibold leading-tight transition-colors group-hover:text-primary">
          {title}
        </h2>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="line-clamp-3 text-sm text-muted-foreground">{excerpt}</p>
        <p className="mt-2 text-xs text-muted-foreground">
          {post.readTimeMinutes} {minReadLabel}
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link
          to={`${base}/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          {readArticleLabel}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </CardFooter>
    </Card>
  )
}
