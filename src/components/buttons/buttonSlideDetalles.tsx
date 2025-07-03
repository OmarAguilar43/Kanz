import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { AnimatePresence, easeOut, motion } from 'framer-motion'
import { Fragment } from 'react'

export function ButtonSlideDetalles () {

    
  return (
   <Disclosure as="div" className="w-full max-w-md">
      {({ open }) => (
        <>
          <DisclosureButton style={{ fontFamily: 'Panchang-Bold' }} 
           className="w-full border-b pb-2 text-left hover:text-slate-600">DETALLES</DisclosureButton>
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
                    Yes! You can purchase a license that you can share with your entire team.
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