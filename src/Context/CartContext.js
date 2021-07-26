/*import React, {createContext, useState} from "react"

export const Context = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (received) => cart.filter(item => item.id === received.id).length === 0

    const addToCart = (received) => {
        if(addItem(received)){
            setCart([...cart, received])
        }else {
            alert('Ya esta en el carrito')
        }
    }

    const removeItem = (receivedItem) => {
        let allItemRemoved = cart.filter(item => item.id !== receivedItem.id)
        setCart(allItemRemoved)
    }

    const clearCart = () => setCart([])

    return(
        <>
            <CartContextProvider value={{removeItem, clearCart, addToCart}}>
                {children}
            </CartContextProvider>
        </>
    )
}*/