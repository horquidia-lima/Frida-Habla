import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export const Item = ({item}) => {

  const cuota = (item.price / 2).toFixed(2)
    return(
        <section className={styles.item}>
            
            <img src={item.img} alt={item.nombre}/>
            <div className={styles.description}>
              <h3>{item.nombre}</h3>
                {item.stock > 0 ? (
              <div className={styles.price}>
                  <h4>2 Cuotas s/interés de</h4>
                  <h5>${cuota}</h5>
                  <p>Final: <strong>${item.price}</strong></p>
                  <Link to={`/item/${item.id}`}>
                    <button></button>
                  </Link>
              </div>
                  ) : (
                  <div className={styles.stock}>
                    <p>Final: <strong>Artículo sin stock</strong></p>
                    <Link to={`/item/${item.id}`}>
                      <button>Ver artículo</button>
                    </Link>
                  </div>   
              )}
           </div>
        </section>
    )
}