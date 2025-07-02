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

      <div className="col-span-1 px-5 ">
        <h1 className="font-bold text-2xl antialiased">Ola 2</h1>
        <p className="text-lg mb-5">$75</p>
      

      {/* {boton} */}

      <button className="my-5 bg-blue-600 
        hover:bg-blue-800 text-white py-2 px-4 rounded transition-all">
        Ordenar
      </button>

      {/* {descripcion} */}
      <h3 className="font-bold text-sm">Description</h3>
      <p className="font-light">mucho texto </p>

    </div>
    </div>

  )
}
