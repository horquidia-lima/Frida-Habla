import React from 'react'
import { useContext } from 'react'
import {CartContext} from '../../Context/CartContext'
import { Form } from '../Form/Form'
import styles from './styles.module.css'


export const Cart = () => {
    const {itemsPrice, cart, removeItem, clearCart } = useContext(CartContext)

    
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
                      <button onClick={() => removeItem(item)}>Remover</button>
                  </div>  
              </div>
             
          ))} {cart.length === 0 ? (
              <div className={styles.alert}>
                  <h3>Sin item agregado</h3>
                  <a href="/">Volver al inicio</a>
              </div>
                
          ) : (
            <div className={styles.total}>
                <h4>Total : ${itemsPrice()}</h4>
                <Form cart={cart} itemsPrice={itemsPrice} clearCart={clearCart}/>
            </div>
          )}
        </>
    )
}


