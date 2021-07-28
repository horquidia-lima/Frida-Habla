import styles from './styles.module.css'
import shirtImg from '../../assets/camisaDos.png'


export const SectionHome = () =>{
    return (
        <section className={styles.main}>
                <div className={styles.row}>
                    <div className={styles.col_2}>
                        <h1>FRIDA HABLA <br/>te da la bienvenida</h1>
                        <p>Explora las nuevas colecciones de camisa</p>
                        <a href="/" className={styles.btn}>Explore Now &#8594;</a>
                    </div>
                    <div className={styles.col_2}>
                        <img src={shirtImg} alt="shirt home" />
                    </div>
                </div>
        </section>
    )
}

export default SectionHome
