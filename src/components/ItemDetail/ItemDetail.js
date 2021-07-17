import { useState} from 'react'
import { Link } from 'react-router-dom'
import {ItemCount} from '../ItemCount/ItemCount'
import styles from './styles.module.css'

export const ItemDetail = ({img, title, price, stock}) => {

    const [count, setCount] = useState(1)
    const [finishBuy, setFinishBuy] = useState(false)

    const handleState = () => setFinishBuy(!finishBuy)

    return(
        <div className={styles.itemDetail}>  
            <img src={'../../' + img} alt={title}/>
            <div>
                <h1>{title}</h1>
                <p>${price}</p>
                {!finishBuy ? (
                    <div>
                        <ItemCount 
                            stock={stock} 
                             
                            min={1} 
                            count={count} 
                            setCount={setCount}
                        />
                        <button onClick={handleState}>Comprar</button>
                    </div>
                ) : (
                    <div>
                        <Link to="/cart" onClick={handleState}>
                            <button onClick={handleState}>Finalizar compra</button>
                        </Link>
                        <button onClick={handleState}>Modificar compra</button>
                    </div>
                )}
            </div>
        </div>
    )
}