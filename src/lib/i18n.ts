export type Locale = 'es' | 'en'

export const locales: Locale[] = ['es', 'en']

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Quiénes somos',
      areas: 'Áreas de práctica',
      team: 'Equipo',
      blog: 'Blog',
      contact: 'Contacto',
    },
    footer: {
      offices: 'Nuestras oficinas',
      privacy: 'Aviso de privacidad',
      downloadBrochure: 'Descargar brochure',
      menuTitle: 'Menú de navegación',
      contactTitle: 'Contacto',
      brochureTitle: 'Brochure de la firma',
      download: 'Descargar',
      firmName: 'Carranza Preciado Pulido Guakil',
      locations: 'Ciudad de México y Guadalajara',
    },
    common: {
      readMore: 'Leer más',
      contact: 'Contacto',
      send: 'Enviar',
    },
    home: {
      heroTitle: 'CPPG – Firma Legal',
      heroIntro:
        'CPPG fue fundado en el año de 2014, integrado por abogados altamente especializados en litigio civil y mercantil, así como en las materias de derecho corporativo y transaccional, restructuraciones, bancario, financiero, concursal, constitucional y arbitraje comercial.',
      heroCta: 'NOSOTROS',
    },
    areasPreview: {
      title: 'Áreas de práctica',
      viewAll: 'Ver todas las áreas',
      cardDescription: 'Conoce más sobre nuestra experiencia en {area}.',
    },
    teamPage: {
      title: 'Equipo',
      intro:
        'CPPG fue fundado en el año de 2014, integrado por abogados altamente especializados en litigio civil y mercantil, así como en las materias de derecho corporativo y transaccional, restructuraciones, bancario, financiero, concursal, constitucional y arbitraje comercial. Ofrecemos asesoría legal, personal, creativa y práctica, enfocado a las necesidades puntuales de nuestros clientes nacionales y extranjeros.',
      categories: {
        socios: 'Socios',
        'of-counsel': 'Of Counsel',
        asociados: 'Asociados',
        pasantes: 'Pasantes',
      },
    },
    stats: {
      years: { label: '(años)', description: 'Fundado en 2014. Doce años de trayectoria y especialización de alto nivel en México.' },
      professionals: { label: '(profesionales)', description: 'Abogados altamente especializados trabajando juntos como una excelente firma legal.' },
      offices: { label: '(sedes)', description: 'Ciudad de México y Guadalajara para atender a nuestros clientes a nivel nacional.' },
    },
    officesSection: {
      title: 'Nuestras oficinas',
      cdmx: 'Prolongación Paseo de la Reforma 115, interior LC, colonia Paseo de las Lomas, Alcaldía Álvaro Obregón, c.p. 01330, en la Ciudad de México.',
      gdl: 'Av. Piotr Ilich Tchaikovski 221-2, La Estancia, 45030 Zapopan, Jal.',
    },
    blog: {
      title: 'Noticias',
      moreNews: 'Más noticias',
      intro: 'Noticias y análisis sobre reformas legales, sentencias relevantes y novedades jurídicas en México.',
      tagline: 'Mantente informado con las últimas actualizaciones legales.',
      minRead: 'min de lectura',
      readArticle: 'Leer artículo',
      backToBlog: 'Volver al blog',
      postNotFound: 'Entrada no encontrada.',
      recentNews: 'Noticias recientes',
    },
    contactPage: {
      title: 'Contacto',
      officesTitle: 'Nuestras oficinas',
      cdmxName: 'Ciudad de México',
      gdlName: 'Guadalajara',
      location: 'Ubicación',
      nameLabel: 'Nombre completo *',
      namePlaceholder: 'Nombre completo',
      nameRequired: 'Nombre requerido',
      phoneLabel: 'Teléfono *',
      phonePlaceholder: 'Teléfono',
      phoneRequired: 'Teléfono requerido',
      emailLabel: 'Correo electrónico *',
      emailPlaceholder: 'Correo electrónico',
      emailRequired: 'Correo requerido',
      emailInvalid: 'Correo no válido',
      messageLabel: 'Comentario o mensaje *',
      messagePlaceholder: 'Comentario o mensaje',
      messageRequired: 'Mensaje requerido',
      submit: 'Enviar',
      sending: 'Enviando...',
      successToast: 'Mensaje enviado correctamente. Nos pondremos en contacto a la brevedad.',
      errorToast: 'Por favor revisa los campos del formulario.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About us',
      areas: 'Practice areas',
      team: 'Team',
      blog: 'Blog',
      contact: 'Contact',
    },
    footer: {
      offices: 'Our offices',
      privacy: 'Privacy policy',
      downloadBrochure: 'Download brochure',
      menuTitle: 'Navigation menu',
      contactTitle: 'Contact',
      brochureTitle: 'Firm brochure',
      download: 'Download',
      firmName: 'Carranza Preciado Pulido Guakil',
      locations: 'Mexico City and Guadalajara',
    },
    common: {
      readMore: 'Read more',
      contact: 'Contact',
      send: 'Send',
    },
    home: {
      heroTitle: 'CPPG – Law Firm',
      heroIntro:
        'CPPG was founded in 2014, comprised of highly specialized lawyers in civil and commercial litigation, as well as corporate and transactional law, restructurings, banking, financial, insolvency, constitutional law, and commercial arbitration.',
      heroCta: 'ABOUT US',
    },
    areasPreview: {
      title: 'Practice areas',
      viewAll: 'View all areas',
      cardDescription: 'Learn more about our experience in {area}.',
    },
    teamPage: {
      title: 'Team',
      intro:
        'CPPG was founded in 2014, comprised of highly specialized lawyers in civil and commercial litigation, as well as corporate and transactional law, restructurings, banking, financial, insolvency, constitutional law, and commercial arbitration. We offer legal advice that is personal, creative, and practical, focused on the specific needs of our domestic and international clients.',
      categories: {
        socios: 'Partners',
        'of-counsel': 'Of Counsel',
        asociados: 'Associates',
        pasantes: 'Interns',
      },
    },
    stats: {
      years: { label: '(years)', description: 'Founded in 2014. Twelve years of experience and high-level specialization in Mexico.' },
      professionals: { label: '(professionals)', description: 'Highly specialized lawyers working together as an excellent law firm.' },
      offices: { label: '(offices)', description: 'Mexico City and Guadalajara to serve our clients nationwide.' },
    },
    officesSection: {
      title: 'Our offices',
      cdmx: 'Prolongación Paseo de la Reforma 115, interior LC, Paseo de las Lomas, Álvaro Obregón, 01330 Mexico City.',
      gdl: 'Av. Piotr Ilich Tchaikovski 221-2, La Estancia, 45030 Zapopan, Jalisco.',
    },
    blog: {
      title: 'News',
      moreNews: 'More news',
      intro: 'News and analysis on legal reforms, relevant court rulings, and legal updates in Mexico.',
      tagline: 'Stay informed with the latest legal updates.',
      minRead: 'min read',
      readArticle: 'Read article',
      backToBlog: 'Back to blog',
      postNotFound: 'Post not found.',
      recentNews: 'Recent news',
    },
    contactPage: {
      title: 'Contact',
      officesTitle: 'Our offices',
      cdmxName: 'Mexico City',
      gdlName: 'Guadalajara',
      location: 'Location',
      nameLabel: 'Full name *',
      namePlaceholder: 'Full name',
      nameRequired: 'Name is required',
      phoneLabel: 'Phone *',
      phonePlaceholder: 'Phone',
      phoneRequired: 'Phone is required',
      emailLabel: 'Email *',
      emailPlaceholder: 'Email',
      emailRequired: 'Email is required',
      emailInvalid: 'Invalid email',
      messageLabel: 'Comment or message *',
      messagePlaceholder: 'Comment or message',
      messageRequired: 'Message is required',
      submit: 'Send',
      sending: 'Sending...',
      successToast: 'Message sent successfully. We will get back to you shortly.',
      errorToast: 'Please check the form fields.',
    },
  },
} as const

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/en')) return 'en'
  return 'es'
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const withoutLocale = pathname.replace(/^\/(es|en)/, '') || '/'
  if (locale === 'en') return withoutLocale === '/' ? '/en' : `/en${withoutLocale}`
  return withoutLocale
}
