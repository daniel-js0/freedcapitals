import Image from "next/image";


export default function Home() {
  return (
    <main className="mt-14 mb-32">
      <div className="lg:flex">
          <svg className="md:-ml-4 md:mt-12 hidden lg:flex " xmlns="http://www.w3.org/2000/svg" width="140" height="180" viewBox="0 0 128 128" fill="none">
            <path d="M44.1714 124.308C43.6229 108.526 40.3766 93.049 34.5005 78.4193C34.3251 77.9814 34.1389 77.549 33.9581 77.1167C36.8194 76.054 39.5649 74.5422 42.0647 72.6313C42.1401 72.5706 42.2156 72.5098 42.291 72.4491C46.5274 73.6498 51.1271 73.9656 55.7384 73.4148C70.7237 71.6244 84.7621 62.5991 95.4882 52.2257C105.762 42.2879 113.622 29.988 118.414 16.4647C119.331 21.1274 120.081 25.8239 120.652 30.5597C121.172 34.8679 127.639 33.3089 127.13 29.0445C126.055 20.0991 124.353 11.2722 122.029 2.57471C121.323 -0.0761741 118.518 -0.653787 116.514 0.881556C110.975 5.12857 104.859 8.41885 98.3641 10.8884C94.3638 12.4123 97.5272 18.352 101.473 16.8448C105.576 15.2819 109.461 13.3638 113.187 11.1392C106.846 31.4553 92.9888 49.096 74.6633 59.6248C66.7787 64.1529 57.1161 67.983 47.8387 66.8911C54.8662 57.8151 56.8343 45.338 55.3405 33.9212C54.4667 27.2235 52.172 19.8586 45.9491 16.3812C39.992 13.056 33.4892 14.9551 29.5854 20.4056C22.6745 30.0624 20.7431 45.386 24.8209 56.493C26.9229 62.208 30.575 66.4503 35.1069 69.2894C33.8882 70.0143 32.6147 70.6244 31.2974 71.114C29.1093 66.5019 26.6515 62.0229 23.9294 57.7153C20.8255 52.7954 16.3255 43.6926 9.79899 43.1621C3.13181 42.6269 0.245405 50.2111 0.291119 55.7943C0.344878 61.8766 3.09689 67.7747 7.34936 72.0029C12.9939 77.6169 20.2801 79.5968 27.4375 78.7198C28.1768 80.4381 28.8783 82.1731 29.5421 83.9247C34.3863 96.7444 37.0495 110.404 37.5277 124.113C37.6803 128.429 44.3242 128.652 44.1714 124.308ZM29.4236 44.0568C29.4883 37.8751 33.7478 14.7563 43.9074 23.0998C48.2918 26.6966 48.9962 34.1083 49.1812 39.422C49.3904 45.2347 48.5993 51.1294 46.2799 56.4838C44.9652 59.5293 43.0277 62.4082 40.6497 64.8615C33.0026 61.1119 29.3294 52.8658 29.4236 44.0568ZM20.6781 72.0038C15.9614 71.0305 11.7958 67.8878 9.30184 63.7435C8.06852 61.6988 7.20153 59.3668 6.97792 56.9711C6.8175 55.2772 6.79584 51.1803 8.53781 50.1838C11.7198 48.3735 19.6208 63.338 20.9748 65.7057C22.2197 67.8931 23.4052 70.1136 24.5261 72.3728C23.2496 72.3851 21.9669 72.2712 20.6781 72.0038Z" fill="#231F20"/>
          </svg>
          <div className="ml-7 h-44 w-[80%] bg-slate-5 relative z-30">
            <h1 className="lg:text-6xl text-3xl font-semibold text-center lg:px-[0.7rem] md:leading-snug lg:leading-snug lg:tracking-wide md:tracking-wide">Empowering Industries with Bespoke Solutions Tailored to their Needs </h1>
            <p className="lg:text-2xl text-lg  lg:font-light lg:tracking-wide lg:leading-relaxed text-gray-400 text-center mt-12  h-12 lg:w-[70%] mx-auto"> Our goal at Freed Capitals is to break free of norms, uncover new opportunities, and help create lasting solutions. </p>
            <div className="h-7 lg:w-[32%]  bg-[#39B7B3] hidden lg:flex absolute top-14 start-4 -z-10"></div>
            <div className="h-7 w-[21%] bg-[#39B7B3] hidden lg:flex absolute top-14 end-4 -z-10"></div>
            <div className="h-7 w-[24%] bg-[#39B7B3] hidden lg:flex absolute top-[8.3rem] start-[4.5rem] -z-10"></div>
            <div className="h-7 w-[32%] bg-[#39B7B3] hidden lg:flex absolute top-[8.3rem] end-[4.5rem] -z-10"></div>
          </div>
      </div>
      <div className="mt-5">
          <Image src="/home1.png" width={627} height={410} quality={100} alt="freedcapital logo" placeholder="empty"
                   className='mt-56 w-[90%] md:h-[32rem] h-[10rem] mx-auto '  /> 
     </div>

     <div className="h-0.5 w-14 mx-auto bg-slate-500 rounded-md mt-6"></div>
     <div className="mt-2 h-32 w-[83%] md:w-[70%] mx-auto">
      <p className="text-center text-lg tracking-wide text-gray-400">Why Choose Us</p>
      <h1 className="text-center mt-4 font-semibold text-2xl  md:text-5xl md:leading-snug ">Choose the proven experts for all your service needs</h1>
     </div>

     <div className="lg:mt-24 w-[95%] h-[16rem] md:h-[30rem] mx-auto bg-slate-40 flex justify-around">
        <div className="w-[30%] h-[100%]">
          <Image className=' w-[100%] h-[70%] mx-auto '  src="https://www.freedcapitals.com/Images/web-1.svg" width={227} height={210} quality={100} alt="freedcapital logo" placeholder="empty"  /> 
          <h1 className="text-center font-semibold tracking-wider md:mt-5  text-sm  md:text-2xl">Empower individuals</h1>
          <p className="text-center mt-2 lg:px-32 tracking-wide font-semibold text-gray-400 text-xs md:text-lg">We believe in ideas of our clients</p>
        </div>

        <div className="w-[30%] h-[100%] ">
          <Image className=' w-[100%] h-[70%] mx-auto '  src="https://www.freedcapitals.com/Images/web-2.svg" width={227} height={210} quality={100} alt="freedcapital logo" placeholder="empty"  /> 
          <h1 className="text-center font-semibold tracking-wider md:mt-5 text-sm md:text-2xl">Customer-centered approach</h1>
          <p className="text-center mt-2 lg:px-20 tracking-wide font-semibold text-gray-400 text-xs  md:text-lg">We believe our clients deserve the best hence our prompt attention</p>
        </div>
       
        <div className="w-[30%] h-[100%] ">
          <Image className=' w-[100%] h-[69%] mx-auto '  src="https://www.freedcapitals.com/Images/web-3.svg" width={227} height={210} quality={100} alt="freedcapital logo" placeholder="empty"  /> 
          <h1 className="text-center font-semibold tracking-wider md:mt-5  text-sm  md:text-2xl">Customer-centered approach</h1>
          <p className="text-center mt-2 lg:px-20 tracking-wide font-semibold text-gray-400 text-xs md:text-lg">We believe our clients deserve the best hence our prompt attention</p>
        </div>
     </div>

    <div className="mt-28 h-12 w-32 mx-auto">
      <button className=" h-12 w-28 border font-medium rounded-2xl text-[#39B7B3] border-[#39B7B3]">Know more</button>
    </div> 

     <div className="flex mt-5 w-[100%] h-[44rem] bg-[#39B7B3] bg-opacity-25 ">
      <div>
      <h1 className="text-5xl font-bold mt-28 px-20 leading-snug tracking-wider">Here are some of the <br /> industries we feature.</h1>
      
      <p className="px-20 text-xl mt-5 font-semibold text-gray-400 tracking-wider ">We collaborate with players in various industries for lasting <br /> achievement, spanning finance, healthcare, technology, and <br /> agriculture. Our objective is to achieve excellence and progress <br /> consistently.</p>
     
      <div className="mt-5 h-12 w-60 ">
      <button className=" h-12 w-56 border font-medium rounded-2xl text-[#39B7B3] border-[#39B7B3]">Energy & Natural Resources</button>
      </div> 
      </div>
     
      <div>
      <Image className=' w-[10%] h-[5rems] mx-auto absolute mt-28 '  src="https://www.freedcapitals.com/Images/pg2-bg-icon.svg" width={227} height={210} quality={100} alt="freedcapital logo" placeholder="empty"  /> 
     
      <Image className=' w-[28rem] h-[32rem] relative  mt-20'  src="https://www.freedcapitals.com/Images/c-hero.svg" width={427} height={510} quality={100} alt="freedcapital logo" placeholder="empty"  /> 
      </div>

     </div>

    

    </main>
  )
}
