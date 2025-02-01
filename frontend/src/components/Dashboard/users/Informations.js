import React from 'react'

export default function Informations() {
  return (
    <div 
        className=" 
            flex flex-col gap-5 md:w-3/5 md:ml-8 my-5
            md:order-1 order-2
            
        "
    >
       
        <div className="flex gap-1  ">
            <label className="">Prénom&nbsp;:&nbsp;</label>
            <input id="firstname" type="text" className="w-full border-b border-blue-300 focus:outline-none" />
        </div>
        <div className="flex gap-1  ">
            <label htmlFor="lastname" className="">Nom&nbsp;:&nbsp;</label>
            <input id="lastname" type="text" className="w-full border-b border-blue-300 focus:outline-none" />
        </div>

    
        <div className="flex gap-1  ">
            <label htmlFor="phone"className="">Téléphone&nbsp;:&nbsp;</label>
            <input id="phone" type="tel" className="w-full border-b border-blue-300 focus:outline-none" />
        </div>
        <div className="flex gap-1  ">
            <label htmlFor="address" className="">Adresse&nbsp;:&nbsp;</label>
            <input id="address" type="text" className="w-full border-b border-blue-300 focus:outline-none" />
        </div>


    </div>
  )
}
