import {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import {ItemCount} from '../ItemCount/ItemCount'
import { CartContext } from '../../Context/CartContext'
import styles from './styles.module.css'

export const ItemDetail = ({item}) => {
    const stock = item.stock

    const [finishBuy, setFinishBuy] = useState(false)


    //Context
    const {addToCart, removeItem, count, setCount} = useContext(CartContext)
    

    const handleState = () => setFinishBuy(!finishBuy)

   
   const handleOnAdd = () => {
        addToCart({...item, quantity: count})
    }

    const handleRemove = () => {
        removeItem(item)
    }

    return(
        <div className={styles.itemDetail}>  
            <img src={item.img} alt={item.nombre}/>
            <div className={styles.col_2}>
                <h1>{item.nombre}</h1>
                <h4>${item.price}</h4>
                <select>
                    <option value="">Select Size</option>
                    <option value="">XXL</option>
                    <option value="">XL</option>
                    <option value="">Large</option>
                    <option value="">Medium</option>
                    <option value="">Small</option>
                </select>
                <ItemCount
                    stock={stock}
                    min={1}
                    count={count}
                    setCount={setCount}
                />
                {!finishBuy ? (
                <button 
                    className={styles.btn}
                    onClick={() => {
                        handleState()
                        handleOnAdd()
                    }}
                >
                    Agregar al carrito
                </button>
                ): (
                <div >
                    <Link to="/cart" onClick={handleState}>
                        <button onClick={handleState} className={styles.btn}>Finalizar compra</button>
                    </Link>
                    <button 
                        className={styles.btn}
                        onClick={() => {
                            handleRemove()
                            handleState()
                        
                    }}
                    >
                        Modificar compra
                    </button>
                </div>
                 
                )}

            </div>
        </div>
    )
}