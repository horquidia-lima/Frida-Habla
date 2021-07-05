import styles from './styles.module.css'
import {ItemCount} from '../../ItemCount/ItemCount'

export const Item = ({title, stock, price, img}) => {
    return(
        <section className={styles.item}>
          <div>
            <img src={img} alt={title}/>
          </div>  
          <div>
              <h4>{title}</h4>
          </div> 
          <div>
            <span>${price}</span>
            <ItemCount stock={stock} initial={1} min={1}/>
          </div>
          <button>Agregar al carrito</button>
        </section>
    )
}