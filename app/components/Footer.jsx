import React from 'react'

const Footer = () => {
  return (
   <main>
     <div className='w-screen'>
      <h1 className=' text-center text-[1.35rem] font-bold'>Stay informed with up-to-date informaton on all things Freed Capitals.</h1>

      <div className='w-[95%] h-16 mx-auto flex bg-slate-300'>

        <h2>Subscribe Newsletters</h2>

        <div className='relative h-12 w-[75%] bg-red-400 mr-3 my-auto'>
          <input type="text" placeholder='Enter your email...'
          className='h-12 w-[100%] my-auto mr-3 ' />
       

          <button className='h-10 w-[40%] end-1 top-1 bg-slate-700 absolute'>
            <p className='text-center text-xs'>Subcribe Now</p>
          </button>
        </div>
        
      </div>







     </div>
   </main>
  )
}

export default Footer