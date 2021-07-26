import  styles  from './styles.module.css'

export const ItemCount = ({stock, count, setCount, min}) => {

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

