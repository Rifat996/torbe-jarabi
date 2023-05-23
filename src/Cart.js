import React, { useContext, useState } from 'react'
import { CartContext } from './CartContext';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import Footer from './Footer';
import { Button } from 'react-bootstrap';


export default function Cart() {
    const { cartItems } = useContext(CartContext);
    const { removeFromCart } = useContext(CartContext);
    const [showForm, setShowForm] = useState(false);
    
    const handleRemoveFromCart = (product) => {
        removeFromCart(product);
      };


      const totalPrice = cartItems.reduce((total, product) => {
        if (product.cijena) {
          return total + parseFloat(product.cijena);
        }
        return total;
      }, 0);
      


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
                        <Form.Control type="text" placeholder="Unesite vaše ime i prezime" />
                        </Form.Group>

                        <Form.Group controlId="address">
                        <Form.Label>Adresa stanovanja</Form.Label>
                        <Form.Control type="text" placeholder="Unesite Vašu adresu stanovanja" />
                        </Form.Group>

                        <Form.Group controlId="city">
                        <Form.Label>Grad</Form.Label>
                        <Form.Control type="text" placeholder="Grad u kojem živite" />
                        </Form.Group>

                        <Form.Group controlId="phoneNumber">
                        <Form.Label>Broj telefona</Form.Label>
                        <Form.Control type="text" placeholder="Unesite Vaš broj telefona" />
                        </Form.Group>

                        <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Unesite vaš email (nije obavezno)" />
                        </Form.Group>

                        <Button style={{ margin:"10px" }} variant="primary" type="submit">
                        Naruči
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
