import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <main>

        <div>
            <div className='flex'>
            <h1>FREED CAPITALS</h1>
            <Image src="/Logo.png" width={30} height={10} quality={100} alt="freedcapital logo" placeholder="empty"
                   className=''  />      
            </div>

            <div>
                <Link href="/" >
                    About
                </Link>
                <Link href="/" className='ml-1'>
                    Industries
                </Link>
                <Link href="/" className='ml-1'>
                    Solutions
                </Link>
                <Link href="/" className='ml-1'>
                    Insight
                </Link>
                <Link href="/" className='ml-1'>
                    Careers
                </Link>
            </div>

            <button>
                Contact
            </button>


        </div>








    </main>
  )
}

export default Navbar