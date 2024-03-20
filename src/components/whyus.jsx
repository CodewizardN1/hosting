import React from 'react'

export const Whyus = () => {
  return (
    <div className='w-[100%] xl:h-[45vh] base:h-[100%] base:pb-5 lg:pb-0  bg-[#000] pt-5'>
        <div className='xl:w-[80%] base:w-[90%] m-auto'>

            <h1 className='base:text-[22px] sm:text-[32px] font-bold text-white'>Почему мы?</h1>
            <div className='flex lg:justify-between items-center base:justify-center pt-6 base:flex-col lg:flex-row gap-5'>
                <div className='sm:w-[327px] base:w-[100%] h-[220px] border-[#2B2B2B] border px-6 flex flex-col gap-4 items-left py-5'>
                    <h1 className='text-white text-[24px] font-semibold'>Удобно</h1>
                    <p className='text-[16px] text-[#999999]'>Наши профессиональные панели управления, позволяет пользоваться нашим сервисом в любое время и за любым устройством. </p>
                </div>
                <div className='sm:w-[327px] base:w-[100%] xl:translate-y-[-30px] translate-x-0 h-[220px] border-[#2B2B2B] border px-6 flex flex-col gap-4 items-left py-5'>
                    <h1 className='text-white text-[24px] font-semibold'>Стабильно</h1>
                    <p className='text-[16px] text-[#999999]'>Наше оборудование имеет безпрерывную поддержку , низкий пинг и отсутствие лагов. А скорость работы позволит установить сервер за 25 секунд.</p>
                </div>
                    <div className='sm:w-[327px] base:w-[100%] h-[220px] xl:translate-y-[-60px] translate-x-0 border-[#2B2B2B] border px-6 flex flex-col gap-4 items-left py-5'>
                        <h1 className='text-white text-[24px] font-semibold'>Безопасно</h1>
                        <p className='text-[16px] text-[#999999]'>У нас установлен сертификат безопасности, все данные передаются в зашифрованном виде.</p>
                    </div>
            </div>
        </div>
    </div>  
  )
}
