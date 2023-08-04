import React, { useEffect, useState, useContext } from 'react'
import Footer from './Footer'
import { db } from './config/firebase';
import { getDocs, collection, updateDoc, doc } from 'firebase/firestore';
import { Button, Card, Container, Row, Col} from 'react-bootstrap';
import ModalTorbe from './ModalTorbe'
import { CartContext } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Collapse from 'react-bootstrap/Collapse';


export default function Torbe() {
    const [bags, setBags] = useState([]);
    const productsCollectionRef = collection(db, "oversizedtorbe");
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { addToCart } = useContext(CartContext);
    const [addedToCart, setAddedToCart] = useState([]);
    const [likedTorbas, setLikedTorbas] = useState([]);
    const [open, setOpen] = useState(false);

  

    useEffect(() => {
      const getBags = async () => {
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

    const handleIncrementLikes = async (torba) => {
      if (likedTorbas.includes(torba.id)) {
        return; // Torba already liked, exit the function
      }

      const updatedBags = bags.map((bag) => {
        if (bag.id === torba.id) {
          const updatedBag = {
            ...bag,
            likes: bag.likes + 1,
          };
          return updatedBag;
        }
        return bag;
      });
    
      try {
        const bagRef = doc(db, 'oversizedtorbe', torba.id);
        await updateDoc(bagRef, {
          likes: torba.likes + 1,
        });
        setBags(updatedBags);
        setLikedTorbas([...likedTorbas, torba.id]);

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
        Više o oversized torbama
      </Button>
      <Collapse in={open}>
        <div className='bg-light p-3 mt-2' id="example-collapse-text">
        Torbejarabi oversized torbe su velike ženske torbe, vješto dizajnirane da se prilagode dinamičnom životu moderne žene. Ručno rađene oversized torbe nisu samo torbe – već jedna proslava prostora, stila i praktičnosti. 
        Ove velike unikatne torbe su namijenjene ženi koja cijeni jedinstvenost i voli da iznese svoj autentičan stil. Izrađene su s posebnim naglaskom na estetiku, ali bez žrtvovanja funkcionalnosti.
        Svaki centimetar oversized torbi šiven je s velikom preciznošću da vam omogući da ponesete svoj svijet sa sobom. Torbe su savršene za žene koje žude za savršenom ravnotežom između stila i praktičnih potreba - od svakodnevnih osnovnih stvari, radnih predmeta, pa sve do neočekivanih dodataka.
        Ljepota naših oversized torbi leži u njihovoj inherentnoj svestranosti. Njihova proširena veličina pruža vam udobnost mobilne radne stanice, komfora rezervnog ormara ili sigurnosti dobro opskrbljene ostave, sve to dok nosite autentičan modni izričaj.
        Ali to nije cijela priča. Svaka oversized torba je postavljena i pregrađena, ima nekoliko unutarnjih džepova i zatvara se na rajfešlus, osiguravajući da su vam stvari uvijek lako dostupne i lijepo posložene.  Recite zbogom nervoznom pretraživanju i dobrodošli miru i organiziranosti.
        U suštini, naše oversized torbe su više od modnog dodatka - one su oslobađajući izbor načina života. Savršena simbioza stila i praktičnosti, koja prkosi standardnim modnim normama, a istovremeno pruža jednostavnost i praktičnost koju očekujete od svakodnevne torbe. Živite uveliko sa stilom.


        </div>
      </Collapse>
      </Col>
    </Row>
      <Row className="justify-content-center">
      {bags.map((torba, a) => (
        <Col key={a} xs={6} md={5} lg={2} className="pt-3 text-center overflow-hidden">

        <Card className="pt-3 text-center overflow-hidden card-cover">
          <Card.Img className='card-cover3' onClick={() => handleProductClick(torba)} variant="top" src={torba.fotografija} />

          <Card.Body style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Card.Title>{torba.naziv}</Card.Title>
            <Card.Text style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        

              <strong>{torba.cijena} KM</strong>
              
            </Card.Text>

            <Button 
            style={{ borderRadius: '0', borderColor: '#d9d9d9' }} 
            onClick={() => handleProductClick(torba)} size="sm" variant='outline-dark'
            className='card-cover2'
            >Pogledaj</Button>
          
            <Button 
            onClick={() => handleAddToCart(torba)} style={{ marginTop: '5px', borderRadius: '0', borderColor: '#d9d9d9' }} size="sm" variant='outline-dark' disabled={addedToCart.includes(torba)}
            className='card-cover2'
            >{addedToCart.includes(torba) ? 'Dodano u korpu' : 'Dodaj u Korpu'}</Button>
            <Button
              onClick={() => handleIncrementLikes(torba)}
              style={{ border: "none", position: "absolute", top: "5px", right: "5px"}}
              size="sm"
              variant="outline-dark"
              disabled={likedTorbas.includes(torba.id)}
              className='card-cover2'
            >
              <FontAwesomeIcon icon={faHeart} />
              <div>
              {torba.likes}
              </div>
            </Button>
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
