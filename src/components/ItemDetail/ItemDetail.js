import {ItemCount} from '../ItemCount/ItemCount'

export const ItemDetail = ({itemP: img, title, price, stock}) => {

    return(
        <div>  
            <img src={'/' + img} alt={title}/>
            <div>
                <h1>{title}</h1>
                <p>${price}</p>
                <ItemCount stock={stock} initial={1} min={1}/>
            </div>
        </div>
    )
}