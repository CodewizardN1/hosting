import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaVoicemail } from 'react-icons/fa6';
import { MdEmail } from "react-icons/md";
const Contact2 = () => {
  return (
    <div className='w-[100%] 2xl:h-[62vh] base:h-[61.9vh] bg-[#000] lg:pt-[80px] 2xl:pt-[100px] base:pt-8'>
        <div className='xl:w-[80%] base:w-[90%] m-auto flex items-start md:justify-between base:justify-center md:flex-row base:flex-col'>
             <div className='flex flex-col gap-4'>
                <h1 className='text-white md:text-[32px] base:text-[24px] font-bold'>Остались вопросы?</h1>
                <div className='flex flex-col gap-3'>
                    <div className='base2:w-[236px] h-[41px] rounded-md border-[#2B2B2B] border pl-3 base:w-[100%] flex gap-3 items-center'>
                        <FaDiscord className='text-[#999999]' />
                        <h1 className='text-[#999999]'>discord.gg/linenodes</h1>
                    </div>
                    <div className='base2:w-[236px] h-[41px] rounded-md border-[#2B2B2B] border pl-3 base:w-[100%] flex gap-3 items-center'>
                        <FaTelegram className='text-[#999999]' />
                        <h1 className='text-[#999999]'>tm.me/linenodes</h1>
                    </div>
                    <div className='base2:w-[236px] h-[41px] rounded-md border-[#2B2B2B] border pl-3 base:w-[100%] flex gap-3 items-center'>
                        <MdEmail className='text-[#999999]' />
                        <h1 className='text-[#999999]'>support@linenodes.fun</h1>
                    </div>
                </div>
             </div>
             <div className='flex flex-col gap-4 base:pt-5 lg:pt-0'>
                <input type="text" placeholder="Имя" className="input input-bordered sm:w-[389px] base:w-[100%] bg-transparent border border-[#2B2B2B]" />
                <input type="email" placeholder="Емейл" className="input input-bordered sm:w-[389px] base:w-[100%] bg-transparent border border-[#2B2B2B]" />
                <input type="text" placeholder="Причина" className="input input-bordered sm:w-[389px] base:w-[100%] bg-transparent border border-[#2B2B2B]" />
                <textarea type="text" placeholder="Причина" className="input h-[70px] input-bordered sm:w-[389px] base:w-[100%] bg-transparent border border-[#2B2B2B]" />

                <button className='btn bg-transparent hover:bg-transparent border border-[#2B2B2B] text-white w-[128px]'>Сообщение</button>
             </div>
        </div>


    </div>
  )
}

export default Contact2
