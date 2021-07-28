import {ItemList} from './ItemList'
import {useState, useEffect} from 'react'
import { database } from '../../firebase/firebase'
import styles from './styles.module.css'

export const ItemContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const itemCollection = database.collection('camisas')
            itemCollection.get().then((query) => {
                setProducts(
                    query.docs.map(doc => ({id: doc.id, ...doc.data()}))
                )
            })
    }, [])

   
    return(
        <>
            <h2 className={styles.title}>Productos Destacados</h2>
            <ItemList products={products}/>
        </>
    )
}