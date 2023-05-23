import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import TorbeLogo from './images/torbe-logo1.png'


export default function Footer() {
  return (
    <div>
      <footer className="container py-5">
    <div className="row">
      <div className="col-12 col-md">
      <img style={{maxWidth: "30px"}} src={TorbeLogo} alt='logo'></img>
        <small className="d-block mb-3 text-muted">© 2018 - 2023</small>
      </div>
      <div className="col-6 col-md">
        <h5>Features</h5>
        <ul className="list-unstyled text-small">
          <li>
            <a className="link-secondary" href="/">
              Cool stuff
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Resources</h5>
        <ul className="list-unstyled text-small">
          <li>
            <a className="link-secondary" href="/">
              Business
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li>
            <a className="link-secondary" href="/">
              Team
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
    </div>
  )
}
