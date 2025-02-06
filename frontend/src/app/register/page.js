"use client"
import React from 'react';

import FormRegister from '@/components/Form/FormRegister';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <section className="text-gray-900 md:container md:max-w-[480px] md:mx-auto p-6 md:mt-10 md:my:0 my-6 h-full md:flex md:flex-col md:justify-center">
     <FormRegister/>
    </section>
  )
}
