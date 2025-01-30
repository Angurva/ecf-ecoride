"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { RiMenuFill, RiCloseLargeLine, RiDashboardFill } from 'react-icons/ri';
import { MdOutlineContactSupport, MdDirectionsCar, MdOutlineHome } from 'react-icons/md';

export default function Navbar() {

  const menuNav = [
    { id:1, name:'Home', path: '/', icon: MdOutlineHome },
    { id:2, name:'Carpooling', path: '/carpooling', icon: MdDirectionsCar },
    { id:3, name:'Contact', path: '/contact', icon: MdOutlineContactSupport }
  ]
  const menuAuth = [
    { id:1, name:'Login', path: '/login' },
    { id:2, name:'Register', path: '/register' },
  ]

  const [ isOpen, setIsOpen ] = useState(true)
  const pathname = usePathname()

  useEffect(()=>{

    setIsOpen(!isOpen)

  }, [pathname])


  return (
    <nav className="bg-sky-600 max-w-7xl mx-auto p-6 flex items-center justify-between md:justify-normal md:gap-10">
      <div className="md:text-4xl">Ecoride</div>
      <div className="md:flex items-center md:w-full">
        {
          isOpen 
          ?
            <button onClick={()=>setIsOpen(!isOpen)} className="cursor-pointer w-7 md:hidden" aria-label="toggle button">
              <RiCloseLargeLine className="text-xl"/>
            </button>
          :
            <button onClick={()=>setIsOpen(!isOpen)} className="cursor-pointer w-7 md:hidden" aria-label="Close button">
                <RiMenuFill className="text-xl" />
            </button>
        }
        <ul id="toggled menu" aria-expanded={isOpen} className={`w-full absolute top-full left-0 -z-10
          border-b border-sky-500 flex flex-col pl-6 pb-6 bg-sky-600 
          md:static md:z-10 md:w-full md:transform-none md:border-none md:flex-row md:items-center md:gap-5 md:pl-0 md:pb-0
          transform ${ isOpen ? `-translate-y-0`: `-translate-y-full`}`} >
          {
            menuNav.map((item)=>(
              <li key={item.id} className="">
                <Link href={item.path} className="flex items-center gap-1 hover:text-amber-300">
                  <item.icon className=""/>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))
          }
          <li>
            <Link href="/dashboard" className="flex items-center gap-1 hover:text-amber-300">
              <RiDashboardFill/>
              <span>Dashboard</span>
            </Link>
          </li>
          <hr className="md:hidden mt-4 mx-10"/>

          <div className="mt-4 flex flex-col gap-1 md:ml-auto md:flex md:flex-row md:items-center md:mt-0 md:gap-5 ">
            {
              menuAuth.map((item)=>(
                <li key={item.id}>
                  <Link href={item.path} className="hover:text-amber-300">
                    <span>{item.name}</span>
                  </Link>
                </li>
                
              ))
            }
          </div>
          <div>
            <Link href="#" className="hover:text-amber-300">
              <span>Logout</span>
            </Link>
            
          </div>
        </ul>

      </div>
    </nav>
  )
}
