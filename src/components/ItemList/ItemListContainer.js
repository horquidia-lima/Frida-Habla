import {ItemList} from './ItemList'
import {useState, useEffect} from 'react'
import { database } from '../../firebase/firebase'

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
            <ItemList products={products}/>
        </>
    )
}