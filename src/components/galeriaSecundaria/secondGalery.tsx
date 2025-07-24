'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/zoom"
import { Pagination, Zoom } from "swiper/modules"
import Image from "next/image"
import { useState } from "react"

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
  ]

  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({})

  const handleLoad = (idx: number) => {
    setLoadedImages((prev) => ({ ...prev, [idx]: true }))
  }

  return (
    <Swiper
      slidesPerView="auto"
      centeredSlides={true}
      spaceBetween={15}
      pagination={{ clickable: true }}
      modules={[Zoom, Pagination]}
      zoom={true}
      className="mySwiper w-full xl:h-83/100 md:h-75/100 sm:h-50/100 h-60/100"
    >
      {images.map((src, idx) => (
        <SwiperSlide
          key={idx}
          className={
            idx === 0 || idx === 6
              ? "h-full w-235/100! min-[375px]:w-200/100! min-[425px]:w-180/100! md:w-125/100! lg:w-94/100! xl:w-74/100! 2xl:w-62/100!"
              : "h-full w-105/100!  min-[375px]:w-90/100! min-[425px]:w-77/100! md:w-55/100! lg:w-42/100! xl:w-33/100! 2xl:w-28/100!"
          }
        >
          <div className="relative w-full h-full">
            {!loadedImages[idx] && (
              <div className="absolute inset-0 animate-pulse bg-gray-300 rounded-xl z-10" />
            )}
            <Image
              src={src}
              alt={`Imagen ${idx + 1}`}
              fill
              className={`object-cover transition-opacity duration-700 ${
    loadedImages[idx] ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
  }`}
              onLoadingComplete={() => handleLoad(idx)}
              unoptimized
              priority={idx < 10}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
