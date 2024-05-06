import React from 'react'
import company from '../image/Pertamina.png'
import company1 from '../image/BNI Bank Negara Indonesia.png'
import company2 from '../image/Shopee Food.png'
import company3 from '../image/The Paris 2024 Summer Olympics and Paralympics.png'

function Trusted() {
    return (
        <div>
            <div className='w-full bg-slate-200 mt-12 grid justify-center rounded-t-2xl'>
                    <div className='py-12 w-full flex justify-center'>
                        <h3 className='text-lg font-light'>Trusted By 1000+ Companies</h3>
                    </div>
                    <div className='grid lg:flex max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-8 justify-between w-full items-center'>
                        <img className='ImageWidth' src={company} alt='company' />
                        <img className='ImageWidth' src={company1} alt='company' />
                        <img className='ImageWidth' src={company2} alt='company' />
                        <img className='ImageWidth' src={company3} alt='company' />
                        <img className='ImageWidth' src={company} alt='company' />
                    </div>
                </div>
        </div>
    )
}

export default Trusted