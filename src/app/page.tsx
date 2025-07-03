

'use client'

import { useRouter } from 'next/navigation'



export default function SplashPage() {
  const router = useRouter()

  const handleClickShop = () => {
    router.push('/shop')
  }

  const handleClickAboutUs = () => {
    router.push('/nosotros')
  }

  return (
    <div className="flex flex-row justify-start items-end h-screen w-full sm:bg-[url(/shirt_back.png)] bg-[url(/body.png)] bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col justify-center items-center sm:items-end h-full w-full 2xl:w-40/100 xl:w-50/100 lg:w-60/100 sm:w-65/100 bg-red-500lolo">
        <img
          src="/shirtNew.PNG" // o logo.png si es PNG
          alt="Dalloway Logo"
          className="w-85/100 bg-blue-500lolo"
        />
        <div className="flex flex-row gap-x-15 justify-center items-center w-85/100 mt-5 bg-blacklolo">
          <button className="bg-green-500lolo">
            Comprar
          </button>
          <button className="bg-green-500lolo">
            Nosotros
          </button>
        </div>
      </div>
    </div>
  )
}

