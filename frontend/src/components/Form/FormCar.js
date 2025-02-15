import React from 'react'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';

import { fetcherPOST } from '../../../lib/fetchers';
import { useSession } from 'next-auth/react';

const formSchema = z.object({
    brand: z.string().min(3,{message: "Ce champs est requis" }),
    model: z.string().min(1,{message: "Ce champs est requis"}),
    registration: z.string().min(3, {message: "Ce champs est requis"}),
    date_registration: z.string().date(),
    energy: z.string().min(3, {message: "Ce champs est requis"}),
    color: z.string().min(3, {message: "Ce champs est requis"}),
    place: z.string().min(1, {message: "Ce champs est requis"}),
})



export default function FormCar({sendStateModal, stateModal}) {

    const router = useRouter()

    const {data: session} = useSession()

    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            brand: "",
            model: "",
            registration: "",
            date_registration: dayjs(),
            energy: "",
            color: "",
            place: "",
        }
    })

    async function onSubmitTo(values){
        
        try{

            const params = {
                brand: values.brand.toLowerCase(),
                model: values.model.toLowerCase(),
                registration: values.registration.toUpperCase(),
                first_registration_date: values.date_registration,
                energy: values.energy.toLowerCase(),
                color: values.color.toLowerCase(),
                place: values.place,
                user: session?.user.id
            }

            const response = await fetcherPOST("http://localhost:8000/api/car/add", params)
           
           
            if (response)
            {
                sendStateModal(!stateModal)
                toast.success("Ajout d'un véhicule réussi")
                router.refresh()
            }
            else{
                toast.error("il ya eu une erreur lors de l'ajout de votre véhicule")
            }
        }
        catch(error){
            toast.error(error.message)
        }
    }


  return (
    <form onSubmit={handleSubmit(onSubmitTo)} className="w-[500px] flex flex-col gap-3 bg-white p-5 rounded-md shadow-md">
        <div className="flex flex-col gap-1">
            <label className="text-slate-900 text-[14px]">Marque</label>
            <input {...register('brand')} type="text" className="h-10 border border-slate-900 p-4 rounded-md"></input>
            {errors.brand && <p className="text-red-500">{errors.brand.message}</p>}
        </div>
        <div className="flex flex-col gap-1">
            <label className="text-slate-900 text-[14px]">Modèle</label>
            <input {...register('model')} type="text" className="h-10 border border-slate-900 p-4 rounded-md"></input>
            {errors.model && <p className="text-red-500">{errors.model.message}</p>}
        </div>
        <div className="flex flex-col gap-1">
            <label className="text-slate-900 text-[14px]">Immatriculation du véhicule</label>
            <input {...register('registration')} type="text" className="h-10 border border-slate-900 p-4 rounded-md"></input>
            {errors.registration && <p className="text-red-500">{errors.registration.message}</p>}
        </div>
        <div className="flex flex-col gap-1">
            <label className="text-slate-900  text-[14px]">Date de 1ere Immatriculation</label>
            <input {...register('date_registration')} type="date" className="h-10 border border-slate-900 p-4 rounded-md"></input>
            {errors.date_registration && <p className="text-red-500">{errors.date_registration.message}</p>}
        </div>
        <div className="flex flex-col gap-1">
            <label className="text-slate-900  text-[14px]">Type d'énergie du vehicule</label>
            <input {...register('energy')} type="text" className="h-10 border border-slate-900 p-4 rounded-md"></input>
            {errors.energy && <p className="text-red-500">{errors.energy.message}</p>}
        </div>
        <div className="flex flex-col gap-1">
            <label className="text-slate-900  text-[14px]">Couleur du véhicule</label>
            <input {...register('color')} type="text" className="h-10 border border-slate-900 p-4 rounded-md"></input>
            {errors.color && <p className="text-red-500">{errors.color.message}</p>}
        </div>
        <div className="flex flex-col gap-1">
            <label className="text-slate-900  text-[14px]">Nombre de place</label>
            <input {...register('place')} type="text" className="h-10 border border-slate-900 p-4 rounded-md"></input>
            {errors.place && <p className="text-red-500">{errors.place.message}</p>}
        </div>
        
        <button type="submit" className="bg-sky-600 border border-sky-800 ease-in-out duration-300 px-3 py-1.5 text-white my-3 rounded-md hover:bg-sky-800  hover:border-sky-600">Ajouter</button>
       
    </form>
  )
}
