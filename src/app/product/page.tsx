'use client'





export default  function productPage() {


  return (
    <div className="mt-15 mb-20 grid grid-cols-1  md:grid-cols-3 gap-3">

      {/* {Slideshow} */}
      <div className="col-span-1 md:col-span-2 bg-red-500">
        <h1>Hola mundo</h1>
      </div>

      {/* {detalles} */}

      <div className="col-span-1 px-5 bg-blue-500">
        <h1 className="font-bold text-2xl antialiased">Ola 2</h1>
        <p className="">$75</p>
      </div>

    </div>

  )
}
