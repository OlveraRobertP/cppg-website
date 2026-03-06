export type BlogCategory =
  | 'laboral'
  | 'constitucional'
  | 'mercantil'
  | 'electoral'
  | 'penal'
  | 'civil'

export interface BlogPost {
  id: string
  slug: string
  title: string
  titleEn?: string
  excerpt: string
  excerptEn?: string
  content: string
  contentEn?: string
  category: BlogCategory
  date: string
  readTimeMinutes: number
  /** Ruta de imagen destacada (ej. /images/noticias/noticia_1.png) */
  image?: string
}

export const BLOG_CATEGORIES: Record<BlogCategory, { es: string; en: string }> = {
  laboral: { es: 'Derecho laboral', en: 'Labor law' },
  constitucional: { es: 'Derecho constitucional', en: 'Constitutional law' },
  mercantil: { es: 'Derecho mercantil', en: 'Commercial law' },
  electoral: { es: 'Derecho electoral', en: 'Electoral law' },
  penal: { es: 'Derecho penal', en: 'Criminal law' },
  civil: { es: 'Derecho civil', en: 'Civil law' },
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'jornada-40-horas-reforma-constitucional',
    image: '/images/noticias/noticia_4.png',
    title: 'Reforma constitucional: jornada laboral de 40 horas',
    titleEn: 'Constitutional reform: 40-hour work week',
    excerpt:
      'La reducción de la jornada laboral a 40 horas semanales fue publicada en el DOF. La implementación será gradual de 2027 a 2030, con protección a salarios y prestaciones.',
    excerptEn:
      'The reduction of the work week to 40 hours was published in the Official Gazette. Implementation will be gradual from 2027 to 2030, with protection for wages and benefits.',
    category: 'laboral',
    date: '2025-03-04',
    readTimeMinutes: 4,
    content: `La reforma constitucional que establece la jornada laboral de 40 horas semanales fue publicada en el Diario Oficial de la Federación. La implementación será gradual: 46 horas en 2027, 44 en 2028, 42 en 2029 y 40 en 2030.

Entre los cambios principales destacan: prohibición de horas extra para menores de 18 años, garantía de al menos un día de descanso con paga íntegra, máximo de 12 horas extraordinarias semanales con pago doble, y protección contra reducción de salarios y prestaciones. El Congreso tiene 90 días para modificar la Ley Federal del Trabajo con el detalle operativo.`,
    contentEn: `The constitutional reform establishing a 40-hour work week was published in the Official Gazette. Implementation will be gradual: 46 hours in 2027, 44 in 2028, 42 in 2029, and 40 in 2030.

Key changes include: prohibition of overtime for minors under 18, guarantee of at least one rest day with full pay, maximum of 12 overtime hours per week at double pay, and protection against wage and benefit reductions. Congress has 90 days to amend the Federal Labor Law with operational details.`,
  },
  {
    id: '2',
    slug: 'autonomia-sindical-reforma-2025',
    image: '/images/noticias/noticia_1.png',
    title: 'Autonomía sindical: sanción a intervención de servidores públicos',
    titleEn: 'Union autonomy: sanctions for public officials’ interference',
    excerpt:
      'Desde diciembre de 2025 rige la reforma que sanciona como falta grave la intervención de servidores públicos en la vida interna de los sindicatos.',
    excerptEn:
      'As of December 2025, the reform that sanctions as a serious offense the interference of public officials in the internal life of unions is in force.',
    category: 'laboral',
    date: '2025-12-16',
    readTimeMinutes: 3,
    content: `Entró en vigor la reforma que garantiza la autonomía sindical y prohíbe la intervención de servidores públicos en la vida interna de los sindicatos. Se considera injerencia cualquier participación en procesos de elección, reelección de dirigentes, funcionamiento interno y constitución de sindicatos.

Dicha intervención será sancionada como falta administrativa grave. La medida refuerza el principio de libertad sindical y la independencia de las organizaciones de trabajadores frente al Estado.`,
    contentEn: `The reform guaranteeing union autonomy and prohibiting interference by public officials in the internal life of unions has entered into force. Any participation in election processes, re-election of leaders, internal functioning, and formation of unions is considered interference.

Such interference will be sanctioned as a serious administrative offense. The measure reinforces the principle of trade union freedom and the independence of workers' organizations from the State.`,
  },
  {
    id: '3',
    slug: 'reforma-ley-amparo-2025',
    image: '/images/noticias/noticia_5.png',
    title: 'Reforma a la Ley de Amparo 2025',
    titleEn: 'Reform to the Amparo Law 2025',
    excerpt:
      'La Cámara de Diputados aprobó reformas que modernizan el juicio de amparo mediante herramientas digitales, redefinición del interés legítimo y plazos procesales específicos.',
    excerptEn:
      'The Chamber of Deputies approved reforms that modernize the amparo trial through digital tools, redefinition of legitimate interest, and specific procedural deadlines.',
    category: 'constitucional',
    date: '2025-10-15',
    readTimeMinutes: 5,
    content: `En octubre de 2025 la Cámara de Diputados aprobó reformas a la Ley de Amparo. Los ejes principales son: modernización mediante herramientas digitales obligatorias, redefinición del interés legítimo para acceder al juicio de amparo, restricción a la ampliación de demandas una vez presentadas, y plazos procesales específicos: cinco días para notificaciones y sesenta para sentencias.

Estas modificaciones buscan agilizar el control constitucional y dar mayor certeza a los plazos y requisitos de procedencia.`,
    contentEn: `In October 2025 the Chamber of Deputies approved reforms to the Amparo Law. The main pillars are: modernization through mandatory digital tools, redefinition of legitimate interest to access the amparo trial, restriction on amending claims once filed, and specific procedural deadlines: five days for notifications and sixty for rulings.

These changes aim to streamline constitutional review and provide greater certainty regarding deadlines and admissibility requirements.`,
  },
  {
    id: '4',
    slug: 'marco-normativo-mercantil-dic-2024',
    title: 'Ajustes al marco normativo mercantil (diciembre 2024)',
    titleEn: 'Adjustments to the commercial legal framework (December 2024)',
    excerpt:
      'La Secretaría de Economía publicó acuerdos que actualizan montos para SAS y procesos judiciales mercantiles, fortaleciendo certeza jurídica para MiPyMEs.',
    excerptEn:
      'The Ministry of Economy published agreements updating amounts for SAS and commercial court proceedings, strengthening legal certainty for MSMEs.',
    category: 'mercantil',
    date: '2024-12-30',
    readTimeMinutes: 3,
    content: `El 30 de diciembre de 2024 la Secretaría de Economía publicó en el DOF dos acuerdos relevantes: actualización de ingresos para sociedades por acciones simplificadas (SAS) conforme a la Ley General de Sociedades Mercantiles, y nuevos montos para procesos judiciales mercantiles según el Código de Comercio.

El objetivo es fortalecer la competitividad de las micro, pequeñas y medianas empresas, brindar mayor certeza jurídica y reducir barreras burocráticas.`,
    contentEn: `On December 30, 2024, the Ministry of Economy published two relevant agreements in the Official Gazette: updated income thresholds for simplified stock corporations (SAS) under the General Law of Mercantile Societies, and new amounts for commercial court proceedings under the Commerce Code.

The aim is to strengthen the competitiveness of micro, small and medium-sized enterprises, provide greater legal certainty, and reduce bureaucratic barriers.`,
  },
  {
    id: '5',
    slug: 'concurso-mercantil-tv-azteca',
    image: '/images/noticias/noticia_2.png',
    title: 'Concurso mercantil de TV Azteca: causas e implicaciones',
    titleEn: 'TV Azteca insolvency proceedings: causes and implications',
    excerpt:
      'TV Azteca anunció su entrada voluntaria a concurso mercantil. No implica quiebra inmediata sino reestructuración; los trabajadores no corren riesgo inmediato.',
    excerptEn:
      'TV Azteca announced its voluntary entry into insolvency proceedings. It does not imply immediate bankruptcy but restructuring; workers are not at immediate risk.',
    category: 'mercantil',
    date: '2025-02-28',
    readTimeMinutes: 4,
    content: `TV Azteca anunció su entrada voluntaria a concurso mercantil. Desde la óptica del derecho mercantil, este procedimiento no equivale a quiebra inmediata, sino a una oportunidad de reestructuración para evitar el agravamiento de la crisis.

La empresa ha señalado problemas económicos desde 2018 por pago de licencias, efectos de la pandemia y deuda fiscal con el SAT. En un proceso de concurso mercantil, de manera análoga al Chapter 11 estadounidense, los trabajadores no enfrentan riesgo inmediato en sus relaciones laborales mientras se desarrolla la reestructuración.`,
    contentEn: `TV Azteca announced its voluntary entry into insolvency proceedings. From a commercial law perspective, this procedure does not amount to immediate bankruptcy but to an opportunity for restructuring to prevent the crisis from worsening.

The company has cited economic difficulties since 2018 due to license payments, effects of the pandemic, and tax debt with the SAT. In an insolvency proceeding, similar to U.S. Chapter 11, workers do not face immediate risk to their employment relationships while restructuring is underway.`,
  },
  {
    id: '6',
    slug: 'scjn-imagenes-ia-propaganda-electoral',
    title: 'SCJN: imágenes generadas por IA en propaganda electoral',
    titleEn: 'Supreme Court: AI-generated images in electoral propaganda',
    excerpt:
      'La Suprema Corte determinó que las imágenes de menores generadas por IA no identificables no violan las restricciones; vinculó al INE a regular este tipo de contenido.',
    excerptEn:
      'The Supreme Court held that unidentifiable AI-generated images of minors do not violate restrictions; it bound the INE to regulate this type of content.',
    category: 'electoral',
    date: '2024-11-18',
    readTimeMinutes: 4,
    content: `La Suprema Corte revocó una sentencia sobre el uso de imágenes de menores generadas por inteligencia artificial en propaganda electoral. El tribunal consideró que las imágenes creadas por IA de niños no identificables no violan las restricciones sobre uso de menores en campañas, pues la protección se dirige a menores reales e identificables.

No obstante, vinculó al INE para que actualice los Lineamientos para la Protección de Niñas, Niños y Adolescentes en Materia de Propaganda, estableciendo mecanismos que regulen el uso de imágenes editadas o generadas mediante tecnologías digitales.`,
    contentEn: `The Supreme Court reversed a ruling on the use of AI-generated images of minors in electoral propaganda. The Court held that AI-generated images of unidentifiable children do not violate restrictions on the use of minors in campaigns, since the protection is aimed at real, identifiable minors.

However, it bound the INE to update the Guidelines for the Protection of Children and Adolescents in Propaganda, establishing mechanisms to regulate the use of edited or digitally generated images.`,
  },
  {
    id: '7',
    slug: 'scjn-orden-aprehension-probable-causa',
    image: '/images/noticias/noticia_3.png',
    title: 'SCJN: estándar para órdenes de aprehensión (probable causa)',
    titleEn: 'Supreme Court: standard for arrest warrants (probable cause)',
    excerpt:
      'La Corte confirmó que para librar órdenes de aprehensión no se exige certeza absoluta; basta con datos que permitan suponer probable delito y participación.',
    excerptEn:
      'The Court confirmed that absolute certainty is not required to issue arrest warrants; data supporting probable cause of crime and participation suffice.',
    category: 'penal',
    date: '2025-02-25',
    readTimeMinutes: 3,
    content: `La Suprema Corte falló a favor de que no se exija certeza absoluta para librar órdenes de aprehensión. Confirmó que basta con datos que permitan suponer razonablemente que se cometió un delito y la probable participación del imputado, en línea con el artículo 16 constitucional y el sistema penal acusatorio.

La decisión revocó un amparo y aclara el alcance del control constitucional en materia de vinculación a proceso y órdenes de aprehensión.`,
    contentEn: `The Supreme Court ruled that absolute certainty is not required to issue arrest warrants. It confirmed that data supporting a reasonable belief that a crime was committed and the probable participation of the accused suffice, in line with Article 16 of the Constitution and the accusatorial criminal system.

The decision reversed an amparo and clarifies the scope of constitutional review regarding pretrial detention and arrest warrants.`,
  },
  {
    id: '8',
    slug: 'tribunal-electoral-conferencias-matutinas',
    title: 'Tribunal Electoral: conferencias matutinas y propaganda gubernamental',
    titleEn: 'Electoral Tribunal: morning conferences and government propaganda',
    excerpt:
      'La Sala Superior del TE confirmó que las "mañaneras" constituyeron propaganda gubernamental que vulneró imparcialidad, neutralidad y equidad en el proceso electoral.',
    excerptEn:
      'The Superior Chamber of the Electoral Tribunal held that the morning briefings constituted government propaganda that undermined impartiality, neutrality, and fairness in the electoral process.',
    category: 'electoral',
    date: '2024-10-22',
    readTimeMinutes: 4,
    content: `La Sala Superior del Tribunal Electoral del Poder Judicial de la Federación confirmó que las conferencias de prensa matutinas del presidente constituyeron propaganda gubernamental que vulneró los principios de imparcialidad, neutralidad y equidad, así como el uso indebido de recursos públicos.

Se determinó que el contexto y la finalidad de difundir información sobre logros de gobierno buscaban la adhesión ciudadana a un proyecto político específico, lo que tiene implicaciones para el equilibrio en las contiendas electorales.`,
    contentEn: `The Superior Chamber of the Electoral Tribunal confirmed that the president's morning press conferences constituted government propaganda that violated the principles of impartiality, neutrality, and fairness, as well as improper use of public resources.

It was determined that the context and purpose of disseminating information on government achievements sought to garner public support for a specific political project, which has implications for balance in electoral contests.`,
  },
  {
    id: '9',
    slug: 'lgsm-asambleas-virtuales-2023',
    title: 'LGSM: asambleas y sesiones virtuales (reforma 2023)',
    titleEn: 'General Law of Mercantile Societies: virtual meetings (2023 reform)',
    excerpt:
      'La reforma a la LGSM permite asambleas de accionistas y sesiones del consejo por medios electrónicos u ópticos cuando los estatutos lo prevean.',
    excerptEn:
      'The reform to the LGSM allows shareholders’ meetings and board sessions by electronic or optical means when the bylaws so provide.',
    category: 'mercantil',
    date: '2023-10-20',
    readTimeMinutes: 4,
    content: `Publicada en el DOF el 20 de octubre de 2023, la reforma a la Ley General de Sociedades Mercantiles permite celebrar asambleas de accionistas o socios y sesiones del Consejo de Administración mediante medios electrónicos, ópticos o tecnología análoga, siempre que los estatutos lo prevean. La asistencia puede ser presencial, electrónica o híbrida con igual validez.

Para S.A. se permite el asiento electrónico de actas, uso de firmas electrónicas y disponibilidad de informes en medios tecnológicos. Para S.R.L. se flexibilizaron las decisiones del consejo de gerentes por medios electrónicos y la ubicación de asambleas fuera del domicilio social.`,
    contentEn: `Published in the Official Gazette on October 20, 2023, the reform to the General Law of Mercantile Societies allows shareholders’ or partners’ meetings and Board of Directors’ sessions to be held by electronic, optical, or similar technological means, provided the bylaws so provide. Attendance may be in person, electronic, or hybrid with equal validity.

For stock corporations, electronic minute-taking, use of electronic signatures, and availability of reports through technological means are permitted. For limited liability companies, decisions of the board of managers by electronic means and holding meetings away from the registered office were made more flexible.`,
  },
]
