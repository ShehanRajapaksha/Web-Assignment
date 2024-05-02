
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UtilityProvider } from './Hooks/UtilityProvider';
import AllProducts from './Views/AllProducts';
import Checkout from './Views/Checkout';
import Home from './Views/Home';
import { CartProvider } from 'react-use-cart'
import ProductView from './Views/ProductView';
import CartPage from './Views/CartPage';
import { Login } from './Views/LogIn';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SignUp from './Views/SignUp';
import Error404 from './Views/Error404';


const queryClient = new QueryClient()
function App() {


  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId='1020540534086-om8jnfsei6nkekkoh33ln9p8v4sja2dd.apps.googleusercontent.com'>
          <UtilityProvider>
            <CartProvider>
              <Routes>
                <Route exact path='/' Component={Home} />
                <Route path='/all-products' Component={AllProducts} />
                <Route path='/checkout' Component={Checkout} />

                <Route exact path="/product/:id" Component={ProductView}/>
                <Route path='/cart' Component={CartPage} />
                <Route path='/login' Component={Login} />
                <Route path='/signup' Component={SignUp} />
                <Route path='*' Component={Error404} />
              </Routes>

            </CartProvider>
          </UtilityProvider>
        </GoogleOAuthProvider>
      </QueryClientProvider>




    </Router>
   




  )
}

export default App;
