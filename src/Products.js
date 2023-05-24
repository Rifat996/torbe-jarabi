import React from 'react'
import Footer from './Footer';
import Torba1 from './images/torba1.png';
import Torba from './images/torbe-logo1.png'
import { Link } from 'react-router-dom';


export default function Products() {
  return (
   <>
    <div className="container px-4 py-5" id="custom-cards">
  <h2 className="pb-2 border-bottom">KATEGORIJE</h2>
  <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
    <div className="col"><Link to="/ruksaci" className="text-decoration-none">
      <div
        className="card-cover h-100 overflow-hidden text-white text-center"
        style={{ backgroundImage: `url(${Torba1})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-3">
          <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
            Ruksaci
          </h2>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <img
                src={Torba}
                alt="Bootstrap"
                width={45}
                height={45}
              />
            </li>
            <li className="d-flex align-items-center me-3">
              <svg className="bi me-2" width="1em" height="1em">
                <use xlinkHref="#geo-fill" />
              </svg>
              <small>Collection</small>
            </li>
            <li className="d-flex align-items-center">
              <svg className="bi me-2" width="1em" height="1em">
                <use xlinkHref="#calendar3" />
              </svg>
              <small>2023</small>
            </li>
          </ul>
        </div>
      </div>
      </Link>
    </div>
    <div className="col"><Link to='/torbe' className="text-decoration-none">
      <div
        className="card-cover h-100 overflow-hidden text-white text-center"
        style={{ backgroundImage: `url(${Torba1})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Oversized Torbe</h2>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <img
                src={Torba}
                alt="Bootstrap"
                width={45}
                height={45}
              />
            </li>
            <li className="d-flex align-items-center me-3">
              <svg className="bi me-2" width="1em" height="1em">
                <use xlinkHref="#geo-fill" />
              </svg>
              <small>Collection</small>
            </li>
            <li className="d-flex align-items-center">
              <svg className="bi me-2" width="1em" height="1em">
                <use xlinkHref="#calendar3" />
              </svg>
              <small>2023</small>
            </li>
          </ul>
        </div>
      </div>
      </Link>
    </div>
    <div className="col"><Link to='/cekeri' className="text-decoration-none">
      <div
        className="card-cover h-100 overflow-hidden text-white text-center"
        style={{ backgroundImage: `url(${Torba1})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Ceker Torbe</h2>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <img
                src={Torba}
                alt="Bootstrap"
                width={45}
                height={45}
              />
            </li>
            <li className="d-flex align-items-center me-3">
              <svg className="bi me-2" width="1em" height="1em">
                <use xlinkHref="#geo-fill" />
              </svg>
              <small>Collection</small>
            </li>
            <li className="d-flex align-items-center">
              <svg className="bi me-2" width="1em" height="1em">
                <use xlinkHref="#calendar3" />
              </svg>
              <small>2023</small>
            </li>
          </ul>
        </div>
      </div>
      </Link>
    </div>
    <div className="col"><Link to='/neseseri' className="text-decoration-none">
      <div
        className="card-cover h-100 overflow-hidden text-white text-center"
        style={{ backgroundImage: `url(${Torba1})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Neseseri</h2>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <img
                src={Torba}
                alt="Bootstrap"
                width={45}
                height={45}
              />
            </li>
            <li className="d-flex align-items-center me-3">
              <svg className="bi me-2" width="1em" height="1em">
                <use xlinkHref="#geo-fill" />
              </svg>
              <small>Collection</small>
            </li>
            <li className="d-flex align-items-center">
              <svg className="bi me-2" width="1em" height="1em">
                <use xlinkHref="#calendar3" />
              </svg>
              <small>2023</small>
            </li>
          </ul>
        </div>
      </div>
      </Link>
    </div>
    <div className="col"><Link to='/bubrezi' className="text-decoration-none">
      <div
        className="card-cover h-100 overflow-hidden text-white text-center"
        style={{ backgroundImage: `url(${Torba1})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
          <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Bubrezi</h2>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <img
                src={Torba}
                alt="Bootstrap"
                width={45}
                height={45}
              />
            </li>
            <li className="d-flex align-items-center me-3">
              <svg className="bi me-2" width="1em" height="1em">
                <use xlinkHref="#geo-fill" />
              </svg>
              <small>Collection</small>
            </li>
            <li className="d-flex align-items-center">
              <svg className="bi me-2" width="1em" height="1em">
                <use xlinkHref="#calendar3" />
              </svg>
              <small>2023</small>
            </li>
          </ul>
        </div>
      </div>
      </Link>
    </div>
  </div>
</div>
<Footer />
   </>
  )
}
