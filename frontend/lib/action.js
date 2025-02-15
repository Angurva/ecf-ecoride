'use server'


import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import React from 'react'

export async function action() {

   
    const actionTest =  () =>    {
        revalidatePath('/dashboard')
        redirect('/dashboard')
    }

    return actionTest
    
}
