import React, { useState,useEffect } from 'react'
import { fetcherGET, fetcherPOST } from '../../../lib/fetchers'

import { RiCheckFill, RiCloseCircleLine, RiCloseLine } from "react-icons/ri";
import { useSession } from 'next-auth/react';

const API = process.env.BACKEND_URL

export default function Employee() {

  const [ opinionsPending, setOpinionPending ] = useState([])

  const [ state, setState ] = useState(false)
  
  const {data: session } = useSession()

  async function fetcher(){

    try{
      const response = await fetcherGET("http://127.0.0.1:8000/api/opinion/pending")

      if(response)
      {
        setOpinionPending(response)
        //setState(false)
      }
      
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{

    fetcher()

  },[session, state])

  function splitText(text){
   
    if(text.length > 30)
    {
     
       const textSplit = text.substring(0,30)
       return textSplit.concat(' ...')
    }
   return text

  }

    const handleClick = async (e)=>{
     
    try{
        console.log("UPDATE STATUS",e.currentTarget.value, e.currentTarget.id)
      const params = {
        status: e.currentTarget.value
      }
    const response = await fetcherPOST(`http://127.0.0.1:8000/api/opinion/update/status/${e.currentTarget.id}`, params)
    if(response)
    {
      setState(true)
    }
    }catch(error){
      console.log(error)
    }
   
    
  }

   
  return (
    <section className=" w-full border border-slate-700 p-6 flex gap-5 rounded-md flex-col">
      <h3 className="text-2xl font-semibold my-4 ml-4">Mon Espace</h3>
      <article className="flex flex-col p-2 w-full">
        
        <div className="border border-slate-900 rounded-md shadow-md bg-slate-200">
          <table className=" w-full ">
            <thead className="w-full p-4 border-b border-slate-600">
              <tr className="flex justify-around p-2 text-center">
                <th className="text-[0.75rem] font-extrabold tracking-[1.2px] uppercase py-2 px-1 w-1/5">N° du covoiturage</th>
                <th className="text-[0.75rem] font-extrabold tracking-[1.2px] uppercase py-2 px-1 w-1/5">participant</th>
                <th className="text-[0.75rem] font-extrabold tracking-[1.2px] uppercase py-2 px-1 w-1/5">note</th>
                <th className="text-[0.75rem] font-extrabold tracking-[1.2px] uppercase py-2 px-1 w-1/5">avis</th>
                <th className="text-[0.75rem] font-extrabold tracking-[1.2px] uppercase py-2 px-1 w-1/5">actions</th>
              </tr>
            </thead>
            <tbody className="w-full p-4">
              {
                opinionsPending.map((opinion,index) => (
                  <tr className={`flex justify-around p-2 text-center max-w-full
                    ${index % 2 === 0 ? 'bg-blue-50':'bg-gray-50'} `} 
                    key={opinion.id}>
                    <td className="py-2 px-1 w-1/5">{opinion.id}</td>
                    <td className="py-2 px-1 w-1/5">test</td>
                    <td className="py-2 px-1 w-1/5">{opinion.note}</td>
                    <td className="py-2 px-1 w-1/5 group flex relative md:mx-5 justify-center">
                      <span className="">{splitText(opinion.comment)}</span>
                    </td>
                    <td className="py-2 px-1 w-1/5 flex justify-evenly ">
                    <button
                      type="button"
                      value='accepted'
                      id={opinion.id}
                      onClick={handleClick}
                      className="
                        flex justify-center items-center rounded-lg
                        border-2 border-green-400  text-green-400 font-bold text-lg w-8 h-8">
                        <RiCheckFill/>
                    </button>
                    <button
                      type="button"
                      value='refused'
                      id={opinion.id}
                      onClick={handleClick}
                      className="
                        flex justify-center items-center p-1 rounded-lg
                        border-2 border-red-400 text-red-400 font-bold text-lg w-8 h-8"><RiCloseLine/></button>
                    </td>                 
                  </tr>
                ))
              }
              
            </tbody>
          </table>
              
        </div>
        
      </article>
    </section>
  )
}
