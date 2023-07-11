import React, { useEffect, useState, useContext } from 'react'
import Footer from './Footer'
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Button, Card, Container, Row, Col} from 'react-bootstrap';
import ModalNeseseri from './ModalNeseseri'
import { CartContext } from './CartContext';

export default function Neseseri() {
  const [nesessers, setNesessers] = useState([]);
  const productsCollectionRef = collection(db, "neseseri");
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState([]);

  useEffect(() => {
    const getNesessers = async () => {
      // read the data
      try {
      const data = await getDocs(productsCollectionRef);
      const filteredData = data.docs.map((doc) => ({...doc.data()}));
      setNesessers(filteredData);
      console.log(filteredData)
      } catch (err) {
      console.log(err);
      }
    };

    getNesessers();
  }, [])

  const handleProductClick = (neseser) => {
    setSelectedProduct(neseser);
    setShowModal(true);
  };

  const handleAddToCart = (neseser) => {
    addToCart(neseser);
    setAddedToCart([...addedToCart, neseser]);
  };




  return (
    <>
    <Container fluid>
      <Row className="justify-content-center">
      {nesessers.map((neseser, s) => (
        <Col key={s} xs={12} md={5} lg={2} className="pt-3 text-center overflow-hidden card-cover">

        <Card className="pt-3 bg-light text-center overflow-hidden" style={{ border: 'none' }}>
          <Card.Img onClick={() => handleProductClick(neseser)} variant="top" src={neseser.fotografija} />

          <Card.Body style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Card.Title>{neseser.naziv}</Card.Title>
            <Card.Text style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
              {neseser.detaljno}

              <strong>{neseser.cijena} KM</strong>
              
            </Card.Text>

            <Button style={{ borderRadius: '0', borderColor: '#d9d9d9' }} onClick={() => handleProductClick(neseser)} size="sm" variant='outline-dark'>Pogledaj</Button>
          
            <Button onClick={() => handleAddToCart(neseser)} style={{ marginTop: '5px', borderRadius: '0', borderColor: '#d9d9d9' }} size="sm" variant='outline-dark' disabled={addedToCart.includes(neseser)}>{addedToCart.includes(neseser) ? 'Dodano u korpu' : 'Dodaj u Korpu'}</Button>
        </Card.Body>
          
        </Card>

        </Col>
        ))}
      </Row>
    </Container>    

    <Footer/>


    <ModalNeseseri
      addedToCart={addedToCart}
      addToCart={handleAddToCart}
      neseser={selectedProduct}
      showModal={showModal}
      onClose={() => setShowModal(false)}
    />
    </>
  )
}
