import React from 'react'
import { plan1, plan2, plan3, plan4, plan5 } from '../assets'

export const Plan = () => {
  return (
    <div className='w-[100%] base:h-[100%] lg:h-[90vh] xl:h-[70vh] 2xl:h-[55vh] lg:pt-[50px] xl:pt-[80px] 2xl:pt-0 bg-[#000]'>
        <div className='xl:w-[80%] base:w-[90%] m-auto '>
            <h1 className='text-white md:text-[32px] base:text-[22px] font-bold'>Наши тарифы</h1>
            <div className='flex md:justify-between base:justify-center base:gap-2 md:gap-3 lg:gap-0 items-center pt-5 flex-wrap'>
                <img src={plan1} alt="" />
                <img src={plan2} alt="" />
                <img src={plan3} alt="" />
                <div className='lg2:flex base:hidden con'>
                <img src={plan4} alt="" className='sh' />
                </div>
            </div>
        </div>
    </div>
  )
}
