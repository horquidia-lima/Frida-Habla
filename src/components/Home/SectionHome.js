import styles from './styles.module.css'
import shirtImg from '../../assets/images/camisaDos.png'
import {ItemListContainer} from '../../components/ItemList/ItemListContainer'

export const SectionHome = () =>{
    return (
    
        <section className={styles.sectionHome}>
            <div>
                <img src={shirtImg} alt="shirt home" width="300px" />
            </div>

            <div>
                <span>New in</span>
                <ItemListContainer greeting='FRIDA HABLA '/>
                <p>Explora las nuevas colecciones de camisa</p>
                <a href="/">Explore now</a>
            </div> 
        </section>
    )
}

export default SectionHome
