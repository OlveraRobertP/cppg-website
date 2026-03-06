import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { getLocaleFromPath } from '@/lib/i18n'

const INTRO =
  'CPPG fue fundado en el año de 2014, integrado por abogados altamente especializados en litigio civil y mercantil, así como en las materias de derecho corporativo y transaccional, restructuraciones, bancario, financiero, concursal, constitucional y arbitraje comercial. Ofrecemos asesoría legal, personal, creativa y práctica, enfocado a las necesidades puntuales de nuestros clientes nacionales y extranjeros.'

const FIRM_APPROACH =
  'Nuestra firma ofrece servicios legales enfocados a satisfacer las necesidades de nuestros clientes a efecto de construir relaciones sólidas, a largo plazo y en la que garantizamos que, en cualquier transacción, contrato, procedimiento y, en general, cualquier prestación de servicio, interviene, por lo menos, uno de nuestros socios, además de que cada uno de éstos y nuestros asociados tienen un dominio del idioma inglés, lo que nos provee de más herramientas para comunicarnos con nuestros clientes extranjeros.'

export function QuienesSomosPage() {
  const { pathname } = useLocation()
  const locale = getLocaleFromPath(pathname)
  const base = locale === 'en' ? '/en' : ''
  return (
    <div className="section-alt min-h-screen">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <h1 className="mb-6 text-3xl font-semibold md:text-4xl">Quiénes somos</h1>
        <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>{INTRO}</p>
          <p>{FIRM_APPROACH}</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild>
            <Link to={`${base}/equipo`}>Ver equipo</Link>
          </Button>
          <Button variant="outline" className="border-input text-foreground hover:bg-muted/60" asChild>
            <Link to={`${base}/contacto`}>Contacto</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
