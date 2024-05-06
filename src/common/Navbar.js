import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import shipImage from "../image/ship.jpeg"

function Navbar() {

    const [menuVisible, setMenuVisible] = useState(false)


    return (
        <div className='fixed top-0 w-full'>
            <nav class="bg-gray-800">
                <div class="max-w-7xl sm:px-6 lg:px-8">
                    <div class="w-full flex h-16">
                        <div class="flex items-center max-sm:ml-5">
                            <img class="h-8 w-auto " src={shipImage} alt="Your Company" />
                            <span className='text-white mx-2'>SHIPkART</span>
                        </div>
                        <div className='flex justify-between w-full'>
                            <div className="flex w-full items-center justify-center ">
                                <div class="space-x-2 max-[750px]:hidden">
                                    <NavLink to="/" className="hover:bg-white hover:text-black text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</NavLink >
                                    <NavLink to="/about" className="hover:bg-white hover:text-black text-white rounded-md px-3 py-2 text-sm font-medium">About</NavLink >
                                    <NavLink to="/products" className="hover:bg-white hover:text-black text-white rounded-md px-3 py-2 text-sm font-medium">Products</NavLink >
                                    <NavLink to="/contact" className="hover:bg-white hover:text-black text-white rounded-md px-3 py-2 text-sm font-medium">Contact</NavLink >
                                </div>
                            </div>

                            <div className={`hidden max-[750px]:${menuVisible ? 'block' : 'hidden'} bg-black absolute top-0 left-0 right-0`} style={{ width: "100vw", height: "100vh" }}>
                                <div style={{ fontSize: '1.5rem', width: '100vw' }} className='p-3 items-end mt-2 flex justify-between'>
                                    <div className='grid'>
                                        <NavLink to='/cart' className=""><FiShoppingCart className='text-white' style={{ fontSize: '1.5rem' }} /></NavLink>
                                        <p className='text-white text-sm rounded-full px-1 absolute ml-5 bg-slate-500'>10</p>
                                    </div>
                                    <RxCross2 className='text-white' onClick={() => setMenuVisible(false)} />
                                </div>
                                <div className="grid justify-center">
                                    <NavLink to="/" className="hover:bg-white hover:text-black text-white py-2 w-20 hover:underline text-center">Home</NavLink >
                                    <NavLink to="/about" className="hover:bg-white hover:text-black text-white py-2 w-20 hover:underline text-center">About</NavLink >
                                    <NavLink to="/products" className="hover:bg-white hover:text-black text-white py-2 w-20 hover:underline text-center">Products</NavLink >
                                    <NavLink to="/contact" className="hover:bg-white hover:text-black text-white py-2 w-20 hover:underline text-center">Contact</NavLink >
                                    <button className='text-white border-2 my-3.5 px-4 rounded-lg mx-1'>LogIn</button>
                                    <button className='text-black bg-white border-2 my-1 px-4 rounded-lg mx-1'>Signup</button>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div class="inset-y-0 right-0 flex items-center max-sm:pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <div className='flex pr-4 max-[750px]:hidden'>
                                        <NavLink to='/cart' className=""><FiShoppingCart className='text-white' style={{ fontSize: '1.5rem' }} /></NavLink>
                                        <p className='text-white text-sm rounded-full px-1 absolute ml-5 bg-slate-500'>10</p>
                                    </div>
                                    <MdOutlineMenu onClick={() => setMenuVisible(true)} className='text-white hidden max-[750px]:block' style={{ fontSize: '1.5rem' }} />
                                </div>
                                <div className='flex w-full justify-end max-[750px]:hidden'>
                                    <button className='text-white border-2 my-3.5 px-4 rounded-lg mx-1'>LogIn</button>
                                    <button className='text-black bg-white border-2 my-3.5 px-4 rounded-lg mx-1'>Signup</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar