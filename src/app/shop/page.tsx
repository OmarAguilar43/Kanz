import { Gallery } from "@/src/components/Galery";
import { Hero } from "@/src/components/hero";
import { ProductInfo } from "@/src/components/ProductInfo";



export default function Home() {
  return (
    <main>
      <Hero/>
      <div className="bg-black flex flex-col md:flex-row px-6 md:px-20 py-20 gap-10">
        <ProductInfo/>
        <Gallery/>
      </div>
      
    </main>
  );
}