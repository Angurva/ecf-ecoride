'use server'

const myHeaders = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
})


export async function fetcherGET(url, params){

    
    try{

        const response = await fetch(url + new URLSearchParams(params),{
            method: "GET",
            headers: myHeaders,
            mode: "cors",
            cache: "default",
          })

        if(!response.ok)
        {
            throw new Error ("!!! ERROR RESPONSE NOT OK !!! ")
        } 
        
        const data = await response.json()

        return data

    }
    catch(error) {
        console.error(error)
    }
   
}

export async function fetcherPOST(url, params){

    try{
        console.log("PARAMS", params)
        const response = await fetch(url, {
            method:'POST',
            body: JSON.stringify(params),
            headers: myHeaders,
            mode: "cors",
            cache: "default",
        })

        if(!response.ok)
        {
            throw new Error ("!!! ERROR RESPONSE NOT OK !!! ")
        } 
        
        const data = await response.json()
        return data
    }
    catch (error){
        console.log(error)
    }
}
/*
export async function fetchGET(url){

    
    try{

        const response = await fetch(url,{
            method: "GET",
            headers: myHeaders,
            mode: "cors",
            cache: "default",
          })

        if(!response.ok)
        {
            throw new Error ("!!! ERROR RESPONSE NOT OK !!! ")
        } 
        
        const data = await response.json()

        return data

    }
    catch(error) {
        console.error(error)
    }
   
}*/