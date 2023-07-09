import React, { useEffect, useState, useContext } from 'react'
import Footer from './Footer'
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Button, Card, Container, Row, Col} from 'react-bootstrap';
import ModalCekeri from './ModalCekeri'
import { CartContext } from './CartContext';


export default function Cekeri() {
    const [checkers, setCheckers] = useState([]);
    const productsCollectionRef = collection(db, "cekeri");
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { addToCart } = useContext(CartContext);
    const [addedToCart, setAddedToCart] = useState([]);

  
    useEffect(() => {
      const getCheckers = async () => {
        // read the data
        try {
        const data = await getDocs(productsCollectionRef);
        const filteredData = data.docs.map((doc) => ({...doc.data()}));
        setCheckers(filteredData);
        console.log(filteredData)
        } catch (err) {
        console.log(err);
        }
      };
  
      getCheckers();
    }, [])


    const handleProductClick = (ceker) => {
      setSelectedProduct(ceker);
      setShowModal(true);
    };

    const handleAddToCart = (ceker) => {
      addToCart(ceker);
      setAddedToCart([...addedToCart, ceker]);
    };



  return (
    <>
    <Container fluid>
      <Row className="justify-content-center">
      {checkers.map((ceker, l) => (
        <Col key={l} xs={6} md={5} lg={2} className="pt-3 text-center overflow-hidden ">

        <Card className="pt-3 text-center overflow-hidden">
          <Card.Img onClick={() => handleProductClick(ceker)} variant="top" src={ceker.fotografija} />

          <Card.Body style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Card.Title>{ceker.naziv}</Card.Title>
            <Card.Text style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        

              <strong>{ceker.cijena} KM</strong>
              
            </Card.Text>

            <Button style={{ borderRadius: '0', borderColor: '#d9d9d9' }} onClick={() => handleProductClick(ceker)} size="sm" variant='outline-dark'>Pogledaj</Button>
          
            <Button onClick={() => handleAddToCart(ceker)} style={{ marginTop: '5px', borderRadius: '0', borderColor: '#d9d9d9' }} size="sm" variant='outline-dark' disabled={addedToCart.includes(ceker)}>{addedToCart.includes(ceker) ? 'Dodano u korpu' : 'Dodaj u Korpu'}</Button>
        </Card.Body>
          
        </Card>

        </Col>
        ))}
      </Row>
    </Container>    

    <Footer/>


    <ModalCekeri
      addedToCart={addedToCart}
      addToCart={handleAddToCart}
      ceker={selectedProduct}
      showModal={showModal}
      onClose={() => setShowModal(false)}
    />
    </>
  )
}
