import React from 'react'

import { GiDuration, GiRoad } from "react-icons/gi";
import { TbPawOff, TbPawFilled } from "react-icons/tb";
import { PiCigaretteFill, PiCigaretteSlashFill } from "react-icons/pi";

export default function Favourites() {
  return (
    <div className="flex flex-col p-10 gap-5">
        <div className="flex items-start">
            <GiRoad className=" mt-1 text-xl md:text-2xl" />
            <span className="md:text-xl text-lg">&nbsp;:&nbsp;Voyage écologique.</span>
        </div>
        <div className="flex items-start">
            <GiDuration className="mt-1 text-xl md:text-2xl" />
            <span className="md:text-xl text-lg">&nbsp;:&nbsp;45&nbsp;min.</span>
        </div>
        <div className="flex items-start">
            <TbPawOff className="mt-1 text-xl md:text-2xl" />
            <span>&nbsp;:&nbsp;</span>
            <span className="md:text-xl text-lg">Je ne préfère pas voyager avec des animaux.</span>
        </div>
        <div className="flex items-center">
            <PiCigaretteSlashFill className="text-xl md:text-2xl" />
            <span className="md:text-xl text-lg">&nbsp;:&nbsp;Non fumeur svp.</span>
        </div>

    </div>
  )
}
