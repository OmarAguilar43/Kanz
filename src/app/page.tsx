

'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation'



export default function SplashPage() {
  const router = useRouter();

  const handleClickProduct = () => {
    router.push('/comprar')
  }

  const handleClickAboutUs = () => {
    router.push('/nosotros')
  }

  return (
    <div className="flex flex-row justify-start items-end h-screen w-screen sm:bg-[url(/banner-escritorio.jpg)]  bg-[url(/banner-movil.jpg)] bg-no-repeat bg-cover bg-center">
      {/*añadir  arriba*/}
      <div className="flex flex-col justify-center items-center h-full w-full sm:w-60/100 bg-red-500lolo">
        <Image
            src="/logo-plata.png" // o logo.png si es PNG
            alt="Dalloway Logo"
            height={550}
            width={550}
            className="max-[425px]:h-40/100 h-50/100 lg:h-70/100 w-auto bg-green-500lolo"
          />
        <div className="flex flex-row gap-x-5 justify-center items-center w-55/100 max-xl:w-70/100 max-sm:w-90/100 mt-5 bg-green-500lolo">
          <button style={{ fontFamily: "Panchang-Medium" }} onClick={handleClickProduct} className="w-50/100 p-2 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs hover:bg-slate-900 border-1 border-white cursor-pointer transition delay-50 duration-300 ease-in-out bg-green-500lolo">
            COMPRAR
          </button>

          <button style={{ fontFamily: "Panchang-Medium" }} onClick={handleClickAboutUs} className="w-50/100 p-2 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs hover:bg-slate-900 border-1 border-white cursor-pointer transition delay-50 duration-300 ease-in-out bg-green-500lolo">
            NOSOTROS
          </button>
        </div>
      </div>
    </div>
  )
}

