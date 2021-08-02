import React from 'react'
import { useContext } from 'react'
import {CartContext} from '../../Context/CartContext'
import styles from './styles.module.css'

export const Cart = () => {
    const {itemsPrice, cart, cartCount } = useContext(CartContext)
    return (
        /*<div className={styles.small}>
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
                                <br/>
                                <a>Remover</a>
                           </div>
                       </td>
                       <td>{cartCount()}</td>
                       <td>1300</td>
                   </tr>
               </table>
               
               </div>
           ))}
          <div className="total-price">
                <table>
                    <tr>
                        <td>Total</td>
                        <td>$ {itemsPrice()}</td>
                    </tr>
                </table>
            </div>
        </div>*/
        <>
          {cart.map((item) => (
              <div className={styles.cartItem}>
                  <div>
                      <img src={item.img} alt={item.nombre} width="70"/>
                  </div>
                  <div>
                      <p>{item.nombre}</p>
                      <span><strong>$ {item.price}</strong> X {cartCount()}</span>
                      <br/>
                      <button>Remover</button>
                  </div>  
              </div>
             
          ))} 
                <div className={styles.total}>
                    <h4>Total : ${itemsPrice()}</h4>
                </div>
    
        </>
    )
}


