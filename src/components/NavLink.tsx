import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

type NavLinkProps = {
  to: string
  children: React.ReactNode
  className?: string
  /** Cuando true, estilos para header/footer oscuro (texto claro, activo más visible) */
  inverted?: boolean
}

export function NavLink({ to, children, className, inverted }: NavLinkProps) {
  const { pathname } = useLocation()
  const isActive = pathname === to || (to !== '/' && pathname.startsWith(to))
  return (
    <Link
      to={to}
      className={cn(
        'text-sm font-medium transition-colors',
        inverted
          ? 'text-primary-foreground/80 hover:text-primary-foreground'
          : 'hover:text-primary text-muted-foreground',
        inverted && isActive && 'text-primary-foreground font-medium',
        !inverted && isActive && 'text-primary',
        className
      )}
    >
      {children}
    </Link>
  )
}
