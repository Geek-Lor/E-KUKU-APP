/**Styling */
import './App.css';

/**Routing */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/**Global state */
import ProductProvider from './context/product-context/productProvider';

/**Components Import */
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Market from './pages/Market';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
  <>
  <ProductProvider>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/market'>
          <Market />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/checkout'>
          <Checkout />
        </Route>
      </Switch>
    </Router>
  </ProductProvider> 
  </>
  );
}

export default App;
