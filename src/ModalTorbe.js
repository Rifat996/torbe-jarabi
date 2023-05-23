import React from 'react';
import { Modal, Button } from 'react-bootstrap';
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
        <Modal.Title>{torba.naziv}</Modal.Title>
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
        <p>{torba.detaljno}</p>
        <strong>{torba.cijena} KM</strong>
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
            onClick={() => addToCart(torba)}
            style={{ marginTop: '5px' }}
            size="sm"
            variant="outline-dark"
            disabled={addedToCart.includes(torba)}
          >
            {addedToCart.includes(torba) ? 'Dodano u korpu' : 'Dodaj u Korpu'}
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

export default ModalTorbe;
