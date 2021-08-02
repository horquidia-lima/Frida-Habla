import React from 'react'
import { useContext } from 'react'
import {CartContext} from '../../Context/CartContext'
import styles from './styles.module.css'

export const Cart = () => {
    const {itemsPrice, cart, removeItem } = useContext(CartContext)

    const handleRemove = (i) => {
        removeItem(i.id)
    }
    return (
        <>
          {cart.map((item) => (
              <div className={styles.cartItem}>
                  <div>
                      <img src={item.img} alt={item.nombre} width="70"/>
                  </div>
                  <div>
                      <p>{item.nombre}</p>
                      <span><strong>$ {item.price}</strong> X {item.quantity}</span>
                      <br/>
                      <button onClick={() => handleRemove(item)}>Remover</button>
                  </div>  
              </div>
             
          ))} 
                <div className={styles.total}>
                    <h4>Total : ${itemsPrice()}</h4>
                </div>
    
        </>
    )
}


