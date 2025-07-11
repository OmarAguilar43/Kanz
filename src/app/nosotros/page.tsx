"use client";

import { Navbar } from "@/src/components/Navbar";
import { useRouter } from 'next/navigation'


export default function productPage() {

  const router = useRouter();

  const handleClick = () => {
    router.push("/comprar");
  }

  return (
    <div className="bg-black flex flex-col w-screen h-screen">
      <Navbar 
        texto = "COMPRAR"
        fn = {handleClick}
      />

      <div className="flex top-20 flex-col w-full h-fit pt-20 px-15 gap-y-5">
        <h1> <strong>NOSOTROS</strong> </h1>
        <p className="text-justify">
          Somos una marca de ropa que se especializa en la creación de prendas
          únicas y personalizadas. Nuestro objetivo es ofrecer a nuestros
          clientes la oportunidad de expresar su estilo personal a través de la
          moda. Nos enorgullece utilizar materiales de alta calidad y técnicas
          de diseño innovadoras para crear ropa que no solo sea hermosa, sino
          también cómoda y duradera. Creemos que cada prenda cuenta una historia
          y estamos comprometidos a ayudar a nuestros clientes a contar la suya.
        </p>
      </div>
    </div>
  );
}
