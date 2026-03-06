import { useLocation } from 'react-router-dom'
import { getLocaleFromPath } from '@/lib/i18n'

const PARAGRAPHS = [
  'Los datos personales que se obtengan de manera oral, escrita, o a través de cualquier otro medio, serán utilizados para diversos fines, entre los que se encuentran:',
  '(i)proveer los servicios que brindamos, (ii) proporcionar a nuestros asesores, socios, clientes, empleados o profesionistas la información necesaria para desarrollar nuestras actividades, y en su caso, (iii) implementar nuestros procesos de reclutamiento de personal. Para los fines antes mencionados, requerimos obtener cierta información, incluyendo, según sea el caso, los siguientes datos: nombre, sexo, fecha de nacimiento, lugar de nacimiento, nacionalidad, domicilio, teléfono, correo electrónico, así como toda aquella información que se nos proporcione en relación con cualquier proceso de reclutamiento, en el entendido de que para el caso de contrataciones se podrá requerir de documentación soporte conexa y/o adicional a la antes señalada.',
  'Asimismo, le informamos que sus datos personales pueden ser transferidos y tratados dentro y fuera del país, por personas distintas al despacho. En ese sentido, su información puede ser compartida con personas con las que tengamos una relación profesional, de negocios y/o sean proveedores de bienes o servicios con el fin de que dichas personas realicen diversas actividades o presten servicios a nombre de CPPG y/o de usted. Si usted no manifiesta su oposición para que sus datos personales sean transferidos, se entenderá que ha otorgado su consentimiento para ello.',
  'Al aceptar los términos de este Aviso de Privacidad usted autoriza de forma expresa a CPPG para transferir sus datos personales a dichos terceros, sean nacionales o extranjeros.',
]

export function PoliticaPrivacidadPage() {
  const { pathname } = useLocation()
  getLocaleFromPath(pathname)
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16">
      <h1 className="mb-6 text-3xl font-semibold md:text-4xl">Política de privacidad</h1>
      <h2 className="mb-4 text-xl font-semibold uppercase">Aviso de privacidad</h2>
      <div className="prose prose-neutral max-w-none dark:prose-invert">
        {PARAGRAPHS.map((p, i) => (
          <p key={i} className="mb-4 text-muted-foreground">
            {p}
          </p>
        ))}
      </div>
    </div>
  )
}
