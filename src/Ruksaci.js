import React, { useEffect, useState, useContext } from 'react'
import './App.css'
import Footer from './Footer'
import { db } from './config/firebase';
import { getDocs, collection, updateDoc, doc } from 'firebase/firestore';
import { Button, Card, Container, Row, Col} from 'react-bootstrap';
import ModalRuksaci from './ModalRuksaci'
import { CartContext } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



export default function Ruksaci() {
  const [backpacks, setBackpacks] = useState([]);
  const productsCollectionRef = collection(db, "ruksaci");
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState([]);
  const [likedBackpacks, setLikedBackpacks] = useState([]);



  useEffect(() => {
    const getBackpacks = async () => {
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
      setBackpacks(filteredData);
      console.log(filteredData)
      } catch (err) {
      console.log(err);
      }
    };

    getBackpacks();
  }, [])


  const handleProductClick = (ruksak) => {
    setSelectedProduct(ruksak);
    setShowModal(true);
  };

  const handleAddToCart = (ruksak) => {
    addToCart(ruksak);
    setAddedToCart([...addedToCart, ruksak]);
  };

  const handleIncrementLikes = async (ruksak) => {
    if (likedBackpacks.includes(ruksak.id)) {
      return;
    }

    const updatedBackpacks = backpacks.map((backpack) => {
      if (backpack.id === ruksak.id) {
        const updatedBackpack = {
          ...backpack,
          likes: backpack.likes + 1,
        };
        return updatedBackpack;
      }
      return backpack;
    });
  
    try {
      const backpackRef = doc(db, 'ruksaci', ruksak.id);
      await updateDoc(backpackRef, {
        likes: ruksak.likes + 1,
      });
      setBackpacks(updatedBackpacks);
      setLikedBackpacks([...likedBackpacks, ruksak.id]);

    } catch (err) {
      console.log(err);
    }
  };



  return (
   <>
   <Container fluid>
      <Row className="justify-content-center">
      
      {backpacks.map((ruksak, h) => (
        
        <Col key={h} xs={6} md={5} lg={2} className="pt-3 text-center overflow-hidden ">

        <Card className="pt-3 text-center overflow-hidden card-cover">
          <Card.Img onClick={() => handleProductClick(ruksak)} variant="top" src={ruksak.fotografija} />

          <Card.Body style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Card.Title>{ruksak.naziv}</Card.Title>
            <Card.Text style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

              <strong>{ruksak.cijena} KM</strong>
              
            </Card.Text>

            <Button style={{ borderRadius: '0', borderColor: '#d9d9d9' }} onClick={() => handleProductClick(ruksak)} size="sm" variant='outline-dark' className='card-cover2'>Pogledaj</Button>
          
            <Button onClick={() => handleAddToCart(ruksak)} style={{ marginTop: '5px', borderRadius: '0', borderColor: '#d9d9d9' }} size="sm" className='card-cover2' variant='outline-dark' disabled={addedToCart.includes(ruksak)}>{addedToCart.includes(ruksak) ? 'Dodano u korpu' : 'Dodaj u Korpu'}</Button>
            <Button
              onClick={() => handleIncrementLikes(ruksak)}
              style={{ border: "none", position: "absolute", top: "5px", right: "3px"}}
              size="sm"
              variant="outline-dark"
              className='card-cover2'
              disabled={likedBackpacks.includes(ruksak.id)}
            >
              <FontAwesomeIcon icon={faHeart} />
              <div>
              {ruksak.likes}
              </div>
            </Button>
        </Card.Body>
          
        </Card>

        </Col>
        ))}
      </Row>
    </Container>    

    <Footer/>


    <ModalRuksaci
      addedToCart={addedToCart}
      addToCart={handleAddToCart}
      ruksak={selectedProduct}
      showModal={showModal}
      onClose={() => setShowModal(false)}
    />
   </>
  )
}
