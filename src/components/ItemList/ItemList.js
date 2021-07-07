
import {Item} from './Item/Item'

import styles from './styles.module.css'



export const ItemList = ({products}) => {

    return(
        <div className={styles.itemList}>
            {products.map((product) => (
                <Item key={product.id} {...product}/>
            ))}
        </div>
    )
}