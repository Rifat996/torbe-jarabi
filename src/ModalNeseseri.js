import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';



const ModalNeseseri = ({ addedToCart, addToCart, neseser, showModal, onClose }) => {
  if (!neseser) {
    return null;
  }

  const images = [
    {
      original: neseser.fotografija,
      thumbnail: neseser.fotografija,
    },
    {
      original: neseser.fotografija2,
      thumbnail: neseser.fotografija2,
    },
    {
      original: neseser.fotografija3,
      thumbnail: neseser.fotografija3,
    },
    {
      original: neseser.fotografija4,
      thumbnail: neseser.fotografija4,
    }
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
        <Modal.Title>{neseser.naziv}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <ImageGallery
              items={images} />
        </Col>
        <Col style={{
          display: 'flex',
          flexDirection: 'column'
        }} className="p-3 mt-auto" xs={12} md={12} lg={6}>

          <p>{neseser.detaljno}</p>
          <p>Materijal: <strong>{neseser.materijal}</strong></p>
          <p>Dimenzije: <strong>{neseser.dimenzije}</strong></p>

          <h5 className='pt-5'><strong>Cijena: {neseser.cijena} KM</strong></h5>

          <Button
          onClick={() => addToCart(neseser)}
          size="sm"
          variant="outline-dark"
          disabled={addedToCart.includes(neseser)}
        >
          {addedToCart.includes(neseser) ? 'Dodano u korpu' : 'Dodaj u Korpu'}
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

export default ModalNeseseri;
