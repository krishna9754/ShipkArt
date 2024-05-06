import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";


function Services() {
    return (
        <div>
            <div className='w-full justify-center grid lg:grid-flow-col md:gap-10 lg:gap-20 items-center mt-10'>
                <div className='bg-gradient-to-t w-full hover:from-blue-300 from-blue-200 to-blue-50 h-56 grid items-center rounded-lg'>
                    <div className='my-2 px-5' >
                        <div className='flex justify-center mb-2'>
                            <TbTruckDelivery className='text-blue-600 text-4xl bg-white p-2 rounded-3xl' />
                        </div>
                        <p className='flex justify-center font-light'>Super Fast and Free Delivery</p>
                    </div>
                </div>
                <div className='grid justify-center md:gap-8'>
                    <div className='bg-gradient-to-t w-full hover:from-blue-300 from-blue-200 to-blue-50 h-20 grid items-center rounded-lg'>
                        <div className='my-2 px-10 flex items-center' >
                            <MdSecurity className='text-blue-600 text-4xl bg-white p-2 rounded-3xl mr-2' />
                            <p className='flex justify-center font-light'>Non-contact Shipping</p>
                        </div>
                    </div>
                    <div className='bg-gradient-to-t w-full hover:from-blue-300 from-blue-200 to-blue-50 h-20 grid items-center rounded-lg'>
                        <div className='my-2 px-10 flex items-center ' >
                            <GiPayMoney className='text-blue-600 text-4xl bg-white p-2 rounded-3xl mr-2' />
                            <p className=' flex justify-center font-light'>Money-back Guaranteed</p>
                        </div>
                    </div>
                </div>
                <div className='bg-gradient-to-t w-full hover:from-blue-300 from-blue-200 to-blue-50 h-56 grid items-center rounded-lg'>
                    <div className='my-2 px-5' >
                        <div className='flex justify-center mb-2'>
                            <RiSecurePaymentLine className='text-blue-600 text-4xl bg-white p-2 rounded-3xl' />
                        </div>
                        <p className=' flex justify-center font-light'>Super Secure Payment System</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services