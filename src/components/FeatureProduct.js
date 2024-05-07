import React, { useContext } from 'react'
import { AppContext } from '../context/ProductContext'
import { NavLink } from 'react-router-dom'
import FormatePrice from '../helper/FormatePrice'


function FeatureProduct() {
    const { isLoading, featureProducts } = useContext(AppContext)

    if (isLoading) {
        return <>...Loading</>
    }

    return (
        <div>
            <div className='w-full items-center justify-center grid my-20'>
                <p className='text-sm text-blue-600'>Check now!</p>
                <p className='text-lg font-bold pb-3'>Our Feature Services</p>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
                    {
                        featureProducts.map((curElem) => {
                            const { id, category, image, name, price } = curElem
                            return (
                                <div key={id}>
                                    <NavLink to={`/singleproduct/{id}`}>
                                        <div className=''>
                                            <p className='bg-white text-black text-sm rounded-md p-1 border-black border-2 mb-1 w-24 text-center'>{category}</p>
                                            <img className='ImageWidth' src={image} alt='product' />
                                        </div>
                                        <div className='flex justify-between'>
                                            <p className='text-sm text-gray-500'>{name}</p>
                                            <p className='text-sm text-gray-400'>{ <FormatePrice price={price} />}</p>
                                        </div>
                                    </NavLink>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FeatureProduct