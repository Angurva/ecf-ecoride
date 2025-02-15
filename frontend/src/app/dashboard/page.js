'use client'

import React,{useContext, useEffect, useState} from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { UserContext } from '../../../components/UserContext';


import { fetcherGET } from '../../../lib/fetchers';

import Admin from '@/components/Dashboard/Admin';
import User from '@/components/Dashboard/User';
import Employee from '@/components/Dashboard/Employee';


export default function Dashboard() {

  const { data: session } = useSession()

  const {userCtx, setUserCtx, rolesCtx, setRolesCtx, carsCtx, setCarsCtx, stateCtx, setStateCtx,carpoolingPassengerCtx, setCarpoolingPassengerCtx,
    carpoolingDriverCtx, setcarpoolingDriverCtx, setNoteCtx } = useContext(UserContext)

  const router = useRouter()
/*
  const [ roles, setRoles ] = useState([])
  const [ cars, setCars ] =useState([])  
  const [ user, setUser ] = useState({})*/

  
  useEffect(()=>{

    if(!session)
    {
      router.push('/login')
    }

  },[session, router])

  useEffect(()=>{

    if(session || stateCtx)
    {

      const request = async () =>{

        const data = await fetcherGET(`http://localhost:8000/api/user/${session?.user.id}`)
        console.log("RESPONSEDATAUSER", data)
        if (data)
        {
          setUserCtx(data.user)
          setRolesCtx(data.roles)
          setCarsCtx(data.cars)
          setNoteCtx(data.note)
          setCarpoolingPassengerCtx(data.carpoolings_passenger),
          setcarpoolingDriverCtx(data.carpoolings_driver)
         
        }
        
      }

      request()
      setStateCtx(false)
   
    }

  }, [stateCtx])

  

  function workspace (){

    console.log("ROLES", rolesCtx)
    console.log("CARS", carsCtx)
    console.log("USER", userCtx)
    console.log("CARPOOLINGS_PASSENGER",carpoolingPassengerCtx)
    console.log("CARPOOLINGS_DRIVER",carpoolingDriverCtx)

    if (['passenger', 'driver'].some((element) => rolesCtx.includes(element)))
    {
      return <User /> //roles={roles} user={user} cars={cars}
    }
    if (['employee'].some((element) => rolesCtx.includes(element)))
    {
      return <Employee/>
    }
    if (['administrator'].some((element) => rolesCtx.includes(element)))
    {
      return <Admin />
    }
  
  }
 
  return (
    <section className="max-w-7xl mx-auto p-6 flex flex-col items-center justify-center gap-5 text-gray-700">
    
      {
        session &&
        
        (
          workspace()
          
        )
        
         
      }
    
    </section>
  )
}
