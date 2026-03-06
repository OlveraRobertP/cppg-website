export type TeamCategory = 'socios' | 'of-counsel' | 'asociados' | 'pasantes'

export type TeamMember = {
  slug: string
  name: string
  role: string
  image: string
  category: TeamCategory
  hasProfile: boolean
}

function img(name: string) {
  return `/images/equipo-${name}.jpg`
}

export const TEAM_CATEGORIES: { key: TeamCategory; label: string }[] = [
  { key: 'socios', label: 'Socios' },
  { key: 'of-counsel', label: 'Of Counsel' },
  { key: 'asociados', label: 'Asociados' },
  { key: 'pasantes', label: 'Pasantes' },
]

export const TEAM: TeamMember[] = [
  { slug: 'guillermo-carranza-v-socio', name: 'Guillermo Carranza', role: 'Socio', image: img('Guillermo-Carranza'), category: 'socios', hasProfile: true },
  { slug: 'andres-preciado-p-socio', name: 'Andrés Preciado', role: 'Socio', image: img('Andres-Preciado'), category: 'socios', hasProfile: true },
  { slug: 'rafael-pulido-p-socio', name: 'Rafael Pulido', role: 'Socio', image: img('Rafael-Pulido'), category: 'socios', hasProfile: true },
  { slug: 'emilio-guakil-raffoul-socio', name: 'Emilio Guakil', role: 'Socio', image: img('Emilio-Guakil'), category: 'socios', hasProfile: true },
  { slug: 'agustin-meixueiro', name: 'Agustín Meixueiro', role: 'Of Counsel', image: img('Agustin-Meixueiro'), category: 'of-counsel', hasProfile: true },
  { slug: 'guillermo-barrientos', name: 'Guillermo Barrientos', role: 'Asociado', image: img('Guillermo-Barrientos'), category: 'asociados', hasProfile: true },
  { slug: 'silvia-esmeralda-rodriguez', name: 'Silvia Rodríguez', role: 'Asociada', image: img('Silvia-Rodriguez'), category: 'asociados', hasProfile: true },
  { slug: 'ana-sofia-aguilar', name: 'Sofía Aguilar', role: 'Asociada', image: img('Sofia-Aguilar'), category: 'asociados', hasProfile: true },
  { slug: 'jose-antonio-sosa-r', name: 'José Antonio Sosa', role: 'Pasante', image: img('Jose-Antonio-Sosa'), category: 'pasantes', hasProfile: true },
  { name: 'Nathalie Moscona', role: 'Pasante', image: img('Nathalie-Moscona'), slug: '', category: 'pasantes', hasProfile: false },
  { name: 'Rafael Uribe', role: 'Pasante', image: img('Rafael-Uribe'), slug: '', category: 'pasantes', hasProfile: false },
  { slug: 'rebeca-cohen-c', name: 'Rebeca Cohen', role: 'Pasante', image: img('Rebeca-Cohen'), category: 'pasantes', hasProfile: true },
]
