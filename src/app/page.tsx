

'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'



export default function SplashPage() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/shop')
  }

  return (
    <div
      onClick={handleClick} className="flex items-center justify-center h-screen w-full bg-black cursor-pointer"
    >
      <Image
        src="/logo.PNG" // o logo.png si es PNG
        alt="Dalloway Logo"
        width={400}
        height={400}
        className="hover:scale-110 transition-transform"
      />
    </div>
  )
}

