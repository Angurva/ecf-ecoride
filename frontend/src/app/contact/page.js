import React from 'react'

import Link from 'next/link';

export default function page() {
  return (
    <section className="text-gray-900 md:container md:max-w-[800px] md:mx-auto p-6 md:mt-10 md:my:0 my-3 h-full md:flex md:flex-col md:justify-center">
      <form>
        <div className="border border-slate-300 flex flex-col shadow-md bg-white gap-3 p-6">
          <h1 className="text-xl">Nous Contacter</h1>
          <hr className="border-t border-slate-500 my-2"/>
          <div className="flex md:flex-row flex-col gap-5">
             <div className="w-full flex flex-col justify-start gap-1">
              <label htmlFor="lastname" className="text-[14px] font-semibold mx-1">Nom&nbsp;:</label>
              <input id="lastname" type="text" className="h-8 border border-slate-400 rounded-md px-1 py-1 focus:outline-none" />
            </div>
            <div className="w-full flex flex-col justify-start gap-1">
              <label htmlFor="firstname" className="text-[14px] font-semibold mx-1">Prénom&nbsp;:</label>
              <input id="firstname" type="text" className="h-8 border border-slate-400 rounded-md px-1 py-1 focus:outline-none" />
            </div>
          </div>
         
          <div className="w-full flex flex-col justify-start gap-1">
            <label htmlFor="email" className="text-[14px] font-semibold mx-1">Email&nbsp;:</label>
            <input id="email" type="email" className="h-8 border border-slate-400 rounded-md px-1 py-1 focus:outline-none" />
          </div>
          <div className="w-full flex flex-col justify-start gap-1">
            <label htmlFor="subject" className="text-[14px] font-semibold mx-1">Object:</label>
            <input id="subject" type="text" className="h-8 border border-slate-400 rounded-md px-1 py-1 focus:outline-none" />
          </div>
          <div className="w-full flex flex-col justify-start gap-1">
            <label htmlFor="description" className="text-[14px] font-semibold mx-1">Description&nbsp;:</label>
            <textarea rows="5" id="description" type="text" className="border border-slate-400 rounded-md px-1 py-1 focus:outline-none">
              
            </textarea>
          </div>
         
         
          <div className="flex justify-between mt-5">
            <button className="border border-sky-600 px-2 py-1 rounded-md text-sky-600 hover:text-slate-100 hover:bg-sky-600">Annuler</button>
            <button className="border border-sky-600 px-2 py-1 rounded-md text-sky-600 hover:text-slate-100 hover:bg-sky-600">Envoyer</button>
          </div>
        </div>
      </form>
    </section>
  )
}
