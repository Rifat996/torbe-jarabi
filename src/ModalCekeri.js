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
      <Row className="flex-lg-row flex-column">
        <Col lg={true}>
          <ImageGallery items={images} />
        </Col>
        <Col lg={true}>
          <p className="p-3">{ceker.detaljno}</p>
        </Col>
      </Row>
      <Row className='text-center align-items-center'>
        <Col>
        <strong>Cijena: {ceker.cijena} KM</strong>
        </Col>
        <Col>
        <Button
          onClick={() => addToCart(ceker)}
          style={{ marginTop: '5px' }}
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
