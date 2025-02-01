import React from 'react'

import { GrLocationPin } from "react-icons/gr";
import { RiStarFill } from 'react-icons/ri';
import { PiClockThin, PiClockCountdownThin, PiSeatbeltThin, PiCoinsThin, PiGasPumpThin, PiCarProfileThin, PiCertificateThin, PiRoadHorizonThin, PiClockCounterClockwiseThin, PiPawPrintThin, PiCigaretteSlashThin, PiCigaretteThin  } from 'react-icons/pi';
import { LiaCircleSolid, LiaDotCircleSolid } from "react-icons/lia";

export default function CarpoolingById() {
  return (
    <section className="text-gray-900 md:container md:max-w-7xl md:mx-auto p-6 my-6 flex flex-col gap-5 ml-1">
        <span className="text-2xl font-semibold">Jeudi, 30 Janvier 2025</span>{/** replace to data api backend */}
        <div className="md:grid md:grid-cols-3 flex flex-col gap-4">

            <div className="md:col-span-2 flex flex-col gap-4 md:order-1 order-2 ">

                <div className="box-border border border-slate-200 p-6 rounded-md flex items-center gap-1 h-[160px] shadow bg-slate-100">
                    <div className="flex flex-col justify-between h-full py-1">
                        <span className="text-[14px] font-bold ">08:00</span>{/** replace to data api backend */}
                        <span className="text-[14px] font-bold ">09:00</span>{/** replace to data api backend */}
                    </div>
                    <div className="flex flex-col justify-between h-full items-center py-1">
                        <LiaCircleSolid className="text-[32px]"/>
                        <div className="border border-slate-300 h-full my-1"> </div>
                        <LiaDotCircleSolid className="text-[32px] "/>
                    </div>
                    <div className="flex flex-col h-full items-start">
                        <span className="font-bold">city departure</span>{/** replace to data api backend */}
                        <span className="mt-auto mb-1 font-bold ">city end</span>{/** replace to data api backend */}
                    </div>
                    <div className="ml-auto">
                        <span className="flex items-center gap-1 text-2xl md:text-4xl md:mr-10">5,00<PiCoinsThin/></span>{/** replace to data api backend */}
                    </div>
                </div>
{/*----------------------------------------*/}
                <div className="box-border border bg-slate-100 border-slate-200  p-6 rounded-md shadow flex">
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-3"> 
                            <PiRoadHorizonThin className="text-2xl"/>
                            <span className="text-sm">:&nbsp;voyage ecologique</span>{/** replace to data api backend */}
                        </div>
                        <div className="flex items-center gap-3">
                            <PiClockCounterClockwiseThin className="text-2xl"/>
                            <span className="text-sm">:&nbsp;45&nbsp;min</span>{/** replace to data api backend */}
                        </div>
                        <div className="flex items-center gap-3">
                            <PiPawPrintThin className="text-2xl"/>
                            <span className="text-sm">:&nbsp;je ne préfère pas voyager avec des animaux.</span>{/** replace to data api backend */}

                        </div>
                        <div className="flex items-center gap-3">
                            <PiCigaretteSlashThin className="text-2xl"/>
                            <span className="text-sm">Voyage non-fumeur svp.</span>{/** replace to data api backend */}
                            <PiCigaretteThin />

                        </div>
                   
                    </div>
                   
                    <div className="ml-auto group relative flex gap-2 p-1 z-auto">
                        <span className="text-2xl text-center ">2</span>{/** replace to data api backend */}
                        <PiSeatbeltThin className="text-2xl mt-1"/>

                        <div className="group-hover:opacity-100 transition-opacity bg-zinc-500 py-1 px-2 font-semibold text-[10px] text-slate-200 rounded-1 absolute left-1/2 rounded-md text-center
                        -translate-x-1/2 translate-y-full opacity-0 m-3 mx-auto" role="tooltip">
                        place(s)&nbsp;restante(s)
                        </div>
                    </div>
                    
                </div>
{/*----------------------------------------*/}
            </div>


            <div className="md:col-span-1 order-1">
                <div className="box-border border border-slate-200 bg-slate-100 p-6 rounded-md flex flex-col gap-2">
                     <div className="flex items-center md:gap-7 gap-5">
                        <div className="box-border size-16 rounded-full border-2 border-slate-300  flex justify-center items-center">
                            <span className="text-3xl">LH</span>{/** replace to data api backend */}
                        </div>
                        <div>
                            <span className="text-2xl">Lehanann</span>{/** replace to data api backend */}
                            <span className="flex gap-1 items-center md:text-[13px] text-[12px]">
                            <RiStarFill className="text-sky-600 md:text-base text-sm" />
                            4.5/5
                            </span>
                        </div>
                        <button className="ml-auto mr-1 border border-sky-600 text-sky-600 py-1 px-2 rounded-md hover:bg-sky-600 hover:text-slate-200  ">15 avis</button> {/** replace to data api backend */}    

                    </div>                    
                    <hr className="border-t border-gray-300 my-5"/>      
                    <div className="flex flex-col gap-2 px-4">
                        <div className="flex items-center gap-2">
                             <PiCarProfileThin className="text-xl"/>
                             <span>Renault, Zoé</span>{/** replace to data api backend */}
                        </div>
                        <div className="flex items-center gap-2 ">
                             <PiGasPumpThin className="text-xl"/>
                             <span>Electrique</span>{/** replace to data api backend */}
                        </div>
                       
                    </div>
                </div>
                <button className="my-4 p-2 w-full border border-sky-600 text-sky-600 rounded-md hover:bg-sky-600 hover:text-slate-200">Réservation</button>
            </div>

        </div> 
    </section>
  )
}
