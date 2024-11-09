"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
              const [hover, setHover] = useState("") 

              function handleHover (tab) {
                setHover(tab)
              }
             

  return (
    <main>

        <div className='flex bg-gray-200 justify-between lg:justify-evenly w-screen h-12 md:h-16 lg:h-16 shadow-md'>
            <div className='flex lg:hidden w-10 h-10 bg-[#52dbd780] rounded-full ml-5 mt-0.5 md:mt-3'>
                <svg className=' mx-auto mt-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 7H21" stroke="#39B7B3" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M3 12H21H3Z" fill="#39B7B3"/>
                    <path d="M3 12H21" stroke="#39B7B3" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M3 17H21H3Z" fill="#39B7B3"/>
                    <path d="M3 17H21" stroke="#39B7B3" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </div>
            <div className='flex mr-5'>
            <h1 className='lg:mt-3 md:mt-4 mt-[0.4rem] text-2xl tracking-widest font-medium'>FREED CAPITALS</h1>
            <Image src="/Logo.png" width={27} height={10} quality={100} alt="freedcapital logo" placeholder="empty"
                   className='lg:ml-4 ml-1 h-7 lg:mt-4 md:mt-5 mt-[0.55rem]'  />      
            </div>

            <div className='hidden lg:flex mt-4'>
                <div className='flex flex-col'>
                    <Link href="/" className=' text-lg font-light hover:text-[#39B7B3]' 
                    onMouseEnter={() => handleHover('about')} onMouseLeave={() => handleHover('')}>
                        About
                    </Link>
                    <div className={`h-[0.17rem]  bg-[#39B7B3] ${hover === "about" ? 'w-[2.9rem] delay-100 duration-500' : 'w-0 delay-100 duration-500'}`}></div>

                </div>

                <div className='flex flex-col'>
                    <Link href="/industries" className='ml-16  text-lg font-light hover:text-[#39B7B3]' 
                    onMouseEnter={() => handleHover('indust')} onMouseLeave={() => handleHover('')}>
                        Industries
                    </Link>
                    <div className={`ml-16 h-[0.17rem]  bg-[#39B7B3] ${hover === "indust" ? 'w-[4.4rem] delay-100 duration-500' : 'w-0 delay-100 duration-500'}`}></div>

                </div>
                <div className='flex flex-col'>
                    <Link href="/" className='ml-16  text-lg font-light hover:text-[#39B7B3]' 
                    onMouseEnter={() => handleHover('sol')} onMouseLeave={() => handleHover('')}>
                        Solutions
                    </Link>
                    <div className={`ml-16 h-[0.17rem]  bg-[#39B7B3] ${hover === "sol" ? 'w-[4.2rem] delay-100 duration-500' : 'w-0 delay-100 duration-500'}`}></div>

                </div>
                <div className='flex flex-col'>
                    <Link href="/" className='ml-16  text-lg font-light hover:text-[#39B7B3]' 
                    onMouseEnter={() => handleHover('ins')} onMouseLeave={() => handleHover('')}>
                    Insight
                    </Link>
                    <div className={`ml-16 h-[0.17rem]  bg-[#39B7B3] ${hover === "ins" ? 'w-[3rem] delay-100 duration-500' : 'w-0 delay-100 duration-500'}`}></div>

                </div>

                <div className='flex flex-col'>
                    <Link href="/" className='ml-16  text-lg font-light hover:text-[#39B7B3]' 
                    onMouseEnter={() => handleHover('car')} onMouseLeave={() => handleHover('')}>
                    Careers
                    </Link>
                    <div className={`ml-16 h-[0.17rem]  bg-[#39B7B3] ${hover === "car" ? 'w-[3.5rem] delay-100 duration-500' : 'w-0 delay-100 duration-500'}`}></div>

                </div>
              
            </div>

            <button className='mt-4 hidden  lg:flex h-8 w-28 hover:text-white hover:bg-[#39B7B3] hover:delay-200 hover:duration-700 text-[#39B7B3] border border-[#39B7B3] rounded-3xl'>
                <p className='mx-auto mt-0.5 '>Contact</p>
            </button>


        </div>








    </main>
  )
}

export default Navbar