import React from 'react'
import './App.css'
import Footer from './Footer';
import Torba1 from './images/torbeprodukt.png';
import Ceker from './images/cekeriprodukt.png'
import Bubreg from './images/bubreziprodukt.png'
import Neseser from './images/neseseriprodukt.png'
import Ruksak from './images/ruksakprodukt.png'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';


export default function Products() {
  return (
   <>
    {/* <div className="container px-4 py-5" id="custom-cards">
  <h2 className="pb-2 border-bottom">PROIZVODI</h2>
  <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
    <div className="col"><Link to="/ruksaci" className="text-decoration-none">
      <div
        className="card-cover h-100 overflow-hidden text-white text-center image-container"
        style={{ backgroundImage: `url(${Ruksak})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-3">
          <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-shadow">
            Ruksak
          </h2>
        </div>
      </div>
      </Link>
    </div>
    <div className="col"><Link to='/torbe' className="text-decoration-none">
      <div
        className="card-cover h-100 overflow-hidden text-white text-center image-container"
        style={{ backgroundImage: `url(${Torba1})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow">
          <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Torba</h2>
        </div>
      </div>
      </Link>
    </div>
    <div className="col"><Link to='/cekeri' className="text-decoration-none">
      <div
        className="card-cover h-100 overflow-hidden text-white text-center image-container"
        style={{ backgroundImage: `url(${Ceker})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow">
          <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ceker</h2>
        </div>
      </div>
      </Link>
    </div>
    <div className="col"><Link to='/neseseri' className="text-decoration-none">
      <div
        className="card-cover h-100 overflow-hidden text-white text-center image-container"
        style={{ backgroundImage: `url(${Neseser})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 text-shadow">
          <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Neseser</h2>
        </div>
      </div>
      </Link>
    </div>
    <div className="col"><Link to='/bubrezi' className="text-decoration-none">
      <div
        className="card-cover h-100 overflow-hidden text-white text-center image-container"
        style={{ backgroundImage: `url(${Bubreg})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow">
          <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Torbica</h2>
        </div>
      </div>
      </Link>
    </div>
  </div>
</div> */}

<Container fluid>
  <Row className="justify-content-center card-cover">
    <Col className="pt-3 text-center overflow-hidden " xs={12} md={12} lg={12}>
      <h2>PROIZVODI</h2>
    </Col>
    
    <Col className="pt-3 text-center overflow-hidden " xs={12} md={12} lg={2}>
    <Link to="/ruksaci">
    <img className='image-container img-fluid' src={Ruksak}></img>
    </Link>
    </Col>

    <Col className="pt-3 text-center overflow-hidden " xs={12} md={12} lg={2}>
    <Link to="/torbe">
    <img className='image-container img-fluid' src={Torba1}></img>
    </Link>
    </Col>

    <Col className="pt-3 text-center overflow-hidden " xs={12} md={12} lg={2}>
    <Link to="/cekeri">
    <img className='image-container img-fluid' src={Ceker}></img>
    </Link>
    </Col>

    <Col className="pt-3 text-center overflow-hidden " xs={12} md={12} lg={2}>
    <Link to="/bubrezi">
    <img className='image-container img-fluid' src={Bubreg}></img>
    </Link>
    </Col>

    <Col className="pt-3 text-center overflow-hidden " xs={12} md={12} lg={2}>
    <Link to="/neseseri">
    <img className='image-container img-fluid' src={Neseser}></img>
    </Link>
    </Col>
    
  </Row>
</Container>


<Footer />
   </>
  )
}
