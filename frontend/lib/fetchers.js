'use server'

const myHeaders = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
})


export async function fetcherSEARCH(url, params){

    
    try{

        const response = await fetch(url + new URLSearchParams(params),{
            method: "GET",
            headers: myHeaders,
            mode: "cors",
            cache: "no-store",
        })

        if(!response.ok)
        {
            const error = await response.json()
            return {
                errors: error.errors,
                status: response.status
            }
        } 
        else{
            const data = await response.json()
            return {
                data: data,
                status: response.status
            }  

        }
    }
    catch(error) {
        console.error(error)
    }

}
export async function fetcherGET(url, params){

    
    try{

        const response = await fetch(url + new URLSearchParams(params),{
            method: "GET",
            headers: myHeaders,
            mode: "cors",
            cache: "no-store",
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
            cache: "no-store",
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


export async function fetcherPATCH(url, params){

    try{
        console.log("PARAMS", params)
        const response = await fetch(url, {
            method:'PATCH',
            body: JSON.stringify(params),
            headers: myHeaders,
            mode: "cors",
            cache: "no-store",
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

export async function fetcherDELETE(url){

    try{

        const response = await fetch(url,{
            method: "DELETE",
            headers: myHeaders,
            mode: "cors",
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


