import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function CreateGroupModal (): JSX.Element {
  const [open, setOpen] = useState<boolean>(true)

  useEffect(() => {
    console.log('Fruit', open)
  }, [open])

  return (
      <>
        <button className={'rounded bg-black text-white py-1 px-2'} onClick={() => setOpen(true)}><FontAwesomeIcon icon={faPlus} /></button>

          <Transition show={open} as={Fragment}>
              <Dialog onClose={() => setOpen(false)}>
                  {/*
          Use one Transition.Child to apply one transition to the backdrop...
        */}
                  <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                  >
                      <div className="fixed inset-0 bg-black/30" />
                  </Transition.Child>

                  {/*
          ...and another Transition.Child to apply a separate transition
          to the contents.
        */}
                  <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                  >
                      <Dialog.Panel>
                          <Dialog.Title>Deactivate account</Dialog.Title>

                          {/* ... */}
                      </Dialog.Panel>
                  </Transition.Child>
              </Dialog>
          </Transition>
      </>
  )
}
