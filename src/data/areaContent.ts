export type AreaContent = { title: string; sections: { heading?: string; body: string; items?: string[] }[] }

export const areaContent: Record<string, AreaContent> = {
  'derecho-civil': {
    title: 'Derecho Civil',
    sections: [
      {
        heading: 'Experiencia',
        body:
          'Hemos tramitado diversos juicios en materia civil, (ordinarios, ejecutivos y especiales), entre los que se encuentran: la defensa de honorarios profesionales de empresas y personas físicas, controversias de arrendamiento, sucesiones, divorcios y juicios hipotecarios.',
      },
      { heading: 'Juicios Ordinarios', body: '' },
      {
        heading: 'Juicios Especiales',
        body: '',
        items: ['Ejecutivos', 'Controversias de arrendamiento', 'Hipotecarios'],
      },
      { heading: 'Juicios en materia familiar', body: 'Sucesorios y divorcios' },
    ],
  },
  'derecho-constitucional': {
    title: 'Derecho Constitucional',
    sections: [
      {
        heading: 'Experiencia',
        body: 'En CPPG tenemos experiencia en la elaboración y tramitación de juicios de amparo.',
      },
      { heading: 'Juicios de Amparo', body: 'Directo e Indirecto' },
    ],
  },
  'derecho-corporativo': {
    title: 'Derecho Corporativo',
    sections: [
      {
        heading: 'Experiencia',
        body:
          'En CPPG contamos con amplia experiencia en la asesoría de clientes, tanto nacionales como extranjeros, en diversas áreas del derecho corporativo, entre las que se incluyen: fusiones y adquisiciones, capitalización de todo tipo de sociedades, compraventa de acciones, reestructuras y reorganizaciones corporativas, manejo y solución de conflictos entre accionistas, auditorias legales y asesoría en las estructuras de inversiones conjuntas (joint ventures), asesoría y acompañamiento en la estructuración y obtención de financiamientos de todo tipo. Del mismo modo, nuestro equipo ha participado en numerosas transacciones en la implementación y asesorías a sociedades familiares, privadas y públicas en materia de gobierno corporativo, llevando de la mano el manejo de las relaciones entre accionistas, así como la solución de conflictos entre estos.',
      },
      { heading: 'Transaccional', body: '' },
      { heading: 'Societario', body: '' },
      { heading: 'Fusiones y Adquisiciones', body: '' },
      { heading: 'Gobierno Corporativo', body: '' },
      { heading: 'Reestructuras Corporativas', body: '' },
      { heading: 'Relación entre Accionistas', body: '' },
    ],
  },
  'derecho-financiero': {
    title: 'Derecho Financiero',
    sections: [
      {
        heading: 'Experiencia',
        body: '',
        items: ['Fintech', 'Entidades Financieras no Bancarias', 'Bursátil', 'Bancario'],
      },
      {
        heading: 'Expertos',
        body:
          'CPPG cuenta con experiencia en la asesoría de instituciones financieras, que van desde bancos, entidades financieras no bancarias, financieras de todo tipo, y entidades Fintech (tanto reguladas como no reguladas). Nuestra asesoría incluye desde el diseño e implementación de diversos productos financieros en el mercado mexicano.',
      },
      {
        heading: 'Asesoría',
        body:
          'CPPG ha asesorado y apoyado en numerosas transacciones relacionadas con fondos de inversión de capital privado, ayudando a sus clientes en la estructuración de los vehículos necesarios para operar en México y en el extranjero.',
      },
      {
        heading: 'Equipo',
        body:
          'El equipo de CPPG se ha involucrado de manera exitosa en diversas autorizaciones, tanto de entidades como de productos financieros ante las autoridades especializadas en la materia.',
      },
    ],
  },
  'derecho-inmobiliario': {
    title: 'Derecho Inmobiliario',
    sections: [
      {
        heading: 'Experiencia',
        body:
          'CPPG tiene experiencia y conocimiento en el diseño e implementación de estructuras novedosas, enfocadas en la adquisición, venta y explotación de bienes inmuebles en el país. Contamos con un equipo experto en modelos novedosos y tecnológicos que nos permiten presentar soluciones prácticas y novedosas en el mercado inmobiliario. Lo anterior nos ha permitido participar en operaciones de financiamiento de proyectos, asesoramiento en materia de hospitalidad, estructuración de vehículos de propósito específico para desarrollos inmobiliarios, formas de inversiones conjuntas, entre otras muchas.',
      },
      { heading: 'Inmobiliario', body: '' },
      { heading: 'Proptech', body: '' },
    ],
  },
  'derecho-mercantil': {
    title: 'Derecho Mercantil',
    sections: [
      {
        heading: 'Experiencia',
        body:
          'En CPPG tenemos amplia experiencia en litigios mercantiles, bancarios y financieros de diversas operaciones celebradas por instituciones bancarias incluyendo, por mencionar algunas, cartas de crédito, productos derivados, factoraje financiero, descuento bancario, arrendamiento financiero, crédito simple y en todas sus modalidades, fideicomiso y garantías.',
      },
      {
        heading: 'Especializados',
        body: '',
        items: [
          'Societario',
          'Responsabilidad Contractual y Extracontractual',
          'Providencias Precautorias',
          'Operaciones Financieras',
          'Juicios especiales u ordinarios.',
          'Bancario, comercial, fideicomisos.',
        ],
      },
    ],
  },
  'reestructuras-concursos-mercantiles-y-quiebras': {
    title: 'Reestructuras, concursos mercantiles y quiebras',
    sections: [
      {
        heading: 'Experiencia',
        body:
          'CPPG cuenta con un equipo ampliamente capacitado para asesorar clientes en todos los aspectos relacionados con procedimientos de suspensión de pagos, concursos mercantiles y quiebra, de alto perfil, fuera y dentro de tribunales. Lo anterior incluye la negociación con los diversos acreedores, la asesoría en temas de reestructuras corporativas y financieras de las entidades y apoyo en los procedimientos jurisdiccionales. CPPG ha participado de manera exitosa en reestructuras corporativas tanto en concursos mercantiles en México, así como en el Chapter 11 en Estados Unidos. CPPG cuenta con un Socio certificado y avalado por el Instituto Federal de Concursos Mercantiles para fungir como conciliador y síndico en dichos procesos.',
      },
    ],
  },
  'consultoria-fiscal-y-planeacion-patrimonial': {
    title: 'Consultoría Fiscal y Planeación Patrimonial',
    sections: [
      {
        heading: 'Experiencia',
        body:
          'El área fiscal del Despacho tiene por objeto brindar asesoría a compañías mexicanas y extranjeras en aspectos de planeación fiscal, así como la implementación de estrategias con el objeto de optimizar la carga fiscal de nuestros clientes. De igual manera, consideramos la operación del día a día, así como sus planes de negocio, para abordar la situación desde una perspectiva preventiva buscando impedir al mayor grado posible contingencias, así como minimizando el riesgo ante un potencial litigio, generando soluciones viables y oportunas. Por su parte, el Despacho lleva a cabo la asesoría a personas físicas, y sus familias, respecto las cargas y obligaciones fiscales con el afán de la conservación y transmisión de su patrimonio, considerando los intereses, necesidades y proyectos de nuestros clientes.',
      },
    ],
  },
  'litigio-fiscal-y-administrativo': {
    title: 'Litigio Fiscal y Administrativo',
    sections: [
      {
        heading: 'Experiencia',
        body:
          'Trabajamos con nuestros clientes para combatir actos de las autoridades del Gobierno, derivado de todo tipo de controversias que pueden surgir del actuar de los tres niveles de gobierno, así como de las empresas productivas y organismos respectivos. Por lo mismo, optamos por el diseño de estrategias y propuestas para representar y proteger los intereses e inversiones de nuestros clientes en cualquier tipo de procedimiento, desde recursos administrativos hasta impugnaciones constitucionales, tanto de diversos actos de las autoridades, así como de la regulación que sea emitida contraria a sus derechos. Representamos a nuestros clientes en la defensa de sus derechos relacionados con solicitudes de devolución, así como contra créditos fiscales. Por lo que la práctica de litigio fiscal tiene amplia experiencia en el desahogo de las facultades de las autoridades fiscales, tanto federales, así como locales, desde el procedimiento administrativo, y hasta la impugnación constitucional vía un juicio de amparo cuando así proceda.',
      },
    ],
  },
}
