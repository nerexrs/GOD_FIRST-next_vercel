// GOD FIRST

import Link from 'next/link';
import { MainLayout } from '../components/layout/MainLayout';


//los componentes se ponen en minusculas porque son las rutas 
//index es el default que se muestra pero si le pongo home y después pongo el path
//home en mi pagina web me saldrá el componente llamado home
import { DarkLayout } from '../components/layout/DarkLayout';


export default function AboutPage() {
  return (
    <>

      <MainLayout>
        <DarkLayout>
          <div className="description">
            <h1>About</h1>
            <h1>
              ir a <Link href="/contact">contact</Link>
              {/* GOD FIRST - el Link hace un pre fetch de la pagina a consultar o sea que la
            guarde en memoria lo que entiendo como cache, toca importar el componente y ponerle el href 
            replace quita la opcion de poder devolverse a otro 
sitio como en una auth*/}
            </h1>
            <p>
              Get started by editing&nbsp;
              <code className={'code'}>pages/about.jsx</code>
            </p>
          </div>

        </DarkLayout>
      </MainLayout>

    </>
  )
}
AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}
//de mi pagina, mi componente de next AboutPage hazme el metodo getLayout donde es igual a la funcion conseguir el layout
//que recibe la página actual y ahí retorname estos elementos y por dentro retorname la página o sea los elementos
//que tenga mi componente