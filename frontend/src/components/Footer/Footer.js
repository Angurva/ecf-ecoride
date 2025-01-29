import Link from 'next/link';
import React from 'react';
import { PiCopyleftThin } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="bg-sky-600 w-full container max-w-7xl mx-auto px-6 p-3">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
                <Link href="/mentions-legales">Mentions Légales</Link>
                <Link href="mailto:contact@ecoride.fr">contact@ecoride.fr</Link>
            </div>
            <span className="flex items-center gap-1">
                <PiCopyleftThin className="text-[14px]"/> 
                <span className="text-[12px] italic">Lehanann | 2024.</span> 
            </span>
        </div>
    </div>
  )
}
