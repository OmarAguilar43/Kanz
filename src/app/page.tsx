

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
    <div className="flex flex-row justify-start items-end h-screen w-screen bg-black bg-no-repeat bg-cover bg-center">
      {/*añadir sm:bg-[url(/shirt_back.png)] bg-[url(/body.png)] arriba*/}
      <div className="flex flex-col justify-center items-center sm:items-end h-full w-full 2xl:w-40/100 xl:w-50/100 lg:w-60/100 sm:w-65/100 bg-red-500lolo">
        <img
            src="/logo-plata.png" // o logo.png si es PNG
            alt="Dalloway Logo"
            className="w-85/100 bg-green-500lolo"
          />
        <div className="flex flex-row gap-x-5 justify-center items-center w-85/100 mt-5 bg-blacklolo">
          <button  onClick={handleClickProduct} className="border-2 w-50/100  p-2 text-xs hover:bg-slate-900 bg-green-500lolo">
            COMPRAR
          </button>
          <button onClick={handleClickAboutUs} className="border-2 w-50/100  p-2 text-xs hover:bg-slate-900 bg-green-500lolo">
            NOSOTROS
          </button>
        </div>
      </div>
    </div>
  )
}

