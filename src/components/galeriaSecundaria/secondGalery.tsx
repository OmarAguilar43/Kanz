"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/zoom";
import { Pagination, Zoom } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";

export default function SecondGalery() {
  const imagesDesk = [
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

  const imagesMobile = [
    "/2Carrusel/2do-carrusel-foto-2.jpg",
    "/2Carrusel/2do-carrusel-foto-3.jpg",
    "/2Carrusel/2do-carrusel-foto-4.jpg",
    "/2Carrusel/2do-carrusel-foto-5.jpg",
    "/2Carrusel/2do-carrusel-foto-6.jpg",
    "/2Carrusel/2do-carrusel-foto-8.jpg",
    "/2Carrusel/2do-carrusel-foto-9.jpg",
    "/2Carrusel/2do-carrusel-foto-10.jpg",
    "/2Carrusel/2do-carrusel-foto-11.jpg",
    "/2Carrusel/2do-carrusel-foto-12.jpg",
    "/2Carrusel/2do-carrusel-foto-13.jpg",
    "/2Carrusel/2do-carrusel-foto-14.jpg",
    "/2Carrusel/2do-carrusel-foto-15.jpg",
  ];

  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleLoad = (idx: number) => {
    setLoadedImages((prev) => ({ ...prev, [idx]: true }));
  };

  return (
    <div className="flex justify-center items-center w-full md:h-full h-fit mt-10 mb-10">
      <div className="w-fit xl:h-83/100 md:h-75/100 sm:h-50/100 h-60/100 md:block hidden">
        <Swiper
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={15}
          pagination={{ clickable: true }}
          modules={[Zoom, Pagination]}
          zoom={true}
          className="mySwiper w-fit h-full"
        >
          {imagesDesk.map((src, idx) => (
            <SwiperSlide key={idx} className={"h-full w-fit!"}>
              <div className="relative w-fit h-full">
                {!loadedImages[idx] && (
                  <div className="absolute inset-0 animate-pulse bg-gray-300 rounded-xl z-10" />
                )}
                <Image
                  src={src}
                  alt={`Imagen ${idx + 1}`}
                  width={10}
                  height={10}
                  className={`object-cover transition-opacity duration-700 ${
                    loadedImages[idx]
                      ? "opacity-100 blur-0"
                      : "opacity-0 blur-md"
                  } h-full w-auto`}
                  onLoadingComplete={() => handleLoad(idx)}
                  unoptimized
                  priority={idx < 10}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-fit xl:h-83/100 md:h-75/100 sm:h-50/100 h-60/100 md:hidden flex flex-col justify-center items-center">
        <Image
          src={'/2Carrusel/2do-carrusel-foto-1.jpg'}
          alt={'Imagen 1'}
          width={10}
          height={10}
          className={'h-auto w-80/100'}
          unoptimized
        />
        <Swiper
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={15}
          pagination={{ clickable: true }}
          modules={[Zoom, Pagination]}
          zoom={true}
          className="mySwiper w-80/100 h-fit mt-5 mb-5"
        >
          {imagesMobile.map((src, idx) => (
            <SwiperSlide key={idx} className={"h-fit w-full!"}>
              <div className="relative w-full h-fit">
                {!loadedImages[idx] && (
                  <div className="absolute inset-0 animate-pulse bg-gray-300 rounded-xl z-10" />
                )}
                <Image
                  src={src}
                  alt={`Imagen ${idx + 1}`}
                  width={10}
                  height={10}
                  className={`object-cover transition-opacity duration-700 ${
                    loadedImages[idx]
                      ? "opacity-100 blur-0"
                      : "opacity-0 blur-md"
                  } h-auto w-full`}
                  onLoadingComplete={() => handleLoad(idx)}
                  unoptimized
                  priority={idx < 10}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Image
          src={'/2Carrusel/2do-carrusel-foto-7.jpg'}
          alt={'Imagen 7'}
          width={10}
          height={10}
          className={'h-auto w-80/100'}
          unoptimized
        />
      </div>
    </div>
  );
}
