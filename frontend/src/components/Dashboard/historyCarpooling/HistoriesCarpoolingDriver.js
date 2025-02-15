import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react';
import { v4 as uuidv4 } from 'uuid'
import { fetcherGET } from '../../../../lib/fetchers';

import { MdOutlineDoubleArrow } from "react-icons/md";

import dayjs from 'dayjs'
require('dayjs/locale/fr')
dayjs.locale('fr')

export default function HistoriesCarpoolingDriver() {

  const [ histories, setHistories] = useState([])

  const { data: session } = useSession()


  async function getHistoriesCarpooling(){
    try{
      
      const response = await fetcherGET(`http://127.0.0.1:8000/api/carpooling/history/driver/${session?.user.id}`)

      console.log("HISTORIES", response)
      if (response)
      {
        setHistories(response)

      }
      else{
        throw new Error ("erreur")
      }
    }
    catch(error){
      console.error(error)
    }
    
  }

  useEffect(()=>{
    
    getHistoriesCarpooling()

  },[])
  
   
  return (
   <div className="w-[600px] flex flex-col gap-3 bg-white p-5 rounded-md shadow-md">
    {
     histories.map((carpooling)=>(

      <div className="h-16 border border-slate-500 rounded-md p-2 flex gap-5 w-full" key={uuidv4()}>
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

        </div>
          
      </div>
      ))
      }
        </div>
  )
}
