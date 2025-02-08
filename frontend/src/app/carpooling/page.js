"use client"

import React, { useEffect, useReducer, useRef, useState } from 'react';

import Searchbar from '@/components/Searchbar/Searchbar';


import CardCarpooling from '@/components/Carpooling/CardCarpooling';
import Filter from '@/components/Carpooling/Filter';
import filterReducer from '../../../lib/filters.reducer';


export default function CarpoolingPage() {



const [dataSearch, setDataSearch] = useState([])

const [ dataSecond, setDataSecond] = useState([])

const [ sorted, setSorted ] = useState("hour")

const [ isChecked, setIsChecked ] = useState(false)

function handleDataSearch(data){
    
    setDataSearch(data)
    setDataSecond(data)
}


const sortByHour = ()=>{

    //console.log("DATA FILTER", dataSearch)
    const dataSort = dataSearch.slice().sort(function(a,b){
      return a.departure_time.localeCompare(b.departure_time)
    })  

    //console.log("NEW STATE",dataSort)
    //setDataSearch(dataSort)
    setSorted("hour")
    //handleDataSearch(dataSort)
    setDataSearch(dataSort)

}
const sortByPrice = ()=>{

    const dataSort = dataSearch.slice().sort(function(a,b){
      return a.price.localeCompare(b.price)
    })  
    setSorted("price")
    //handleDataSearch(dataSort)
    setDataSearch(dataSort)
}

const handleCheck = () => {

    setIsChecked(!isChecked)

}

useEffect(()=>{

    if (isChecked)
    {
        const data = dataSearch.filter((element)=>element.energy === "electrique")
        setDataSearch(data)
    }else{
        
        setDataSearch(dataSecond)
    }

},[isChecked])

/*const handleChangeHour = ()=>{
    console.log("DATA FILTER", dataSearch)
    const dataSort = dataSearch.sort(function(a,b){
      return a.departure_time.localeCompare(b.departure_time)
    })  

    console.log("DATASORT",dataSort)
    dispatch( { type: 'HOUR_FILTER', payload: { datasorted: dataSort  } })

    console.log("NEW STATE",state)
    setDataSearch(state.dataSort)
}*/

  return (
    <section className="text-gray-900 md:container md:max-w-7xl md:mx-auto p-6 my-6">
        <div className="w-full flex flex-col items-center">
            <Searchbar sendDataCarpooling={handleDataSearch}/>
            {
                dataSearch.length > 0 ? 
                <div className="w-full grid grid-flow-col py-5 gap-2">
                    <div className="md:col-span-4 col-span-3 row-end-2 flex p-2">
                    <div className="box-border w-full shadow-md border border-sky-600 rounded-md p-2 bg-white">
                    <h5 className="text-sky-600 text-center md:text-xl mb-2">Filtres</h5>
                    <hr className="m-2 border-t border-sky-600"/>
                    <div className="flex items-center gap-2 p-2 text-sm md:text-base">
                        <input 
                            type="radio"
                            name="filterRadio" 
                            value="hour"
                            checked={sorted === "hour"}
                            onChange={sortByHour}
                            className=""
                        />
                        <label htmlFor="" className="text-gray-600">Heure</label>
                    </div>
                    <div className="flex items-center gap-2 p-2 text-sm md:text-base">
                        <input 
                            type="radio"
                            name="filterRadio"
                            value="price"
                            checked={sorted === "price"}
                            onChange={sortByPrice}
                            className=""  />
                        <label htmlFor="" className="text-gray-600">Prix</label>
                    </div>
                    <div className="flex items-center gap-2 p-2 text-sm md:text-base">
                        <input 
                            type="radio"
                            name="filterRadio"
                            value='note'
                            //checked=""
                            //onChange={''}
                            className=""
                        />
                        <label htmlFor="" className="text-gray-600">Note</label>
                    </div>
                    
                    
                    <div className="flex items-center gap-2 p-2 text-sm md:text-base">
                        <input 
                            type="checkbox" 
                            className="" 
                            name="checkboxEcology" 
                            checked={isChecked} 
                            onChange={handleCheck}
                        />
                        
                        <label htmlFor="" className="text-gray-600">Ecology{isChecked}</label>
                    </div>
                    </div>   
                    </div>
                    <div className="md:col-span-6 col-span-9 p-2 flex flex-col row-span-5 gap-4"> 
                        {
                            dataSearch.map((cardCarpooling)=>(

                                <CardCarpooling data={cardCarpooling} key={cardCarpooling.id}/>

                            ))
                        }
                    
                    </div>
                </div>
                :
                <div className="my-3 italic text-lg">Veuillez saisir les villes de départ et d'arrivée, ainsi que la date de votre voyage</div>
            }
           
        </div>
    </section>
  )
}
