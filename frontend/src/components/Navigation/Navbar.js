"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import menuAuth from './menuAuth';
import menuNav from './menuNav';

export default function Navbar() {

  const [ isOpen, setIsOpen ] = useState(true)
  const pathname = usePathname()

  useEffect(()=>{

    setIsOpen(!isOpen)

  }, [pathname])

  const handleClick = () => {

    setIsOpen(!isOpen)
  }


  return (
    <nav className="bg-sky-500 max-w-7xl mx-auto p-6 flex items-center justify-between md:justify-normal md:gap-10">
      <div className="">Ecoride</div>
    </nav>
  )
}
