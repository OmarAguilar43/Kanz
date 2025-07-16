
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/zoom'

import './styles.css';

// import required modules
import { Pagination, Zoom } from 'swiper/modules';
import Image from 'next/image';

export default function SecondGalery() {

      const images = [
        '/2Carrusel/2do Carrusel foto 1.jpg',
        '/2Carrusel/2do Carrusel foto 2.jpg',
        '/2Carrusel/2do Carrusel foto 3.jpg',
        '/2Carrusel/2do Carrusel foto 4.jpg',
        '/2Carrusel/2do Carrusel foto 5.jpg',
        '/2Carrusel/2do Carrusel foto 6.jpg',
        '/2Carrusel/2do Carrusel foto 7.jpg',
        '/2Carrusel/2do Carrusel foto 8.jpg',
        '/2Carrusel/2do Carrusel foto 9.jpg',
        '/2Carrusel/2do Carrusel foto 10.jpg',
        '/2Carrusel/2do Carrusel foto 11.jpg',
        '/2Carrusel/2do Carrusel foto 12.jpg',
        '/2Carrusel/2do Carrusel foto 13.jpg',
        '/2Carrusel/2do Carrusel foto 14.jpg',
        '/2Carrusel/2do Carrusel foto 15.jpg',
      ]
        

  return (
    <>
      <Swiper
        slidesPerView={1.2}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom,Pagination]}
        zoom={true}
        className="mySwiper"
      >
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className='swiper-zoom-container'>
                      <Image
                        src={src}
                        alt={`Imagen ${index + 1}`}
                        fill
                        
                      />
                    </div>
                  </SwiperSlide>
                ))}
    
      </Swiper>
    </>
  );
}