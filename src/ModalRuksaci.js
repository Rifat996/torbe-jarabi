import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const ModalRuksaci = ({ addedToCart, addToCart, ruksak, showModal, onClose }) => {
  if (!ruksak) {
    return null;
  }

  const images = [
    {
      original: ruksak.fotografija,
      thumbnail: ruksak.fotografija,
    },
    {
      original: ruksak.fotografija2,
      thumbnail: ruksak.fotografija2,
    },
    {
      original: ruksak.fotografija3,
      thumbnail: ruksak.fotografija3,
    },
    {
      original: ruksak.fotografija4,
      thumbnail: ruksak.fotografija4,
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
        <Modal.Title>{ruksak.naziv}</Modal.Title>
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

          <p>{ruksak.detaljno}</p>
          <p>Materijal: <strong>{ruksak.materijal}</strong></p>
          <p>Dimenzije: <strong>{ruksak.dimenzije}</strong></p>

          <h5 className='pt-5'><strong>Cijena: {ruksak.cijena} KM</strong></h5>

          <Button
          onClick={() => addToCart(ruksak)}
          size="sm"
          variant="outline-dark"
          disabled={addedToCart.includes(ruksak)}
        >
          {addedToCart.includes(ruksak) ? 'Dodano u korpu' : 'Dodaj u Korpu'}
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

export default ModalRuksaci;
