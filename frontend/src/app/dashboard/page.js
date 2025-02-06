'use client'

import React,{useEffect, useState} from 'react'
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid'

import { fetchDataGET } from '../../../lib/fetchData';

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
    
      const fetchData = async ()=>{

        const response = await fetchDataGET(`http://localhost:8000/api/roles-user/${session?.user.id}`)

        console.log("RESPONSE", response)
        if(response)
        {
          setRoles(response)
        }
      } 
      /*
     const fetchData = async ()=>{

        const response = await fetch(`http://localhost:8000/api/roles-user/${session?.user.id}`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json"
          }
        })
        const json = await response.json()

        console.log("DATA",json)
        setRoles(json)    
       
      }*/

      fetchData()
      /*
      const data = fetchDataGET(`http://localhost:8000/api/roles-user/${session?.user.id}`)
      console.log("DATA",data)
      setRoles(data)
      */
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
