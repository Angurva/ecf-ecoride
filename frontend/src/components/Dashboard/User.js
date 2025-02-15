"use client"

import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../../components/UserContext';

import Identity from './users/Identity';
import Favourites from './users/Favourites';
import Vehicle from './users/Vehicle';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import ButtonAddVehicle from './users/ButtonAddVehicle';
import ButtonAddCarpooling from './users/ButtonAddCarpooling';
import HistoryCarpooling from './users/HistoryCarpooling';



export default function User() {

    const { data: session } = useSession()

    const { userCtx, rolesCtx, carsCtx } = useContext(UserContext)

    const router = useRouter()


  return (
 
    <article 
        className="
            w-full
            h-full
            md:grid md:grid-cols-6 gap-2 flex flex-col
        "
    >
        <div className={`flex flex-col gap-2 ${rolesCtx.length === 1 && rolesCtx.includes('passenger') ? 'md:col-span-6' : 'md:col-span-4'  }`}>
            <div 
                className="
                    flex flex-col gap-5
                    md:gap-2
                    border rounded-md p-3 shadow-lg bg-white
                    order-1
                    "
            >
                <Identity/> 
            </div>
            
            <div 
                className="
                    flex flex-col gap-5
                    md:gap-2
                    border rounded-md p-5 shadow-lg bg-white
                    order-4
                    "
            >
                    
                <HistoryCarpooling/>

            </div>

            
        </div>
     

           <div 
                    className="
                        flex flex-col
                        md:col-span-2
                        order-2 gap-3
                    "
                >   { rolesCtx.includes("driver") &&
                    (
                        <>
                            <div className="bg-white border border-slate-200 flex flex-col shadow-lg p-6">
                                <div className="w-full ">
                                    <div className="flex items-center mb-2 gap-5">
                                        <h6>Mes Vehicules</h6>
                                        <ButtonAddVehicle />
                                        
                                    </div>
                                    <div className="flex flex-col">
                                    {
                                        carsCtx.map((car)=>(
                                            <Vehicle data={car} key={car?.id}/>
                                        ))   
                                    }
                                    </div>
                                </div>
                            </div>  
                            <div 
                                className="
                                    border border-slate-200 shadow-lg rounded-md bg-white
                                    flex flex-col
                                    
                                ">
                                    <Favourites/>
                            </div>
                            <div  className="flex p-6  items-center justify-center">
                                <ButtonAddCarpooling />
                            
                            </div> 
                        </>   
                    )
                    }  
                   
                </div>  
       
    </article>
 
  )
}
