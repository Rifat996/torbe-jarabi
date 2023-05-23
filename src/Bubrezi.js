import React, { useEffect, useState, useContext } from 'react'
import Footer from './Footer'
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Button, Card, Container, Row, Col} from 'react-bootstrap';
import ModalBubrezi from './ModalBubrezi'
import { CartContext } from './CartContext';

export default function Bubrezi() {
    const [sideBags, setSideBags] = useState([]);
    const productsCollectionRef = collection(db, "bubrezi");
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { addToCart } = useContext(CartContext);
    const [addedToCart, setAddedToCart] = useState([]);
  
    useEffect(() => {
      const getSideBags = async () => {
        // read the data
        try {
        const data = await getDocs(productsCollectionRef);
        const filteredData = data.docs.map((doc) => ({...doc.data()}));
        setSideBags(filteredData);
        console.log(filteredData)
        } catch (err) {
        console.log(err);
        }
      };
  
      getSideBags();
    }, [])


    const handleProductClick = (bubreg) => {
      setSelectedProduct(bubreg);
      setShowModal(true);
    };

    const handleAddToCart = (bubreg) => {
      addToCart(bubreg);
      setAddedToCart([...addedToCart, bubreg]);
    };


  return (
    <>
    <Container fluid>
      <Row className="justify-content-center">
      {sideBags.map((bubreg, m) => (
        <Col key={m} xs={12} md={5} lg={2} className="pt-3 text-center overflow-hidden">

        <Card border="dark">
          <Card.Img variant="top" src={bubreg.fotografija} />

          <Card.Body style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Card.Title>{bubreg.naziv}</Card.Title>
            <Card.Text style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
              {bubreg.detaljno}

              <strong>{bubreg.cijena} KM</strong>
              
            </Card.Text>

            <Button onClick={() => handleProductClick(bubreg)} size="sm" variant='outline-dark'>Pogledaj</Button>
          
            <Button onClick={() => handleAddToCart(bubreg)} style={{ marginTop: '5px' }} size="sm" variant='outline-dark' disabled={addedToCart.includes(bubreg)}>{addedToCart.includes(bubreg) ? 'Dodano u korpu' : 'Dodaj u Korpu'}</Button>
        </Card.Body>
          
        </Card>

        </Col>
        ))}
      </Row>
    </Container>    

    <Footer/>


    <ModalBubrezi
      addedToCart={addedToCart}
      addToCart={handleAddToCart}
      bubreg={selectedProduct}
      showModal={showModal}
      onClose={() => setShowModal(false)}
    />
    </>
  )
}
