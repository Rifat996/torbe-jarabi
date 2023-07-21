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
      <Row>
        <Col xs={12} md={6} lg={6}>
          <ImageGallery items={images} />
        </Col>
        <Col style={{
          display: 'flex',
          flexDirection: 'column'
        }} className="p-3 mt-auto" xs={12} md={12} lg={6}>

          <p>{torba.detaljno}</p>
          <p>Materijal: <strong>{torba.materijal}</strong></p>
          <p>Dimenzije: <strong>{torba.dimenzije}</strong></p>

          <h5 className='pt-5'><strong>Cijena: {torba.cijena} KM</strong></h5>

          <Button
          onClick={() => addToCart(torba)}
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
