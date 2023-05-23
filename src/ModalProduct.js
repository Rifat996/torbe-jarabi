import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


const ModalProduct = ({addedToCart, addToCart, product, showModal, onClose }) => {

  if (!product) {
    return null;
  }

  const images = [
    {
      original: product.fotografija,
      thumbnail: product.fotografija,
    },
    {
      original: product.fotografija2,
      thumbnail: product.fotografija2,
    },
    {
      original: product.fotografija3,
      thumbnail: product.fotografija3,
    }
    
  ];

  return (
    <Modal show={showModal} onHide={onClose} size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.naziv}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <ImageGallery items={images}/>
        <p>{product.detaljno}</p>
        <strong>{product.cijena} KM</strong>
        <div style={{margin: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Button onClick={() => addToCart(product)} style={{ marginTop: '5px' }} size="sm" variant='outline-dark' disabled={addedToCart.includes(product)}>{addedToCart.includes(product) ? 'Dodano u korpu' : 'Dodaj u Korpu'}</Button>
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

export default ModalProduct;
