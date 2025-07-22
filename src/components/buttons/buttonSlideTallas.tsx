import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { AnimatePresence, easeOut, motion } from 'framer-motion'
import { Fragment } from 'react'

export function ButtonSlideTallas () {


  return (
   <Disclosure as="div" className="w-full max-w-md">
      {({ open }) => (
        <>
          <DisclosureButton style={{ fontFamily: 'Panchang-Bold' }} 
          className="w-full border-b pb-2 text-left hover:text-slate-600 cursor-pointer transition delay-50 duration-300 ease-in-out">TALLAS</DisclosureButton>
          <div className="overflow-hidden py-2">
            <AnimatePresence>
              {open && (
                <DisclosurePanel static as={Fragment}>
                  <motion.div
                    initial={{ opacity: 0, y: -24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.2, ease: easeOut }}
                    className="origin-top"
                  >
                    <ul className="list-none pl-5">
                      <li>GRANDE</li>
                      <li>MEDIANA</li>
                      <li>CHICA</li>
                    </ul>
                  </motion.div>
                </DisclosurePanel>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </Disclosure>
  )
}