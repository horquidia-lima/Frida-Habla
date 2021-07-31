import React from 'react'
import styles from './styles.module.css'
import {CartWidget} from '../Cart/CartWidget'
import { Link } from 'react-router-dom'

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
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/products">Productos</Link></li>
                            <li><Link to="/about">Acerca de</Link></li>
                            <li><Link to="/">Contacto</Link></li>
                        </ul>
                    </nav>
                    <CartWidget/>
                </div>   
            </div>
        </header>
    )
}

export default NavBar
