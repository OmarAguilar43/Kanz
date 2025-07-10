

'use client'

import { useRouter } from 'next/navigation'



export default function SplashPage() {
  const router = useRouter();

  const handleClickProduct = () => {
    router.push('/product')
  }

  const handleClickAboutUs = () => {
    router.push('/nosotros')
  }

  return (
    <div className="flex flex-row justify-start items-end h-screen w-screen sm:bg-[url(/banner-escritorio.jpg)]  bg-[url(/banner-movil.jpg)] bg-no-repeat bg-cover bg-center">
      {/*añadir  arriba*/}
      <div className="flex flex-col justify-center items-center h-full w-full sm:w-60/100 bg-red-500lolo">
        <img
            src="/logo-plata.png" // o logo.png si es PNG
            alt="Dalloway Logo"
            className="h-50/100 sm:h-70/100 bg-green-500lolo"
          />
        <div className="flex flex-row gap-x-5 justify-center items-center w-55/100 mt-5 bg-blacklolo">
          <button  onClick={handleClickProduct} className="border-2 w-50/100  p-2 lg:text-base text-xs hover:bg-slate-900 bg-green-500lolo">
            COMPRAR
          </button>
          <button onClick={handleClickAboutUs} className="border-2 w-50/100  p-2 lg:text-base text-xs hover:bg-slate-900 bg-green-500lolo">
            NOSOTROS
          </button>
        </div>
      </div>
    </div>
  )
}

