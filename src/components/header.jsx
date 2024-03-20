import React from 'react'
import { logo } from '../assets'
import { FaChevronDown } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


export const Header = () => {
    return (
        <div className='w-[100%] h-[8vh] bg-[#000]'>
            <div className='2xl:w-[80%] base:w-[90%] m-auto flex items-center justify-between min-h-[8vh]'>
                <div className='flex items-center gap-2'>
                    <img src={logo} alt="" />
                    <h1 className='text-white text-[24px] font-bold'>LineNodes</h1>
                </div>
                <div className='lg:flex base:hidden items-center gap-5'>
                    <nav className='flex items-center gap-5 text-white'>
                        <NavLink to={'/'}>
                            <h1>Главная</h1>
                        </NavLink>
                        <NavLink to={'/Partnership'}>
                            <h1>Партнерство</h1>
                        </NavLink>
                        
                        
                        <NavLink to={'/plans'}>
                            <h1>Цены</h1>
                        </NavLink>
                        <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1 bg-transparent border-none text-white hover:bg-transparent">Links</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white border rounded-box w-52">
                            <li className='text-white'><NavLink to={'/Contact'}>
                            <h1>Помощь</h1>
                            </NavLink></li>
                            <li className='text-white'><NavLink to={'/Command'}>
                            <h1>Kоманда</h1>
                            </NavLink></li>
                            <li className='text-white'><NavLink to={'/Command'}>
                            <h1>Kоманда</h1>
                            </NavLink></li>
                        </ul>
                    </div>
                    </nav>

                    <button className='btn bg-black w-[185px] h-[40px] hover:bg-transparent border-none text-white font-semibold'>Зарегестрируйся</button>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1 bg-transparent border-none hover:bg-transparent text-white">ru <FaChevronDown /></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white border rounded-box w-52">
                            <li className='text-white'><a>eng</a></li>
                            <li className='text-white'><a>ru</a></li>
                        </ul>
                    </div>
                </div>
                <div className='base:flex lg:hidden'>
                    <div className="drawer drawer-end relative z-[1000]">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="drawer-button text-white font-bold text-[25px] cursor-pointer"><FaBars /></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-[#000] text-base-content draw">
                                <button onClick={() => document.getElementById('my-drawer-4').click()} className='btn bg-transparent hover:bg-transparent border-none text-[25px] absolute text-red-700 top-1 right-2'><IoClose /></button>
                                {/* Sidebar content here */}
                                <nav className='flex flex-col gap-5 text-white pt-5'>
                                    <NavLink to={'/'}>
                                        <h1>Главная</h1>
                                    </NavLink>
                                    <NavLink to={'/Partnership'}>
                                        <h1>Партнерство</h1>
                                    </NavLink>
                                    <NavLink to={'/plans'}>
                                        <h1>Цены</h1>
                                    </NavLink>
                                    <NavLink to={'/Contact'}>
                            <h1>Помощь</h1>
                            </NavLink>
                            <NavLink to={'/Command'}>
                            <h1>Kоманда</h1>
                            </NavLink>
                                <NavLink to={'/Command'}>
                            <h1>Kоманда</h1>
                            </NavLink>
                                </nav>

                                <button className='btn bg-black w-[185px] h-[40px] hover:bg-transparent border-1 mt-5 text-white font-semibold'>Зарегестрируйся</button>
                                <details className="dropdown mt-5">
                                    <summary className="m-1 btn bg-black text-white hover:bg-transparent border-1">ru  <FaChevronDown /></summary>
                                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                        <li className='text-white'><a>eng</a></li>
                                        <li className='text-white'><a>ru</a></li>
                                    </ul>
                                </details>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
