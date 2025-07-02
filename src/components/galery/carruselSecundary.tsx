'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/thumbs'

type Props = {
  setThumbsSwiper: (swiper: SwiperType) => void
}

export function ProductThumbnailSlider({ setThumbsSwiper }: Props) {
  const images = [
    '/shirt.PNG',
    '/shirt_back.PNG',
    '/image_2025-06-28_142045307.png',
  ]

  return (
    <Swiper
      onSwiper={(swiper) => {
        setThumbsSwiper(swiper)
      }}
      spaceBetween={10}
      slidesPerView={3}
      watchSlidesProgress
      modules={[Thumbs]}
      className="w-full"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index} className="cursor-pointer">
          <div className="relative h-[80px] w-[80px] border border-white/20 hover:border-white transition">
            <Image
              src={src}
              alt={`Miniatura ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
