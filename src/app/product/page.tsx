'use client'

import { ProductSlide } from "@/src/components/galery/productSlideShow"
import { ButtonSlideTallas } from '../../components/buttons/buttonSlideTallas';
import { ButtonSlideDetalles } from "@/src/components/buttons/buttonSlideDetalles";
import { Navbar } from "@/src/components/Navbar";
import { useRouter } from 'next/navigation'





export default  function productPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/nosotros");
  }

  return (
    <div className="w-full h-full bg-black text-white">
      <Navbar 
        texto = "NOSOTROS"
        fn = {handleClick}
      />

      
    <div className="mt-15 mb-20 grid grid-cols-1 bg-black  md:grid-cols-3 gap-2">
      {/* {Slideshow} */}
      <div className="col-span-1 md:col-span-2 ">
        <ProductSlide/>
      </div>

      {/* {detalles} */}

      

      <div className="col-span-1 px-10 mt-20 items-center sm:mt-5 md:mt-5">

        <h1
          style={{ fontFamily: 'Panchang-Bold' }}
          className="font-bold text-4xl antialiased text-white"
        >
          <span className="block">KANZ KROPPED</span>
          <span className="block">T-SHIRT V2</span>
        </h1>

        <p style={{ fontFamily: 'Panchang-Regular' }}className="text-sm mb-5 mt-10">$ 799 MXN</p>
      

         {/* {boton} */}

        <button style={{ fontFamily: 'Panchang-Medium' }} className="my-5 
        hover:bg-slate-900 text-white py-4 w-full rounded border-3 border-white cursor-pointer transition delay-50 duration-300 ease-in-out">
        Ordenar
        </button>
      
        {/* {second buttons} */}

        <div className="grid grid-cols-2 gap-4 ">

          {/* <button style={{ fontFamily: 'Panchang-Bold' }} 
                  className="border-2 py-2 text-xs hover:bg-slate-900">DETALLES</button>

          <button style={{ fontFamily: 'Panchang-Bold' }}
                  className="border-2 text-xs hover:bg-slate-900">TALLAS</button> */}

          <ButtonSlideTallas />

          <ButtonSlideDetalles/>

        </div>

          
       

       

       {/* {descripcion} */}
        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-light">mucho texto </p>

      </div>
    </div>
    </div>

  )
}
