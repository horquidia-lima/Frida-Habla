import React from 'react'
import firebase from 'firebase/app'
import styles from './styles.module.css'
import user from '../../assets/user.svg'
import email from '../../assets/email.svg'
import telefono from '../../assets/telephone.svg'
import login from '../../assets/log-in.svg'
import {database} from '../../firebase/firebase'

export const Form = ({cart, itemPrice, clearCart}) => {
    /*const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    })*/

    const handleSubmit = (e) => {
        e.event.preventDefault()

        const userData = {
            name: e.target[0].value,
            phone: e.target[1].value,
            email: e.target[2].value
        }

        const newOrder = {
            buyer: userData,
            items: cart,
            total: itemPrice,
        }

        const orders = database.collection('orders')

        let orderId

        orders
         .add(newOrder)
         .then((res) => {
             orderId = res.id
         })
         .catch((error) => {
             alert('Error:  ' + error)
         })

         const itemsToCheck = database.collection('items').where(
             firebase.firestore.FieldPath.documentId(),
             'in',
             cart.map((item) => item.id)
         )

         itemsToCheck.get().then((query) => {
             const batch = database.batch()

             const autoOfStockItems = []

             query.docs.forEach((doc, index) => {
                 if(doc.data().stock > newOrder.items[index].quantity){
                     batch.update(doc.ref, {
                        stock: doc.data().stock - newOrder.items[index].quantity,
                     })
                 }else {
                     autoOfStockItems.push({...doc.data(), id: doc.id})
                 }
             })

             if(autoOfStockItems.length === 0){
                 batch.commit().then(() => {
                     alert('Compra generada con exito \n ID: ' + orderId)

                     clearCart()
                 })
             }else {
                 alert('ERROR: No hay stock')
             }
         })
    }

    return (
        <div className={styles.form_content}>
            <h2>Formulario de Compra</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.form_group}>
                    <label for="name"><img src={user} alt="user" width="30px"/></label>
                    <input type="name" id="name" placeholder="Nombre"/>
                </div>
                <div className={styles.form_group}>
                        <label for="email"><img src={email} alt="user" width="30px"/></label>
                        <input placeholder="Email" type="email" id="email"/>
                </div>
                <div className={styles.form_group}>
                    <label for="email"><img src={telefono} alt="user" width="30px"/></label>
                    <input placeholder="Telefono" type="number"/>
                </div>
                <div className={styles.btn}>
                    <button><img src={login} alt="send" width="15px"/>Finalizar</button>
                </div>
            </form>
        </div>
    )
}
