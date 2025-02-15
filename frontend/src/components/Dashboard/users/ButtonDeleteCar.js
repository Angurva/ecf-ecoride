import React,{ useState } from 'react'
import FormCarpooling from '@/components/Form/FormCarpooling';
import { RiCloseLargeFill } from "react-icons/ri";
import { PiTrashLight } from "react-icons/pi";
import DeleteCar from '../cars/DeleteCar';


export default function ButtonDeleteCar({car}) {

     const [openModal, setModal] = useState(false);
     
      const handleModal = () => {
        setModal(!openModal)
      }
    
      function handleStateModal(modal){
    
        setModal(modal)
      }
  return (
    <>
        <div className="ml-auto group relative flex gap-2 p-1 z-auto">
            <button
                type="button"
                onClick={handleModal}
                className="text-2xl font-bold">
                <PiTrashLight/>
            </button>
            <div className="group-hover:opacity-100 transition-opacity bg-zinc-500 py-1 px-2 font-semibold text-[10px] text-slate-200 rounded-1 absolute left-1/2 rounded-md text-center
                -translate-x-1/2 translate-y-full opacity-0 m-3 mx-auto" role="tooltip">
                supprimer
            </div>
        </div>
          {
          openModal &&
          <div className='fixed top-0 left-0 w-full h-full bg-gray-700 flex justify-center items-center bg-opacity-65'>
            <div className='max-w-[1200px] bg-white shadow-lg py-2 rounded-md'>
              <div className="border-b border-gray-300 py-3 px-5 mb-4 flex justify-between items-center">
                <h2 className='text-lg font-medium text-gray-900 '>suppression du véhicule</h2>
                <button
                    type='button'
                    className='h-8 w-8 flex items-center justify-center p-1 text-sm rounded-md border border-sky-600 bg-slate-50 text-sky-600 hover:bg-sky-600 hover:text-slate-50'
                    onClick={handleModal}
                >
                    <RiCloseLargeFill className="text-lg"/>
                </button>
              </div>
              <div className='px-4 pb-4'>
                <DeleteCar sendStateModal={handleStateModal} stateModal={openModal} car={car}/>
              </div>
            </div>     
          </div> 
          }
    </>
  )
}
