import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { getLocaleFromPath } from '@/lib/i18n'
import { translations } from '@/lib/i18n'
import { AREAS } from '@/data/areas'

const INTRO =
  'Combinamos nuestras habilidades y experiencia para satisfacer tus necesidades legales de la mejor manera. Conoce más sobre nuestra experiencia.'

export function AreasPracticaPage() {
  const { pathname } = useLocation()
  const locale = getLocaleFromPath(pathname)
  const base = locale === 'en' ? '/en' : ''
  const t = translations[locale].common
  return (
    <div className="section-alt min-h-screen">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <h1 className="mb-4 text-3xl font-semibold md:text-4xl">Áreas de práctica</h1>
        <p className="mb-10 max-w-2xl text-muted-foreground">{INTRO}</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((area, i) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <Card className="overflow-hidden border border-border shadow-sm transition-shadow hover:shadow-md">
              <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
                <img
                  src={area.image}
                  alt={area.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <h2 className="text-lg font-semibold">{area.title}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Conoce más sobre nuestra experiencia en {area.title.toLowerCase()}.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-input text-foreground hover:bg-muted/60"
                  asChild
                >
                  <Link to={`${base}/areas-de-practica/${area.slug}`}>{t.readMore}</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
        </div>
      </div>
    </div>
  )
}
