import React from 'react'
import styles from './styles.module.css'
import {CartWidget} from '../Cart/CartWidget'


export const NavBar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <a href="/">FridaHabla</a>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/">Productos</a></li>
                            <li><a href="/">Acerca de</a></li>
                            <li><a href="/">Contacto</a></li>
                        </ul>
                    </nav>
                    <CartWidget/>
                </div>   
            </div>
        </header>
    )
}

export default NavBar
