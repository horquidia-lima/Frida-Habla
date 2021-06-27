import React from 'react'
import styles from './styles.module.css'
import {CartWidget} from '../Cart/Cart'


export const NavBar = () => {
    return (
        <header className={styles.headerContainer}>
            
            <nav>
                <div>FRIDAHABLA</div>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Productos</a></li>
                    <li><a href="/">Acerca de</a></li>
                    <li><a href="/">Contacto</a></li>
                </ul>
                <div>
                    <CartWidget/>
                </div>
            </nav>    
        </header>
    )
}

export default NavBar
