"use client"
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { fetcherGET } from '../../../lib/fetchers';
import dayjs from 'dayjs';
import { usePathname } from 'next/navigation';



const formSchema = z.object({
  depart_location: z.string().min(2,{message:"ce champs doit-être rempli"}),
  end_location:z.string().min(2,{message:"ce champs doit-être rempli"}),
  depart_date:z.string().date(),
})


export default function Searchbar({sendDataCarpooling}) {

  const pathname = usePathname()  

  const {register, handleSubmit, formState: {errors} } = useForm({
          resolver: zodResolver(formSchema),
          defaultValues:{
              depart_location: "",
              end_location: "",
              depart_date: dayjs(),
          }
      })

  async function onSubmit(values){

    try{
      
      const params = {
        departure_location: values.depart_location,
        end_location: values.end_location,
        departure_date: dayjs(values.depart_date).format('YYYY-MM-DD').toString(),
      }

      const response = await fetcherGET("http://127.0.0.1:8000/api/search-carpooling?", params)

      console.log("RESPONSE", response)
      sendDataCarpooling(response)
    }
    catch (error){
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex md:flex-row md:gap-3 flex flex-col gap-2">
        <input
          {...register('depart_location')}
          type="text" 
          placeholder="enter the departure city.."  
          className=" border border-slate-300 rounded-md py-1 px-2 w-[15rem] text-slate-700"
        />
        {errors.depart_location && <p className="text-red-500">{errors.depart_location.message}</p>}
        <input 
           {...register('end_location')}
          type="text" 
          placeholder="enter the arrival city.."  
          className="border border-slate-300 rounded-md py-1 px-2 w-[15rem] text-slate-700"
        />
         {errors.end_location && <p className="text-red-500">{errors.end_location.message}</p>}
        <input 
          {...register('depart_date')}
          type="date"
          min={dayjs().format('YYYY-MM-DD').toString()}
          className="border border-slate-300 rounded-md py-1 px-2 text-slate-700 w-[15rem]"
        />
         {errors.depart_date && <p className="text-red-500">{errors.depart_date.message}</p>}
        <button 
          type="submit" 
          className="
            md:w-auto
            border border-sky-600 rounded 
            text-sky-500 py-1 px-3
            hover:text-slate-100 hover:bg-sky-600">search</button>    
      </div>
    </form>
   
  )
}
