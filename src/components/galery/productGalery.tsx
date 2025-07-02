'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'

import { Thumbs, Navigation, FreeMode, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/thumbs'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'

export function ProductGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  const images = ['shirt.png', 'shirt_back.png', 'shirtNew.png'] // ← Ajusta los nombres si están diferentes
  const title = 'KANZ KROPPED T-SHIRT V2'

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      {/* Carrusel principal */}
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation
        autoplay={{ delay: 2500 }}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2 w-full md:w-2/3"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              width={1024}
              height={800}
              src={`/products/${image}`}
              alt={title}
              className="rounded-lg object-contain w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Miniaturas */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={images.length}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-max"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              width={100}
              height={100}
              src={`/products/${image}`}
              alt={title}
              className="rounded-md object-cover border border-white/20 hover:border-white transition"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
