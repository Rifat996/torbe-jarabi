import React, { useContext, useState } from 'react'
import { CartContext } from './CartContext';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import Footer from './Footer';
import { Alert, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';


export default function Cart() {
    const { cartItems } = useContext(CartContext);
    const { removeFromCart } = useContext(CartContext);
    const [showForm, setShowForm] = useState(false);
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [reservationStatus, setReservationStatus] = useState(null);


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

        let message = "Korpa:\n";
        cartItems.forEach((product, index) => {
          message += `${index + 1}. ${product.naziv}: ${product.cijena} KM\n`;
        });
        message += `\nUkupno: ${totalPrice} KM`;

        message += "\n\nPodaci za dostavu:";
        message += `\nIme i prezime: ${fullName}`;
        message += `\nAdresa: ${address}`;
        message += `\nGrad: ${city}`;
        message += `\nBroj telefona: ${phoneNumber}`;
        message += `\nEmail: ${email}`;
      
        const encodedMessage = encodeURIComponent(message);
      
        const url = `https://wa.me/38762069303?text=${encodedMessage}`;
      
        return url;
      };
      
      
      const sendOrderEmail = (e) => {
        e.preventDefault();
      
        // Define your Email.js service details
        const serviceID = 'RifatGmail';
        const templateID = 'template_prum6ii';
        const userID = 'N1ZkcfLFcUW4zPbT1';
      
        // Set the parameters for the email template
        const formattedCartItems = cartItems.map((product, index) => {
            return `${index + 1}. ${product.naziv}: ${product.cijena} KM`;
          });
          
          const templateParams = {
            fullName: fullName,
            address: address,
            city: city,
            phoneNumber: phoneNumber,
            email: email,
            totalPrice: totalPrice,
            cartItems: formattedCartItems.join("\n"),
          };
          
      
        // Send the email using Email.js
        emailjs.send(serviceID, templateID, templateParams, userID)
          .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
            setReservationStatus('success');
          })
          .catch((error) => {
            console.error('Error sending email:', error);
            setReservationStatus('error');
          });
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
                    <Col xs={6} md={4} lg={2} key={index} className="mt-3 pt-3 text-center bg-light overflow-hidden col-container">
                        <Card style={{ border: 'none' }}>
                            <Card.Img variant="top" src={product.fotografija} />

                            <Card.Body style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Card.Title>{product.naziv}</Card.Title>
                                <Card.Text style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                    <strong>{product.cijena} KM</strong>
                                
                                </Card.Text>
                                <Button onClick={() => handleRemoveFromCart(product)} style={{ margin: '5px', borderRadius: '0', borderColor: '#d9d9d9' }} size="sm" variant='outline-dark'>Izbaci iz Korpe</Button>
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
                        <Button style={{ borderRadius: '0', borderColor: '#d9d9d9' }} onClick={() => setShowForm(true)}>Nastavi prema narudžbi</Button>
                    </Col>
                </Row>

                    {showForm && (
                <Row className="justify-content-center">
                    <Col xs={11} md={8} lg={6} className="pt-3 text-center bg-light overflow-hidden col-container" style={{ margin:"10px"}}>
                    <Form onSubmit={sendOrderEmail} style={{ padding: '20px' }}>
                        <Form.Group controlId="fullName">
                        <Form.Label>Ime i Prezime</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Vaše ime i prezime"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                        </Form.Group>

                        <Form.Group controlId="address">
                        <Form.Label>Adresa stanovanja</Form.Label>
                        <Form.Control type="text" placeholder="Vaša adresa stanovanja" value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required/>
                        </Form.Group>

                        <Form.Group controlId="city">
                        <Form.Label>Grad</Form.Label>
                        <Form.Control type="text" placeholder="Grad u kojem živite" value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required/>
                        </Form.Group>

                        <Form.Group controlId="phoneNumber">
                        <Form.Label>Broj telefona</Form.Label>
                        <Form.Control type="text" placeholder="Vaš broj telefona" value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required/>
                        </Form.Group>

                        <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Unesite vaš email (nije obavezno)" value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>
                        <p style={{ margin: '8px', border: '2px solid #381c3ddf', borderRadius: '5px', padding: '5px', background: '#e4dae9' }}>Plaćanje narudžbe se vrši po isporuci na adresu. Dostava 8 KM.</p>

                        

                        <Button style={{ margin:"10px", borderRadius: '0', borderColor: '#d9d9d9' }} variant="primary" type="submit">
                            Naruči
                        </Button>
                        ili
                        <Button onClick={() => {
                            const whatsappUrl = generateWhatsAppMessage();
                            window.open(whatsappUrl);
                            }} style={{ margin:"10px", borderRadius: '0', borderColor: '#d9d9d9' }} variant="primary" type="submit">
                            Naruči preko WhatsApp-a
                        </Button>
                        <p style={{ margin: '8px', border: '2px solid #381c3ddf', borderRadius: '5px', padding: '5px', background: '#25D366', color: 'white' }}>Ukoliko naručujete preko WhatsApp-a potrebno je da broj +38762069303 sačuvate kao kontakt u Vašem telefonu prije same narudžbe.</p>
                        
                    </Form>
                    </Col>
                </Row>
                )}
            </Container>

        )}

        {reservationStatus === 'success' && (
        <Alert variant="success">
            Rezervacija uspješno napravljena.
        </Alert>
        )}

        {reservationStatus === 'error' && (
        <Alert variant="danger">
            Nažalost nismo u mogućnosti zabilježiti Vašu narudžbu. Molimo Vas da pokušate kasnije.
        </Alert>
        )}

            
            <Footer />
        </>
    )
    }
