import styles from './styles.module.css'
import shirtImg from '../../assets/camisaDos.png'


export const SectionHome = () =>{
    return (
    
        <section className={styles.sectionHome}>
            <div>
                <img src={shirtImg} alt="shirt home" width="300px" />
            </div>

            <div>
                <span>New in</span>
                <h2>FRIDA HABLA <br/>te da la bienvenida</h2>
                <p>Explora las nuevas colecciones de camisa</p>
                <a href="/">Explore now</a>
            </div> 
        </section>
    )
}

export default SectionHome
