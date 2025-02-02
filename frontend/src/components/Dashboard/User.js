"use client"

import React, { useState, useEffect } from 'react'


import { LiaPenFancySolid } from "react-icons/lia";
import Identity from './users/Identity';
import Informations from './users/Informations';
import Favourites from './users/Favourites';
import Vehicle from './users/Vehicle';

export default function User() {

    const [isChecked, setIsChecked ] = useState(false)

    const [ isDisabled, setIsDisabled ] = useState(true)



  return (
    <article 
        className="
            w-full
            h-full
            md:grid md:grid-cols-6 gap-2 flex flex-col
        "
    >
        <div className="md:col-span-4 flex flex-col gap-2">
            <div 
                className="
                    flex flex-col gap-5
                    md:gap-2
                    border rounded-md p-3 shadow-lg bg-white
                    order-1
                    "
            >
                <Identity/>
                <div className="flex flex-col md:flex-row">

                    <Informations />
                    <div 
                        className="
                            flex flex-col gap-2 order-1 my-5 
                            md:gap-5 md:w-2/5
                        "
                    >
                        <div 
                            className="
                                flex flex-wrap justify-center gap-2 px-10 py-5
                                md: md:flex-col md:ml-auto md:gap-2 
                                border p-2 rounded-md bg-slate-100
                            "
                        > 
                            <div className="flex grow items-center gap-2 text-lg">
                                <input id="passenger" type="radio" className="" name="roleuser"/>
                                <label htmlFor="passenger" className="cursor-pointer">Passager</label>
                            </div>
                            <div className="flex items-center gap-2 text-lg">
                                <input id="driver" type="radio" className="" name="roleuser"/>
                                <label htmlFor="driver" className="cursor-pointer">Chauffeur</label>
                            </div>
                            <div className="flex justify-items-center gap-2 text-lg">
                                <input id="driverPassenger" type="radio" className="" name="roleuser"/>
                                <label htmlFor="driverPassenger" className="cursor-pointer">Passager & Chauffeur</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div 
                className="
                    border border-slate-200 shadow-lg rounded-md bg-white
                    flex flex-col
                    order-3
                ">
                    <Favourites/>
            </div>
        </div>
        
        <div 
            className="
                flex flex-col
                md:col-span-2
                order-2
            "
        >
                    <div className="bg-white border border-slate-200 flex flex-col shadow-lg p-6">
                        <Vehicle/>
                    </div>
           
           
        
        </div>

        

    
        

        
        
    </article>
  )
}
