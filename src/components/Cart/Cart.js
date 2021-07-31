import React from 'react'
import { useContext } from 'react'
import {CartContext} from '../../Context/CartContext'
import styles from './styles.module.css'

export const Cart = () => {
    const {itemsPrice, cart } = useContext(CartContext)
    return (
        <div>
           <table>
                <tr>
                    <th>Item</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                </tr>
           </table>
           {cart.map((item) => (
               <div className={styles.small}>
               <table>
                 
                   <tr>
                       <td>
                           <div className={styles.cart_info}>
                               <img src={item.img} alt={item.nombre}/>
                           </div>
                           <div>
                            <p>{item.nombre}</p>
                            <small>Precio: $ {item.price}</small>
                            <button>Remover</button>
                           </div>
                       </td>
                       <td>{itemsPrice()}</td>
                       <td></td>
                   </tr>
               </table>
               </div>
           ))}
          
        </div>
    )
}


