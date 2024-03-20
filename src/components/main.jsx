import React from 'react'
import { img1 } from '../assets'

export const Main = () => {
  return (
    <div className='w-[100%] base:h-[70vh] md:h-[60vh] lg:h-[92vh]  bg-[#000] base:p-5 md:pt-0 m-0'>
        <div className='base:w-[90%] m-auto flex items-center justify-center gap-4 flex-col base:min-h-[65vh] md:min-h-[60vh] lg:min-h-[85vh]'>
            <div className='flex flex-col items-center justify-between sm:w-[509px] base:w-[100%] text-center gap-2'>
                <h1 className='text-white lg:text-[32px] font-semibold base:text-[20px]'>Надежный бесплатный хостинг игровых серверов</h1>
                <h1 className='text-[#999999] text-[16px]'>С большой скоростью сети и легкой панелью управления</h1>
                <button className='btn bg-transparent border-none hover:bg-transparent font-bold text-white'>Зарегестрируйся</button>
            </div>
            <div>
                <img src={img1} alt="" />
            </div>
        </div>
    </div>
  )
}
