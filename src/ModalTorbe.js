import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const ModalTorbe = ({ addedToCart, addToCart, torba, showModal, onClose }) => {
  if (!torba) {
    return null;
  }

  const images = [
    {
      original: torba.fotografija,
      thumbnail: torba.fotografija,
    },
    {
      original: torba.fotografija2,
      thumbnail: torba.fotografija2,
    },
    {
      original: torba.fotografija3,
      thumbnail: torba.fotografija3,
    },
    {
      original: torba.fotografija4,
      thumbnail: torba.fotografija4,
    },
  ];

  return (
    <Modal
      show={showModal}
      onHide={onClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='modalbg' closeButton>
        <Modal.Title>{torba.naziv}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Row className="flex-lg-row flex-column">
        <Col lg={true}>
          <ImageGallery items={images} />
        </Col>
        <Col lg={true}>
          <p className="p-3">{torba.detaljno}</p>
        </Col>
      </Row>
      <Row className='text-center align-items-center'>
      <Col>
        <strong>Cijena: {torba.cijena} KM</strong>
        </Col>
        <Col>
        <Button
            onClick={() => addToCart(torba)}
            style={{ marginTop: '5px' }}
            size="sm"
            variant="outline-dark"
            disabled={addedToCart.includes(torba)}
          >
            {addedToCart.includes(torba) ? 'Dodano u korpu' : 'Dodaj u Korpu'}
          </Button>
        </Col>
      </Row>
         
      </Modal.Body>
      <Modal.Footer className='modalbg'>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalTorbe;
