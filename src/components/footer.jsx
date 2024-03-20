import React from 'react'
import { logo } from '../assets'
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className='w-[100%] 2xl:h-[30vh] base:h-[100%] base:pb-4 2xl:pb-0 bg-[#000] base:pt-7  lg:pt-0'>
        <div className='xl:w-[80%] base:w-[90%] m-auto'>


            <div className='w-[100%] border md:h-[100%] border-[#999999] lg:h-[225px] flex items-start justify-between'>
                <div className='w-[90%] m-auto md:py-3 lg:flex items-start justify-between base:flex base:flex-col base:py-3 lg:flex-row base:gap-3  md:grid md:grid-cols-2'>
                    <div className='w-[257px]'>
                        <h1 className='text-white text-[20px] font-semibold flex items-center'><img src={logo} alt="" />LineNodes</h1>
                        <p className='text-[16px] text-[#999999] pt-3'>Профессиональный игровой хостинг 24/7 для серверов майнкрафт</p>
                    </div>
                    <div className='w-[208px]'>
                        <h1 className='text-white text-[18px] font-semibold'>Юридический разделs</h1>
                        <p className='text-[16px] text-[#999999] pt-3'>Правила использования Техническая поддержка</p>
                    </div>
                    <div className='w-[167px]'>
                        <h1 className='text-white text-[18px] font-semibold'>Сервисы</h1>
                        <p className='text-[16px] text-[#999999] pt-3'>Панель управления Клиент панель</p>
                    </div>
                    <div className='w-[160px]'>
                        <h1 className='text-white text-[18px] font-semibold'>Страницы</h1>
                        <p className='text-[16px] text-[#999999] pt-3'>Главная <br /> Партнерство <br /> Создатели</p>
                    </div>

                </div>
            </div>

            <div className='flex items-center justify-between pt-5'>
                <h1 className='text-[#999999] md:text-[18px] base:text-[15px] font-bold'>2021 - 2022 LineNodes. Мы не связаны ни с одним брендом.</h1>
                <div className='flex gap-2'>
                <FaTelegram className='text-[#999999] text-[20px]' />
                <FaDiscord  className='text-[#999999] text-[20px]'/>
                <FaYoutube  className='text-[#999999] text-[20px]'/>

                </div>
            </div>
        </div>
    </div>
  )
}
