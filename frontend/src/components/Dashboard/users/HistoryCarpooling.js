import React, { useState, useContext } from 'react'
import { UserContext } from '../../../../components/UserContext'
import RecentCarpoolingPassenger from '../historyCarpooling/RecentCarpoolingPassenger'
import RecentCarpoolingDriver from '../historyCarpooling/RecentCarpoolingDriver'
import { RiCloseLargeFill } from 'react-icons/ri'

export default function HistoryCarpooling() {


  const { rolesCtx,carpoolingDriverCtx, carpoolingPassengerCtx } = useContext(UserContext)



  return (
    <div className="flex flex-col">
    {
      rolesCtx.includes("driver") &&
      <div className="w-full capitalize text-center  "> 
        <RecentCarpoolingDriver/>
      </div>
        
    }
    <hr className="border-t border-slate-400 my-5" />
    { 
      rolesCtx.includes("passenger") && carpoolingPassengerCtx.length !== 0
      &&
      <div className="w-full capitalize text-center">
        <RecentCarpoolingPassenger/>      
      </div>
      
    }
  
    </div>
  )
}
