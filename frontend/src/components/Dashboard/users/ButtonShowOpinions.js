
import React,{ useEffect, useState } from 'react'

import { RiCloseLargeFill,RiStarFill } from "react-icons/ri";
import { fetcherGET } from '../../../../lib/fetchers';
import { useSession } from 'next-auth/react';

export default function ButtonShowOpinions() {

   const [openModal, setModal] = useState(false);

   const [ opinionsAccepted, setOpinionsAccepted ] = useState({})

   const { data: session } = useSession()
 
  const handleModal = () => {
    setModal(!openModal)
  }

  async function showOpinions(){
    try{
        const response = await fetcherGET(`http://127.0.0.1:8000/api/opinion/accepted/${session?.user.id}`)

        console.log("OPINIONS",response.opinions)
        if(response)
        {
            setOpinionsAccepted(response)
        }

    }catch(error){
        console.log(error)
    }

  }

  useEffect(()=>{
    showOpinions()
  },[session])

  return (
    <>
    
      <button 
        type='button'
        onClick={handleModal}
        className="
            px-2 py-1 md:mr-5
            border border-sky-600 rounded-lg
            text-xl text-sky-600 uppercase
            hover:text-slate-200 hover:bg-sky-600 ease-in-out duration-500
        "
        >
            {opinionsAccepted.count} avis {/** à modifier par data db */}
        </button>

      {
      openModal &&
          <div className='fixed top-0 left-0 w-full h-full bg-gray-700 flex justify-center items-center bg-opacity-65'>
            
              <div className='max-w-[600px] bg-white shadow-lg py-2 rounded-md'>
                <div className="border-b border-gray-300 py-3 px-5 mb-4 flex justify-between items-center">
                  <h2 className='text-lg font-medium text-gray-900 '>Listes des avis</h2>
                  <button
                      type='button'
                      className='h-8 w-8 flex items-center justify-center p-1 text-sm rounded-md border border-sky-600 bg-slate-50 text-sky-600 hover:bg-sky-600 hover:text-slate-50'
                      onClick={handleModal}
                  >
                      <RiCloseLargeFill className="text-lg"/>
                  </button>
                </div>
                
                
                <div className='px-4 pb-4'>
                    <div>
                        {
                            opinionsAccepted.opinions.map((opinion)=>(
                                <div key={opinion.id} className="box-border border border-slate-900 shadow-sm flex flex-col p-4 my-2 rounded-md">
                                    <div className="flex justify-between  border-b border-slate-300 mb-2">
                                       
                                        <span className="flex items-center justify-center gap-2">{opinion.note}/5<RiStarFill/></span>
                                    </div>
                                    <p>{opinion.comment}</p>
                                </div>
                            ))
                        }

                    </div>
                  

                </div>
                
              </div>

           
              
          </div>
      
  }
    </>
  )
}
