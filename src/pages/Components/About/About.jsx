import dog from "../../../images/singledog.png";
import cat from "../../../images/cat.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import dogcat from "../../../images/dogandcat.png";
import doc from "../../../images/doc.jpg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom/dist";
const About = () => {
  const Navigate = useNavigate()
  const handleNavigate=()=>{
     Navigate('/booknow')
  }
  return (
    <>
      <section className="min-h-[80vh] grid place-items-center">
        <div className="mx-auto grid md:grid-cols-3 ">
          <div className="flex justify-center items-center md:block ">
            <div className="flex justify-end">
              <img src={dog} className="  w-[250px]" />
            </div>
          </div>
          <div className="">
            <div>
              <h1 className="text-xl md:text-5xl font-bold text-center py-5 text-[#171A1F]">
                Who we are
              </h1>
            </div>
            <div>
              <p className="text-center text-[#171A1F]">
                Our love for pets and their owners drives
              </p>
            </div>
            <div>
              <p className="text-center">everything we do.</p>
            </div>

            <div className="flex justify-around py-5">
              <div className="flex flex-col items-center">
                <div>
                  <h1 className="text-xl md:text-3xl font-medium text-[#FF8D6B]">
                    46K+
                  </h1>
                </div>
                <div>
                  <p className="text-[#9095A0]">Clients</p>
                </div>
              </div>

              <div>
                <div className="flex flex-col items-center">
                  <div>
                    <h1 className="text-xl md:text-3xl font-medium text-[#FF8D6B]">
                      20+
                    </h1>
                  </div>
                  <div>
                    <p className="text-[#9095A0]">Employee</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col items-center">
                  <div>
                    <h1 className="text-xl md:text-3xl font-medium text-[#ca745a]">
                      4+
                    </h1>
                  </div>
                  <div>
                    <p className="text-[#9095A0]">Employee</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center py-4">
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleNavigate}
               >
                  Make an appointment
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center md:block">
            <div className="flex justify-start ">
              <img src={cat} className="  w-[250px]" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" container mx-auto grid md:grid-cols-2 ">
          <div className=" md:p-16 p-5">
            <div className="py-5">
              <h1 className=" text-[#1A4E8DFF] text-3xl font-bold ">
                Our Story
              </h1>
            </div>

            <div>
              <p className="text-[#6B6D70]">
                Since 2019, we've revolutionized pet care by setting new
                industry standards. With a nationwide presence, we provide care
                for your beloved pets in various tailored environments.
              </p>
            </div>
            <div>
              <div>
                <h1 className="text-[#1A4E8DFF] text-xl font-medium">
                  Our Values
                </h1>
                <div className="flex items-center pt-2">
                  <div className="text-[#1A4E8D]">
                    <MdOutlineArrowForwardIos />
                  </div>
                  <div>
                    <p className="text-[#6B6D70]">Always be transparent</p>
                  </div>
                </div>
                <div className="flex items-center pt-2">
                  <div className="text-[#1A4E8D]">
                    <MdOutlineArrowForwardIos />
                  </div>
                  <div>
                    <p className="text-[#6B6D70]">Work compassionately</p>
                  </div>
                </div>
                <div className="flex items-center pt-2">
                  <div className="text-[#1A4E8D]">
                    <MdOutlineArrowForwardIos />
                  </div>
                  <div>
                    <p className="text-[#6B6D70]">
                      Take pride in our community
                    </p>
                  </div>
                </div>
                <div className="flex items-center pt-2">
                  <div className="text-[#1A4E8D]">
                    <MdOutlineArrowForwardIos />
                  </div>
                  <div>
                    <p className="text-[#6B6D70]">Be curious</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <img src={dogcat} />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-5 ">
        <div className="text-center py-5">
          <h1 className="text-[#1A4E8DFF] text-3xl font-bold">Meet our team</h1>
        </div>

        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="flex  justify-center items-center ">
                <div class="max-w-sm rounded overflow-hidden shadow-lg ">
                  <img class="w-full" src={doc} alt="Sunset in the mountains" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2"> Sr Dr sakuntla</div>
                    <p class="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex  justify-center items-center ">
                <div class="max-w-sm rounded overflow-hidden shadow-lg ">
                  <img class="w-full" src={doc} alt="Sunset in the mountains" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Jr Dr katrena</div>
                    <p class="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex  justify-center items-center ">
                <div class="max-w-sm rounded overflow-hidden shadow-lg ">
                  <img class="w-full" src={doc} alt="Sunset in the mountains" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">mike jorden</div>
                    <p class="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex  justify-center items-center ">
                <div class="max-w-sm rounded overflow-hidden shadow-lg ">
                  <img class="w-full" src={doc} alt="Sunset in the mountains" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">alisa beth</div>
                    <p class="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default About;
