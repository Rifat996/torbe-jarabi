import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import TorbeLogo1 from './images/tjlogo.jpg'


export default function Footer() {
  return (
    <div>
      <footer className="container-fluid py-5">
    <div className="row">
      <div className="col-12 col-md">
      <img style={{maxWidth: "30px"}} src={TorbeLogo1} alt='logo'></img>
        <small className="d-block mb-3 text-muted">© 2019 - 2023</small>
      </div>
      <div className="col-6 col-md">
        <h5>Proizvodi</h5>
        <ul className="list-unstyled text-small">
          <li>
            <a className="link-secondary" href="/products">
              Proizvodi
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Korpa</h5>
        <ul className="list-unstyled text-small">
          <li>
            <a className="link-secondary" href="/cart">
              Korpa
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>O nama</h5>
        <ul className="list-unstyled text-small">
          <li>
            <a className="link-secondary" href="/about">
              O nama
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
    </div>
  )
}
