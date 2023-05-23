import React, { useContext, useState } from 'react'
import { CartContext } from './CartContext';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import Footer from './Footer';
import { Button } from 'react-bootstrap';


export default function Cart() {
    const { cartItems } = useContext(CartContext);
    const { removeFromCart } = useContext(CartContext);
    const [showForm, setShowForm] = useState(false);
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    
    const handleRemoveFromCart = (product) => {
        removeFromCart(product);
      };


      const totalPrice = cartItems.reduce((total, product) => {
        if (product.cijena) {
          return total + parseFloat(product.cijena);
        }
        return total;
      }, 0);


      const generateWhatsAppMessage = () => {
        // Create the message text with the cart information
        let message = "Korpa:\n";
        cartItems.forEach((product, index) => {
          message += `${index + 1}. ${product.naziv}: ${product.cijena} KM\n`;
        });
        message += `\nUkupno: ${totalPrice} KM`;

        // Append the form data to the message
        message += "\n\nPodaci za dostavu:";
        message += `\nIme i prezime: ${fullName}`;
        message += `\nAdresa: ${address}`;
        message += `\nGrad: ${city}`;
        message += `\nBroj telefona: ${phoneNumber}`;
        message += `\nEmail: ${email}`;
      
        // Encode the message for the URL
        const encodedMessage = encodeURIComponent(message);
      
        // Generate the WhatsApp message URL
        const url = `https://wa.me/38762451154?text=${encodedMessage}`;
      
        return url;
      };
      
      
      
      


    return (
        <>

            {cartItems.length === 0 ? (
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col className="pt-3 text-center overflow-hidden" style={{ border: "1px solid black", borderRadius: "10px", maxWidth: "500px", margin:"10px"}}>
                            <h1>Korpa</h1>
                            <p>Hej, dodaj par artikala i napuni Korpu.</p>
                        </Col>
                    </Row>
                </Container>
            ) : (
                
            <Container fluid>
                <Row className="justify-content-center">{cartItems.map((product, index) => (
                    <Col xs={6} md={4} lg={2} key={index} className="pt-3 text-center overflow-hidden">
                        <Card border="dark">
                            <Card.Img variant="top" src={product.fotografija} />

                            <Card.Body style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Card.Title>{product.naziv}</Card.Title>
                                <Card.Text style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                    <strong>{product.cijena} KM</strong>
                                
                                </Card.Text>
                                <Button onClick={() => handleRemoveFromCart(product)} style={{ margin: '5px' }} size="sm" variant='outline-dark'>Izbaci iz Korpe</Button>
                                </Card.Body>
          
                        </Card>
                    </Col>
                ))}

                </Row>
                <Row className="justify-content-center">
                    <Col className="pt-3 text-center overflow-hidden">
                        <strong>Ukupno: {totalPrice} KM</strong>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="pt-3 text-center overflow-hidden">
                        <Button onClick={() => setShowForm(true)}>Nastavi prema narudzbi</Button>
                    </Col>
                </Row>

                    {showForm && (
                <Row className="justify-content-center">
                    <Col xs={11} md={8} lg={6} className="pt-3 text-center overflow-hidden" style={{ border: "1px solid black", borderRadius: "10px", margin:"10px"}}>
                    <Form>
                        <Form.Group controlId="fullName">
                        <Form.Label>Ime i Prezime</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Unesite vaše ime i prezime"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        </Form.Group>

                        <Form.Group controlId="address">
                        <Form.Label>Adresa stanovanja</Form.Label>
                        <Form.Control type="text" placeholder="Unesite Vašu adresu stanovanja" value={address}
                        onChange={(e) => setAddress(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="city">
                        <Form.Label>Grad</Form.Label>
                        <Form.Control type="text" placeholder="Grad u kojem živite" value={city}
                        onChange={(e) => setCity(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="phoneNumber">
                        <Form.Label>Broj telefona</Form.Label>
                        <Form.Control type="text" placeholder="Unesite Vaš broj telefona" value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Unesite vaš email (nije obavezno)" value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>

                        <Button onClick={() => {
                            const whatsappUrl = generateWhatsAppMessage();
                            window.open(whatsappUrl);
                            }} style={{ margin:"10px" }} variant="primary" type="submit">
                            Naruči preko WhatsApp-a
                        </Button>
                    </Form>
                    </Col>
                </Row>
                )}
            </Container>
            

        )}
            
            <Footer />
        </>
    )
    }
