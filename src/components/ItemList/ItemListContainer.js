import styles from './styles.module.css'

export const ItemListContainer = ({greeting}) => {
    return <h1 className={styles.title}>{greeting} <br/>te da la bienvenida</h1>
}