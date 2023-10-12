//GOD FIRST;
import Link from 'next/link';
import { MainLayout } from '../components/layout/MainLayout';


//los componentes se ponen en minusculas porque son las rutas 
//index es el default que se muestra pero si le pongo home y después pongo el path
//home en mi pagina web me saldrá el componente llamado home



export default function HomePage() {
  return (
    <>
      <MainLayout>
        <div className="description">
          <h1>Home Page</h1>
          <h1>
            ir a <Link href="/about">about</Link>
            {/* GOD FIRST - el Link hace un pre fetch de la pagina a consultar o sea que la
            guarde en memoria lo que entiendo como cache, toca importar el componente y ponerle el href 
            replace quita la opcion de poder devolverse a otro sitio como en una auth*/}
          </h1>

          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/index.jsx</code>
          </p>

        </div>
      </MainLayout>
    </>
  )
}
