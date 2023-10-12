import { FC, PropsWithChildren } from "react"
/*
un functional component son estos componentes de react y FC es el tipo, el tipo es con dos puntos despues
de declarar la variable, funcion, etc. o sea de darle nombre.
El PropsWithChildren debo pasarselo entre <> al FC para que pueda recibir children como props
*/

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '5px',
            padding: '10px'
        }}>

            <h3>Dark Layout</h3>
            <div>
                {children}
            </div>
        </div>
    )
}
