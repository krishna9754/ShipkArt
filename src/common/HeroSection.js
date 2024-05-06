import React from 'react'
import { NavLink } from 'react-router-dom'
import shopping from '../image/shopping.jpeg'


export default function HeroSection({ myData }) {
    const { name } = myData;

    return (
        <>
            <div className='mt-20 flex w-full justify-center'>
                <div className='gap-5 border-black border-2 min-[700px]:flex p-7 max-[420px]:p-2 rounded-sm'>
                    <div className='text-left align-middle mb-4'>
                        <p className='text-xl px-2 pt-2 p font-thin min-[800px]:pb-2 max-[420px]:text-[12px] max-[800px]:text-[14px]'>WELCOME TO</p>
                        <h1 className='text-3xl px-2 mb-2 font-bold max-[800px]:text-[22px] max-[420px]:text-[17px] underline'>SHIPkART {name}</h1>
                        <p className='text-md font-light w-80 max-[350px]:w-64 px-2 mb-7 text-left max-[420px]:text-[10px] max-[800px]:text-[13px] '>
                            Lorem Ipsum is simply dummy text print and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                        <NavLink className="m-2 px-2 py-2 rounded-md bg-black text-white"> Shop Now </NavLink>
                    </div>
                    <div className='w-auto'>
                        <img class="w-96 max-[500px]:w-80 max-[420px]:w-[20rem] max-[350px]:w-[17rem]" src={shopping} alt="Your Company" />
                    </div>
                </div>
            </div>
        </>
    )

}
