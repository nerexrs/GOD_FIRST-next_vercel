'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CSSProperties, FC } from "react"

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',

}

interface Props {
  text: string;
  href: string;
}
//para pasr props en ts hago una interfaz que no es más que una plantilla de tipos, el codigo se explica solo

export const ActiveLink: FC<Props> = ({ text, href }) => {

  const pathname = usePathname()
  // console.log(pathname);
  //el usePathname es el nuevo asPath, me referencia el path actual

  //ya no existe el asPath
  // console.log("esto es el href " + href + " y esto es el asPath " + asPath);

  //el useRouter nos ofrece el router o sea las rutas para ubicar mis páginas con el path y todo
  //si lo llamo asi no mas el useRouter guardandolo en una variable me va a devolver muchos datos pero lo mas llamativo
  //es que asi tenga resto de links a otras paginas el useRouter va a tomar cada link como el path o la ruta actual
  //ejemplo ahorita tengo 3 links en un nav y estoy en about, entonces los 3 los va a tomar como about
  //la propiedad asPath del objeto guarda el path actual entonces lo puedo desestructurar
  return (
    // con el legacyBehavior estoy usando el comportamiento del link de antes de la v13 donde usaba el a tag
    <Link legacyBehavior href={href}>
      <a style={pathname === href ? style : undefined}>{text}</a>
      {/* los tipos css solo aceptan valores nulos como undefined o cssproperties entonces puedo poner el tipo
      al declarar los estilos fuera del FC */}
    </Link>

  )
}
