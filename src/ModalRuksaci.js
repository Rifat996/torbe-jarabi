import React from 'react';
import { Modal, Button } from 'react-bootstrap';
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
        <Modal.Title>{ruksak.naziv}</Modal.Title>
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
        <p>{ruksak.detaljno}</p>
        <strong>{ruksak.cijena} KM</strong>
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
            onClick={() => addToCart(ruksak)}
            style={{ marginTop: '5px' }}
            size="sm"
            variant="outline-dark"
            disabled={addedToCart.includes(ruksak)}
          >
            {addedToCart.includes(ruksak) ? 'Dodano u korpu' : 'Dodaj u Korpu'}
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

export default ModalRuksaci;
