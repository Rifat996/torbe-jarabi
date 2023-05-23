import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

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
        <Modal.Title>{neseser.naziv}</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ImageGallery items={images} />
        <p>{neseser.detaljno}</p>
        <strong>{neseser.cijena} KM</strong>
        <div
          style={{
            margin: '5px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={() => addToCart(neseser)}
            style={{ marginTop: '5px' }}
            size="sm"
            variant="outline-dark"
            disabled={addedToCart.includes(neseser)}
          >
            {addedToCart.includes(neseser) ? 'Dodano u korpu' : 'Dodaj u Korpu'}
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalNeseseri;
