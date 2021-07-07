import {ItemList} from './ItemList'
import {useState, useEffect} from 'react'

export const ItemContainer = () => {

    const [products, setProducts] = useState([])

    //Promise

    useEffect(() => {

        const fetchingData = () => {
            return new Promise((resolve, reject) =>{
                setTimeout(() => {
                    resolve(listArray)
                }, 2000)
            })
        }
    
        fetchingData()
            .then((res) => {
                setProducts(res)
            })

    },[])
   
    

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
        },
        /*{
            id: 7,
            title: "Camisa Women's Day",
            img: "./images/remera8.png",
            price: 1000,
            stock: 9,
        },
        {
            id: 8,
            title: "Camisa We Can Do it",
            img: "./images/remera13.png",
            price: 800,
            stock: 4,
        }*/
    ]
    return(
        <>
            <ItemList products={products}/>
        </>
    )
}