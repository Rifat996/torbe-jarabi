import React, { useEffect, useState, useContext } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel, Row, Col, Container, Button, Card } from 'react-bootstrap';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import ModalProduct from './ModalProduct';
import { CartContext } from './CartContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';




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
      <Link to='/products' ><Button className='glow-on-hover btn1'>Izaberi svoju Torbejarabi!</Button></Link>
    </div>
    <Container fluid>
       <Row className="justify-content-center">
        <Col className="pt-3 text-center overflow-hidden ">
          <h3>ISTAKNUTI PROIZVODI</h3>
        </Col>
      </Row>
      <Row className="justify-content-center">
      <TransitionGroup className="row justify-content-center">
        {mainProducts.map((product, k) => (
          <CSSTransition key={k} classNames="fade" timeout={500}>
        <Col key={k} xs={6} md={5} lg={3} className="pt-3 text-center overflow-hidden col-container bg-light">
        <Card 
        className="pt-3 text-center card-cover bg-light" style={{ border: 'none' }}>
          <Card.Img className='card-cover3' onClick={() => handleProductClick(product)} variant="top" src={product.fotografija} />

          <Card.Body style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Card.Title>{product.naziv}</Card.Title>
            <Card.Text style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        

              <strong>{product.cijena} KM</strong>
              
            </Card.Text>

            <Button 
            style={{ borderRadius: '0', borderColor: '#d9d9d9' }} 
            onClick={() => handleProductClick(product)} size="sm" variant='outline-dark'
            className='card-cover2'
            >Pogledaj</Button>
          
            <Button 
            onClick={() => handleAddToCart(product)} style={{ marginTop: '5px', borderRadius: '0', borderColor: '#d9d9d9' }} size="sm" variant='outline-dark' disabled={addedToCart.includes(product)}
            className='card-cover2'
            >{addedToCart.includes(product) ? 'Dodano u korpu' : 'Dodaj u Korpu'}</Button>
            
        </Card.Body>
          
        </Card>
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

