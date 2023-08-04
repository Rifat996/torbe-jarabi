import React, { useEffect, useState, useContext } from 'react'
import Footer from './Footer'
import { db } from './config/firebase';
import { getDocs, collection, updateDoc, doc } from 'firebase/firestore';
import { Button, Card, Container, Row, Col} from 'react-bootstrap';
import ModalNeseseri from './ModalNeseseri'
import { CartContext } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Collapse from 'react-bootstrap/Collapse';


export default function Neseseri() {
  const [nesessers, setNesessers] = useState([]);
  const productsCollectionRef = collection(db, "neseseri");
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState([]);
  const [likedNesessers, setLikedNesessers] = useState([]);
  const [open, setOpen] = useState(false);



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
      <Col className="pt-3 text-center overflow-hidden ">
      <Button
      variant='dark'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Više o neseserima
      </Button>
      <Collapse in={open}>
        <div className='bg-light p-3 mt-2' id="example-collapse-text">
        Torbejarabi neseseri su ručno rađene i jedinstvene torbice koje nude mnogo više od uobičajenih nesesera. Prostrani i naočiti, ovi neseseri su dizajnirani da budu nezamjenjivi saveznik svake žene. Bez obzira koristite li ga za pohranu šminke, higijenskih potrepština, ili kao malu torbicu unutar veće torbe, Torbejarabi neseseri su tu da udovolje svim vašim potrebama.
        Prije svega, naši neseseri su malo veći od uobičajenih, što omogućuje da se s lakoćom pospreme i nose svi esencijali za njegu žene. Od šminke do proizvoda za njegu kože, ogledala, četke za kosu i svega između, naše torbe imaju i više no dovoljno mjesta za sve neophodne potrepštine.
        Pravimo ih od istih materijala kao i naše torbe što ih čini nevjerovatno izdržljivim i dugotrajnim. Dizajnirani su da izdrže svakodnevnu upotrebu po peri-deri principu, što ih čini savršenom investicijom ako tražite pouzdan oslonac prilikom putovanja i drugih avantura.
        Ali možda je najbolja stvar u vezi naših nesesera multi-praktičnost koju nude. Uz kompaktan i lagan dizajn, lako ih je nositi gdje god da krenete.
        Možete je upariti i sa nekom omiljenom torbom iz naše kolekcije, i u njoj nositi svoje ključne stvari za laku i brzu pretragu. Možete je držati i kući u kupatilu, a savršeno stane i u kofer dok istražujete svijet i putujete. Bilo da je riječ o putovanju, odlasku u teretanu ili jednostavnom obavljanju poslova, naši neseseri služe da olakšaju i uljepšaju svakodnevnicu svake žene.



        </div>
      </Collapse>
      </Col>
    </Row>
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
