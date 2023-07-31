import React, { useEffect, useState, useContext } from 'react'
import './App.css'
import Footer from './Footer'
import { db } from './config/firebase';
import { getDocs, collection, updateDoc, doc } from 'firebase/firestore';
import { Button, Card, Container, Row, Col} from 'react-bootstrap';
import ModalBubrezi from './ModalBubrezi'
import { CartContext } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



export default function Bubrezi() {
    const [sideBags, setSideBags] = useState([]);
    const productsCollectionRef = collection(db, "bubrezi");
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { addToCart } = useContext(CartContext);
    const [addedToCart, setAddedToCart] = useState([]);
    const [likedBubrezi, setLikedBubrezi] = useState([]);


  
    useEffect(() => {
      const getSideBags = async () => {
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

    const handleIncrementLikes = async (bubreg) => {
      if (likedBubrezi.includes(bubreg.id)) {
        return;
      }

      const updatedSideBags = sideBags.map((sidebag) => {
        if (sidebag.id === bubreg.id) {
          const updatedSideBag = {
            ...sidebag,
            likes: sidebag.likes + 1,
          };
          return updatedSideBag;
        }
        return sidebag;
      });
    
      try {
        const sidebagRef = doc(db, 'bubrezi', bubreg.id);
        await updateDoc(sidebagRef, {
          likes: bubreg.likes + 1,
        });
        setSideBags(updatedSideBags);
        setLikedBubrezi([...likedBubrezi, bubreg.id]);
  
      } catch (err) {
        console.log(err);
      }
    };


  return (
    <>
    <Container fluid>
      <Row className="justify-content-center">
      {sideBags.map((bubreg, m) => (
        <Col key={m} xs={6} md={5} lg={2} className="pt-3 text-center overflow-hidden">

        <Card className="pt-3 text-center overflow-hidden card-cover" style={{ border: 'none' }}>
          <Card.Img className='card-cover3' onClick={() => handleProductClick(bubreg)} variant="top" src={bubreg.fotografija} />

          <Card.Body style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Card.Title>{bubreg.naziv}</Card.Title>
            <Card.Text style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

              <strong>{bubreg.cijena} KM</strong>
              
            </Card.Text>

            <Button 
            style={{ borderRadius: '0', borderColor: '#d9d9d9' }} 
            onClick={() => handleProductClick(bubreg)} 
            size="sm" variant='outline-dark'
            className='card-cover2'
            >Pogledaj</Button>
          
            <Button 
            onClick={() => handleAddToCart(bubreg)} style={{ marginTop: '5px', borderRadius: '0', borderColor: '#d9d9d9' }} 
            size="sm" variant='outline-dark' disabled={addedToCart.includes(bubreg)}
            className='card-cover2'
            >{addedToCart.includes(bubreg) ? 'Dodano u korpu' : 'Dodaj u Korpu'}</Button>
            <Button
              onClick={() => handleIncrementLikes(bubreg)}
              style={{ border: "none", position: "absolute", top: "5px", right: "3px"}}
              size="sm"
              variant="outline-dark"
              className='card-cover2'
              disabled={likedBubrezi.includes(bubreg.id)}
            >
              <FontAwesomeIcon icon={faHeart} />
              <div>
              {bubreg.likes}
              </div>
            </Button>
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
