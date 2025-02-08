'use server'

import React from 'react'

const fetchData = async (username,email, password) => {

    const req = await fetch("http://127.0.0.1:8000/api/register",{
        method: "POST",
        body: JSON.stringify({username:username, email:email, password:password }),
        headers:{
            "Content-Type" : "application/json",
            Accept: "application/json"
        }
    })

    const data = await req.json()

    return data
}

export default fetchData


export const fetchDataGET = async (url) => {
    const req = await fetch(url,{
        method:"GET",
        headers:{
            "Content-Type" : "application/json",
            Accept : "application/json",
        }
    })

    const data = await req.json()

    return data
}