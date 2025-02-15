import React, { useState,useEffect, useContext } from 'react'

import { HiOutlineChevronRight, HiOutlineChevronDown } from "react-icons/hi";
import ButtonDeleteCar from './ButtonDeleteCar';


export default function Vehicle({data}) {


  const [ isOpen, setIsOpen ] = useState(false)

  const handleClick = ()=>{
    setIsOpen(!isOpen)
  }

  const [couleur, setCouleur ] = useState("")

  useEffect(()=>{

    switch(data.energy){

      case "electrique":
        setCouleur("bg-sky-200");
        break;
      case "essence":
        setCouleur("bg-green-200");
        break;
      case "diesel":
        setCouleur("bg-orange-200");
        break;
      default: 
        setCouleur("bg-fuchsia-100");
    }

  },[])

  return (
    
    <div className="my-2">
      <button onClick={handleClick} className={`flex justify-between px-2 py-1  w-full ${couleur}`}>
        <div>
          <span className="capitalize">{data.brand},&nbsp;{data.model}</span>
        </div>
        <div className="flex items-center gap-3"> 
          <span>{data.registration} </span>
          {isOpen ?<HiOutlineChevronDown/>: <HiOutlineChevronRight/> }
        </div>
      </button>

      <div className={`${couleur} px-2 py-2 ${!isOpen && "hidden" }`}> 
        <div className="text-sm"> 
          <span>Date d'immatriculation&nbsp;:&nbsp;</span>
          <span>{data.first_registration_date}</span>
        </div>
        <div className="text-sm"> 
          <span>Energie&nbsp;:&nbsp;</span>
          <span className="capitalize">{data.energy}</span>
        </div>
        
        <div className="flex justify-between">
          <div className="text-sm"> 
            <span>Couleur&nbsp;:&nbsp;</span>
            <span className="capitalize">{data.color}</span>
          </div>
          {/*<ButtonDeleteCar car={data}/>*** Non implémenter pour le moment car suppression des carpooling non désiré*/}
        </div>
        
      </div>
    </div>
  )
}
