import styles from './styles.module.css'
import {ItemCount} from '../../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

export const Item = ({item}) => {
    return(
        <section className={styles.item}>
          <Link to={`/item/${item.id}`}>
          <div>
            <img src={item.img} alt={item.title}/>
          </div>  
          <div>
              <h4>{item.title}</h4>
          </div> 
          <div>
            <span>${item.price}</span>
            <ItemCount stock={item.stock} initial={1} min={1}/>
          </div>
            <button>Agregar al carrito</button>
          </Link>
        </section>
    )
}