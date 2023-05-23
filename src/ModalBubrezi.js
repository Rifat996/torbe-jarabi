import React from 'react';
import { Modal, Button } from 'react-bootstrap';
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
      <Modal.Body
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ImageGallery items={images} />
        <p>{bubreg.detaljno}</p>
        <strong>{bubreg.cijena} KM</strong>
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
            onClick={() => addToCart(bubreg)}
            style={{ marginTop: '5px' }}
            size="sm"
            variant="outline-dark"
            disabled={addedToCart.includes(bubreg)}
          >
            {addedToCart.includes(bubreg) ? 'Dodano u korpu' : 'Dodaj u Korpu'}
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

export default ModalBubrezi;
