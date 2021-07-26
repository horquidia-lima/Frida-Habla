import {useState} from 'react'
import { Link } from 'react-router-dom'
import {ItemCount} from '../ItemCount/ItemCount'
//import { Context } from '../../Context/CartContext'
import styles from './styles.module.css'

export const ItemDetail = ({img, nombre, price, stock}) => {
    //const {addToCart, removeItem} = useContext(Context)

    const [count, setCount] = useState(1)
    const [finishBuy, setFinishBuy] = useState(false)

    const handleState = () => setFinishBuy(!finishBuy)

    /*const handleSend = () => {
        addToCart({...itemP, quant: count})
    }

    const handleRemove = () => {
        removeItem(itemP)
    }*/

    return(
        <div className={styles.itemDetail}>  
            <img src={img} alt={nombre}/>
            <div>
                <h1>{nombre}</h1>
                <p>${price}</p>
                {!finishBuy ? (
                    <div>
                        <ItemCount 
                            stock={stock} 
                            min={1} 
                            count={count} 
                            setCount={setCount}
                        />
                        <button 
                            /*onClick={() => {
                                handleState()
                                handleSend()
                            }}*/
                            onClick={handleState}
                            >
                                Comprar
                            </button>
                    </div>
                ) : (
                    <div>
                        <Link to="/cart" onClick={handleState}>
                            <button onClick={handleState}>Finalizar compra</button>
                        </Link>
                        <button 
                            /*onClick={() => {
                                handleState()
                                handleRemove()
                            }}*/
                            onClick={handleState}
                        >
                                Modificar compra
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}