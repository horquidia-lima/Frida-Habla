import '../src/styles/global.css'
import styles from '../src/styles/app.module.css'

import {NavBar} from './components/NavBar/NavBar'
import {SectionHome} from './components/Home/SectionHome'
import { ItemContainer } from './components/ItemList/ItemListContainer'


function App() {
  return (
    <div className={styles.wrapper}>
      <NavBar/>
      <SectionHome/>
      <ItemContainer />
     
    </div>
  );
}

export default App;
