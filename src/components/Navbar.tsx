'use client'

type navBarProps = {
  texto: string;
  fn: () => void;
}

export function Navbar({ texto, fn }: navBarProps) {
  return (
    <header className="sticky top-0 left-0 w-full h-20 py-3 box-content z-1 bg-transparent text-white">
      <nav className="flex w-full h-full justify-center items-center bg-blue-500lolo">
        <div className="w-15/100 h-full hidden lg:block bg-orange-500lolo"></div>
        <div className="flex justify-start lg:justify-center w-70/100 max-md:w-35/100 h-full py-2 max-lg:pl-10 bg-green-500lolo">
          <img src="/logo-blanco.png" alt="LogoKanzBlanco" 
            className="h-full"
          />
        </div>
        <ul className="flex justify-center max-lg:justify-end items-center text-sm md:text-base w-30/100 max-md:w-65/100 max-lg:pr-10 lg:w-15/100 h-full bg-pink-500lolo">
          <li>
            <button onClick={fn} className="p-5 bg-red-500lolo hover:text-slate-600 cursor-pointer transition delay-50 duration-300 ease-in-out">
              {texto}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
