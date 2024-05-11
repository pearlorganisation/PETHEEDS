import React, { useEffect, useMemo, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import newimg from "../../../images/new.png"
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategory } from "../../../features/actions/productActions";
import { Link } from "react-router-dom";

const NewInStore = () => {
    const dispatch = useDispatch()
    const { filteredProduct } = useSelector(state => state.products)

    function chunkArray(array, chunkSize) {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    }

    const chunkData = useMemo(() => {
        // const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const dividedArray = chunkArray(filteredProduct, 4);
        return dividedArray
    }, [])

    useEffect(() => {
        dispatch(getProductByCategory({ query: `?newInStore=true` }))
    }, [])


    return (

        <div className="container mx-auto my-5 ">
            <div className="flex justify-center font-bold text-2xl mb-4 items-center">
                <div><img src={newimg} /></div>
                <div>New In Store</div>
            </div>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    chunkData.map(item => {
                        return <SwiperSlide>
                            <div className="grid md:grid-cols-2 md:grid-rows-2 gap-3 container mx-auto p-5 border-red-500">
                                {
                                    item?.map(d => {
                                        return <Link
                                            className="w-[742px] h-[197px]" to={`/singleproduct/${d?._id}`}>

                                            <img
                                                // src={d?.productBanner?.path}
                                                src="https://headsupfortails.com/cdn/shop/files/hypoallergenic_web_02_b1c2e966-7195-4b23-a765-165e250bb676.webp?v=1709716942"
                                            />
                                        </Link>
                                    })
                                }




                            </div>
                        </SwiperSlide>
                    })
                }

            </Swiper>
        </div>

    )
}

export default NewInStore