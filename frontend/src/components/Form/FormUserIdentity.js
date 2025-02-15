import React,{ useContext} from 'react'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserContext } from '../../../components/UserContext';

import { fetcherPATCH } from '../../../lib/fetchers';
import { useSession } from 'next-auth/react';

const formSchema = z.object({
    username: z.string().optional(),
    firstname: z.string().optional(),
    lastname: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
    roles: z.string().array().optional(),
    photo:z.any().optional()
    
})

export default function FormUserIdentity({sendStateModal, stateModal }) {

    const router = useRouter()

    const { userCtx, rolesCtx, stateCtx, setStateCtx } = useContext(UserContext)

    const {data: session} = useSession()


    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            username: userCtx.username,
            firstname: userCtx.firstname || "" ,
            lastname: userCtx.lastname || "",
            phone:userCtx.phone || "",
            address: userCtx.address || "",
            roles: rolesCtx,
            photo:null,
        }
    })

    async function onSubmitTo(values){
        
        try{

            console.log("VALUES_SUBMIT",values)
            const params = {

                username: values.username.toLowerCase(),
                firstname: values.firstname.toLowerCase(),
                lastname: values.lastname.toLowerCase(),
                phone: values.phone,
                address: values.address.toLowerCase(),
                photo: values.photo[0],
                roles: values.roles,
            }

            const response = await fetcherPATCH(`http://localhost:8000/api/user/${session?.user.id}`, params)
           
            if (response)
            {
                sendStateModal(!stateModal)
                setStateCtx(true)
                toast.success("Modification réussi")  
                
                
            }
            else{
                toast.error("La modification a échoué ")
            }
        }
        catch(error){
            toast.error(error.message)
        }
    }


  return (
    <form onSubmit={handleSubmit(onSubmitTo)} className="w-[600px] flex flex-col gap-3 bg-white p-5 rounded-md shadow-md">
        
            <div className="flex flex-col gap-1 grow">
                <label className="text-slate-900 text-[14px]">Nom d'utilisateur</label>
                <input {...register('username')} type="text" className="h-10 border border-slate-900 p-2 rounded-md"></input>
                {errors.username && <p className="text-red-500">{errors.username.message}</p>}
            </div>
            <div className="flex gap-2 justify-between">
                <div className="flex flex-col gap-1 w-full">
                    <label className="text-slate-900 text-[14px]">Prénom</label>
                    <input {...register('firstname')} type="text" className="h-10 border  border-slate-900 rounded-md p-2"></input>
                    {errors.firstname && <p className="text-red-500">{errors.firstname.message}</p>}
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <label className="text-slate-900 text-[14px]">Nom</label>
                    <input {...register('lastname')} type="text" className="h-10 border border-slate-900 rounded-md p-2"></input>
                    {errors.lastname && <p className="text-red-500 text-center">{errors.lastname.message}</p>}
                </div>
            </div>

            <div className="flex gap-2">
                <div className="flex flex-col gap-1 grow">
                    <label className="text-slate-900 mx-1 text-[14px]">Téléphone</label>
                    <input {...register('phone')} type="text" className="h-10 border border-slate-900 rounded-md p-2"></input>
                    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-slate-900 mx-1 text-[14px]">Photo</label>
                    <input {...register('photo')} type="file" accept="image/png, image/jpeg, image/jpg" className="h-10 border border-slate-900 rounded-md p-2"></input>
                    {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
                </div>
               
            </div>
             
            <div className="flex flex-col gap-1">
                <label className="text-slate-900 mx1 text-[14px]">Adresse</label>
                <input {...register('address')} type="text" className="border border-slate-900 rounded-md p-2"></input>
                {errors.address && <p className="text-red-500">{errors.address.message}</p>}
            </div>
        
       
            <div className="flex flex-col gap-1">
                <label className="text-slate-900 mx-1 text-[14px]">Roles</label>
                <select {...register('roles')} className=" border border-slate-900 p-2 bg-slate-50 rounded-md" multiple size={2}>
                    <option value="passenger">Passager</option>
                    <option value="driver">Chauffeur</option>
                </select>
                {errors.roles && <p className="text-red-500">{errors.roles.message}</p>}
            </div>
     
        
        
        <button type="submit" className="bg-sky-600 border border-sky-800 ease-in-out duration-300 px-3 py-1.5 text-white my-3 rounded-md hover:bg-sky-800  hover:border-sky-600">Ajouter</button>
       
    </form>
  )
}
