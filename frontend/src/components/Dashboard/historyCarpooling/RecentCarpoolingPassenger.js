import React, { useContext, useEffect, useState } from 'react'
import { fetcherGET } from '../../../../lib/fetchers'
import { useSession } from 'next-auth/react'
import { UserContext } from '../../../../components/UserContext'
import { v4 as uuidv4 } from 'uuid'
 
import { MdOutlineDoubleArrow } from "react-icons/md";
import dayjs from 'dayjs'
require('dayjs/locale/fr')
dayjs.locale('fr')


export default function HistoryCarpoolingPassenger() {


const { carpoolingPassengerCtx } = useContext(UserContext)


 function timeSubstring(dateA, timeA){
        const timeSub = dayjs(`${dateA} ${timeA}`)
        return timeSub.format('HH:mm').toString()    
    }

  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-xl font-semibold text-center">Mes participations</h4>
    
      {
      carpoolingPassengerCtx.map((carpooling)=>(
        <div className="h-auto border border-slate-500 rounded-md p-4 flex gap-5 w-full" key={uuidv4()}>
          <div className="flex flex-col w-2/5">
          <div className="flex gap-2 items-center font-semibold">
             <div className="text-start font-bold italic">{dayjs(carpooling.departure_date).format('dddd, DD MMMM YYYY ')} </div>
                <div className="flex mx-2 text-sm">
                  <span>{timeSubstring(carpooling.departure_date,carpooling.departure_time)}</span>
                  <span>-</span>
                  <span>{timeSubstring(carpooling.end_date, carpooling.end_time)}</span>
                </div>
              </div>
           
            <div className="flex items-center gap-2 text-xl">
                <span>{carpooling.departure_location}</span>
                <span className="mt-1"><MdOutlineDoubleArrow/></span> 
                <span>{carpooling.end_location}</span>
                
            </div>
            
          </div>
          <div className="flex flex-col gap-2 w-2/5 items-center">
                <span className="uppercase font-semibold">{carpooling.username}</span>
                <span className="font-bold">{carpooling.brand}, {carpooling.model}</span>
               
               

            </div>
            <div className="flex items-center gap-2 w-1/5 justify-around">
              <span>{carpooling.status}</span>
              {
                carpooling.status === "done" && 
                <>
                  <button 
                    className="
                      py-2 px-4 
                      border border-sky-600 text-sky-600 rounded-md
                      hover:bg-sky-600 hover:text-slate-50
                      ">
                        Noter
                  </button>
                </>
                
              }
            </div>
        </div>
        ))
      }
    </div>
  )
}
