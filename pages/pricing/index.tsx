//GOD FIRST;
import Link from 'next/link';
import { MainLayout } from '../../components/layout/MainLayout';


//los componentes se ponen en minusculas porque son las rutas 
//index es el default que se muestra pero si le pongo home y después pongo el path
//home en mi pagina web me saldrá el componente llamado home



export default function Pricing() {
    return (
        <>
            <MainLayout>
                <div className="description">
                    <h1>Pricing</h1>
                    <h1>
                        ir a <Link href="/">home</Link>
                        {/* GOD FIRST - el Link hace un pre fetch de la pagina a consultar o sea que la
            guarde en memoria lo que entiendo como cache, toca importar el componente y ponerle el href 
            replace quita la opcion de poder devolverse a otro sitio como en una auth*/}
                    </h1>

                    <p>
                        Get started by editing&nbsp;
                        <code className={'code'}>pages/pricing.jsx</code>
                    </p>

                </div>
            </MainLayout>
        </>
    )
}
