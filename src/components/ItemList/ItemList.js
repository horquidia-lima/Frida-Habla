import {Item} from './Item/Item'
import styles from './styles.module.css'


export const ItemList = ({products}) => {

    return(
        <div className={styles.itemList}>
            {products.map((item) => (
                <Item key={item.id} item={item}/>
            ))}
        </div>
    )
}