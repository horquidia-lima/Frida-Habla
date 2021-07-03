import '../src/styles/global.css'
import styles from '../src/styles/app.module.css'

import {NavBar} from './components/NavBar/NavBar'
import {SectionHome} from './components/Home/SectionHome'
import { ItemCount } from './components/ItemCount/ItemCount'


function App() {
  return (
    <div className={styles.wrapper}>
      <NavBar/>
      <SectionHome/>
      <ItemCount stock={5} initial={1} min={1}/>
    </div>
  );
}

export default App;
