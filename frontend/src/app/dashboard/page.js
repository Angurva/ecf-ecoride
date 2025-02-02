import React from 'react'

import Admin from '@/components/Dashboard/Admin';
import User from '@/components/Dashboard/User';
import Employee from '@/components/Dashboard/Employee';

export default function Dashboard() {


  return (
    <section className="max-w-7xl mx-auto p-6 flex flex-col items-center justify-center gap-5 text-gray-700">
      <User/>
    </section>
  )
}
