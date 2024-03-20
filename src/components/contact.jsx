import React from 'react'

export const Contact = () => {
  return (
    <div className='w-[100%] base:h-[100%] xl:h-[48vh] bg-[#000] lg:pt-[80px] base:pt-8'>
        <div className='xl:w-[80%] base:w-[90%] m-auto flex items-start md:justify-between base:justify-center md:flex-row base:flex-col '>
             <div className='flex flex-col gap-4'>
                <h1 className='text-white md:text-[32px] base:text-[24px] font-bold'>Остались вопросы?</h1>
                <h1 className='text-[#999999] text-[16px]'>support@linenodes.fun</h1>
             </div>
             <div className='flex flex-col gap-4 base:pt-5 lg:pt-0'>
                <input type="text" placeholder="Имя" className="input input-bordered sm:w-[389px] base:w-[100%] bg-transparent border border-[#2B2B2B]" />
                <input type="email" placeholder="Емейл" className="input input-bordered sm:w-[389px] base:w-[100%] bg-transparent border border-[#2B2B2B]" />
                <input type="text" placeholder="Сообщение" className="input input-bordered sm:w-[389px] base:w-[100%] bg-transparent border border-[#2B2B2B]" />
                <button className='btn bg-transparent hover:bg-transparent border border-[#2B2B2B] text-white w-[128px]'>Сообщение</button>
             </div>
        </div>

        <div className=' flex flex-col xl:w-[80%] base:w-[90%] m-auto'>
        <h1 className='text-white md:text-[32px] font-bold base:text-[24px]'>Все еще ждешь?</h1>
            <button className='w-[182px] btn bg-transparent border hover:bg-transparent text-white mt-4'>Начни сейчас</button>
        </div>

    </div>
  )
}
