import React from 'react'
import { NavLink } from 'react-router-dom'
import { SlSocialYoutube, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";

function Fotter() {
    return (
        <div className='mt-12 bg-black rounded-t-lg'>
            <div className='flex md:justify-center from-black to-white ml-4'>
                <div className='md:flex md:gap-20 lg:gap-48 xl:gap-64 items-center px-10 py-4 rounded-xl m-2 bg-white'>
                    <div className='items-start md:mb-0 mb-5'>
                        <p className='font-light'> Ready to get start?</p>
                        <p className='font-light'> Talk to us today</p>
                    </div>
                    <div>
                        <NavLink to="/contact" className="text-white bg-black px-4 py-2 rounded-md">GET START</NavLink>
                    </div>
                </div>

            </div>
            <div className='w-full text-white'>
                <div className='sm:flex sm:justify-center sm:gap-8 lg:gap-14 grid grid-cols-1 ml-6'>
                    <div className='my-4 grid justify-center text-center '>
                        <h3 className='text-sm font-light mb-2'>SHIPkART</h3>
                        <p className='text-xs font-thin w-44'>Lorem Ipsum is simply dummy text print and typesetting industry.</p>
                    </div>
                    <div className='my-4 text-center'>
                        <p className='text-sm font-thin w-44'>Subscribe to get important updates:</p>
                        <div className='grid gap-y-2 mt-1'>
                            <input type='text' placeholder='YOUR E-MAIL' className='text-xs px-2 py-1 ' />
                            <button className='border-2'>Subscribe</button>
                        </div>
                    </div>
                    <div className='my-4 text-center'>
                        <p className='text-sm font-thin w-44 '>follow us:</p>
                        <div className='flex gap-4 mt-1 justify-center'>
                        <SlSocialYoutube className=' text-xl'/>
                        <SlSocialLinkedin />
                        <SlSocialInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fotter