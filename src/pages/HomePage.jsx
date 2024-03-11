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
              <div class="lg:hidden">
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
              <div class="lg:hidden">
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
              <div class="lg:hidden">
                <img src={dog} alt="mockup" class="w-full h-auto" />
              </div>
              <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={dog} alt="mockup" class="w-full h-auto rounded" />
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>

     <Stats/>
       
    
      <Ourvision/>
      <OurService/>
      <Herosection />
      <Booking/>
    
    </>
  );
};

export default HomePage;
