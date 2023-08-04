import React, { useEffect, useState, useRef } from 'react';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Col, Container, Row } from 'react-bootstrap';


export default function GridGallery() {

  const [galleryPhotos, setGalleryPhotos] = useState([]);
  const productsCollectionRef = collection(db, "galerija");
  const splideRef = useRef(null);


  useEffect(() => {
    const getGalleryPhotos = async () => {
      // read the data
      try {
      const data = await getDocs(productsCollectionRef);
      const filteredData = data.docs.map((doc) => ({...doc.data()}));
      setGalleryPhotos(filteredData);
      console.log(filteredData)
      } catch (err) {
      console.log(err);
      }
    };

    getGalleryPhotos();
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (splideRef.current) {
        splideRef.current.go('+1'); // Go to the next slide
      }
    }, 3000); // Adjust the interval as needed (3000ms = 3 seconds)

    return () => clearInterval(interval);
  }, []);


  return (
    <>
    <Container fluid>
      <Row className="justify-content-center">
        <Col className="pt-4 text-center overflow-hidden ">
          <h3>GALERIJA</h3>
        </Col>
      </Row>
    </Container>
    <div className='pt-3'>
     <Splide
        options={ {
          type: 'slide',
          autoWidth: true,
          gap: 5,
          rewind: true,
      } } 
        ref={splideRef}
        aria-label="React Splide">
      
        {galleryPhotos.map((photo, x) => (
          <SplideSlide key={x}>
          <img className='image-container2 sketchy' src={photo.fotografija} />
          </SplideSlide>
        ))}
      
    </Splide>
    </div>
    </>
  )
}