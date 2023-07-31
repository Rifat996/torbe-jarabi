import React, { useEffect, useState, useContext } from 'react'
import Footer from './Footer'
import { db } from './config/firebase';
import { getDocs, collection, updateDoc, doc } from 'firebase/firestore';
import { Button, Card, Container, Row, Col} from 'react-bootstrap';
import ModalNeseseri from './ModalNeseseri'
import { CartContext } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


export default function Neseseri() {
  const [nesessers, setNesessers] = useState([]);
  const productsCollectionRef = collection(db, "neseseri");
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState([]);
  const [likedNesessers, setLikedNesessers] = useState([]);



  useEffect(() => {
    const getNesessers = async () => {
      // read the data
      try {
      const data = await getDocs(productsCollectionRef);
      const filteredData = data.docs.map((doc) => {
        const { likes } = doc.data();
        return {
          id: doc.id,
          ...doc.data(),
          likes: likes || 0,
        };
      });
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

  const handleIncrementLikes = async (neseser) => {
    if (likedNesessers.includes(neseser.id)) {
      return;
    }

    const updatedNesessers = nesessers.map((nesesser) => {
      if (nesesser.id === neseser.id) {
        const updatedNesesser = {
          ...nesesser,
          likes: nesesser.likes + 1,
        };
        return updatedNesesser;
      }
      return nesesser;
    });
  
    try {
      const nesesserRef = doc(db, 'neseseri', neseser.id);
      await updateDoc(nesesserRef, {
        likes: neseser.likes + 1,
      });
      setNesessers(updatedNesessers);
      setLikedNesessers([...likedNesessers, neseser.id]);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <Container fluid>
      <Row className="justify-content-center">
      {nesessers.map((neseser, s) => (
        <Col key={s} xs={6} md={5} lg={2} className="pt-3 text-center overflow-hidden card-cover">

        <Card className="pt-3 text-center overflow-hidden" style={{ border: 'none' }}>
          <Card.Img className='card-cover3' onClick={() => handleProductClick(neseser)} variant="top" src={neseser.fotografija} />

          <Card.Body style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Card.Title>{neseser.naziv}</Card.Title>
            <Card.Text style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
              <strong>{neseser.cijena} KM</strong>
              
            </Card.Text>

            <Button style={{ borderRadius: '0', borderColor: '#d9d9d9' }} onClick={() => handleProductClick(neseser)} size="sm" variant='outline-dark'>Pogledaj</Button>
          
            <Button onClick={() => handleAddToCart(neseser)} style={{ marginTop: '5px', borderRadius: '0', borderColor: '#d9d9d9' }} size="sm" variant='outline-dark' disabled={addedToCart.includes(neseser)}>{addedToCart.includes(neseser) ? 'Dodano u korpu' : 'Dodaj u Korpu'}</Button>
            <Button
              onClick={() => handleIncrementLikes(neseser)}
              style={{ border: "none", position: "absolute", top: "5px", right: "3px"}}
              size="sm"
              variant="outline-dark"
              className='card-cover2'
              disabled={likedNesessers.includes(neseser.id)}
            >
              <FontAwesomeIcon icon={faHeart} />
              <div>
              {neseser.likes}
              </div>
            </Button>
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
