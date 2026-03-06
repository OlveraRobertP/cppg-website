import type { Locale } from '@/lib/i18n'

export const ABOUT_COPY: Record<
  Locale,
  {
    title: string
    intro: string
    approach: string
    ctaPrimary: string
    ctaSecondary: string
  }
> = {
  es: {
    title: 'Quiénes somos',
    intro:
      'CPPG fue fundado en el año de 2014, integrado por abogados altamente especializados en litigio civil y mercantil, así como en las materias de derecho corporativo y transaccional, restructuraciones, bancario, financiero, concursal, constitucional y arbitraje comercial. Ofrecemos asesoría legal, personal, creativa y práctica, enfocado a las necesidades puntuales de nuestros clientes nacionales y extranjeros.',
    approach:
      'Nuestra firma ofrece servicios legales enfocados a satisfacer las necesidades de nuestros clientes a efecto de construir relaciones sólidas, a largo plazo y en la que garantizamos que, en cualquier transacción, contrato, procedimiento y, en general, cualquier prestación de servicio, interviene, por lo menos, uno de nuestros socios, además de que cada uno de éstos y nuestros asociados tienen un dominio del idioma inglés, lo que nos provee de más herramientas para comunicarnos con nuestros clientes extranjeros.',
    ctaPrimary: 'Ver equipo',
    ctaSecondary: 'Contacto',
  },
  en: {
    title: 'About us',
    intro:
      'CPPG was founded in 2014 and is made up of highly specialized attorneys in civil and commercial litigation, as well as corporate and transactional law, restructurings, banking, finance, insolvency, constitutional matters, and commercial arbitration. We provide legal advice that is personal, creative, and practical—focused on the specific needs of domestic and international clients.',
    approach:
      'Our firm provides legal services designed to meet our clients’ needs and build long-term, solid relationships. We ensure that in any transaction, contract, proceeding, or service, at least one partner is involved. In addition, our partners and associates are fluent in English, giving us more tools to communicate with international clients.',
    ctaPrimary: 'Meet the team',
    ctaSecondary: 'Contact',
  },
} as const

