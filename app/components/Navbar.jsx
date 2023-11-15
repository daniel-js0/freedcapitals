import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <main>

        <div className='flex justify-around lg:justify-evenly mt-2'>
            <svg className='flex lg:hidden' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 7H21" stroke="#39B7B3" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M3 12H21H3Z" fill="#39B7B3"/>
                <path d="M3 12H21" stroke="#39B7B3" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M3 17H21H3Z" fill="#39B7B3"/>
                <path d="M3 17H21" stroke="#39B7B3" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <div className='flex'>
            <h1 className='mt-1'>FREED CAPITALS</h1>
            <Image src="/Logo.png" width={30} height={10} quality={100} alt="freedcapital logo" placeholder="empty"
                   className='ml-2'  />      
            </div>

            <div className='hidden lg:flex'>
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

            <button className='hidden lg:flex h-8 w-24 text-[#39B7B380] border border-[#39B7B380] rounded-3xl'>
                Contact
            </button>


        </div>








    </main>
  )
}

export default Navbar