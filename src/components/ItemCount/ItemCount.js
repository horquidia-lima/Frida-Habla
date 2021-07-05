import  styles  from './styles.module.css'
import React, {useState} from 'react'

export const ItemCount = ({stock, min, initial}) => {
    const [count, setCount] = useState(initial)

    function handleAdd(){
        if(count < stock){
            setCount(count + 1)
        }
      
    }

    function handleRemove(){
        if(count > min){
            setCount(count - 1)
        }
    }

    return(
        <div className={styles.itemCount}>
            <div>
                <span onClick={handleRemove}>-</span>
                <h3>{count}</h3>
                <span onClick={handleAdd}>+</span>
            </div>
        </div>
    )
}

