import React, { useEffect, useState, useContext } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel, Row, Col, Container, Button } from 'react-bootstrap';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import ModalProduct from './ModalProduct';
import { CartContext } from './CartContext';
import Background from './images/background.jpg';




export default function Main() {
  const [mainProducts, setMainProducts] = useState([]);
  const productsCollectionRef = collection(db, "glavniprodukti");
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState([]);

  

  useEffect(() => {
    const getMainProducts = async () => {
      // read the data
      try {
      const data = await getDocs(productsCollectionRef);
      const filteredData = data.docs.map((doc) => ({...doc.data()}));
      setMainProducts(filteredData);
      console.log(filteredData)
      } catch (err) {
      console.log(err);
      }
    };

    getMainProducts();
  }, [])
  
    const handleProductClick = (product) => {
      setSelectedProduct(product);
      setShowModal(true);
    };

    const handleAddToCart = (product) => {
      addToCart(product);
      setAddedToCart([...addedToCart, product]);
    };


  return (
    <>
      
    <div className="position-relative overflow-hidden p-3 p-md-1 m-md-3 text-center bg-light">
        <Carousel>
        <Carousel.Item className='carousel-item'>
          <img src={Background}
            alt="Product 1"
          />
          <Carousel.Caption>
            <h3>Neki privlacan naslov</h3>
            <p>jos neki zanimljiv detalj</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
          <img src={Background}
            alt="Product 1"
          />
          <Carousel.Caption>
          <h3>Neki privlacan naslov</h3>
            <p>jos neki zanimljiv detalj</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
          <img src={Background}
            alt="Product 1"
          />
          <Carousel.Caption>
          <h3>Neki privlacan naslov</h3>
            <p>jos neki zanimljiv detalj</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <Container fluid style={{ width: '99%' }}>
      <Row className="justify-content-center">
        {mainProducts.map((product, k) => (
        <Col key={k} xs={12} md={5} lg={6} className="pt-3 text-center overflow-hidden" style={{ border: "1px solid black", borderRadius: "10px", maxWidth: "500px", margin:"10px"}}>
          <div className="my-3 py-3">
            <h2 className="display-5">{product.naziv}</h2>
            <p className="lead">{product.detaljno}</p>
            
          </div>
          <div
            className=" mx-auto"
            style={{backgroundImage: `url(${product.fotografija})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center", width: "80%", height: 300, borderRadius: "21px 21px 0 0" }} onClick={() => handleProductClick(product)}
          />
          <div style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <strong>{product.cijena} KM</strong>

          <Button size="sm" variant='outline-dark' onClick={() => handleProductClick(product)}>Pogledaj</Button>
          
          <Button onClick={() => handleAddToCart(product)} style={{ marginTop: '5px' }} size="sm" variant='outline-dark' disabled={addedToCart.includes(product)}>{addedToCart.includes(product) ? 'Dodano u korpu' : 'Dodaj u Korpu'}</Button>
          </div>
        </Col>
      ))}
      </Row>
    </Container>

    <ModalProduct
      addedToCart={addedToCart}
      addToCart={handleAddToCart}
      product={selectedProduct}
      showModal={showModal}
      onClose={() => setShowModal(false)}
    />

  </>
  )
}

