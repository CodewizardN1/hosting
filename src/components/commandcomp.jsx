import React from 'react'
import { logo1, logo2, logo3 } from '../assets'
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export const Commandcomp = () => {
    return (
        <div className='w-[100%] 2xl:h-[62vh] base:h-[61.9vh] bg-[#000] lg:pt-[80px] 2xl:pt-[100px] base:pt-8'>
            <div className='xl:w-[80%] base:w-[90%] m-auto'>
                <div className='pb-7'>
                    <h1 className='text-white md:text-[30px] base:text-[24px] font-semibold text-center'>Наша команда  </h1>
                    <div className='flex items-center justify-center flex-col gap-5'>
                        <div className='pt-8 flex sm:flex-row base:flex-col items-center gap-5'>
                            <div className='md:w-[350px] h-[92px] border-[#2B2B2B] border base2:px-7 base:px-3 flex justify-center  items-center gap-3 '>
                                <div>
                                    <img src={logo1} alt="" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-white text-[20px]'>Elias</h1>
                                        <div className='flex gap-2'>
                                            <FaTelegram className='text-[#999999] text-[20px]' />
                                            <FaDiscord className='text-[#999999] text-[20px]' />
                                            <FaYoutube className='text-[#999999] text-[20px]' />
                                        </div>
                                    </div>
                                    <h1 className='text-[16px] text-[#999999]'>Дизайнер и создатель сайта</h1>
                                </div>
                            </div>
                            <div className='md:w-[350px] h-[92px] border-[#2B2B2B] border base2:px-7 base:px-3 flex justify-center  items-center gap-3 '>
                                <div>
                                    <img src={logo2} alt="" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-white text-[20px]'>Kreosan</h1>
                                        <div className='flex gap-2'>
                                            <FaTelegram className='text-[#999999] text-[20px]' />
                                            <FaDiscord className='text-[#999999] text-[20px]' />
                                            <FaYoutube className='text-[#999999] text-[20px]' />
                                        </div>
                                    </div>
                                    <h1 className='text-[16px] text-[#999999]'>Дизайнер и создатель сайта</h1>
                                </div>
                            </div>

                        </div>
                        <div>
                        <div className='md:w-[350px] h-[92px] border-[#2B2B2B] border base2:px-7 base:px-3 flex justify-center  items-center gap-3 '>
                                <div>
                                    <img src={logo3} alt="" />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center justify-between w-[220px]'>
                                        <h1 className='text-white text-[20px]'>FlowerInNodes</h1>
                                        <div className='flex gap-2'>
                                            <FaTelegram className='text-[#999999] text-[20px]' />
                                            <FaDiscord className='text-[#999999] text-[20px]' />
                                            <FaYoutube className='text-[#999999] text-[20px]' />
                                        </div>
                                    </div>
                                    <h1 className='text-[16px] text-[#999999]'>Создатель хостинга</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
