import React from 'react';

import FormRegister from '@/components/Form/FormRegister';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <section className="text-gray-900 md:container md:max-w-[480px] md:mx-auto p-6 md:mt-10 md:my:0 my-6 h-full md:flex md:flex-col md:justify-center">
      <form>
        <div className="border border-slate-300 flex flex-col shadow-md bg-white gap-3 p-6">
          <h1 className="text-xl">Inscription</h1>
          <hr className="border-t border-slate-500 my-2"/>
          <div className="w-full flex flex-col justify-start gap-1">
            <label htmlFor="username" className="text-[14px] font-semibold mx-1">Nom&nbsp;d'utilisateur&nbsp;:</label>
            <input id="username" type="text" className="h-8 border border-slate-400 rounded-md px-1 py-1 focus:outline-none" />
          </div>
          <div className="w-full flex flex-col justify-start gap-1">
            <label htmlFor="email" className="text-[14px] font-semibold mx-1">Email&nbsp;:</label>
            <input id="email" type="email" className="h-8 border border-slate-400 rounded-md px-1 py-1 focus:outline-none" />
          </div>
          <div className="w-full flex flex-col justify-start gap-1">
            <label htmlFor="password" className="text-[14px] font-semibold mx-1">Mot&nbsp;de&nbsp;passe&nbsp;:</label>
            <input id="password" type="password" className="h-8 border border-slate-400 rounded-md px-1 py-1 focus:outline-none" />
          </div>
          <div className="w-full flex flex-col justify-start gap-1">
            <label htmlFor="confirmPassword" className="text-[14px] font-semibold mx-1">Confirmation&nbsp;du&nbsp;mot&nbsp;de&nbsp;passe&nbsp;:</label>
            <input id="confirmPassword" type="password" className="h-8 border border-slate-400 rounded-md px-1 py-1 focus:outline-none" />
          </div>
          <hr className="border-t border-slate-500 mt-5"/>
          <Link href="/login"><span className="text-sm font-semibold text-red-600">Déjà un compte? se connecter</span></Link>
          <div className="flex justify-between mt-5">
            <button className="border border-sky-600 px-2 py-1 rounded-md text-sky-600 hover:text-slate-100 hover:bg-sky-600">Annuler</button>
            <button className="border border-sky-600 px-2 py-1 rounded-md text-sky-600 hover:text-slate-100 hover:bg-sky-600">s'enregistrer</button>
          </div>
        </div>
      </form>
    </section>
  )
}
