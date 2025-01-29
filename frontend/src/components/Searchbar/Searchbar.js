import React from 'react'

export default function Searchbar() {
  return (
    <div className="md:flex md:flex-row md:gap-3 flex flex-col gap-2">
        <input type="text" name="#" placeholder="enter the departure city.."  className=" border border-slate-300 rounded-md py-1 px-2 w-[15rem]"/>    
        <input type="text" name="#" placeholder="enter the arrival city.."  className="border border-slate-300 rounded-md py-1 px-2 w-[15rem]"/>    
        <input type="date" name="#"  className="border border-slate-300 rounded-md py-1 px-2 text-slate-400 w-[15rem]"/>    
        <button className="border border-sky-600 rounded md:w-auto text-sky-500 py-1 px-3 hover:text-slate-100 hover:bg-sky-600">search</button>    
    </div>
  )
}
