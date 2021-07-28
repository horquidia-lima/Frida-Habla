import cart from '../../assets/cart.png'
import styles from './styles.module.css'

export const CartWidget = () => {
    return (
        <div className={styles.cart}>
            <img src={cart} alt="cart" width="30px" height="30px"/>
        </div>
    )
}

