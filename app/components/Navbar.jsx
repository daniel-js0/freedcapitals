import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <main>

        <div className='flex justify-evenly mt-2'>
            <div className='flex'>
            <h1 className='mt-1'>FREED CAPITALS</h1>
            <Image src="/Logo.png" width={30} height={10} quality={100} alt="freedcapital logo" placeholder="empty"
                   className='ml-2'  />      
            </div>

            <div>
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

            <button className='h-8 w-24 text-[#39B7B380] border border-[#39B7B380] rounded-3xl'>
                Contact
            </button>


        </div>








    </main>
  )
}

export default Navbar