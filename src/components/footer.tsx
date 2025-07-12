
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='flex w-full justify-center text-xs mb-10 mt-40'>
        <Link href='/'>
            <span className={'antialiased font-bold'}>KANZ</span>
            <span>| shop</span>
            <span>{new Date().getFullYear()}</span>
        </Link>

      <Link
      href='/'
      className='mx-3'>
        Privacidad y legal
      </Link>

      <Link
      href='/'
      className='mx-3'>
        Ubicaciones
      </Link>
    </div>
  )
}
