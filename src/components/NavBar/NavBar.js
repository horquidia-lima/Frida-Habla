import React from 'react'
import styles from './styles.module.css'
import {CartWidget} from '../Cart/Cart'

export const NavBar = () => {
    return (
        <header className={styles.headerContainer}>
            <div>FRIDAHABLA</div>
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Acerca de</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            <div>
                <CartWidget/>
            </div>
        </header>
    )
}

export default NavBar
