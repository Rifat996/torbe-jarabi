import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const ModalBubrezi = ({ addedToCart, addToCart, bubreg, showModal, onClose }) => {
  if (!bubreg) {
    return null;
  }

  const images = [
    {
      original: bubreg.fotografija,
      thumbnail: bubreg.fotografija,
    },
    {
      original: bubreg.fotografija2,
      thumbnail: bubreg.fotografija2,
    },
    {
      original: bubreg.fotografija3,
      thumbnail: bubreg.fotografija3,
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
      <Modal.Header closeButton>
        <Modal.Title>{bubreg.naziv}</Modal.Title>
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

          <p>{bubreg.detaljno}</p>
          <p>Materijal: <strong>{bubreg.materijal}</strong></p>
          <p>Dimenzije: <strong>{bubreg.dimenzije}</strong></p>

          <h5 className='pt-5'><strong>Cijena: {bubreg.cijena} KM</strong></h5>

          <Button
          onClick={() => addToCart(bubreg)}
          size="sm"
          variant="outline-dark"
          disabled={addedToCart.includes(bubreg)}
        >
          {addedToCart.includes(bubreg) ? 'Dodano u korpu' : 'Dodaj u Korpu'}
        </Button>
        </Col>
        </Row>
    </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalBubrezi;
