import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function Navbar() {

    const [menuVisible, setMenuVisible] = useState(true)
    

    return (
        <div>
            <nav class="bg-gray-800">
                <div class="max-w-7xl sm:px-6 lg:px-8">
                    <div class="w-full flex h-16 items-center justify-between">
                        <div class="flex items-center">
                            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                            <span className='text-white mx-2'>SHIPkART</span>
                        </div>
                            <div className="flex w-full items-center justify-center ">
                                <div class="space-x-2 max-[600px]:hidden">
                                    <NavLink to="/" class="hover:bg-white hover:text-black text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</NavLink >
                                    <NavLink to="/about" class="hover:bg-white hover:text-black text-white rounded-md px-3 py-2 text-sm font-medium">About</NavLink >
                                    <NavLink to="/products" class="hover:bg-white hover:text-black text-white rounded-md px-3 py-2 text-sm font-medium">Products</NavLink >
                                    <NavLink to="/contact" class="hover:bg-white hover:text-black text-white rounded-md px-3 py-2 text-sm font-medium">Contact</NavLink >
                                </div>
                            </div>

                            <div className={`hidden max-[600px]:${menuVisible ? 'block' : 'hidden'} bg-black absolute top-0 left-0 right-0`} style={{ width: "100vw", height: "100vh" }}>
                                <div style={{ fontSize: '1.5rem', width: '100vw' }} className='p-3 items-end mt-2 flex justify-between'>
                                    <div className='grid'>
                                        <NavLink to='/cart' className=""><FiShoppingCart className='text-white' style={{ fontSize: '1.5rem' }} /></NavLink>
                                        <p className='text-white text-sm rounded-full px-1 absolute ml-5 bg-slate-500'>10</p>
                                    </div>
                                    <RxCross2 className='text-white' onClick={() => setMenuVisible(false)} />
                                </div>
                                <div className="grid justify-center">
                                    <NavLink to="/" class="hover:bg-white hover:text-black text-white py-2 w-20 hover:underline text-center">Home</NavLink >
                                    <NavLink to="/about" class="hover:bg-white hover:text-black text-white py-2 w-20 hover:underline text-center">About</NavLink >
                                    <NavLink to="/products" class="hover:bg-white hover:text-black text-white py-2 w-20 hover:underline text-center">Products</NavLink >
                                    <NavLink to="/contact" class="hover:bg-white hover:text-black text-white py-2 w-20 hover:underline text-center">Contact</NavLink >

                                </div>
                            </div>

                            <div class="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className='flex pr-4 max-[600px]:hidden'>
                                    <NavLink to='/cart' className=""><FiShoppingCart className='text-white' style={{ fontSize: '1.5rem' }} /></NavLink>
                                    <p className='text-white text-sm rounded-full px-1 absolute ml-5 bg-slate-500'>10</p>
                                </div>
                                <MdOutlineMenu onClick={() => setMenuVisible(true)} className='text-white hidden max-[600px]:block' style={{ fontSize: '1.5rem' }} />
                            </div>
                        </div>
                    </div>
            </nav>

        </div>
    )
}

export default Navbar