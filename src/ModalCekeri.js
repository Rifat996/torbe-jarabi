import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const ModalCekeri = ({ addedToCart, addToCart, ceker, showModal, onClose }) => {
  if (!ceker) {
    return null;
  }

  const images = [
    {
      original: ceker.fotografija,
      thumbnail: ceker.fotografija,
    },
    {
      original: ceker.fotografija2,
      thumbnail: ceker.fotografija2,
    },
    {
      original: ceker.fotografija3,
      thumbnail: ceker.fotografija3,
    },
    {
      original: ceker.fotografija4,
      thumbnail: ceker.fotografija4,
    },
  ];

  return (
    <Modal
      show={showModal}
      onHide={onClose}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='modalbg' closeButton>
        <Modal.Title>{ceker.naziv}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <ImageGallery items={images} />
        </Col>
        <Col style={{
          display: 'flex',
          flexDirection: 'column'
        }} className="p-3 mt-auto" xs={12} md={12} lg={6}>

          <p>{ceker.detaljno}</p>
          <p>Materijal: <strong>{ceker.materijal}</strong></p>
          <p>Dimenzije: <strong>{ceker.dimenzije}</strong></p>

          <h5 className='pt-5'><strong>Cijena: {ceker.cijena} KM</strong></h5>

          <Button
          onClick={() => addToCart(ceker)}
          size="sm"
          variant="outline-dark"
          disabled={addedToCart.includes(ceker)}
        >
          {addedToCart.includes(ceker) ? 'Dodano u korpu' : 'Dodaj u Korpu'}
        </Button>
        </Col>
        </Row>
    </Modal.Body>
      <Modal.Footer className='modalbg'>
      
        
        
        <Button variant="secondary" onClick={onClose}>
          Zatvori
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCekeri;
