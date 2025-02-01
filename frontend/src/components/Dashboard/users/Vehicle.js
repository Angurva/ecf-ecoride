import React, { useState } from 'react'

import { PiPlusSquareLight } from "react-icons/pi";
import { HiOutlineChevronRight, HiOutlineChevronDown } from "react-icons/hi";


export default function Vehicle() {

  const [ isOpen, setIsOpen ] = useState(false)

  const handleClick = ()=>{
    setIsOpen(!isOpen)
  }

  return (
    <div className="w-full ">
      <div className="flex items-center mb-2 gap-5">
        <h6>Mes Vehicules</h6>
        <button className="text-[32px] p-0 m-0 rounded-md ease-in-out duration-300 text-sky-600 hover:text-slate-200 hover:bg-sky-600 focus:outline-none"><PiPlusSquareLight/></button>
      </div>
      
      <button onClick={handleClick} className="flex justify-between bg-sky-200 px-2 py-1 w-full">
        <div>
          <span>Renault</span>,&nbsp;<span>Zoé</span>
        </div>
        <div className="flex items-center gap-3"> 
          <span> FY-654-PD</span>
          {isOpen ?<HiOutlineChevronDown/>: <HiOutlineChevronRight/> }
        </div>
        
      </button>

      <div className={`bg-sky-200 px-2 py-2 ${!isOpen && "hidden" }`}> 
        <div className="text-sm"> 
          <span>Date d'immatriculation&nbsp;:&nbsp;</span>
          <span>12/01/2021</span>
        </div>
        <div className="text-sm"> 
          <span>Energie&nbsp;:&nbsp;</span>
          <span>Electrique</span>
        </div>
        <div className="text-sm"> 
          <span>Couleur&nbsp;:&nbsp;</span>
          <span>Bleu Anthracite</span>
        </div>
        <div className="text-sm"> 
          <span>nbre de place&nbsp;:&nbsp;</span>
          <span>2</span>
        </div>
      </div>
    </div>
  )
}
