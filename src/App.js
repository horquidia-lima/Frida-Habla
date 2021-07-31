import '../src/styles/global.css'
import styles from '../src/styles/app.module.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {NavBar} from './components/NavBar/NavBar'
import {SectionHome} from './components/Home/SectionHome'
import { ItemContainer } from './components/ItemList/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetail/ItemDetailContainer'
import { CartProvider } from './Context/CartContext'
import {Cart} from './components/Cart/Cart'

function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <CartProvider>
          <NavBar/>
            <Route exact path="/">
              <SectionHome/>
              <ItemContainer/>
            </Route>
            <Switch>
            <Route path="/item/:id">
              <ItemDetailContainer/>
            </Route>
            <Route>
              <Cart path="/cart" />
            </Route>
            <Route path="*">
              <div>ESA RUTA NO EXISTE</div>
            </Route>
          </Switch>
          </CartProvider>
      </div>
    </Router>
  );
}

export default App;
