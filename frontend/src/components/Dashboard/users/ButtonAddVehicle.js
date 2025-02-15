import FormCar from '@/components/Form/FormCar';
import React,{ useState } from 'react'

import { PiPlusSquareLight } from 'react-icons/pi';
import { RiCloseLargeFill } from "react-icons/ri";

export default function ButtonAddVehicle() {

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
        text-[32px] p-0 m-0 rounded-md 
        text-sky-600 hover:text-slate-200 hover:bg-sky-600 
        ease-in-out duration-300 focus:outline-none">
          <PiPlusSquareLight/>
      </button>

      {
      openModal &&
          <div className='fixed top-0 left-0 w-full h-full bg-gray-700 flex justify-center items-center bg-opacity-65'>
            
              <div className='max-w-[600px] bg-white shadow-lg py-2 rounded-md'>
                <div className="border-b border-gray-300 py-3 px-5 mb-4 flex justify-between items-center">
                  <h2 className='text-lg font-medium text-gray-900 '>Ajouter un Véhicule</h2>
                  <button
                      type='button'
                      className='h-8 w-8 flex items-center justify-center p-1 text-sm rounded-md border border-sky-600 bg-slate-50 text-sky-600 hover:bg-sky-600 hover:text-slate-50'
                      onClick={handleModal}
                  >
                      <RiCloseLargeFill className="text-lg"/>
                  </button>
                </div>
                
                
                <div className='px-4 pb-4'>
                
                  <FormCar sendStateModal={handleStateModal} stateModal={openModal}/>

                </div>
                
              </div>

           
              
          </div>
      
  }
    </>
  )
}
