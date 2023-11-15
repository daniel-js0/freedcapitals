import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <main>

        <div className='flex justify-between lg:justify-evenly w-screen h-12 lg:h-16 shadow-lg'>
            <div className='flex lg:hidden w-8 h-8 bg-[#39B7B380] rounded-full ml-5 mt-2'>
                <svg className=' mx-auto mt-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 7H21" stroke="#39B7B3" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M3 12H21H3Z" fill="#39B7B3"/>
                    <path d="M3 12H21" stroke="#39B7B3" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M3 17H21H3Z" fill="#39B7B3"/>
                    <path d="M3 17H21" stroke="#39B7B3" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </div>
            <div className='flex mr-5'>
            <h1 className='lg:mt-5 mt-3 tracking-wider font-semibold'>FREED CAPITALS</h1>
            <Image src="/Logo.png" width={30} height={10} quality={100} alt="freedcapital logo" placeholder="empty"
                   className='ml-2 h-8 lg:mt-4 mt-2'  />      
            </div>

            <div className='hidden lg:flex mt-5'>
                <Link href="/" >
                    About
                </Link>
                <Link href="/" className='ml-6'>
                    Industries
                </Link>
                <Link href="/" className='ml-6'>
                    Solutions
                </Link>
                <Link href="/" className='ml-6'>
                    Insight
                </Link>
                <Link href="/" className='ml-6'>
                    Careers
                </Link>
            </div>

            <button className='mt-4 hidden  lg:flex h-8 w-24 text-[#39B7B380] border border-[#39B7B380] rounded-3xl'>
                <p className='mx-auto'>Contact</p>
            </button>


        </div>








    </main>
  )
}

export default Navbar