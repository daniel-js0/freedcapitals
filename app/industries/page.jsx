import React from 'react'
import Image from "next/image";

const Industries = () => {
  return (
    <main>
      <div className='w-[100%] h-[70%] relative'>
        <Image className=' w-[100%] h-[100%] mx-auto '  src="https://www.freedcapitals.com/Images/Frame-184.svg" width={227} height={210} quality={100} alt="freedcapital logo" placeholder="empty"  /> 
        <h1 className='text-5xl px-20 mt-44 font-semibold absolute text-slate-200 top-0'>We collaborate with Various industries to provide tailored solution to our clients</h1>
      
      </div>
       <Image className=''  src="https://www.freedcapitals.com/Images/Group.svg" width={227} height={210} quality={100} alt="freedcapital logo" placeholder="empty"  /> 


    </main>
  )
}

export default Industries