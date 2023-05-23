import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import Products from './Products';
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom';
import Ruksaci from './Ruksaci';
import Torbe from './Torbe';
import Cekeri from './Cekeri';
import Neseseri from './Neseseri';
import Bubrezi from './Bubrezi';
import TorbeLogo from './images/torbe-logo1.png'
import Cart from './Cart';
import { CartProvider } from './CartContext';
import CartBadge from './CartBadge';


function App(props) {

  

  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='ruksaci' element={<Ruksaci />} />
        <Route path='torbe' element={<Torbe />} />
        <Route path='cekeri' element={<Cekeri />} />
        <Route path='neseseri' element={<Neseseri />} />
        <Route path='bubrezi' element={<Bubrezi />} />
        <Route path='cart' element={<Cart />} />
      </Route>
      
    )
  )


  return (
    <>
    <CartProvider>
      <RouterProvider router={router} />
      </CartProvider>
    </>
  );
}

export default App;

const Root = () => {

  return <> 
    
      <header className="site-header sticky-top py-1">
    <nav className="container d-flex justify-content-between">
      <Link className="py-2" to="/" aria-label="Product">
        <img style={{width: "40px", position: "absolute", top: "4px"}} src={TorbeLogo} alt='logo'></img>
      </Link>
      <Link to='/' className="py-2 d-none d-md-inline-block">
        Početna
      </Link>
      <Link to='/products' className="py-2">
        Kategorije
      </Link>
      <Link to='/cart' className="py-2">
        Korpa <CartBadge />
      </Link>
    </nav>
  </header>
    
    <div>
      <Outlet />
    </div>
  </>
}
