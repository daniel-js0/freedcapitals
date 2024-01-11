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
    
       <Image className=''  src="https://www.freedcapitals.com/Images/industry-1-1.svg" width={227} height={210} quality={100} alt="freedcapital logo" placeholder="empty"  /> 

       <h1>Energy & Natural Resources</h1>
       <p>Alternative energy is important for society, but their limited supply is a challenge. Sustainable practices preserve resources for the future and balance economics with the environment. Innovative methods reduce waste and pollution for a sustainable future.</p>
    
       <Image className=''  src="https://www.freedcapitals.com/Images/tick-circle.svg" width={227} height={210} quality={100} alt="freedcapital logo" placeholder="empty"  /> 
    
    </main>
  )
}

export default Industries