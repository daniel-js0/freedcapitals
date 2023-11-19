import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
   <main >
     <div className='w-screen '>

      <h1 className=' text-center text-[1.35rem] font-bold md:text-5xl md:font-semibold md:px-12 md:leading-snug'>Stay informed with up-to-date <br className='hidden md:flex' /> informaton on all things Freed Capitals.</h1>

      <div className='w-[95%] md:w-[70%] md:h-32 md:mt-14 mt-8 h-16 mx-auto flex justify-between rounded-lg bg-[#39B7B3]'>
        <h2 className='my-auto ml-2 text-[0.85rem] font-semibold text-white md:text-3xl md:ml-16'>Subscribe Newsletters</h2>

        <div className='relative h-12 w-[55%] md:h-20 mr-3 my-auto'>
          <input type="text" placeholder='Enter your email...'
          className='h-12 md:h-20  w-[100%] my-auto rounded-md px-2 placeholder:text-xs md:placeholder:text-xl' />
       

          <button className='h-10 md:h-16 md:top-2 w-[43%] end-1 top-1 rounded-md bg-[#39B7B3] absolute'>
            <p className='text-center text-xs text-white md:text-xl'>Subcribe Now</p>
          </button>
        </div>
      </div>

      
      <div className='flex mt-9 justify-center md:hidden'>
            <h1 className='lg:mt-3 md:mt-4 mt-[0.4rem] text-2xl tracking-widest font-medium'>FREED CAPITALS</h1>
            <Image src="/Logo.png" width={27} height={10} quality={100} alt="freedcapital logo" placeholder="empty"
                   className='lg:ml-2 ml-1 h-7 lg:mt-4 md:mt-5 mt-[0.55rem]'  />      
      </div>

      <div className='flex justify-around mt-6 text-gray-600 md:hidden'>
        <div className='mr-8'>
          <p className=''>About</p>
          <p className='mt-5'>Industries</p>
          <p className='mt-5'>Solutions</p>
        </div>
        <div className='ml-8'>
          <p className=''>Insights</p>
          <p className='mt-5'>Career</p>
        </div>
      </div>
        

      <div className='mt-5 w-[70%]   mx-auto text-gray-700 md:hidden'>
          <p>House 6, PrincessAina Jegede Close, <br className='flex md:hidden' /> Ajao <br className='hidden md:flex'/> Estate. Lagos State.</p>
          <p className='mt-9'>+234 - 814 - 111 - 6304</p>
      </div>
      
      <div className='flex justify-between mx-auto mt-7 w-[70%] h-10 md:hidden'>
         <svg xmlns="http://www.w3.org/2000/svg" width="29" height="24" viewBox="0 0 29 24" fill="none">
          <path d="M15.1825 24H1.56882C0.70213 24 0 23.4068 0 22.6753V1.32461C0 0.592925 0.70224 0 1.56882 0H26.8559C27.7222 0 28.4246 0.592925 28.4246 1.32461V22.6753C28.4246 23.4069 27.7221 24 26.8559 24H19.6125V14.7059H23.3073L23.8605 11.0838H19.6125V8.77132C19.6125 7.72264 19.9574 7.00801 21.7385 7.00801L24.0101 7.00717V3.76755C23.6172 3.7234 22.2688 3.62478 20.6999 3.62478C17.4248 3.62478 15.1825 5.31276 15.1825 8.4126V11.0838H11.4783V14.7059H15.1825V24Z" fill="#39B7B3"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="none">
        <path d="M29.2234 2.36764C28.179 2.76923 27.0545 3.04081 25.8749 3.16215C27.0795 2.5381 28.0038 1.54857 28.4393 0.369808C27.3114 0.947635 26.0651 1.368 24.7337 1.59335C23.6726 0.612495 22.1561 0 20.4776 0C17.2593 0 14.6482 2.26074 14.6482 5.04875C14.6482 5.44457 14.6983 5.82882 14.7984 6.19863C9.95169 5.98772 5.65555 3.97978 2.77755 0.921633C2.27536 1.66992 1.9884 2.5381 1.9884 3.46262C1.9884 5.21343 3.0178 6.75912 4.58277 7.66486C3.62844 7.6403 2.7275 7.41062 1.94002 7.03503V7.09715C1.94002 9.54424 3.95044 11.5854 6.61989 12.0477C6.13104 12.1661 5.61551 12.2254 5.08329 12.2254C4.7079 12.2254 4.34085 12.195 3.98548 12.1358C4.72792 14.1408 6.88016 15.6013 9.43281 15.6403C7.4374 16.9953 4.92145 17.8028 2.19028 17.8028C1.71979 17.8028 1.2543 17.7797 0.798828 17.7335C3.37985 19.1636 6.44637 20 9.73813 20C20.466 20 26.3304 12.3077 26.3304 5.63525C26.3304 5.41567 26.3254 5.1961 26.3154 4.98086C27.4549 4.26869 28.4443 3.38028 29.2234 2.36764Z" fill="#39B7B3"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="2" y="2" width="28" height="28" rx="14" fill="#39B7B3"/>
          <path d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z" fill="white"/>
          <path d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z" fill="white"/>
          <path d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z" fill="white"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="2" y="2" width="28" height="28" rx="6" fill="#39B7B3"/> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_876_90)"/><rect x="2" y="2" width="28" height="28" rx="6" fill="#39B7B3"/> <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white"/><defs> <radialGradient id="paint0_radial_876_90" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"> <stop stop-color="#E0E8B7"/><stop offset="0.444662" stop-color="#FB8A2E"/><stop offset="0.71474" stop-color="#E2425C"/><stop offset="1" stop-color="#E2425C" stop-opacity="0"/></radialGradient></defs>
        </svg>
      </div>

      <div className='h-[0.010rem] mx-auto mt-5 w-[95%] bg-gray-500 md:hidden'></div>

      <p className='mt-3 mb-4 text-center text-gray-600 md:hidden'>© 2023 Freed Capitals. All right reserved.</p>

      
      {/* media query */}
      <div className='relative'>
          <div className='flex mt-8  mx-auto justify-between w-[95%] '>
              <div className='md:flex justify-between w-[43%] mt-8 ml-7 text-gray-600 hidden'>
                  <p className='' >About</p>
                  <p className='' >Industries</p>
                  <p className='' >Solutions</p>
                  <p className=''>Insights</p>
                  <p className=''>Career</p>
              </div>

              <div className='md:flex justify-between w-[15%] mt-9 mr-14  h-10 hidden'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="24" viewBox="0 0 29 24" fill="none">
                    <path d="M15.1825 24H1.56882C0.70213 24 0 23.4068 0 22.6753V1.32461C0 0.592925 0.70224 0 1.56882 0H26.8559C27.7222 0 28.4246 0.592925 28.4246 1.32461V22.6753C28.4246 23.4069 27.7221 24 26.8559 24H19.6125V14.7059H23.3073L23.8605 11.0838H19.6125V8.77132C19.6125 7.72264 19.9574 7.00801 21.7385 7.00801L24.0101 7.00717V3.76755C23.6172 3.7234 22.2688 3.62478 20.6999 3.62478C17.4248 3.62478 15.1825 5.31276 15.1825 8.4126V11.0838H11.4783V14.7059H15.1825V24Z" fill="#39B7B3"/>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="none">
                  <path d="M29.2234 2.36764C28.179 2.76923 27.0545 3.04081 25.8749 3.16215C27.0795 2.5381 28.0038 1.54857 28.4393 0.369808C27.3114 0.947635 26.0651 1.368 24.7337 1.59335C23.6726 0.612495 22.1561 0 20.4776 0C17.2593 0 14.6482 2.26074 14.6482 5.04875C14.6482 5.44457 14.6983 5.82882 14.7984 6.19863C9.95169 5.98772 5.65555 3.97978 2.77755 0.921633C2.27536 1.66992 1.9884 2.5381 1.9884 3.46262C1.9884 5.21343 3.0178 6.75912 4.58277 7.66486C3.62844 7.6403 2.7275 7.41062 1.94002 7.03503V7.09715C1.94002 9.54424 3.95044 11.5854 6.61989 12.0477C6.13104 12.1661 5.61551 12.2254 5.08329 12.2254C4.7079 12.2254 4.34085 12.195 3.98548 12.1358C4.72792 14.1408 6.88016 15.6013 9.43281 15.6403C7.4374 16.9953 4.92145 17.8028 2.19028 17.8028C1.71979 17.8028 1.2543 17.7797 0.798828 17.7335C3.37985 19.1636 6.44637 20 9.73813 20C20.466 20 26.3304 12.3077 26.3304 5.63525C26.3304 5.41567 26.3254 5.1961 26.3154 4.98086C27.4549 4.26869 28.4443 3.38028 29.2234 2.36764Z" fill="#39B7B3"/>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="2" y="2" width="28" height="28" rx="14" fill="#39B7B3"/>
                    <path d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z" fill="white"/>
                    <path d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z" fill="white"/>
                    <path d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z" fill="white"/>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="2" y="2" width="28" height="28" rx="6" fill="#39B7B3"/> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_876_90)"/><rect x="2" y="2" width="28" height="28" rx="6" fill="#39B7B3"/> <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white"/><defs> <radialGradient id="paint0_radial_876_90" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"> <stop stop-color="#E0E8B7"/><stop offset="0.444662" stop-color="#FB8A2E"/><stop offset="0.71474" stop-color="#E2425C"/><stop offset="1" stop-color="#E2425C" stop-opacity="0"/></radialGradient></defs>
                  </svg>
              </div>

          </div>

          <div className='h-[0.010rem]  mx-auto mt-12 w-[92%] bg-gray-600 md:flex hidden'></div>

          <div className='mt-4 hidden md:flex mx-auto justify-between w-[92%]  mb-6'>
                    <div>
                    <p className=' text-center text-gray-600 md:flex hidden'>© 2023 Freed Capitals. All right reserved.</p>
                    </div>
                  
                    <div className=' md:flex hidden '>
                        <h1 className=' text-2xl tracking-widest font-medium'>FREED CAPITALS</h1>
                        <Image src="/Logo.png" width={27} height={10} quality={100} alt="freedcapital logo" placeholder="empty"
                              className='lg:ml-2 ml-1 h-7 mt-1 '  />      
                  </div>

                  

                  <div className=' text-gray-700 md:flex md:flex-col mb-12 hidden'>
                      <div className='flex'>
                        <svg className='text-[#39B7B3] mt-1 mr-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        <p>House 6, PrincessAina Jegede Close, <br className='flex md:hidden' /> Ajao <br className='hidden md:flex'/> Estate. Lagos State.</p>
                      </div>
                      <div className='flex mt-5'>
                        <svg className='text-[#39B7B3] mt-1 mr-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                      <p className=''>+234 - 814 - 111 - 6304</p>
                      </div>
                  </div>
          
          </div>

          <svg className=' absolute -top-16 start-[20rem] opacity-20' xmlns="http://www.w3.org/2000/svg" width="651" height="427" viewBox="0 0 651 427" fill="none">
            <path d="M509.323 592.496C361.547 694.355 158.709 657.367 57.1619 510.044C-44.3855 362.721 -6.77628 159.997 140.999 58.1377C187.416 26.1166 241.333 6.67371 297.462 1.71594C353.592 -3.24183 410.006 6.4558 461.17 29.8577L468.726 33.302L444.197 86.6614L436.641 83.2171C351.7 44.4792 251.159 53.3435 174.224 106.373C53.1248 189.845 22.3052 355.971 105.521 476.699C188.737 597.427 354.957 627.738 476.056 544.266C552.978 491.245 597.05 400.43 591.072 307.264L590.542 298.977L649.127 295.059L649.657 303.346C653.322 359.489 642.311 415.661 617.705 466.353C593.099 517.044 555.743 560.514 509.301 592.499L509.323 592.496Z" fill="#39B7B3"/>
          </svg>

          <svg className='absolute top-48 start-[34rem]' xmlns="http://www.w3.org/2000/svg" width="204" height="163" viewBox="0 0 204 163" fill="none">
            <path d="M99.4028 261.594L0.95813 118.772L173.007 0.181414L203.173 43.9445L79.9375 128.888L148.217 227.947L99.4028 261.594Z" fill="#39B7B3"/>
          </svg>
          
      </div>


     </div>
   </main>
  )
}

export default Footer