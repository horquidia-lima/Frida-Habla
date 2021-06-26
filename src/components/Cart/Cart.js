import CartImg from '../../assets/images/cart.svg'
import styles from './styles.module.css'

export const CartWidget = () => {
    return (
        <div className={styles.cart}>
            <img src={CartImg} alt="shopping cart" width="49px" height="25px"/>
            <span>0</span>
        </div>
    )
}

