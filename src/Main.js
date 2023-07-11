import React, { useEffect, useState, useContext } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel, Row, Col, Container, Button } from 'react-bootstrap';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import ModalProduct from './ModalProduct';
import { CartContext } from './CartContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';




export default function Main() {
  const [mainProducts, setMainProducts] = useState([]);
  const productsCollectionRef = collection(db, "glavniprodukti");
  const [heroProducts, setHeroProducts] = useState([]);
  const productsCollectionRefHero = collection(db, "herosekcija");
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


  useEffect(() => {
    const getHeroProducts = async () => {
      // read the data
      try {
      const data = await getDocs(productsCollectionRefHero);
      const filteredData1 = data.docs.map((doc) => ({...doc.data()}));
      setHeroProducts(filteredData1);
      console.log(filteredData1)
      } catch (err) {
      console.log(err);
      }
    };

    getHeroProducts();
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
      
    <div className="position-relative overflow-hidden p-3 p-md-1 m-md-3 text-center">
        <Carousel>
      
        {heroProducts.map((hero, p) => (
          
        <Carousel.Item key={p} className='carousel-item card-cover'>
          <img className="carousel-image sketchy" src={window.innerWidth > 768 ? hero.fotkecijele : hero.fotkemobilni}
            alt="Product 1"
          />
        </Carousel.Item>
        ))}
      </Carousel>
      <Button href='/products' className='glow-on-hover btn1'>Izaberi svoju Torbejarabi!</Button>
    </div>
    <Container fluid style={{ width: '99%' }}>
      <Row className="justify-content-center">
      <TransitionGroup className="row justify-content-center">
        {mainProducts.map((product, k) => (
          <CSSTransition key={k} classNames="fade" timeout={500}>
        <Col key={k} xs={12} md={5} lg={6} className="pt-3 bg-light text-center overflow-hidden col-container" style={{ maxWidth: "500px", margin:"10px"}}>
          <div>
            <h2 className="display-5">{product.naziv}</h2>            
          </div>
          <div
            className=" mx-auto image-container"
            style={{backgroundImage: `url(${product.fotografija})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center", width: "80%", height: 300 }} onClick={() => handleProductClick(product)}
          />

          <strong>{product.cijena} KM</strong>
          <div style={{margin: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          

          <Button style={{ margin: '5px',borderRadius: '0', borderColor: '#d9d9d9' }} size="sm" variant='outline-dark' onClick={() => handleProductClick(product)}>Pogledaj</Button>
          
          <Button onClick={() => handleAddToCart(product)} style={{ margin: '5px', borderRadius: '0', borderColor: '#d9d9d9' }} size="sm" variant='outline-dark' disabled={addedToCart.includes(product)}>{addedToCart.includes(product) ? 'Dodano u korpu' : 'Dodaj u Korpu'}</Button>
          </div>
        </Col>
        </CSSTransition>
      ))}
      </TransitionGroup>
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

