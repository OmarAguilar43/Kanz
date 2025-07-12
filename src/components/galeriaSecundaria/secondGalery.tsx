
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function SecondGalery() {

      const images = ['/8.jpg', '/17.jpg','/1.jpg','/19.jpg','/13.jpg']

  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div >
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