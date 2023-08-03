import React, { useEffect, useState } from 'react';
import { db } from './config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


export default function GridGallery() {

  const [galleryPhotos, setGalleryPhotos] = useState([]);
  const productsCollectionRef = collection(db, "galerija");

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


  return (
    <>
    <div className='pt-5'>
     <Splide
        options={ {
          type: 'slide',
          autoWidth: true,
          gap: 5,
          rewind: true,
      } } 
        aria-label="React Splide">
      
        {galleryPhotos.map((photo, x) => (
          <SplideSlide key={x}>
          <img className='image-container2' src={photo.fotografija} />
          </SplideSlide>
        ))}
      
    </Splide>
    </div>
    </>
  )
}