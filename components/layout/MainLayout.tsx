import Head from "next/head";
import { Navbar } from '../Navbar';

import styles from './MainLayout.module.css';
import { FC, PropsWithChildren } from "react"

//GOD FIRST - Si importo por default va sin llaves, si es sin default con llaves
export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            {/* GOD FIRST el tag Head con mayusculas es el mismo head del html normal y puedo poner 2 o más heads
        donde si pongo el mismo tipo de dato será remplazado del anterior head ejemplo poner 2
        titles se pondría el último, acá podría importar bootstrap y three js */}
            {/* higher order components, compone
ntes que reciben otros componentes dentro de sí como pasa con el Head
        de acá los meta tags y todo eso serían los children */}
            <Head>

                styles
                <title>Create Next App</title>
                <meta name="description" content="Home Page " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Head es un componente especial */}
            <Navbar />
            <main className={"main"}>
                {children}
            </main>
        </>
    )
};

