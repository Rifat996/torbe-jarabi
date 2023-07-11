import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import TorbeLogo1 from './images/tjlogo.jpg'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="p-5">
<Container>
  <Row>
    <Col md={4} className="text-md-left mt-5">
      <img style={{maxWidth: "50px"}} src={TorbeLogo1} alt='logo' />
      <small>  TORBEJARABI © 2019 - 2023</small>
    </Col>
    <Col md={4} className="text-md-left mt-5">
      <ul className="list-unstyled">
        <li className='pt-2'>
        <Link className="py-2 text-decoration-none text-dark" to="/products">
              Proizvodi
        </Link>
        </li>
        <li className='pt-2'>
        <Link className="py-2 text-decoration-none text-dark" to="/cart">
              Korpa
        </Link>
        </li>
        <li className='pt-2'>
        <Link className="py-2 text-decoration-none text-dark" to="/about">
              O nama
        </Link>
        </li>
        <li className='pt-2'>
         
          </li>
      </ul>
    </Col>
    <Col md={4} className="text-md-left mt-5">
    <ul className="list-unstyled">
      
      <li className='pt-2'>
          Email: torbejarabi@gmail.com
      </li>
      <li className='pt-2'>
          Tel: 38762069303
      </li>

    </ul>
    </Col>
  </Row>
</Container>
</footer>
       
  )
}


