'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/thumbs'

type Props = {
  thumbsSwiper: SwiperType | null
}

export function ProductImageSlider({ thumbsSwiper }: Props) {
  const images = [
    '/shirt.PNG',
    '/shirt_back.PNG',
    '/image_2025-06-28_142045307.png',
  ]

  const validThumbs = thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null

  return (
    <Swiper
      spaceBetween={10}
      thumbs={{ swiper: validThumbs }}
      modules={[Thumbs]}
      className="w-full aspect-square"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full aspect-square">
            <Image
              src={src}
              alt={`Imagen ${index + 1}`}
              fill
              className="object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
