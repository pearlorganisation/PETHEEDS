
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { LiaAngleLeftSolid } from "react-icons/lia";
import { LiaAngleRightSolid } from "react-icons/lia";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BrandSlider = () => {

    const { productsData, isLoading, totalPages, brands } = useSelector((state) => state.products);
    function getRandomColorHex() {
        // Generate random values for red, green, and blue components
        const red = Math.floor(Math.random() * 256); // Random number between 0 and 255
        const green = Math.floor(Math.random() * 256); // Random number between 0 and 255
        const blue = Math.floor(Math.random() * 256); // Random number between 0 and 255

        // Convert the RGB values to a hex string
        const hex = "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);

        return hex;
    }

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
            < section className=" text-center space-y-3 py-4" >
                <p className="flex justify-center font-bold text-2xl mb-4 items-center">Brands</p>

                <div className='flex gap-3 justify-center items-start flex-wrap relative w-fit mx-auto overflow-hidden'>
                    <div onClick={() => {
                        goPrev()
                    }} className='absolute z-40 left-[2rem] rounded-lg h-full cursor-pointer w-20 flex justify-start items-center px-2'> <LiaAngleLeftSolid /> </div>
                    <div onClick={() => {
                        goNext()
                    }} className='absolute z-40 right-[2rem] rounded-lg h-full cursor-pointer  w-20 flex justify-end items-center px-2'><LiaAngleRightSolid /></div>

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
                        modules={[]}
                        className=" container mx-auto grid grid-cols-4 gap-4 "
                    >

                        {
                            brands?.map((item, ind) => {
                                const randomColorHex = getRandomColorHex()
                                // Get the color from the colors array using the random index

                                return <SwiperSlide> <Link to={`/product?brand=${item?._id}`} className={`font-medium flex text-center border h-full rounded-lg bg-[${randomColorHex}]/30 cursor-pointer`}>
                                    <img
                                        className="rounded-md h-full "
                                        src={item?.brandBanner?.path}
                                        // src="https://headsupfortails.com/cdn/shop/files/sassy-sausages-web-65d736c98424c.webp?v=1708611835"
                                        alt="product"
                                    />
                                </Link></SwiperSlide>

                            })
                        }



                    </Swiper>
                </div>
            </section >
        </>
    )
}

export default BrandSlider

