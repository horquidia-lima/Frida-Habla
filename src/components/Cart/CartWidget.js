import shop from '../../assets/cart.png'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

export const CartWidget = () => {
    const {cartCount} = useContext(CartContext)
   
    return (
        <div className={styles.cart}>
            <Link to="/cart">
                <img src={shop} alt="cart" width="30px" height="30px"/>
            </Link>
           <span>{cartCount()}</span>
        </div>
    )
}

