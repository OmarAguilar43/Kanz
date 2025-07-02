'use client'

import Link from 'next/link'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent text-white">
      <nav className="max-w-screen-xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">KANZ</div>
        <ul className="flex gap-6 text-sm md:text-base">
          <li>
            <Link href="#hero" className="hover:underline">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="#info" className="hover:underline">
              Producto
            </Link>
          </li>
          <li>
            <Link href="#vision" className="hover:underline">
              Visión
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
