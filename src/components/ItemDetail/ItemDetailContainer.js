import { useState, useEffect } from "react"
import { useParams } from "react-router"
import {ItemDetail} from './ItemDetail'
import { database } from "../../firebase/firebase"

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    //const [loading, setLoading] = useState(false)

    const {id} = useParams()

    useEffect(() => {
        const itemCollection = database.collection('camisas')
            itemCollection.get().then((query) => {
                setItem(
                    query.docs.map(doc => ({id: doc.id, ...doc.data()})).find((value) => value.id === id)
                )
            })
    },[id])
    
    return(
        <>
            <ItemDetail item={item}/>
        </>
    )
}