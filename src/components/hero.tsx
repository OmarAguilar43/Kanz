'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Imagen de fondo */}
      <Image
        src="/shirt.png" // Asegúrate que esté en /public
        alt="Modelo con playera oversize"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Capa oscura encima de la imagen */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenido de texto animado */}
      <div className="relative z-20 h-full flex items-center justify-end pr-16">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-right text-white max-w-xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            LA CALLE SE VISTE DE OSCURIDAD
          </h1>
          <p className="mt-4 text-lg">
            Oversize. Oscura. Inevitable. La camiseta que rompe el molde.
          </p>
          <button
                onClick={() =>
                    document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })
                        }
                    className="mt-6 bg-white text-black font-semibold py-2 px-6 rounded hover:bg-gray-200 transition"
>
  Conoce la camiseta
</button>
        </motion.div>
      </div>
    </section>
  )
}
