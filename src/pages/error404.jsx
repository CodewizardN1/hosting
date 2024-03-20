import React from 'react'
import { NavLink } from 'react-router-dom'

export const Error404 = () => {
  return (
    <div className='w-[100%] 2xl:h-[62vh] sm:h-[61.9vh] base:h-[45vh] bg-[#000] lg:pt-[50px] 2xl:pt-[50px] base:pt-[80px]'>
        <div className='w-[90%] m-auto flex flex-col  justify-center items-center'>
            <h1 className='xl:text-[200px] md:text-[200px] sm:text-[150px] text-white font-bold base:text-[90px]'>404</h1>
            <h1 className='text-[20px] text-[#999999]'>Извините, эта страница не найдена</h1>
            <NavLink to={'/'}>
            <button className='btn bg-transparent mt-4 hover:bg-transparent w-[96px] border border-[#2B2B2B] text-white '>Домой</button>

            </NavLink>
        </div>
    </div>
  )
}
