'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function Gallery() {
  const images = [
    '/shirt.png',
    '/shirt_back.png',
    '/body.png',
  ]

  return (
    <section className="bg-black md:px-25" id="gallery">
      <h2 className="text-3xl w-8/12 md:text-4xl font-bold mb-8">Galery</h2>
      
      
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full max-w-3xl mx-auto"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src={src}
                alt={`Vista ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
