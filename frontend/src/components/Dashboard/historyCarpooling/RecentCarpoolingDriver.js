import React, { useState, useContext } from 'react'
import { UserContext } from '../../../../components/UserContext'
import { fetcherPATCH } from '../../../../lib/fetchers'
import { useSession } from 'next-auth/react'
import { v4 as uuidv4 } from 'uuid'
 
import { MdOutlineDoubleArrow } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri"
import dayjs from 'dayjs'
import { toast } from 'react-toastify'
import HistoriesCarpoolingDriver from './HistoriesCarpoolingDriver'
require('dayjs/locale/fr')
dayjs.locale('fr')

export default function HistoryCarpoolingDriver() {

  const { carpoolingDriverCtx, setStateCtx } = useContext(UserContext)

  const [ openModal, setOpenModal ] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  } 

  const handleClick = async (e) => {
  
    try{
      const params = {
        status: e.target.value,
      }
        const response = await fetcherPATCH(`http://127.0.0.1:8000/api/carpooling/update/${e.target.id}`, params)

      if (response)
      {
        setStateCtx(true)
        toast.success("Votre covoiturage a changé de status")

      }
      else{
        throw new Error ("Mise à jour échouée")
      }
    }
    catch(error){
      console.error(error)
    }
  }


  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-xl font-semibold">Mes covoiturages </h4>
    {
      carpoolingDriverCtx.map((carpooling)=>(

        <div className="border border-slate-500 rounded-md p-4 flex gap-5 w-full" key={uuidv4()}>
          <div className="flex flex-col w-2/5">
            <div className="text-start font-bold">{dayjs(carpooling.departure_date).format('dddd, DD MMMM YYYY ')} </div>
            <div className="flex items-center gap-2 font-semibold">
                <span>{carpooling.departure_location}</span>
                <span className="mt-1"><MdOutlineDoubleArrow/></span> 
                <span>{carpooling.end_location}</span>  
            </div>
          </div>
          <div className="w-1/5 flex justify-center items-center">
            <div>{carpooling.status}</div>

          </div>
          <div className="flex gap-2 w-2/5 justify-around">
         
            {
              carpooling.status === "pending"
              &&
             
                <button
                  type="button"
                  id={carpooling.id}
                  value='in progress'
                  onClick={handleClick}
                  className="
                    py-2 px-4 rounded-md
                    border border-sky-600 text-sky-600 
                    hover:bg-sky-600 hover:text-slate-100 "
                >
                      Démarrer
                </button>
             
              }
              {
                carpooling.status === "in progress"
                &&
                <button
                  type="button"
                  id={carpooling.id}
                  value="done"
                  onClick={handleClick}
                  className="
                    py-2 px-4 rounded-md
                    border border-sky-600 text-sky-600 
                    hover:bg-sky-600 hover:text-slate-100 "
                >
                  Terminer
                </button>
              }
           
            <button
              type="button"
              id={carpooling.id}
              value="cancelled"
              onClick={handleClick}
              className="
                py-2 px-4 rounded-md
                border border-sky-600 text-sky-600 
                hover:bg-sky-600 hover:text-slate-100"
            >
              Annuler
            </button>
           
          </div>
            
        </div>
      ))
    }
    <button 
        type="button"
        onClick={handleOpenModal}
        className="
          px-4 py-2 border border-sky-600 rounded-lg w-full text-sky-600 
          hover:bg-sky-600 hover:text-slate-100"
      >
          Historiques de mes covoiturages
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
                    onClick={handleOpenModal}
                >
                    <RiCloseLargeFill className="text-lg"/>
                </button>
              </div>
              <div className='px-4 pb-4'>
                <HistoriesCarpoolingDriver/>
              </div>
            </div>     
          </div>
      }      
    </div>
  )
}
