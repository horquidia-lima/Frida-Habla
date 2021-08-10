import { useState, useEffect } from "react"
import { useParams } from "react-router"
import {ItemDetail} from './ItemDetail'
import { database } from "../../firebase/firebase"
//import HashLoader from "react-spinners/HashLoader";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)

    const {id} = useParams()

    useEffect(() => {
        setLoading(false)
        const itemCollection = database.collection('camisas')
            itemCollection.get().then((query) => {
                setItem(
                    query.docs.map(doc => ({id: doc.id, ...doc.data()})).find((value) => value.id === id)
                   
                )
            })
            
    },[id])
    
    return(
        <>
            { loading ? "Cargando Producto..." : <ItemDetail item={item}/>}  
        </>
    )
}