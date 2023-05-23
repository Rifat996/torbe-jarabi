import React from 'react';
import { Modal, Button } from 'react-bootstrap';
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
        <Modal.Title>{ceker.naziv}</Modal.Title>
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
        <p>{ceker.detaljno}</p>
        <strong>{ceker.cijena} KM</strong>
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
            onClick={() => addToCart(ceker)}
            style={{ marginTop: '5px' }}
            size="sm"
            variant="outline-dark"
            disabled={addedToCart.includes(ceker)}
          >
            {addedToCart.includes(ceker) ? 'Dodano u korpu' : 'Dodaj u Korpu'}
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

export default ModalCekeri;
