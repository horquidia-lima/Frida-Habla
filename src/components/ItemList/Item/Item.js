import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export const Item = ({item}) => {
    return(
        <section className={styles.item}>
          
          <div>
            <img src={item.img} alt={item.title}/>
          </div>  
          <div>
              <h4>{item.title}</h4>
          </div> 
          <div>
            <span>${item.price}</span>
          </div>
          <Link to={`/item/${item.id}`}>
            <button>Comprar</button>
          </Link>
        </section>
    )
}