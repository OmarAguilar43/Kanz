// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/zoom";

import "./styles.css";

// import required modules
import { Pagination, Zoom } from "swiper/modules";
import Image from "next/image";

export default function SecondGalery() {
  const images = [
    "/2Carrusel/2do Carrusel foto 1.jpg",
    "/2Carrusel/2do Carrusel foto 2.jpg",
    "/2Carrusel/2do Carrusel foto 3.jpg",
    "/2Carrusel/2do Carrusel foto 4.jpg",
    "/2Carrusel/2do Carrusel foto 5.jpg",
    "/2Carrusel/2do Carrusel foto 6.jpg",
    "/2Carrusel/2do Carrusel foto 7.jpg",
    "/2Carrusel/2do Carrusel foto 8.jpg",
    "/2Carrusel/2do Carrusel foto 9.jpg",
    "/2Carrusel/2do Carrusel foto 10.jpg",
    "/2Carrusel/2do Carrusel foto 11.jpg",
    "/2Carrusel/2do Carrusel foto 12.jpg",
    "/2Carrusel/2do Carrusel foto 13.jpg",
    "/2Carrusel/2do Carrusel foto 14.jpg",
    "/2Carrusel/2do Carrusel foto 15.jpg",
  ];

  return (
    <>
      <Swiper
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Pagination]}
        zoom={true}
        className="mySwiper w-full xl:h-83/100 md:h-65/100 h-35/100"
      >
        {images.map((src, idx) => (
          <SwiperSlide
            key={idx}
            className={
              idx === 0 || idx === 6
                ? "h-full w-90/100! lg:w-61/100!"
                : "h-full w-40/100! lg:w-28/100!"
            }
          >
            <Image src={src} alt={`Imagen ${idx + 1}`} fill />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
