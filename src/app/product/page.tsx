'use client'

import { ProductSlide } from "@/src/components/galery/productSlideShow"





export default  function productPage() {


  return (
    <div className="mt-15 mb-20 grid grid-cols-1  md:grid-cols-3 gap-3">

      {/* {Slideshow} */}
      <div className="col-span-1 md:col-span-2 ">
        <ProductSlide/>
      </div>

      {/* {detalles} */}

      <div className="col-span-1 px-5 mt-40 ">
        <h1 style={{ fontFamily: 'Panchang-Bold' }} 
             className="font-bold text-4xl antialiased">KANZ  KROPPED T-SHIRT V2</h1>
        <p style={{ fontFamily: 'Panchang-Medium' }}className="text-sm mb-5 mt-5">$ 799 MXN</p>
      

      
        {/* {second buttons} */}

        <div className="grid grid-cols-2 gap-4 ">

          <button style={{ fontFamily: 'Panchang-Bold' }} 
                  className="border-2 py-2 text-xs hover:bg-slate-900">DETALLES</button>

          <button style={{ fontFamily: 'Panchang-Bold' }}
                  className="border-2 text-xs hover:bg-slate-900">TALLAS</button>

        </div>

        {/* {boton} */}

        <button style={{ fontFamily: 'Panchang-Medium' }} className="my-5 bg-black
        hover:bg-slate-900 text-white py-4 w-full rounded transition-all border-2">
        Ordenar
        </button>


       {/* {descripcion} */}
        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-light">mucho texto </p>

      </div>
    </div>

  )
}
