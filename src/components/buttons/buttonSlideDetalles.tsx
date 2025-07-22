import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import { Fragment } from "react";

export function ButtonSlideDetalles() {
  return (
    <Disclosure as="div" className="w-full max-w-md">
      {({ open }) => (
        <>
          <DisclosureButton
            style={{ fontFamily: "Panchang-Bold" }}
            className="w-full border-b pb-2 text-left hover:text-slate-600 cursor-pointer transition delay-50 duration-300 ease-in-out"
          >
            DETALLES
          </DisclosureButton>
          <div className="overflow-hidden py-2">
            <AnimatePresence>
              {open && (
                <DisclosurePanel static as={Fragment}>
                  <motion.div
                    initial={{ opacity: 0, y: -24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.2, ease: easeOut }}
                    className="origin-top text-wrap"
                  >
                    <ul className="list-disc pl-5">
                      <li>
                        <h4 className="mb-3">CUIDADOS</h4>
                        <p className="mb-3 text-wrap">
                          Cuidar de tu Kanz es esencial para que te pueda
                          acompañar el mayor tiempo posible. Reduciendo ciclos
                          de lavado y secado alargamos la vida útil de la prenda
                          y reducimos el mal impacto al medioambiente.
                        </p>
                        <ul className="list-[circle] pl-5 mb-10">
                          <li className="text-wrap">Lavar en frío a máquina. Centrifugado regular</li>
                          <li className="text-wrap">No usar lejía / blanqueador</li>
                          <li className="text-wrap">Planchar de frente máximo a 90°C</li>
                          <li className="text-wrap">No usar secadora</li>
                        </ul>
                      </li>
                      <li>
                        <h4 className="mb-3">MATERIALES</h4>
                        <ul className="list-none pl-5">
                          <li className="text-wrap">80% algodón</li>
                          <li className="text-wrap">20% poliéster</li>
                        </ul>
                      </li>
                    </ul>
                  </motion.div>
                </DisclosurePanel>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </Disclosure>
  );
}
