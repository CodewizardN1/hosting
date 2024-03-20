import React from 'react'
import { vector } from '../assets'

export const Main2 = () => {
  return (
    <div className='w-[100%] h-[100%]  bg-[#000] pt-12'>
        <div className='xl:w-[80%] base:w-[90%] m-auto'>
            <h1 className='text-white text-center md:text-[32px] base:text-[24px] font-semibold'>Выполняете требования</h1>

            <div className='pt-8 flex-wrap gap-2 flex items-center sm:justify-between sm:flex-row base:flex-col base:justify-center'>
                <div className='sm:w-[230px] base:w-[100%] text-white font-bold md:text-[32px] base:text-[24px] base2:w-[230px] h-[113px] border border-[#2B2B2B] flex flex-col gap-0 items-center justify-center'>
                    <h1>100</h1>
                    <h1 className='text-[#999999] text-[15px] font-mono'>участников сервера</h1>
                </div>
                <div className='sm:w-[270px] base:w-[100%] text-white font-bold md:text-[32px] base:text-[24px] base2:w-[270px] h-[113px] border border-[#2B2B2B] flex flex-col gap-0 items-center justify-center'>
                    <h1>200</h1>
                    <h1 className='text-[#999999] text-[15px] font-mono'>стабильных просмотров</h1>
                </div>
                <div className='sm:w-[166px] base:w-[100%] text-white font-bold md:text-[32px] base:text-[24px] base2:w-[216px] h-[113px] border border-[#2B2B2B] flex flex-col gap-0 items-center justify-center'>
                    <h1>300</h1>
                    <h1 className='text-[#999999] text-[15px] font-mono'>подписчиков</h1>
                </div>
                <div className='sm:w-[310px] base:w-[100%] text-white font-bold md:text-[32px] base:text-[24px] base2:w-[290px] h-[113px] border border-[#2B2B2B] flex flex-col gap-0 items-center justify-center'>
                    <h1>Видео</h1>
                    <h1 className='text-[#999999] text-[15px] font-mono'>Где вы используете наш хост</h1>
                </div>
            </div>

            <div className='py-8 flex items-center justify-center'><img src={vector} alt="" /></div>
            <div className='flex flex-col items-center justify-center gap-3'>
                <h1 className='text-white md:text-[30px] base:text-[24px] font-semibold'>Заполняете заявку</h1>
                <input placeholder='Имя' className='input bg-transparent border-[#2B2B2B] border text-white hover:border-[#2B2B2B] sm:w-[457px]' type="text" />
                <input placeholder='Емейл' className='input bg-transparent border-[#2B2B2B] border text-white hover:border-[#2B2B2B] sm:w-[457px]' type="text" />
                <input placeholder='Канал' className='input bg-transparent border-[#2B2B2B] border text-white hover:border-[#2B2B2B] sm:w-[457px]' type="text" />
                <textarea placeholder='Что вы хотите получить взамен' className='h-[70px] input bg-transparent border-[#2B2B2B] border text-white hover:border-[#2B2B2B] sm:w-[457px]' type="text" />
                <button className='text-white btn flex justify-start bg-transparent hover:text-black'>Отправить</button>
            </div>

            <div className='py-8 flex items-center justify-center'><img src={vector} alt="" /></div>


            <div className='pb-7'>
                <h1 className='text-white md:text-[30px] base:text-[24px] font-semibold text-center'>Получаете  </h1>
                <div className='flex items-center justify-center flex-col gap-5'>
                    <div className='pt-8 flex sm:flex-row base:flex-col items-center gap-5'>
                        <div className='base2:w-[300px] h-[203px] border-[#2B2B2B] border base2:px-7 base:px-3 flex flex-col items-start gap-3 justify-center'>
                            <h1 className='text-[20px] text-white font-bold'>Больше ресурсов</h1>
                            <h1 className='text-[16px] text-[#999999]'>Мы предоставим вам беплатно платный тариф, или со скидкой улучшим текущий</h1>
                        </div>
                        <div className='base2:w-[300px] h-[203px] border-[#2B2B2B] border base2:px-7 base:px-3 flex flex-col items-start gap-3 justify-center'>
                            <h1 className='text-[20px] text-white font-bold'>Чат партнеров</h1>
                            <h1 className='text-[16px] text-[#999999]'>Персональная роль и доступ к специальному чату для партнеров хостинга</h1>
                        </div>

                    </div>
                    <div>
                        <div className='base2:w-[300px] h-[203px] border-[#2B2B2B] border base2:px-7 base:px-3 flex flex-col items-start gap-3 justify-center'>
                                <h1 className='text-[20px] text-white font-bold'>Ранний доступ</h1>
                                <h1 className='text-[16px] text-[#999999]'>Доступ к бета функциям хостинга, а так же более высокий приоритет поддержки</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
