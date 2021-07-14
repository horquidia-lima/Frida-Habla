import {ItemCount} from '../ItemCount/ItemCount'
import styles from './styles.module.css'

export const ItemDetail = ({img, title, price, stock}) => {

    return(
        <div className={styles.itemDetail}>  
            <img src={'../../' + img} alt={title}/>
            <div>
                <h1>{title}</h1>
                <div>
                    <p>${price}</p>
                    <ItemCount stock={stock} initial={1} min={1}/>
                </div>
                <button>Comprar</button>
            </div>
        </div>
    )
}