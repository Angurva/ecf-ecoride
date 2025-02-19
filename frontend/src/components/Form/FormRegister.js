import React from 'react'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { fetcherPOST } from '../../../lib/fetchers';

const formSchema = z.object({
    username: z.string().min(3,{message: "le pseudo doit faire minimum 3 caractères" }),
    email: z.string().min(1,{ message: "Ce champs est requis"}).email("format non valide").max(254,{message: "Votre email dépasse les 254 caractères"}),
    password: z.string().min(12,{message: "le mot de passe ne doit pas faire moins de 12 caractères"}).regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'), {
        message:
            'le mot de passe doit contenir une majuscule, une miniscule et un chiffre, '
    }),
    confirmPassword: z.string().min(12),
}).refine(({confirmPassword, password}) => {
    return confirmPassword === password
}, {
    message: "les mot de passent ne correspondent pas",
    path: ["confirmPassword"]
})



export default function FormRegister() {

    const router = useRouter()

    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            username: "",
            email: "",
            password: "",
        }
    })

    async function onSubmitTo(values){
        
        try{

            const params = {
                username: values.username,
                email: values.email,
                password: values.password,
            }

            const response = await fetcherPOST("http://localhost:8000/api/register", params)
           
            //console.log("RESPONSE", response)
            if (response)
            {
                 router.push("/login")

                toast.success("Compte créé avec succès")
            }
            else{
                toast.error("il ya eu une erreur lors de votre inscription")
            }
        }
        catch(error){
            toast.error(error.message)
        }
    }

  return (
    <form onSubmit={handleSubmit(onSubmitTo)} className="w-[400px] flex flex-col gap-3 bg-white p-5 rounded-md shadow-md">
        <h2 className="text-2xl">Inscription</h2>
        <hr className=' border-gray-400'/>
        <div className="flex flex-col gap-1">
            <label className="text-slate-900 text-[14px]">Nom d'utilisateur</label>
            <input {...register('username')} type="text" className="h-10 border border-slate-900 p-4 rounded-md"></input>
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}
        </div>
        <div className="flex flex-col gap-1">
            <label className="text-slate-900 text-[14px]">Email</label>
            <input {...register('email')} type="email" className="h-10 border border-slate-900 p-4 rounded-md"></input>
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col gap-1">
            <label className="text-slate-900 text-[14px]">Mot de passe </label>
            <input {...register('password')} type="password" className="h-10 border border-slate-900 p-4 rounded-md"></input>
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        <div className="flex flex-col gap-1">
            <label className="text-slate-900  text-[14px]">Confirmation du mot de passe</label>
            <input {...register('confirmPassword')} type="password" className="h-10 border border-slate-900 p-4 rounded-md"></input>
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
        </div>
        
        <button type="submit" className="bg-sky-600 border border-sky-800 ease-in-out duration-300 px-3 py-1.5 text-white my-3 rounded-md hover:bg-sky-800  hover:border-sky-600">Inscription</button>
        <a onClick={()=>router.push("/login")} href="#" className=" text-red-500 hover:text-red-900"> Déjà un compte ? Connectez-vous</a>
    </form>
  )
}
