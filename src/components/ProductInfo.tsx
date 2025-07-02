export function ProductInfo() {
  return (
    <section
      id="info"
      className="bg-black text-white px-20 md:px-20 py-20 flex flex-col gap-6 "
    >
      <h2 className="text-3xl md:text-4xl font-bold">CAMISETA OVERSIZE</h2>
      <p className="text-lg max-w-2xl">
        Corte relajado, tela gruesa y diseño urbano. Hecha para destacar sin
        esfuerzo. Disponible en tallas S a XL.
      </p>
      <div className="text-sm text-gray-600">
        <p><strong>Colores:</strong> Negro desgastado</p>
        <p><strong>Material:</strong> 100% algodón</p>
        <p><strong>Tallas:</strong> S, M, L, XL</p>
      </div>
    </section>
  )
}
