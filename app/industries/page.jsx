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
    
       <div className='h-[30rem] w-[39%] bg-slate-400 relative'>
          <Image className='h-[100%] w-[100%]'  src="https://www.freedcapitals.com/Images/industry-1-1.svg" width={227} height={210} quality={100} alt="freedcapital logo" placeholder="empty"  /> 
            <div className='flex absolute top-2 h-6 w-[80%] bg-gray-100'>
              <Image className='h-6 w-6'  src="https://www.freedcapitals.com/Images/tick-circle.svg" width={227} height={210} quality={100} alt="freedcapital logo" placeholder="empty"  /> 
              <h1 className='font-bold'>Renewable energy for sustainability</h1>
            </div>
           <div className='flex  absolute bottom-8 h-16 start-7 w-[80%] rounded-full bg-opacity-50 bg-gray-100'>
             <Image className='h-8 w-8 mt-3 ml-5'  src="https://www.freedcapitals.com/Images/tick-circle.svg" width={227} height={210} quality={100} alt="freedcapital logo" placeholder="empty"  />  
             <h1 className='font-semibold text-2xl mt-3 ml-3'>Crucial for our economy</h1>
           </div>
       </div>
      
      <div>
        <h1>Energy & Natural Resources</h1>

        <p>Alternative energy is important for society, but their limited supply is a challenge. Sustainable practices preserve resources for the future and balance economics with the environment. Innovative methods reduce waste and pollution for a sustainable future.</p>
       </div>
  
     
    
    </main>
  )
}

export default Industries