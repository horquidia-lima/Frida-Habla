import '../src/styles/global.css'
import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from './components/ItemList/ItemListContainer'
import styles from '../src/styles/app.module.css'


function App() {
  return (
    <div className={styles.wrapper}>
      <NavBar/>
      
      <ItemListContainer greeting="FRIDA HABLA te da la bienvenida"/>
    </div>
  );
}

export default App;
