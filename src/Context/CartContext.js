import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    


    //verificar si esta en el carrito
    const isInCart = (received) => cart.filter(item => item.id === received.id).length === 0


    const addToCart = (received) => {
        if(isInCart(received)){
            setCart([...cart, received])
        }else{
            alert('Ya esta en el carrito')
        }
    }

    const removeItem = (receivedItem) => {
        let allItemRemoved = cart.filter(item => item.id !== receivedItem.id)
        setCart(allItemRemoved)
    }

    const itemsPrice = () => {
        return cart.reduce((a, b) => a + b.price * b.quantity, 0)
    
    }
    const cartCount = () => {
        return cart.reduce((a, b) => (a += b.quantity), 0)
    }

    const clearCart = () => setCart([])

    return(
        <>
            <CartContext.Provider value={{itemsPrice,cartCount, addToCart, removeItem, cart, clearCart}}>
                {children}
            </CartContext.Provider>
        </>
    )
}

