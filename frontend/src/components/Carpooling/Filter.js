import React, { useState, useReducer, useEffect } from 'react'

const initialState = {}


function compare(a,b){
    if (a.price > b.price){
        return 1;
    }
    if( a.price < b.price )
    {
        return -1;
    }
    return 0;
}

function filterReducer(state, action) {
    if(action.type === 'PRICE_FILTER'){
        return {
            ...state,
            state: action.payload.dataFilter,
            
        }
        
    }
    if(action.type === 'NOTE_FILTER'){
        return {
            ...state,
            datas: state.sort(compare(a.note,b.note))
        }

    }
    if(action.type === 'HOUR_FILTER'){


        return {
            ...state,
            state: action.payload.dataFilter
        }
    }
    return state
    
}

export default function Filter({data, sendDataToFilter}) {

  const [ state, dispatch ] = useReducer(filterReducer,data) 

  const handleHour = () => {
    console.log("DATA FILTER", data)
    const dataSort = data.sort(function(a,b){
      return a.departure_time.localeCompare(b.departure_time)
    })  

    //console.log("DATASORT",dataSort)
    dispatch( ({ type: 'HOUR_FILTER', payload: { dataFilter: dataSort  } }) )

    console.log("NEW STATE",state)
    sendDataToFilter(state)
  }
  
  const handlePrice = () => {

    console.log("DATA FILTER", data)
    const dataSort = data.sort(function(a,b){
      return a.price.localeCompare(b.price)
    })  

    //console.log("DATASORT",dataSort)
    dispatch( ({ type: 'PRICE_FILTER', payload: { dataFilter: dataSort  } }) )

    console.log("NEW STATE",state)
    sendDataToFilter(state)
  }

  return (
    <div className="box-border w-full shadow-md border border-sky-600 rounded-md p-2 bg-white">
      <h5 className="text-sky-600 text-center md:text-xl mb-2">Filtres</h5>
      <hr className="m-2 border-t border-sky-600"/>
      <div className="flex items-center gap-2 p-2 text-sm md:text-base">
          <input 
            type="radio"
            name="filterRadio"
            value="price"
            checked=""
            onChange={handlePrice}
            className=""  />
          <label htmlFor="" className="text-gray-600">Prix</label>
      </div>
      <div className="flex items-center gap-2 p-2 text-sm md:text-base">
          <input 
            type="radio"
            name="filterRadio"
            value='note'
            checked=""
            onChange={()=>dispatch({type: 'NOTE_FILTER'})}
            className=""
          />
          <label htmlFor="" className="text-gray-600">Note</label>
      </div>
      <div className="flex items-center gap-2 p-2 text-sm md:text-base">
          <input 
            type="radio"
            name="filterRadio" 
            value="hour"
            checked=""
            onChange={handleHour}
            className=""
          />
          <label htmlFor="" className="text-gray-600">Heure</label>
      </div>
     
      <div className="flex items-center gap-2 p-2 text-sm md:text-base">
          <input type="checkbox" className="" name="checkboxEcology" />
          <label htmlFor="" className="text-gray-600">Ecology</label>
      </div>
    </div>       
  )
}
