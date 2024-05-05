import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
    return (
        <div>
            <nav class="bg-gray-800">
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class="relative flex h-16 items-center justify-between">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                        

                                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                            <div class="flex  items-center">
                                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" /> 
                                <span className='text-white mx-2'>SHIPkART</span>
                            </div>
                           
                                <div class="flex space-x-2">
                                    <NavLink to="/" class="bg-white text-black rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</NavLink >
                                    <NavLink to="/about" class="text-white hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</NavLink >
                                    <NavLink to="#" class="text-white hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Products</NavLink >
                                    <NavLink to="#" class="text-white hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</NavLink >
                                </div>
                            
                       
                        <div class="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <NavLink to='/cart' className=""><FiShoppingCart className='text-white' style={{fontSize: '1.5rem'}}/></NavLink>
                            <p className='text-white text-sm rounded-full px-1 absolute ml-5 mb-5 bg-slate-500'>10</p>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar