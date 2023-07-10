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
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='modalbg' closeButton>
        <Modal.Title>{ruksak.naziv}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Row className="flex-lg-row flex-column">
        <Col lg={true}>
          <ImageGallery items={images} />
        </Col>
        <Col lg={true}>
          <p className="p-3">{ruksak.detaljno}</p>
        </Col>
      </Row>
      <Row className='text-center align-items-center'>
      <Col>
        <strong>Cijena: {ruksak.cijena} KM</strong>
        </Col>
        <Col>
        <Button
            onClick={() => addToCart(ruksak)}
            style={{ marginTop: '5px' }}
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
