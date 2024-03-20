import React from 'react'
import { mine, node, py } from '../assets'

export const Services = () => {
    return (
        <div className='w-[100%] bg-[#000] lg:h-[40vh] base:h-[100%] base:pb-4 lg:pb-0 lg:pt-14 xl:pt-0'>
            <div className='xl:w-[80%] base:w-[90%] m-auto flex items-center lg:justify-between base:justify-center base:flex-col lg:flex-row'>

                <div className='flex flex-col gap-3'>
                    <h1 className='text-[32px] base:text-[22px] font-bold text-white'>Поддерживаемые <br /> сервисы</h1>
                    <h1 className='text-[#999999] font-semibold text-[16px]'>В будущем мы планируем <br /> пополнить этот список</h1>
                </div>


                <div className='flex items-end justify-end flex-col gap-4 base:pt-4 lg:pt-0 w-[1005]'>
                    <div className='flex items-center lg:flex-row base:flex-col gap-4'>
                        <div className='sm:w-[329px] base:w-[100%] base2:w-[290px] h-[120px] border-[#2B2B2B] border-[1px] p-2 flex items-center'>
                            <div className='pl-2 pr-4'>
                                <img src={node} alt="" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[24px] font-semibold text-white'>Node.js</h1>
                                <h1 className='w-[130px] text-[16px] text-[#999999]'>Дискорд боты Телеграм</h1>
                            </div>
                        </div>
                        <div className='sm:w-[329px] base:w-[100%] base2:w-[290px] h-[120px] border-[#2B2B2B] border-[1px] p-2 flex items-center'>
                            <div className='pl-2 pr-4'>
                                <img src={mine} alt="" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[24px] font-semibold text-white'>Minecraft</h1>
                                <h1 className='w-[130px] text-[16px] text-[#999999]'>Vanilla Sponge Spigot Forge</h1>
                            </div>
                        </div>

                    </div>
                    <div className='w-[100%] flex items-end justify-end'>

                        <div className='sm:w-[329px] base:w-[100%] base2:w-[290px] h-[120px] border-[#2B2B2B] border-[1px] p-2 flex items-center'>
                            <div className='pl-2 pr-4'>
                                <img src={py} alt="" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[24px] font-semibold text-white'>Python</h1>
                                <h1 className='w-[130px] text-[16px] text-[#999999]'>Дискорд боты Дискорд боты</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
