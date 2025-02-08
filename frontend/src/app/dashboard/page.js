'use client'

import React,{useEffect, useState} from 'react'
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid'

import { fetcherGET } from '../../../lib/fetchers';

import Admin from '@/components/Dashboard/Admin';
import User from '@/components/Dashboard/User';
import Employee from '@/components/Dashboard/Employee';


export default function Dashboard() {

  const { data: session } = useSession()

  const router = useRouter()

  const [roles, setRoles] = useState([])

  
  useEffect(()=>{

    if(!session)
    {
      router.push('/login')
    }

  },[session, router])

  useEffect(()=>{

    
    if(session)
    {

      const request = async () =>{

        const data = await fetcherGET(`http://localhost:8000/api/roles-user/${session?.user.id}`)
        if (data)
        {
          setRoles(data)
        }
        
      }

      request()
   
    }

  }, [])

  function workspace (){

    if (['passenger', 'driver'].some((element) => roles.includes(element)))
    {
      return <User data={roles}/>
    }
    if (['employee'].some((element) => roles.includes(element)))
    {
      return <Employee/>
    }
    if (['administrator'].some((element) => roles.includes(element)))
    {
      return <Admin />
    }
   
  }
 
  return (
    <section className="max-w-7xl mx-auto p-6 flex flex-col items-center justify-center gap-5 text-gray-700">

      <div className="text-black">test{session?.user.id}</div>
    
      {
        session &&
        
        (
          workspace()
          
        )
        
         
      }
    
    </section>
  )
}
