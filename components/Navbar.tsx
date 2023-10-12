
import styles from './styles.module.css';
import { ActiveLink } from './ActiveLink';
const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  },
];
export const Navbar = () => {

  return (
    <nav className={styles['menu-container']} >

      {
        menuItems.map(({ text, href }) => {
          return <ActiveLink key={href} text={text} href={href} />
        })
      }
    </nav>
    // return implicito, poner parentesis en lugar de corchetes porque recuerda
    //toca retornar siempre algo en react cuando quiero que se renderice, pero con
    //el return implicito no tengo que escribir return sino que con los parentesis react
    //ya sabe que es un return o en este caso next pero next está sobre react y esto es de react
    //en un componente de react
    // <nav className={styles['menu-container']} >
    //   {/* los guiones no son nombres validos en javascript, por eso hace propiedad computada o sea con corchetes */}

    //   <ActiveLink text="Home" href="/" />
    //   <ActiveLink text="About" href="/about" />
    //   <ActiveLink text="Contact" href="/contact" />
    //   {/* no se puede estilizar directamente el style pero puedo poner un a tag estilos */}
    // </nav>
  )
}
