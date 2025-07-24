"use client";

//import { ProductSlide } from "@/src/components/galery/productSlideShow"
import { ButtonSlideTallas } from "../../components/buttons/buttonSlideTallas";
import { ButtonSlideDetalles } from "@/src/components/buttons/buttonSlideDetalles";
import { Navbar } from "@/src/components/Navbar";
import { useRouter } from "next/navigation";
import EmblaCarousel from "@/src/components/newGalery/EmblaCarousel";
import SecondGalery from "@/src/components/galeriaSecundaria/secondGalery";
import { Footer } from "@/src/components/footer";
import OrdenarButons from "@/src/components/buttons/orderButton";

export default function ProductPage() {
  const slides = [
    "/1er carrusel foto 1.jpg",
    "/1er carrusel foto 2.jpg",
    "/1er carrusel foto 3.jpg",
    "/1er carrusel foto 4.jpg",
  ];

  const router = useRouter();

  const handleClick = () => {
    router.push("/nosotros");
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-black text-white">
      <Navbar texto="NOSOTROS" fn={handleClick} />

      <div className="w-full h-fit">
        <div className="mt-2 mb-20 grid grid-cols-1 bg-black md:grid-cols-2 gap-2">
          {/* {Slideshow} */}
          <div className="col-span-1 w-full max-w-[800px] md:col-span-1 ">
            <EmblaCarousel slides={slides} />
          </div>

          {/* {detalles} */}

          {/* <div className="col-span-1 px-10 mt-20 items-center sm:mt-5 md:mt-5"> */}

          <div className="col-span-1 px-10 flex items-center justify-center max-w-[500px] mx-auto">
            <div className="flex flex-col justify-center">
              {/* TODO: tu contenido aquí */}

              <h1
                style={{ fontFamily: "Panchang-Bold" }}
                className="font-bold text-4xl antialiased text-white"
              >
                <span className="block">KANZ KROPPED</span>
                <span className="block">T-SHIRT V2</span>
              </h1>

              <p
                style={{ fontFamily: "Panchang-Regular" }}
                className="text-sm mb-5 mt-10"
              >
                $ 799 MXN
              </p>

              {/* {boton} */}

             <OrdenarButons/>

              {/* {second buttons} */}

              <div className=" ">

                <ButtonSlideTallas />

                <ButtonSlideDetalles />
              </div>

              {/* {descripcion} */}
              <h3 className="font-bold text-sm mt-5 mb-2">
                DESCRIPCIÓN Y AJUSTE
              </h3>
              <p className="font-light text-wrap text-justify">
                Camiseta cropped de corte oversize en punto grueso de algodón y
                poliéster. Modelo de manga corta-oversize con hombros holgados y
                cuello redondo para un ajuste cómodo. Color negro con gráficos
                estampados en frente y espalda. Tanto tallaje como numeración se
                encuentran bordados en la esquina inferior izquierda. La
                numeración de la camiseta depende de la talla por su edición
                exclusiva.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-y-5">
        <p className="w-70/100 font-bold text-wrap md:text-center text-justify">
          Omar mide 170 cm y usa una talla L/G y Victoria mide 165 cm y usa una
          talla S/CH.
        </p>
        <p className="w-70/100 font-bold text-wrap md:text-center text-justify">
          El primer modelo de Kanz es orgullosamente diseñado y confeccionado en
          México.
        </p>
      </div>
      <div className="flex justify-center items-center w-full h-full m-10">
        <SecondGalery />
      </div>
      <Footer />
    </div>
  );
}
