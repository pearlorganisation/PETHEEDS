import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { LiaAngleRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CategorySlider = ({ data }) => {
  const { categoryData, isLoading } = useSelector((state) => state.category);

  const swiperRef = useRef(null);
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <>
      <section className=" text-center space-y-3 container mx-auto py-10">
        <p className="flex justify-center font-bold text-2xl md:text-4xl mb-6 items-center">
          Category
        </p>

        <div className="flex justify-center items-center relative">
          <div
            onClick={() => {
              goPrev();
            }}
            className="z-40 rounded-lg h-full  cursor-pointer w-8 flex justify-start items-center px-2"
          >
            {" "}
            <LiaAngleLeftSolid size={40} />{" "}
          </div>

          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            autoplay={{delay:4000}}
            modules={[Autoplay]}
            className="flex"
          >
            {isLoading
              ? Array(6)
                  .fill(true)
                  .map((item) => {
                    return (
                      <div class="animate-pulse mx-12 shadow-md">
                        <div class="flex flex-col justify-center items-center cursor-pointer">
                          <div class="h-36 w-36 bg-gray-200 rounded"></div>
                          <div class="h-4 mt-2 bg-gray-200 w-1/2 rounded"></div>
                        </div>
                      </div>
                    );
                  })
              : categoryData?.map((item) => {
                  return (
                    <SwiperSlide>
                      {" "}
                      <Link
                        to={`/product?category=${item?._id}`}
                        className="flex flex-col justify-center items-center cursor-pointer"
                      >
                        <img
                          className=" h-[200px]  object-center"
                          src={item?.categoryImg}
                          alt=""
                          onError={(event) => {
                            event.target.src = "/placeholder.jpg";
                            event.onerror = null;
                          }}
                        />{" "}
                        <div className="font-poppins font-semibold pt-7 ">
                          {item?.title}
                        </div>{" "}
                      </Link>{" "}
                    </SwiperSlide>
                  );
                })}
          </Swiper>

          <div
            onClick={() => {
              goNext();
            }}
            className="z-40  rounded-lg h-full  cursor-pointer  w-8 flex justify-end items-center px-2"
          >
            <LiaAngleRightSolid size={40} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CategorySlider;
