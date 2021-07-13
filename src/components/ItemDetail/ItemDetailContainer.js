import { useState, useEffect } from "react"
import { useParams } from "react-router"
import {ItemDetail} from './ItemDetail'

export const ItemDetailContainer = () => {
    const [itemP, setItemP] = useState()

    const {id: idParamas} = useParams()
    
    useEffect(() => {
        const getItem = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(listArray.filter((itemFilter) => itemFilter.id.toString() === idParamas))
                }, 2000)
            })
        }

        
            setItemP()
            getItem().then((res) => setItemP(res))
            
        },[idParamas])


    const listArray = [
        {
            id: 1,
            title: "Camisa Feminism",
            img: "./images/remera01.png",
            price: 1000,
            stock: 10,
        },
        {
            id: 2,
            title: "Camisa Woman",
            img: "./images/remera4.png",
            price: 850,
            stock: 8,
        },
        {
            id: 3,
            title: "Camisa Feminism",
            img: "./images/remera3.png",
            price: 950,
            stock: 6,
        },
        {
            id: 4,
            title: "Camisa Girl Power",
            img: "./images/remera11.png",
            price: 1000,
            stock: 5,
        },
        {
            id: 5,
            title: "Camisa Frida",
            img: "./images/remera02.png",
            price: 1050,
            stock: 10,
        },
        {
            id: 6,
            title: "Camisa Femele",
            img: "./images/remera5.png",
            price: 900,
            stock: 7,
        }
    ]

    return(
        <>
            <ItemDetail item={itemP}/>
        </>
    )
}