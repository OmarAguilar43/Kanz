'use client'

import { useState } from "react"
import { Dialog, Transition } from "@headlessui/react"

import Link from "next/link"

export default function OrdenarButons() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        style={{ fontFamily: "Panchang-Medium" }}
        onClick={() => setIsOpen(true)}
        className="my-5 hover:bg-slate-900 text-white py-4 w-full rounded border-3 border-white cursor-pointer transition delay-50 duration-300 ease-in-out"
      >
        Ordenar
      </button>

      <Transition show={isOpen}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          {/* Fondo oscuro */}
          <Transition
            show={isOpen}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
          </Transition>

          {/* Panel */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition
              show={isOpen}
              enter="transition-transform duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition-transform duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                <h2 
                style={{ fontFamily: "Panchang-Bold" }}
                className="text-xl font-semibold text-gray-900">
                  ¿Deseas ordenar?
                </h2>
                <p 
                    style={{ fontFamily: "Panchang-Regular" }}
                    className="mt-2 text-gray-600 text-sm">
                  Serás redireccionado a un chat para proseguir con tu compra
                </p>

                <div className="mt-4 flex gap-3 justify-end">
                    <Link href="https://wa.me/5217753538385">
                    <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
                            
                         Comprar
                    </button>
                    </Link>

                    <button
                    onClick={() => setIsOpen(false)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                    Cerrar
                    </button>
                    
                </div>

                
              </div>
            </Transition>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
