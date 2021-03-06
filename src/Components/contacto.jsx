
import React from "react";
export default function Contact(){
    return(
    <div className='container min-h-screen'>
        <h2 className="block w-100 text-center text-5xl isolate font-bold h-20">Ponte en contacto con nosotros</h2>
        <div className="p-5 block shadow clear-left shadow-sm shadow-yellow-500 rounded-md border">
            <form className="flex p-5 flex-row flex-wrap" action="">
            <div className="basis-11/12 m-2">
                <label htmlFor="" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white-700">Nombre</label>
                <input type="text" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-black" placeholder="Nombre"/> 
            </div>
            <div className="basis-11/12 m-2">
                <label htmlFor="" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white-700">Correo</label>
                <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-black" placeholder="you@example.com" />
            </div>
            <div className="basis-11/12 w-40 m-2">
                <label htmlFor="" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white-700">Mensaje</label>
                <textarea type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 text-black" placeholder="Mensaje" cols={"12"} rows="12"></textarea>
            </div>
            <button type="submit" className="rounded-full bg-green-700 basis-11/12 m-2 hover:ring-white  ring-2 ring-green-400 hover:bg-green-400">Enviar</button>
            </form>
        </div>
    </div>
    );
}