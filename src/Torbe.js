import React, { useEffect, useState, useContext } from 'react'
import Footer from './Footer'
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Button, Card, Container, Row, Col} from 'react-bootstrap';
import ModalTorbe from './ModalTorbe'
import { CartContext } from './CartContext';


export default function Torbe() {
    const [bags, setBags] = useState([]);
    const productsCollectionRef = collection(db, "oversizedtorbe");
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { addToCart } = useContext(CartContext);
    const [addedToCart, setAddedToCart] = useState([]);
  

    useEffect(() => {
      const getBags = async () => {
        // read the data
        try {
        const data = await getDocs(productsCollectionRef);
        const filteredData = data.docs.map((doc) => ({...doc.data()}));
        setBags(filteredData);
        console.log(filteredData)
        } catch (err) {
        console.log(err);
        }
      };
  
      getBags();
    }, [])


    const handleProductClick = (torba) => {
      setSelectedProduct(torba);
      setShowModal(true);
    };

    const handleAddToCart = (torba) => {
      addToCart(torba);
      setAddedToCart([...addedToCart, torba]);
    };


  return (
    <>
      <Container fluid>
      <Row className="justify-content-center">
      {bags.map((torba, a) => (
        <Col key={a} xs={12} md={5} lg={2} className="pt-3 text-center overflow-hidden">

        <Card className="pt-3 bg-light text-center overflow-hidden" style={{ border: 'none' }}>
          <Card.Img onClick={() => handleProductClick(torba)} variant="top" src={torba.fotografija} />

          <Card.Body style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Card.Title>{torba.naziv}</Card.Title>
            <Card.Text style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
              {torba.detaljno}

              <strong>{torba.cijena} KM</strong>
              
            </Card.Text>

            <Button style={{ borderRadius: '0', borderColor: '#d9d9d9' }} onClick={() => handleProductClick(torba)} size="sm" variant='outline-dark'>Pogledaj</Button>
          
            <Button onClick={() => handleAddToCart(torba)} style={{ marginTop: '5px', borderRadius: '0', borderColor: '#d9d9d9' }} size="sm" variant='outline-dark' disabled={addedToCart.includes(torba)}>{addedToCart.includes(torba) ? 'Dodano u korpu' : 'Dodaj u Korpu'}</Button>
        </Card.Body>
          
        </Card>

        </Col>
        ))}
      </Row>
    </Container>    

    <Footer/>


    <ModalTorbe
      addedToCart={addedToCart}
      addToCart={handleAddToCart}
      torba={selectedProduct}
      showModal={showModal}
      onClose={() => setShowModal(false)}
    />
    </>
  )
}
