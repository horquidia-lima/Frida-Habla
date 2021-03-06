import '../src/styles/global.css'
import styles from '../src/styles/app.module.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {NavBar} from './components/NavBar/NavBar'
import {SectionHome} from './components/Home/SectionHome'
import { ItemContainer } from './components/ItemList/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetail/ItemDetailContainer'



function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <SectionHome/>
              <ItemContainer/>
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer/>
            </Route>
            <Route path="*">
              <div>ESA RUTA NO EXISTE</div>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
