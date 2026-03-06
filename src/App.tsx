import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from '@/components/Layout'
import { HomePage } from '@/pages/HomePage'
import { QuienesSomosPage } from '@/pages/QuienesSomosPage'
import { AreasPracticaPage } from '@/pages/AreasPracticaPage'
import { AreaDetailPage } from '@/pages/AreaDetailPage'
import { EquipoPage } from '@/pages/EquipoPage'
import { PerfilPage } from '@/pages/PerfilPage'
import { ContactoPage } from '@/pages/ContactoPage'
import { BlogPage } from '@/pages/BlogPage'
import { BlogPostPage } from '@/pages/BlogPostPage'
import { PoliticaPrivacidadPage } from '@/pages/PoliticaPrivacidadPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60 * 1000 },
  },
})

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="quienes-somos" element={<QuienesSomosPage />} />
        <Route path="areas-de-practica" element={<AreasPracticaPage />} />
        <Route path="areas-de-practica/:slug" element={<AreaDetailPage />} />
        <Route path="equipo" element={<EquipoPage />} />
        <Route path="equipo/:slug" element={<PerfilPage />} />
        <Route path="contacto" element={<ContactoPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="politica-de-privacidad" element={<PoliticaPrivacidadPage />} />
      </Route>
      <Route path="/en" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="quienes-somos" element={<QuienesSomosPage />} />
        <Route path="areas-de-practica" element={<AreasPracticaPage />} />
        <Route path="areas-de-practica/:slug" element={<AreaDetailPage />} />
        <Route path="equipo" element={<EquipoPage />} />
        <Route path="equipo/:slug" element={<PerfilPage />} />
        <Route path="contacto" element={<ContactoPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="politica-de-privacidad" element={<PoliticaPrivacidadPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  )
}
