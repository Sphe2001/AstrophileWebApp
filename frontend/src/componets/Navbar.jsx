import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/Logo_Icon_Astrophile3.jpg'

export const Navbar = () => {
    const [menu, setMenu] = useState("")
  return (
            <div className='flex justify-around p-4 shadow-md'
            // style={{background: 'linear-gradient(135deg, #efdecd 0%, #fff 100%)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
            <div className='flex items-center gap-2.5'>
                <img src={logo} alt='website logo' width={70} height={70}/>
                <p className="text-gray-900 text-3xl font-semibold">Astrophile</p>
            </div>
            <ul className="flex items-center list-none gap-12 text-gray-500 text-lg font-medium">
                <li className="flex flex-col items-center gap-0.5 cursor-pointer" onClick={()=>{setMenu("home")}}>
                <Link className="no-underline text-inherit" to="/home">Home</Link>
                {menu==="home"?<hr className="border-none w-4/5 h-0.5 rounded bg-red-500"/>:<></>}
                </li>
                <li className="flex flex-col items-center gap-0.5 cursor-pointer" onClick={()=>{setMenu("services")}}>
                <Link className="no-underline text-inherit" to="/services">Services</Link>
                {menu==="services"?<hr className="border-none w-4/5 h-0.5 rounded bg-red-500"/>:<></>}
                </li>
                <li className="flex flex-col items-center gap-0.5 cursor-pointer" onClick={()=>{setMenu("about")}}>
                <Link className="no-underline text-inherit" to="/about">About</Link>
                {menu==="about"?<hr className="border-none w-4/5 h-0.5 rounded bg-red-500"/>:<></>}
                </li>

            </ul>
            <div className="flex items-center gap-11">
                <Link to="/"><button className="w-40 h-14 outline-none border border-gray-500 rounded-full text-gray-600 text-lg font-medium bg-white cursor-pointer active:bg-gray-200">Logout</button></Link>
            </div>
            
            
        </div>
  )
}
