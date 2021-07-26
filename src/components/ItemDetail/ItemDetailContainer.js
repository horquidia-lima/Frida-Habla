import { useState, useEffect } from "react"
import { useParams } from "react-router"
import {ItemDetail} from './ItemDetail'
import { database } from "../../firebase/firebase"

export const ItemDetailContainer = () => {
    const [itemP, setItemP] = useState()

    const {id} = useParams()

    useEffect(() => {
        const itemCollection = database.collection('camisas')
            itemCollection.get().then((query) => {
                setItemP(
                    query.docs.map(doc => ({id: doc.id, ...doc.data()})).find((value) => value.id === id)
                )
            })
    },[id])
    
    return(
        <>
            <ItemDetail {...itemP}/>
        </>
    )
}