import React from 'react'
import { img2 } from '../assets'

export const Panel = () => {
  return (
    <div className='w-[100%] xl:h-[100vh] base:h-[100%] base:pb-4 lg:pb-0 bg-[#000] base:pt-7 md:pt-11 lg:pt-0'>
        <div className='xl:w-[80%] base:w-[90%] m-auto flex items-center lg:justify-between lg:flex-row base:flex-col base:justify-center'>
            <div className='flex flex-col gap-10'>
                <h1 className='md:text-[32px] base:text-[24px] text-white'>Удобная панель управления</h1>
                <h1 className='text-[#999999] text-[16px] md:w-[543px] base:w-[100%]'>Быстрая и легкая панель позволит использовать наш хостинг без проблем. С ней вы в разы облегчите создание вашего сервера. </h1>
                <button className='btn bg-transparent text-white hover:bg-transparent border-[white] border w-[194px] h-[44px]'>Перейти к панели</button>
            </div>
            <div className='base:pt-6 lg:pt-0'>
                <img src={img2} alt="" />
            </div>
        </div>



        <div className='xl:w-[80%] base:w-[90%] m-auto flex items-center lg:justify-between lg:flex-row base:flex-col base:justify-center pt-[50px]'>
        <div className='base:pt-6 lg:pt-0 base:hidden lg:flex'>
                <img src={img2} alt="" />
            </div>
            <div className='flex flex-col gap-10 items-end'>
                <h1 className='md:text-[32px] base:text-[24px] text-white'>Система партнерства</h1>
                <h1 className='text-[#999999] text-[16px] md:w-[543px] base:w-[100%] text-right'>Если у вас есть аудитория в какой-то социальной сети, которая интересуется серверами хостинга, то вы можете смело подать на партнёрство с нами. И получите за это большие призы</h1>
                <button className='btn bg-transparent text-white hover:bg-transparent border-[white] border w-[194px] h-[44px]'>Узнать больше</button>
            </div>
            
        </div>



        <div className='xl:w-[80%] base:w-[90%] m-auto flex items-center lg:justify-between lg:flex-row base:flex-col base:justify-center pt-[50px]'>
        
            <div className='flex flex-col gap-10'>
                <h1 className='md:text-[32px] base:text-[24px] text-white'>Свое комьюнити</h1>
                <h1 className='text-[#999999] text-[16px] md:w-[543px] base:w-[100%]'>В нашем дискорд сервере вы найдете розыгрыши и подарки. А так же новости и частые обновления. Для </h1>
                <button className='btn bg-transparent text-white hover:bg-transparent border-[white] border w-[194px] h-[44px]'>Наш дискорд</button>
            </div>

            <div className='base:pt-6 lg:pt-0'>
                <img src={img2} alt="" />
            </div>
            
        </div>
    </div>
  )
}
