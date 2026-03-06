export type ProfileSection = { heading: string; content: string; items?: string[] }

export type TeamProfileContent = { name: string; role: string; sections: ProfileSection[] }

function section(heading: string, content: string, items?: string[]): ProfileSection {
  return { heading, content, items }
}

export const teamProfiles: Record<string, TeamProfileContent> = {
  'guillermo-carranza-v-socio': {
    name: 'Guillermo Carranza',
    role: 'Socio',
    sections: [
      section(
        'Biografía',
        'Guillermo se encuentra especializado en litigio civil, mercantil, administrativo y amparo, así como asesoría y consultoría en las materias antes aludidas. Ha participado, de manera exitosa, en la defensa de diversas instituciones de crédito, tanto privadas como públicas, casas de bolsa, arrendadoras financieras, sociedades financieras de objetos múltiple y limitado y otras organizaciones auxiliares de crédito, así como de diversos fideicomisos (administración, fuente de pago, distribución de capital y otros). Tiene amplia experiencia en la recuperación de cartera crediticia de operaciones celebradas por instituciones bancarias incluyendo, por mencionar algunas, cartas de crédito, productos derivados, factoraje financiero, descuento bancario, arrendamiento financiero, crédito simple y en todas sus modalidades, fideicomiso y garantías. Por otro lado, además de prestar servicios de asesoría, coordinación y tramitación de procedimientos de concurso mercantil, cuenta con registro como especialista en concursos mercantiles, en calidad de Conciliador y Síndico, ante el Instituto Federal de Especialistas de Concursos Mercantiles. Por lo que hace a juicios en materia civil (ordinarios, ejecutivos y especiales), destacan tanto juicios hipotecarios, como controversias de arrendamiento, incumplimientos de contratos, obligaciones y otro tipo de controversias como sucesiones y divorcios.'
      ),
      section('Idiomas', '', ['Inglés', 'Español']),
      section(
        'Educación',
        'Diplomado "El Derecho concursal mexicano. Y su práctica a 20 años de la vigencia de la Ley" por el Ilustre Colegio de Especialistas de Concursos Mercantiles. Diplomado en Instituciones de Tecnología Financiera por la Universidad Panamericana. Licenciatura en Derecho, Universidad La Salle. Maestría en Instituciones de Derecho Financiero, Universidad Panamericana.'
      ),
      section('Experiencia', 'Quijano, Cortina y De la Torre: 2006-2014'),
      section('Áreas de Práctica', '', ['Derecho Financiero', 'Derecho Constitucional', 'Derecho de Quiebras, Concursos y Reestructuras', 'Derecho Civil', 'Derecho Mercantil']),
    ],
  },
  'andres-preciado-p-socio': {
    name: 'Andrés Preciado',
    role: 'Socio',
    sections: [
      section(
        'Biografía',
        'Andrés tiene amplia experiencia en el área de derecho corporativo, societario, fusiones y adquisiciones, bancario y financiero. Asesora principalmente en materia de relaciones y conflictos entre accionistas, fusiones y adquisiciones, levantamientos de capital, así como obtención de financiamiento. Por lo que hace a relaciones y conflictos entre accionistas, ha participado en diversas negociaciones, obteniendo siempre resultados positivos para sus clientes. A su vez se ha involucrado de manera exitosa, tanto en la estructuración, así como negociación de transacciones corporativas relevantes, para clientes tanto nacionales como extranjeros. En virtud de lo anterior, Andrés participa como secretario del consejo de administración de diversas empresas privadas en el país. Andrés ha asesorado de manera exitosa tanto a "startups", como empresas familiares y privadas en el levantamiento de capital de fondos de inversión mediante la implementación de vehículos de captación novedosos. Del mismo se ha desarrollado en el ámbito del derecho financiero auxiliando a sus clientes en la asesoría y consultoría de entidades financiera bancarias y no bancarias, así como fondos de inversión de capital privado. Andrés apoya a empresas y personas en materia de relaciones públicas, manejo reputacional y manejo de crisis para la prevención del litigio.'
      ),
      section('Idiomas', '', ['Inglés', 'Español']),
      section(
        'Educación',
        'Diplomado en Instituciones de Tecnología Financiera por la Universidad Panamericana. Licenciatura en Derecho, Universidad Panamericana. Maestría en Instituciones de Derecho Financiero, Universidad Panamericana. Maestría en Derecho de la Empresa, Universidad Panamericana.'
      ),
      section('Experiencia', 'Anaya Abogados, S.C., 2013-2017. FINAE, S.A.P.I. de C.V., SOFOM, ENR, 2010-2013'),
      section('Áreas de Práctica', '', ['Derecho de Quiebras, Concursos y Reestructuras', 'Derecho Financiero', 'Derecho Corporativo']),
    ],
  },
  'rafael-pulido-p-socio': {
    name: 'Rafael Pulido',
    role: 'Socio',
    sections: [
      section(
        'Biografía',
        'Rafael tiene amplia experiencia en el área de derecho corporativo, societario, financiero e inmobiliario. Rafael asesora principalmente en la constitución y operación de diversas Instituciones de Tecnología Financiera (Fintech\'s), operadoras de tecnología en el sector inmobiliario (Proptech\'s), S.O.F.O.M.\'s y S.O.F.I.P.O.\'s. También se ha involucrado en levantamientos de capital, obtención de financiamiento y estructura de proyectos inmobiliarios e infraestructura. Del mismo modo se ha desarrollado en el ámbito del derecho financiero auxiliando a sus clientes en la asesoría y consultoría de entidades financiera bancarias y no bancarias, así como fondos de inversión de capital privado. Rafael asesora a diversos clientes, en la implementación de estructuras jurídicas, que buscan ofrecer soluciones novedosas a sus clientes por medio de la tecnología. Rafael, a su vez ha sido participante clave en diversos procedimientos ante las autoridades financieras del país, entre los cuales se encuentra la obtención de las primeras autorizaciones para Instituciones de Tecnología Financiera ante la Comisión Nacional Bancaria y de Valores, así como autorizaciones del sector de ahorro y crédito popular, registros para organizaciones auxiliares de crédito, teniendo éxito en dichos procesos.'
      ),
      section('Idiomas', '', ['Inglés', 'Español']),
      section(
        'Educación',
        'Fordham Law School Summer Institute NYC. Diplomado en Derecho Inmobiliario, Instituto Tecnológico Autónomo de México. Licenciatura en Derecho, Universidad Iberoamericana. Maestría en Derecho de la Empresa, Universidad Panamericana.'
      ),
      section('Experiencia', 'González Luna, Moreno y Armida, 2013-2016. Rico, Robles y Libenson, 2016-2017. Briq Fund, S.A.P.I. de C.V. (General Counsel) 2017-2019'),
      section('Áreas de Práctica', '', ['Derecho Inmobiliario', 'Derecho Corporativo', 'Derecho Financiero']),
    ],
  },
  'emilio-guakil-raffoul-socio': {
    name: 'Emilio Guakil',
    role: 'Socio',
    sections: [
      section(
        'Biografía',
        'Emilio tiene amplia experiencia en derecho corporativo, fusiones y adquisiciones, derecho financiero y banca. Ha asesorado a clientes nacionales e internacionales en transacciones complejas y reestructuras.'
      ),
      section('Idiomas', '', ['Inglés', 'Español']),
      section('Educación', 'Licenciatura en Derecho. Maestría en Derecho Corporativo.'),
      section('Experiencia', 'Experiencia en despachos líderes en derecho corporativo y banca.'),
      section('Áreas de Práctica', '', ['Derecho Corporativo', 'Derecho Financiero']),
    ],
  },
  'agustin-meixueiro': {
    name: 'Agustín Meixueiro',
    role: 'Of Counsel',
    sections: [
      section(
        'Biografía',
        'Agustín tiene experiencia en la consultoría, planeación y litigio fiscal, así como administrativo, enfocado principalmente a la materia energética. La práctica de Agustín se ha enfocado en la ejecución y desahogo de solicitudes para devolución de impuestos locales como federales, así como estrategias contra créditos fiscales. A su vez, su práctica se enfoca en la prevención de controversias al asesorar a contribuyentes desde el inicio de los procedimientos de fiscalización y de gestión, e incluso la implementación de mecanismos alternativos ante la Procuraduría de la Defensa del Contribuyente. Por su parte, cuenta con experiencia en la planeación y ejecución de impugnaciones constitucionales contra normas generales vía amparo indirecto. Cuenta con experiencia en materia de consultoría fiscal y planeación, asesorando a diversos clientes, personas físicas y morales, tanto nacionales como extranjeras en la aplicación de la legislación fiscal aplicable y creación de diversas estrategias. De igual forma, su práctica se enfoca en la planeación patrimonial, testamentaria y pre-migratoria para personas físicas. Por su parte, ha participado en el análisis de contratos administrativos, elaboración de consultas, así como procedimientos de conciliación y litigios enfocados en materia energética. Tiene experiencia en las estrategias para la impugnación de diversos acuerdos emitidos por los Órganos Reguladores Coordinares en Materia Energética, al igual que la impugnación de la legislación aplicable en materia de hidrocarburos vía amparo indirecto. La práctica de Agustín abarca diversos procedimientos de responsabilidad administrativa de los servidores públicos y particulares ante los órganos internos de control, áreas de responsabilidades y la Auditoría Superior de la Federación. Agustín es miembro de la International Fiscal Association "IFA", participando en el Comité de Precedentes y Legislación.'
      ),
      section('Idiomas', '', ['Inglés', 'Español']),
      section(
        'Educación',
        'Diplomado sobre La Protección de los Derechos y Garantías de los Contribuyentes en la Unión Europea y Latinoamérica, impartido por la Universidad Complutense de Madrid. Diplomado de los Tratados para evitar la Doble Imposición Internacional en la era post BEPS, impartido por el ITAM. Licenciatura en Derecho por la Universidad Panamericana. Especialista en Responsabilidades Administrativas y el Sistema Nacional Anticorrupción, impartida por el Centro de Estudios Superior en Materia de Derecho Fiscal y Administrativa. Especialista y Maestro en Justicia Administrativa, en el Centro de Estudios Superior en Materia de Derecho Fiscal y Administrativa.'
      ),
      section('Experiencia', 'Anaya Abogados, S.C., 2013-2022.'),
      section('Áreas de Práctica', '', ['Consultoría Fiscal y Planeación Patrimonial', 'Litigio Fiscal', 'Litigio Administrativo']),
    ],
  },
  'guillermo-barrientos': {
    name: 'Guillermo Barrientos',
    role: 'Asociado',
    sections: [
      section('Biografía', 'Guillermo Barrientos es asociado del despacho con experiencia en derecho corporativo y mercantil.'),
      section('Idiomas', '', ['Inglés', 'Español']),
      section('Educación', 'Licenciatura en Derecho.'),
      section('Áreas de Práctica', '', ['Derecho Corporativo', 'Derecho Mercantil']),
    ],
  },
  'silvia-esmeralda-rodriguez': {
    name: 'Silvia Rodríguez',
    role: 'Asociada',
    sections: [
      section('Biografía', 'Silvia Rodríguez es asociada del despacho con experiencia en derecho corporativo y financiero.'),
      section('Idiomas', '', ['Inglés', 'Español']),
      section('Educación', 'Licenciatura en Derecho.'),
      section('Áreas de Práctica', '', ['Derecho Corporativo', 'Derecho Financiero']),
    ],
  },
  'ana-sofia-aguilar': {
    name: 'Sofía Aguilar',
    role: 'Asociada',
    sections: [
      section('Biografía', 'Sofía Aguilar es asociada del despacho con experiencia en derecho corporativo y transaccional.'),
      section('Idiomas', '', ['Inglés', 'Español']),
      section('Educación', 'Licenciatura en Derecho.'),
      section('Áreas de Práctica', '', ['Derecho Corporativo']),
    ],
  },
  'jose-antonio-sosa-r': {
    name: 'José Antonio Sosa',
    role: 'Pasante',
    sections: [
      section('Biografía', 'José Antonio Sosa es pasante del despacho.'),
      section('Idiomas', '', ['Español']),
      section('Educación', 'Licenciatura en Derecho en curso.'),
    ],
  },
  'rebeca-cohen-c': {
    name: 'Rebeca Cohen',
    role: 'Pasante',
    sections: [
      section('Biografía', 'Rebeca Cohen es pasante del despacho.'),
      section('Idiomas', '', ['Español']),
      section('Educación', 'Licenciatura en Derecho en curso.'),
    ],
  },
}
