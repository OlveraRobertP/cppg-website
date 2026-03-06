import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'
import { usePageLocale } from '@/hooks/usePageLocale'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  usePageLocale()
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Saltar al contenido
      </a>
      <Header />
      <main id="main" className="flex-1" role="main">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  )
}
