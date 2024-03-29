import React, { useEffect, useState, useContext } from 'react'
import Footer from './Footer'
import { db } from './config/firebase';
import { getDocs, collection, updateDoc, doc } from 'firebase/firestore';
import { Button, Card, Container, Row, Col} from 'react-bootstrap';
import ModalCekeri from './ModalCekeri'
import { CartContext } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Collapse from 'react-bootstrap/Collapse';


export default function Cekeri() {
    const [checkers, setCheckers] = useState([]);
    const productsCollectionRef = collection(db, "cekeri");
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { addToCart } = useContext(CartContext);
    const [addedToCart, setAddedToCart] = useState([]);
    const [likedCheckers, setLikedCheckers] = useState([]);
    const [open, setOpen] = useState(false);


  
    useEffect(() => {
      const getCheckers = async () => {
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

    const handleIncrementLikes = async (ceker) => {
      if (likedCheckers.includes(ceker.id)) {
        return;
      }
  
      const updatedCheckers = checkers.map((checker) => {
        if (checker.id === ceker.id) {
          const updatedChecker = {
            ...checker,
            likes: checker.likes + 1,
          };
          return updatedChecker;
        }
        return checker;
      });
    
      try {
        const checkerRef = doc(db, 'cekeri', ceker.id);
        await updateDoc(checkerRef, {
          likes: ceker.likes + 1,
        });
        setCheckers(updatedCheckers);
        setLikedCheckers([...likedCheckers, ceker.id]);
  
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
        Više o cekerima
      </Button>
      <Collapse in={open}>
        <div className='bg-light p-3 mt-2' id="example-collapse-text">
        Uzimajući poznate karakteristike cekera, ali dodajući čvrstoću, kompaktnost i autentični izgled, Torbejarabi modeli stvaraju novu kategoriju unikatnih ceker-torbi. Ovi ručno rađeni modeli su idealni za svakodnevne aktivnosti, nudeći solidan kapacitet i lakoću nošenja.
        S unutarnjom pregradom i džepovima, naši cekeri osiguravaju laku organizaciju vaših predmeta, dok zatvaranje na dugmiće pruža dodatnu sigurnost za vaše stvari. Bez obzira nosite li knjige, namirnice ili lične stvari, sve će biti uredno složeno i na dohvat ruke.
        Uz praktičnu svakodnevnu upotrebu, "ceker-torbe" su također idealne za putovanja. Njihova lakoća i fleksibilnost čine ih savršenim saputnikom za istraživanje destinacija, jer možete nositi sve što vam je potrebno tom prilikom. Kada nisu u upotrebi, lako se motaju i pakuju u kofer, zauzimajući minimalno prostora.
        Njihova kompaktnost i lakoća nošenja čine ih idealnim saputnicima u urbanim avanturama, praktičnim obavezama ili užurbanim šoping turama. Uz Torbejarabi "ceker-torbu" možete ponosno nositi svoju svakodnevicu, s uvjerenjem da ste odabrali torbu koja prati vaš unikatni tempo, a pritom pomaže nositi teret vaših dana.
        Ručno izrađene u BiH, naše "ceker-torbe" donose ne samo praktičnost, već i autentičan izraz stila. Svaka je izrađena s posebnom pažnjom na detalje, odražavajući ne samo kvalitetu izrade, već i individualnost vlasnice. Bilo da tražite svestrani dodatak svakodnevnom stilu ili autentičan ručno izrađen komad za posebne prilike, naše "ceker-torbe" su pravi izbor koji odražava vašu jedinstvenost i ukus.


        </div>
      </Collapse>
      </Col>
    </Row>
      <Row className="justify-content-center">
      {checkers.map((ceker, l) => (
        <Col key={l} xs={6} md={5} lg={2} className="pt-3 text-center overflow-hidden ">

        <Card className="pt-3 text-center overflow-hidden card-cover">
          <Card.Img className='card-cover3' onClick={() => handleProductClick(ceker)} variant="top" src={ceker.fotografija} />

          <Card.Body style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Card.Title>{ceker.naziv}</Card.Title>
            <Card.Text style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        

              <strong>{ceker.cijena} KM</strong>
              
            </Card.Text>

            <Button style={{ borderRadius: '0', borderColor: '#d9d9d9' }} onClick={() => handleProductClick(ceker)} size="sm" variant='outline-dark'
            className='card-cover2'>Pogledaj</Button>
          
            <Button onClick={() => handleAddToCart(ceker)} style={{ marginTop: '5px', borderRadius: '0', borderColor: '#d9d9d9' }} size="sm" variant='outline-dark' disabled={addedToCart.includes(ceker)}
            className='card-cover2'>{addedToCart.includes(ceker) ? 'Dodano u korpu' : 'Dodaj u Korpu'}</Button>
            <Button
              onClick={() => handleIncrementLikes(ceker)}
              style={{ border: "none", position: "absolute", top: "5px", right: "3px"}}
              size="sm"
              variant="outline-dark"
              disabled={likedCheckers.includes(ceker.id)}
              className='card-cover2'
            >
              <FontAwesomeIcon icon={faHeart} />
              <div>
              {ceker.likes}
              </div>
            </Button>
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
