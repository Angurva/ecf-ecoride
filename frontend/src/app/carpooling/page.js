
import React from 'react';

import Searchbar from '@/components/Searchbar/Searchbar';

import { RiStarFill } from 'react-icons/ri';
import { PiClockThin, PiClockCountdownThin, PiSeatbeltThin, PiCoinsThin } from 'react-icons/pi';

export default function CarpoolingPage() {
  return (
    <section className="text-gray-900 md:container md:max-w-7xl md:mx-auto p-6 my-6">
        <div className="w-full flex flex-col items-center">
            <Searchbar/>
            <div className="w-full grid grid-flow-col py-5 gap-2">
                <div className="md:col-span-4 col-span-3 row-end-2 flex p-2">
                    <div className="box-border w-full shadow-md border border-sky-600 rounded-md p-2">
                        <h5 className="text-sky-600 text-center md:text-xl mb-2">Filtres</h5>
                        <hr className="m-2 text-sky-600"/>
                        <div className="flex items-center gap-2 p-2 text-sm md:text-base">
                            <input type="radio" className="" name="filterRadio" />
                            <label htmlFor="" className="text-gray-600">Prix</label>
                        </div>
                        <div className="flex items-center gap-2 p-2 text-sm md:text-base">
                            <input type="radio" className="" name="filterRadio" />
                            <label htmlFor="" className="text-gray-600">Note</label>
                        </div>
                        <div className="flex items-center gap-2 p-2 text-sm md:text-base">
                            <input type="radio" className="" name="filterRadio" />
                            <label htmlFor="" className="text-gray-600">Heure</label>
                        </div>
                        <div className="flex items-center gap-2 p-2 text-sm md:text-base">
                            <input type="checkbox" className="" name="checkboxEcology" />
                            <label htmlFor="" className="text-gray-600">Ecology</label>
                        </div>
                    </div>         
                </div>
                <div className="md:col-span-6 col-span-9 p-2 flex flex-col row-span-5 gap-4"> 
                    <div className="box-border border border-slate-200 bg-slate-100 rounded-md px-5 py-3 flex items-center shadow gap-5">
                        <div className="md:grid md:grid-cols-7 w-full">
                            <div className="md:col-span-2 flex w-full items-center justify-between px-4">
                                <div className="box-border md:size-12 md:text-base text-sm size-8 rounded-full border-2 border-slate-300 flex justify-center items-center">
                                    <span>LH</span>
                                </div>
                                <span className="md:text-base text-sm">Lehanann</span>
                                <span className="flex gap-1 items-center md:text-[13px] text-[12px]"><RiStarFill className="text-sky-600 md:text-base text-sm" />4.5/5</span>
                            </div>
                            <div className="md:col-span-3 flex flex-col gap-1 text-2xl md:p-2 md:px-4 px-5 py-4">
                                <div className="flex items-center justify-between">
                                    <PiClockThin className="text-slate-500"/>
                                    <div className="text-[11px] w-full flex items-center before:mx-2 before:border-t before:flex before:items-center before:border-slate-500 before:w-full after:mx-2 after:border-t after:flex after:items-center after:border-slate-500 after:w-full ">60&nbsp;min</div>
                                    <PiClockCountdownThin className="text-slate-500" />
                                </div>
                                <div className="flex flex-items justify-between">
                                    <span className="text-[11px]">08:00</span>
                                    <span className="text-[11px]">09:00</span>
                                </div>
                            </div>
                            <div className="md:col-span-2 flex md:justify-center items-center justify-around">
                                <div className="group flex relative md:mx-5"> 
                                    <span  className="flex items-center gap-1 text-2xl"><PiSeatbeltThin/><span>:</span>2</span>
                                    <div className="group-hover:opacity-100 transition-opacity bg-gray-800 py-1 px-2 text-[11px] text-gray-100 rounded-1 absolute left-1/2 
                                     -translate-x-1/2 translate-y-full opacity-0 m-3 mx-auto" role="tooltip">
                                        place(s)&nbsp;restante(s)
                                    </div>
                                </div>
                                <span className="flex items-center gap-1 text-2xl md:ml-10">5,00<PiCoinsThin/></span>
                            </div>

                        </div>
                        
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
