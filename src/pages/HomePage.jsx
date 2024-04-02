import dog from "../images/dog.jpg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Herosection from "./Components/herosection/Herosection";
import Stats from "./Components/Stats/Stats";
import Ourvision from "./Components/Ourvision/Ourvision";
import Booking from "./Components/Booking";
import OurService from "./Components/OurService/Ourservice";
const HomePage = () => {
  return (
    <>

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
   
        <SwiperSlide>
          <section class="bg-white dark:bg-gray-900">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-[#3A3A3A] dark:text-white">
                  We offer special offer for special pet
                </h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  From checkout to global sales tax compliance, companies around
                  the world use Flowbite to simplify their payment stack.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Get started
                  <svg
                    class="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Speak to Sales 
                </a>
              </div>
              <div class="lg:hidden mt-5">
                <img src={dog} alt="mockup" class="w-full h-auto" />
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={dog} alt="mockup" class="w-full h-auto rounded" />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section class="bg-white dark:bg-gray-900">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-[#3A3A3A] dark:text-white">
                  We offer special offer for special pet
                </h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  From checkout to global sales tax compliance, companies around
                  the world use Flowbite to simplify their payment stack.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Get started
                  <svg 
                    class="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Speak to Sales 
                </a>
              </div>
              <div class="lg:hidden mt-5">
                <img src={dog} alt="mockup" class="w-full h-auto" />
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={dog} alt="mockup" class="w-full h-auto rounded" />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section class="bg-white dark:bg-gray-900">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-[#3A3A3A] dark:text-white">
                  We offer special offer for special pet
                </h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  From checkout to global sales tax compliance, companies around
                  the world use Flowbite to simplify their payment stack.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Get started
                  <svg
                    class="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Speak to Sales 
                </a>
              </div>
              <div class="lg:hidden mt-5">
                <img src={dog} alt="mockup" class="w-full h-auto" />
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={dog} alt="mockup" class="w-full h-auto rounded" />
              </div>
            </div>
          </section>
        </SwiperSlide>
    
        
      </Swiper>
     
     <div className=" max-w-screen-xl px-4 py-8 mx-auto">
      <h5 className=" font-bold text-2xl mb-4">○ New In Store</h5>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 ">
        <img className="rounded-md" src="https://headsupfortails.com/cdn/shop/files/sassy-sausages-web-65d736c98424c.webp?v=1708611835"  alt="product"/>
        <img className="rounded-md" src="https://headsupfortails.com/cdn/shop/files/trooper-mob.webp?v=1709213470"  alt="product"/>
        <img className="rounded-md" src="https://headsupfortails.com/cdn/shop/files/perfumes-web-65d736c804b8e.webp?v=1708612074"  alt="product"/>
        <img className="rounded-md" src="https://headsupfortails.com/cdn/shop/files/calcium-web-65d736c93dd5d.webp?v=1708611971"  alt="product"/>
      </div>
     </div>

     <div className=" max-w-screen-xl px-4 py-8 mx-auto">
      <h5 className=" font-bold text-2xl mb-4">○ Specials By Price</h5>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 ">
        <div className="flex justify-center items-center space-x-1 sm:space-x-5 rounded-xl border h-20 bg-gradient-to-b from-slate-50 to-amber-100">
            <div className=" font-extrabold text-3xl sm:text-4xl">
            ₹199</div>
            <div className=" h-5 sm:h-6 text-xl  sm:text-2xl text-gray-500">
           & Under</div>
           <div className="">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="sm:w-10 sm:h-10 text-yellow-500 w-8 h-8">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clip-rule="evenodd" />
</svg>

           </div>
            </div>
        <div className="flex justify-center items-center space-x-1 sm:space-x-5 rounded-xl border h-20 bg-gradient-to-b from-slate-50 to-amber-100">
            <div className=" font-extrabold text-3xl sm:text-4xl">
            ₹199</div>
            <div className=" h-5 sm:h-6 text-xl  sm:text-2xl text-gray-500">
           & Under</div>
           <div className="">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="sm:w-10 sm:h-10 text-yellow-500 w-8 h-8">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clip-rule="evenodd" />
</svg>

           </div>
            </div>
        <div className="flex justify-center items-center space-x-1 sm:space-x-5 rounded-xl border h-20 bg-gradient-to-b from-slate-50 to-amber-100">
            <div className=" font-extrabold text-3xl sm:text-4xl">
            ₹199</div>
            <div className=" h-5 sm:h-6 text-xl  sm:text-2xl text-gray-500">
           & Under</div>
           <div className="">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="sm:w-10 sm:h-10 text-yellow-500 w-8 h-8">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clip-rule="evenodd" />
</svg>

           </div>
            </div>
        <div className="flex justify-center items-center space-x-1 sm:space-x-5 rounded-xl border h-20 bg-gradient-to-b from-slate-50 to-amber-100">
            <div className=" font-extrabold text-3xl sm:text-4xl">
            ₹199</div>
            <div className=" h-5 sm:h-6 text-xl  sm:text-2xl text-gray-500">
           & Under</div>
           <div className="">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="sm:w-10 sm:h-10 text-yellow-500 w-8 h-8">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clip-rule="evenodd" />
</svg>

           </div>
            </div>
      
          
          
          </div>
    
     </div>
     <Stats/>
       
    
      <Ourvision/>
      <OurService/>
      <Herosection />
      <Booking/>
    
    </>
  );
};

export default HomePage;
