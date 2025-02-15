'use client'

import React,{ useContext } from 'react'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import { UserContext } from '../../../components/UserContext';
import { fetcherPOST } from '../../../lib/fetchers';


const formSchema = z.object({
    depart_city: z.string().min(3,{message: "Ce champs est requis" }),
    depart_date: z.string().date(),
    depart_time: z.string(),
    end_city: z.string().min(3,{message: "Ce champs est requis" }),
    end_date: z.string().date(),
    end_time: z.string(),
    car: z.string(),
    place: z.number(),
    price: z.number(),
    
})



export default function FormCarpooling({ sendStateModal, stateModal }) {

    const router = useRouter()

    const {carsCtx, setStateCtx} = useContext(UserContext)
    
    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            depart_city: "",
            depart_date: dayjs(),
            depart_time: dayjs().format("HH:mm").toString(),
            end_city: "",
            end_date: dayjs(),
            end_time: dayjs().format("HH:mm").toString(),
            car: "",
            place: 1,
            price:2,
        }
    })

    async function onSubmitTo(values){
        
        try{

            console.log("VALUES_SUBMIT",values)
            const params = {

                departure_location: values.depart_city.toLowerCase(),
                departure_date: dayjs(values.depart_date).format('YYYY-MM-DD').toString(),
                departure_time: values.depart_time,
                end_location: values.end_city.toLowerCase(),
                end_date: dayjs(values.end_date).format("YYYY-MM-DD").toString(),
                end_time: values.end_time,
                car: parseInt(values.car),
                place: values.place,
                price: values.price,
            }

            const response = await fetcherPOST("http://127.0.0.1:8000/api/carpooling/store", params)
           
           
            if (response)
            {
                sendStateModal(!stateModal)
                toast.success("Enregistrement de covoiturage terminé")
                setStateCtx(true)
            }
            else{
                toast.error("il y a eu une erreur lors de l'enregistrement ")
            }
        }
        catch(error){
            toast.error(error.message)
        }
    }


  return (
    <form onSubmit={handleSubmit(onSubmitTo)} className="w-[900px] flex flex-col gap-3 bg-white p-5 rounded-md shadow-md">
        <div className="flex justify-between gap-2">
            <div className="flex flex-col gap-1 grow">
                <label className="text-slate-900 text-[14px]">Ville de départ</label>
                <input {...register('depart_city')} type="text" className="h-10 border border-slate-900 p-4 rounded-md"></input>
                {errors.depart_city && <p className="text-red-500">{errors.depart_city.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-slate-900 text-[14px]">Date de départ</label>
                <input {...register('depart_date')} type="date" className="h-10 border w-48 border-slate-900 rounded-md text-center"></input>
                {errors.depart_date && <p className="text-red-500">{errors.depart_date.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-slate-900 text-[14px]">Heure de départ</label>
                <input {...register('depart_time')} type="time" className="h-10 w-28 border border-slate-900 rounded-md text-center"></input>
                {errors.depart_time && <p className="text-red-500 text-center">{errors.depart_time.message}</p>}
            </div>
        </div>
        <div className="flex justify-between gap-2">
             <div className="flex flex-col gap-1 grow">
                <label className="text-slate-900 mx-1 text-[14px]">Ville d'arrivée</label>
                <input {...register('end_city')} type="text" className="h-10 border border-slate-900 p-4 rounded-md"></input>
                {errors.end_city && <p className="text-red-500">{errors.end_city.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-slate-900 mx1 text-[14px]">Date d'arrivée</label>
                <input {...register('end_date')} type="date" className="h-10 border w-48 border-slate-900 rounded-md text-center"></input>
                {errors.end_date && <p className="text-red-500">{errors.end_date.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-slate-900 mx-1 text-[14px]">Heure d'arrivée</label>
                <input {...register('end_time')} type="time" className="h-10 border w-28 border-slate-900 rounded-md text-center"></input>
                {errors.end_time && <p className="text-red-500">{errors.end_time.message}</p>}
            </div>
        </div>
       <div className="flex gap-2">
            <div className="flex flex-col gap-1">
                <label className="text-slate-900 mx-1 text-[14px]">Choisir un véhicule</label>
                <select {...register('car')} className="h-10 w-52 rounded-md bg-transparent capitalize border py-2 px-4 border-slate-900">
                    {
                        carsCtx.map((car)=>(
                            <option key={car.id} value={car.id} className="">{car.brand},&nbsp;{car.model}</option>
                        ))
                    }

                </select>
                {errors.car && <p className="text-red-500">{errors.car.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-slate-900 mx-1 text-[14px]">Nbre de place</label>
                <input {...register('place',{ valueAsNumber: true })} type="number" min={1} className="h-10 w-28 border border-slate-900 p-4 rounded-md"></input>
                {errors.place && <p className="text-red-500">{errors.place.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-slate-900 mx-1 text-[14px]">Prix</label>
                <input {...register('price',{ valueAsNumber: true })} type="number" min={2} className="h-10 w-20 border border-slate-900 p-4 rounded-md text-center"></input>
                {errors.price && <p className="text-red-500">{errors.price.message}</p>}
            </div>
       </div>
        
        
        <button type="submit" className="bg-sky-600 border border-sky-800 ease-in-out duration-300 px-3 py-1.5 text-white my-3 rounded-md hover:bg-sky-800  hover:border-sky-600">Ajouter</button>
       
    </form>
  )
}
