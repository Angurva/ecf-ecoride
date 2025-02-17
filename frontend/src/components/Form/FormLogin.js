"use client"

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn, useSession } from 'next-auth/react';


const formSchema = z.object({
    email: z.string().min(1,{ message: "Ce champs est requis"}).email("format non valide").max(254,{message: "Votre email dépasse les 254 caractères"}),
    password: z.string().min(6, {message: "le mot de passe doit contenir au minimum 6 caractères"}),
})


export default function FormLogin() {

    const router = useRouter()

    const {data: session, status } = useSession()

    useEffect(()=>{
      if(session)
      {
        router.push("/dashboard")
      }

    }, [session, router])

    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            email: "",
            password: "",
        }
    })

    async function onSubmitTo(values){
        try{
            const response = await signIn("credentials",{
              email: values.email,
              password: values.password,
              redirect: false
            })

            
            console.log("RESPONSE",response.ok)
            if (!response.error)
            {
              router.push("/dashboard")            
              toast.success("Vous êtes connecté!")
            }
            else{
              
                toast.error("Mauvais identifiants")
            }
        }
        catch(error){
            toast.error(error.message)
        }
    }

  return (
    <form onSubmit={handleSubmit(onSubmitTo)} className="w-[400px] flex flex-col gap-3 bg-white p-5 rounded-md shadow-md">
        <h2 className="text-2xl">Connexion</h2>
        <hr className=' border-gray-400'/>
        
        <div className="flex flex-col gap-1">
            <label className="text-slate-900 text-[14px]">Email</label>
            <input {...register('email')} type="email" className="h-10 border border-slate-900 p-4 rounded-md"></input>
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col gap-1">
            <label className="text-slate-900 text-[14px]">Mot de passe</label>
            <input {...register('password')} type="password" className="h-10 border border-slate-900 p-4 rounded-md"></input>
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        <button type="submit" className="bg-sky-600 px-3 py-1.5 text-white my-3 rounded-md hover:bg-sky-800">Connexion</button>
        <a onClick={()=>router.push("/register")} href="#" className=" text-red-500 hover:text-red-900"> Pas de compte ? Inscrivez-vous</a>
    </form>
  )
}
