"use client";

import { Navbar } from "@/src/components/Navbar";
import { useRouter } from "next/navigation";

export default function ProductPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/comprar");
  };

  return (
    <div className="bg-black flex flex-col w-screen h-fit 2xl:h-screen max-2xl:pb-20 items-center">
      <Navbar texto="COMPRAR" fn={handleClick} />

      <div className="flex top-20 flex-col w-90/100 max-md:w-80/100 h-fit pt-20 gap-y-5">
        <h1 style={{ fontFamily: "Panchang-Bold" }} className="bg-pink-500lolo text-xl">
          NOSOTROS
        </h1>
        <p className="bg-pink-500lolo text-justify text-wrap tracking-widest text-base/5 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs">
          Kanz surge del instante previo al salto, el punto de inflexión donde
          retroceder ya no es opción y avanzar te provoca tanto sentido como
          incertidumbre, es en ese estado donde la incomodidad se convierte en
          el impulso, estado que domina la marca.
        </p>
        <p className="bg-pink-500lolo text-justify text-wrap tracking-widest text-base/5 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs">
          Kanz representa una forma de vestir con conciencia. Las prendas no son
          solo cuerpos textiles; son peso, estructura, arte. Cada una está
          pensada como una segunda piel, una capa sutil pero con impacto que
          acompaña a la duda, al impulso.
        </p>
        <p className="bg-pink-500lolo text-justify text-wrap tracking-widest text-base/5 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs">
          El cocodrilo, símbolo de la marca, es más que solo un icono,
          representa la resistencia que se construye con el tiempo. Poseer una
          piel gruesa al igual que este reptil es sinónimo de aprender a
          adaptarse y seguir adelante.
        </p>
        <p className="bg-pink-500lolo text-justify text-wrap tracking-widest text-base/5 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs">
          Con el tiempo, el concepto se ha convertido en un espacio de expresión
          y colaboración creativa, inspirado por nuestros propios valores,
          concepto del que todos podemos formar parte, porque Kanz somos todos
          nosotros.
        </p>
        <p className="bg-pink-500lolo text-justify text-wrap tracking-widest text-base/5 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs">
          Vestirse con Kanz es vestirse con intención.
        </p>
        <p className="bg-pink-500lolo text-justify text-wrap tracking-widest text-base/5 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs">
          Es entender que no hay progreso sin un salto.
        </p>
        <p className="bg-pink-500lolo text-justify text-wrap tracking-widest text-base/5 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs">
          Es prepararse para lo que viene, porque podemos asustarnos, pero no
          tener miedo.
        </p>
      </div>
    </div>
  );
}
