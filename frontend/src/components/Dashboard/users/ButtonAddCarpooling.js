import React,{ useState } from 'react'
import FormCarpooling from '@/components/Form/FormCarpooling';

import { PiPlusSquareLight } from 'react-icons/pi';
import { RiCloseLargeFill } from "react-icons/ri";

export default function ButtonAddCarpooling() {

  const [openModal, setModal] = useState(false);
 
  const handleModal = () => {
    setModal(!openModal)
  }

  function handleStateModal (modal){

    setModal(modal)
  }

  return (
    <>
      <button
        type="button"
        onClick={handleModal}
        className="
          flex items-center justify-center
          box-border w-48 h-48 bg-sky-500 border-2 border-sky-500 rounded-full shadow-xl text-slate-50 text-2xl
          hover:bg-sky-800 hover:text-slate-100 hover:border-sky-800 hover:border
          ease-in-out duration-300
          
          hover:transform hover:translate-y-1 hover:translate-x-1 hover:text-3xl hover:w-52 hover:h-52">
          <span className="text-center">Saisir un covoiturage</span>
      </button>

      {
      openModal &&
      <div className='fixed top-0 left-0 w-full h-full bg-gray-700 flex justify-center items-center bg-opacity-65'>
        <div className='max-w-[1200px] bg-white shadow-lg py-2 rounded-md'>
          <div className="border-b border-gray-300 py-3 px-5 mb-4 flex justify-between items-center">
            <h2 className='text-lg font-medium text-gray-900 '>Saisir un covoiturage</h2>
            <button
                type='button'
                className='h-8 w-8 flex items-center justify-center p-1 text-sm rounded-md border border-sky-600 bg-slate-50 text-sky-600 hover:bg-sky-600 hover:text-slate-50'
                onClick={handleModal}
            >
                <RiCloseLargeFill className="text-lg"/>
            </button>
          </div>
          <div className='px-4 pb-4'>
            <FormCarpooling sendStateModal={handleStateModal} stateModal={openModal} />
          </div>
        </div>     
      </div> 
      }
    </>
  )
}
