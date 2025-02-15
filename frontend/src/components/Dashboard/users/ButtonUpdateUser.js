'use client'

import React,{ useEffect, useState } from 'react'
import FormUserIdentity from '@/components/Form/FormUserIdentity';

import { RiCloseLargeFill } from "react-icons/ri";
import { UserContext } from '../../../../components/UserContext';
import { useRouter } from 'next/navigation';

export default function ButtonUpdateUser() {

  const [openModal, setModal] = useState(false);

  const router = useRouter()
 
  const handleModalUser = () => {
    setModal(!openModal)
  }

  function handleStateModal (modal){

    setModal(modal)
  }

  return (
    <>
      <button
        type="button"
        onClick={handleModalUser}
        className="
            border p-5 rounded-lg uppercase text-lg border-sky-600 text-sky-600
            hover:bg-sky-800 hover:text-slate-100 hover:border-sky-800 hover:border
            ease-in-out duration-300 w-full ">
            <span className="text-center">Modifier mon profil</span>
      </button>

      {
      openModal &&
        <div className='fixed top-0 left-0 w-full h-full bg-gray-700 flex justify-center items-center bg-opacity-65'>
          <div className='max-w-[1200px] bg-white shadow-lg py-2 rounded-md'>
            <div className="border-b border-gray-300 py-3 px-5 mb-4 flex justify-between items-center">
              <h2 className='text-lg font-medium text-gray-900 '>Modifier mon profil</h2>
              <button
                  type='button'
                  className='h-8 w-8 flex items-center justify-center p-1 text-sm rounded-md border border-sky-600 bg-slate-50 text-sky-600 hover:bg-sky-600 hover:text-slate-50'
                  onClick={handleModalUser}
              >
                  <RiCloseLargeFill className="text-lg"/>
              </button>
            </div>
            <div className='px-4 pb-4'>
              <FormUserIdentity sendStateModal={handleStateModal} stateModal={openModal} />
            </div>
          </div>     
        </div> 
      }
    </>
  )
}
