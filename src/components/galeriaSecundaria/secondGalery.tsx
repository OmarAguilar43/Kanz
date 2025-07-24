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
    "/2Carrusel/2do-carrusel-foto-1.jpg",
    "/2Carrusel/2do-carrusel-foto-2.jpg",
    "/2Carrusel/2do-carrusel-foto-3.jpg",
    "/2Carrusel/2do-carrusel-foto-4.jpg",
    "/2Carrusel/2do-carrusel-foto-5.jpg",
    "/2Carrusel/2do-carrusel-foto-6.jpg",
    "/2Carrusel/2do-carrusel-foto-7.jpg",
    "/2Carrusel/2do-carrusel-foto-8.jpg",
    "/2Carrusel/2do-carrusel-foto-9.jpg",
    "/2Carrusel/2do-carrusel-foto-10.jpg",
    "/2Carrusel/2do-carrusel-foto-11.jpg",
    "/2Carrusel/2do-carrusel-foto-12.jpg",
    "/2Carrusel/2do-carrusel-foto-13.jpg",
    "/2Carrusel/2do-carrusel-foto-14.jpg",
    "/2Carrusel/2do-carrusel-foto-15.jpg",
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
        className="mySwiper w-full xl:h-83/100 md:h-75/100 sm:h-50/100 h-60/100 "
      >
        {images.map((src, idx) => (
          <SwiperSlide
            key={idx}
            className={
              idx === 0 || idx === 6
              ? "h-full w-235/100! min-[375px]:w-200/100! min-[425px]:w-180/100! md:w-125/100! lg:w-94/100! xl:w-74/100! 2xl:w-62/100! "
              : "h-full w-105/100!  min-[375px]:w-90/100! min-[425px]:w-77/100! md:w-55/100! lg:w-42/100! xl:w-33/100! 2xl:w-28/100!"
            }
          >
            <Image src={src} alt={`Imagen ${idx + 1}`} fill unoptimized={true}  />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
