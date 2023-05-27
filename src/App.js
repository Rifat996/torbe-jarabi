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
import About from './About';
import { Col, Container, Row } from 'react-bootstrap';


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
        <Route path='about' element={<About />} />
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

        <style>{`
          body {
            font-family: 'Josefin Sans', sans-serif;
          }
          .fa {
            padding: 10px;
            font-size: 20px;
            text-decoration: none;
          }
          /* Add a hover effect if you want */
          .fa:hover {
            opacity: 0.7;
          }
          
          /* Set a specific color for each brand */
          
          /* Facebook */
          .fa-facebook {
            color: white;
          }

          .fa-envelope {
            color: white;
          }

          .fa-phone {
            color: white;
          }
          
          .fa-instagram {
            color: white;
            }
        `}</style>
    
      
           <Container style={{ backgroundColor: '#d3b3e3' }} fluid>
            <Row className="justify-content-center">
              <Col xs={3} md={3} lg={3} className="text-center">
              
              <a href="https://www.facebook.com/torbejarabi" target="_blank" rel="noopener noreferrer" className="fa fa-facebook"></a>
              
              </Col>
              <Col xs={3} md={3} lg={3} className="text-center">
              <a href="https://www.instagram.com/torbejarabi/" target="_blank" rel="noopener noreferrer" className="fa fa-instagram"></a>
              </Col>
              <Col xs={3} md={3} lg={3} className="text-center">
              <a href="mailto:bilcevicrifat@gmail.com" className="fa fa-envelope"></a>

              </Col>
              <Col xs={3} md={3} lg={3} className="text-center">
              <a href='tel:38762069303' className="fa fa-phone"></a>
              </Col>
              
            </Row>
           </Container>
          
    
        <header className="site-header sticky-top py-1">
        <nav className="container d-flex justify-content-between">
          <Link className="py-2 text-decoration-none" to="/" aria-label="Product">
            <img style={{width: "40px", position: "absolute", top: "4px"}} src={TorbeLogo} alt='logo'></img>
          </Link>
          <Link to='/' className="py-2 d-none d-md-inline-block text-decoration-none">
            Početna
          </Link>
          <Link to='/products' className="py-2 text-decoration-none">
            Kategorije
          </Link>
          <Link to='/about' className="py-2 text-decoration-none">
            O nama
          </Link>
          <Link to='/cart' className="py-2 text-decoration-none">
            Korpa <CartBadge />
          </Link>
        </nav>
      </header>
    
    <div>
      <Outlet />
    </div>
  </>
}
