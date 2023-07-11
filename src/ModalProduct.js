import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './App.css';


const ModalProduct = ({addedToCart, addToCart, product, showModal, onClose }) => {

  if (!product) {
    return null;
  }

  const images = [
    {
      original: product.fotografija,
      thumbnail: product.fotografija,
    },
    {
      original: product.fotografija2,
      thumbnail: product.fotografija2,
    },
    {
      original: product.fotografija3,
      thumbnail: product.fotografija3,
    },
    {
      original: product.fotografija4,
      thumbnail: product.fotografija4,
    },
    {
      original: product.fotografija5,
      thumbnail: product.fotografija5,
    }
    
  ];

  return (
    <Modal show={showModal} onHide={onClose} size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
      <Modal.Header className='modalbg' closeButton>
        <Modal.Title>{product.naziv}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <ImageGallery items={images} />
        </Col>
        <Col style={{
          display: 'flex',
          flexDirection: 'column'
        }} className="p-3" xs={12} md={12} lg={6}>

          <p>{product.detaljno}</p>
          <p>Materijal: <strong>{product.materijal}</strong></p>
          <p>Dimenzije: <strong>{product.dimenzije}</strong></p>

          <h5 className='pt-5'><strong>Cijena: {product.cijena} KM</strong></h5>

          <Button
          onClick={() => addToCart(product)}
          size="sm"
          variant="outline-dark"
          disabled={addedToCart.includes(product)}
        >
          {addedToCart.includes(product) ? 'Dodano u korpu' : 'Dodaj u Korpu'}
        </Button>
        </Col>
        </Row>
    </Modal.Body>
      <Modal.Footer className='modalbg'>
        <Button style={{ borderRadius: '0', borderColor: '#d9d9d9' }} variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalProduct;
