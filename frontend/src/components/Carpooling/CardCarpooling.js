import React from 'react';

import dayjs from 'dayjs';

import { RiStarFill } from 'react-icons/ri';
import { PiClockThin, PiClockCountdownThin, PiSeatbeltThin, PiCoinsThin } from 'react-icons/pi';
import Link from 'next/link';

export default function CardCarpooling({data}) {

    function duration(dateStart, dateEnd,timeA, timeB){
        const timeAdayjs = dayjs(`${dateStart} ${timeA}`)
        const timeBdayjs = dayjs(`${dateEnd} ${timeB} `)

        return timeBdayjs.diff(timeAdayjs, 'minute', true).toString()

    }

  return (
   
    <Link href={`/carpooling/${data.id}`} 
        className="
            box-border border border-slate-200 bg-white rounded-md px-5 py-3 flex items-center shadow gap-5
            hover:border-sky-600 hover:bg-sky-50
        "
    >
        <div className="md:grid md:grid-cols-7 w-full">
            <div className="md:col-span-2 flex w-full items-center justify-between px-4">
                <div className="box-border md:size-12 md:text-base text-sm size-8 rounded-full border-2 border-slate-300 flex justify-center items-center">
                    <span>LH</span>
                </div>
                <span className="md:text-base text-sm">{data.username}</span>
                <span className="flex gap-1 items-center md:text-[13px] text-[12px]"><RiStarFill className="text-sky-600 md:text-base text-sm" />4.5/5</span>
            </div>
            <div className="md:col-span-3 flex flex-col gap-1 text-2xl md:p-2 md:px-4 px-5 py-4">
                <div className="flex items-center justify-between">
                    <PiClockThin className="text-slate-500"/>
                    <div 
                        className="
                            text-[11px] w-full flex items-center 
                            before:mx-2 before:border-t before:flex before:items-center before:border-slate-500 before:w-full 
                            after:mx-2 after:border-t after:flex after:items-center after:border-slate-500 after:w-full ">
                                {duration(data.departure_date,data.end_date,data.departure_time,data.end_time)}&nbsp;min
                    </div>
                    <PiClockCountdownThin className="text-slate-500" />
                </div>
                <div className="flex flex-items justify-between">
                    <span className="text-[11px]">{data.departure_time.substring(0,5)}</span>
                    <span className="text-[11px]">{data.end_time.substring(0,5)}</span>
                </div>
            </div>
            <div className="md:col-span-2 flex md:justify-center items-center justify-around">
                <div className="group flex relative md:mx-5"> 
                    <span  className="flex items-center gap-1 text-2xl"><PiSeatbeltThin/><span>:</span>{data.place_number}</span>
                    <div className="group-hover:opacity-100 transition-opacity bg-gray-800 py-1 px-2 text-[11px] text-gray-100 rounded-1 absolute left-1/2 
                        -translate-x-1/2 translate-y-full opacity-0 m-3 mx-auto" role="tooltip">
                        place(s)&nbsp;restante(s)
                    </div>
                </div>
                <span className="flex items-center gap-1 text-2xl md:ml-10">{data.price}<PiCoinsThin/></span>
            </div>
        </div>
    </Link>
  )
}
