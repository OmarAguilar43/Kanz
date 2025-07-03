'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Swiper as SwiperType } from 'swiper'
import { useState } from 'react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import Image from 'next/image'

export const ProductSlide = () => {
  const images = ['/espalda.jpg', '/frente.jpg']
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <>
      {/* Carrusel principal */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full md:w-[500px] h-[400px] md:h-[550px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[400px] md:h-[550px]">
              <Image
                src={src}
                alt={`Imagen ${index + 1}`}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Carrusel de miniaturas */}
      <div className="mt-2 w-full md:w-[600px] px-4">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={7}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-[110px]"
        >
          {images.map((src, index) => (
            <SwiperSlide key={`thumb-${index}`} className="cursor-pointer">
              <div className="relative w-[100px] h-[100px] border border-white/20 hover:border-white transition">
                <Image
                  src={src}
                  alt={`Miniatura ${index + 1}`}
                  fill
                  className="object-contain rounded-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
