import React from 'react'
import Image from 'next/image'

type ThumbProps = {
  index: number
  image: string
  selected: boolean
  onClick: () => void
}

export const Thumb: React.FC<ThumbProps> = ({ image, selected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-20 h-20 border-2 ${selected ? 'border-black' : 'border-gray-300'} overflow-hidden`}
    >
      <Image
        src={image}
        alt="Thumbnail"
        width={100}
        height={100}
        className="w-full h-full object-cover"
      />
    </button>
  )
}
