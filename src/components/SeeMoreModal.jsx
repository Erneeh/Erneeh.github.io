'use client'


import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

// SeeMoralModal function uses props given from portfolio parent component
export default function SeeMoreModal({ open, onClose, completedWorks }) {
  

  return (
    <>

    {/* uses those props in the {} from the above function,    named them equally for any misunderstanding */}
    <Dialog open={open} onClose={onClose} onClick={(!open)} className="relative z-10"  >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-xl bg-gradient-to-r from-slate-700 to-slate-800 border border-gray-600 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 md:w-3/4 md:max-w-3xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                
                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full p-2">
                  <DialogTitle as="h2" className="text-center font-semibold text-white text-2xl">
                    Projects
                  </DialogTitle>
                  <div className="mt-2 w-full p-2">
                    {completedWorks.map((works, index) => {
                    return (
                      <a href={works.url} className={`border my-2 h-fit w-full rounded-xl flex text-white text-center items-center justify-center border-gray-600 hover:border-white duration-500 transition`}>
                      <div className="w-1/6 h-full  justify-center items-center flex">{index + 1}</div>
                      <div className="w-1/6 h-full  justify-center items-center flex">{works.description}</div>
                      <div className="w-1/6 h-full  justify-center items-center flex">{works.website}</div>
                      <iframe
                      className='h-full  justify-center items-center flex rounded-r-xl w-2/3' 
                      src={works.url}
                      scrolling="no"
                      >
                      </iframe>
                     </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-center">
            
              <button
                type="button"
                data-autofocus

                //onClick calls the onClose function (to close the SeeMoreModal component)
                onClick={() => onClose()}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
    </>
  )



}

  
