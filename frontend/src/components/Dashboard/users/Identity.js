import React from 'react'

import { RiStarFill } from 'react-icons/ri';

export default function Identity() {
  return (
    <div 
        className="
            flex flex-col items-center justify-center gap-5
            md:flex-row md:justify-start md:gap-10 
        "
    >
        <div
            id="avatar" 
            className=" w-32 h-32 border border-slate-500 rounded-full m-2"

        />
        <div 
            className="flex flex-col md:items-start items-center"
        >
            <div className="flex gap-5">
                <div
                className="
                    text-xl uppercase 
                    md:text-2xl "
                >
                username
                </div>
                <div className="flex items-center gap-2 ">
                    <RiStarFill className="text-amber-400 text-2xl"/>
                    <span className="text-xl md:text-2xl">4.5/5</span>
                </div>
               
            </div>
             <span className="">tartantpion@test.fr</span>
            
            
        </div>

        <button 
            className="
                px-2 py-1 md:ml-auto md:mr-5
                border border-sky-600 rounded-lg
                text-2xl text-sky-600 uppercase
                hover:text-slate-200 hover:bg-sky-600 ease-in-out duration-500
            "
        >
                45 avis
        </button>
        
    </div>
  )
}
