'use client'

import React, { useContext } from 'react'
import { UserContext } from '../../../../components/UserContext';
import ButtonUpdateUser from './ButtonUpdateUser';
import { RiStarFill } from 'react-icons/ri';
import ButtonShowOpinions from './ButtonShowOpinions';

export default function Identity() {

    const { userCtx, rolesCtx, noteCtx } = useContext(UserContext)

  return (
    <>
        <div 
            className="
                flex flex-col items-center justify-center gap-5
                md:flex-row md:justify-start md:gap-10"
        >
            <div id="avatar" className=" w-32 h-32 border border-slate-500 rounded-full m-2">
                
            </div>
            <div className="flex flex-col md:items-start items-center" >
                <div className="flex gap-5">
                    <div
                    className="
                        text-xl uppercase 
                        md:text-2xl "
                    >
                    {userCtx.username}
                    </div>
                    <div className="flex items-center gap-2 ">
                        <RiStarFill className="text-amber-400 text-2xl"/>
                        <span className="text-xl md:text-2xl">{noteCtx}/5</span>
                    </div>
                
                </div>
                <span className="">{userCtx.email}</span>
            </div>
            <ButtonShowOpinions/>
            <div className="flex flex-col md:flex-row md:ml-auto md:w-52">                   
                <div 
                    className="
                        flex flex-col gap-2 order-1 my-5
                        md:gap-5 md:w-full
                    "
                >
                    <div 
                        className="
                            flex flex-wrap justify-center gap-2 px-5 py-5
                            md:flex md:flex-col md:ml-auto md:gap-2 md:w-full
                            border p-2 rounded-md bg-slate-100
                        "
                    > 
                        {
                            rolesCtx.map((role)=>(
                                <span key={role} className="capitalize">{role}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row md:order-1 order-2 gap-10">
            <div className="flex flex-col gap-5 md:w-4/5 md:ml-8 my-5">
                <div className="flex gap-1  ">
                    <label className="">Prénom&nbsp;:&nbsp;</label>
                    <input id="firstname" type="text" value={userCtx.firstname || ""} className="w-full border-b border-blue-300 focus:outline-none capitalize" disabled/>
                </div>
                <div className="flex gap-1  ">
                    <label htmlFor="lastname" className="">Nom&nbsp;:&nbsp;</label>
                    <input id="lastname" type="text" value={userCtx.lastname || ""} className="w-full border-b border-blue-300 focus:outline-none capitalize" disabled />
                </div>

                <div className="flex gap-1  ">
                    <label htmlFor="phone"className="">Téléphone&nbsp;:&nbsp;</label>
                    <input id="phone" type="tel" value={userCtx.phone || ""} className="w-full border-b border-blue-300 focus:outline-none" disabled />
                </div>
                <div className="flex gap-1  ">
                    <label htmlFor="address" className="">Adresse&nbsp;:&nbsp;</label>
                    <input id="address" type="text" value={userCtx.address || ""} className="w-full border-b border-blue-300 focus:outline-none" disabled />
                </div>
            </div>
            <div className="flex items-end md:justify-end md:w-1/5 p-5 w-full">
                <ButtonUpdateUser/>
            </div>
        </div>
    </>
    
  )
}
