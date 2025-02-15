"use client"

import React,{ createContext, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({children}) => {

    const [userCtx, setUserCtx] = useState({})
    const [rolesCtx, setRolesCtx] = useState([])
    const [carsCtx, setCarsCtx ] = useState([])
    const [noteCtx, setNoteCtx ] = useState([])
    const [carpoolingPassengerCtx, setCarpoolingPassengerCtx ] = useState([])
    const [carpoolingDriverCtx, setcarpoolingDriverCtx ] = useState([])
    const [stateCtx, setStateCtx] = useState(false)

  return (
    <UserContext.Provider value={
      { userCtx, setUserCtx, 
        rolesCtx, setRolesCtx, 
        carsCtx, setCarsCtx, 
        stateCtx, setStateCtx,
        noteCtx, setNoteCtx,
        carpoolingPassengerCtx, setCarpoolingPassengerCtx,
        carpoolingDriverCtx, setcarpoolingDriverCtx }}>
        {children}
    </UserContext.Provider>
   
  )
}

export { UserProvider, UserContext }
