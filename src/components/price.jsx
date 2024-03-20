import React from 'react'
import { plan1 } from '../assets'

export const Price = () => {
  return (
    <div className='w-[100%] h-[100%] bg-[#000] lg:pt-[60px] 2xl:pt-[60px] base:pt-8'>
        <div className='xl:w-[80%] base:w-[90%] m-auto flex flex-col items-center justify-center'>
            <h1 className='md:text-[32px] base:text-[24px] font-semibold text-white'>Наши все доступные тарифы</h1>
            <h1 className='text-[18px] text-[#999999]'>Возврата средств в течении 30 дней</h1>

            <div className='base:flex items-center base:justify-center sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-3 w-[100%] py-5 flex-wrap'>
                <img className='cursor-pointer' src={plan1} alt="" />
                <img className='cursor-pointer' src={plan1} alt="" />
                <img className='cursor-pointer' src={plan1} alt="" />
                <img className='cursor-pointer' src={plan1} alt="" />
                <img className='cursor-pointer' src={plan1} alt="" />
                <img className='cursor-pointer' src={plan1} alt="" />
            </div>
            <div className='flex items-center justify-between w-[100%] py-5'>
            </div>
        </div>
    </div>
  )
}
