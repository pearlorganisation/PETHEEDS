import { Link, useNavigate } from "react-router-dom";
import img from "../../../../Images for Website/Aloevera Shampoo 250 ML/2.png";
import img2 from "../../../../Images for Website/Aloevera Shampoo 500 ML/2.png";
import { FaShoppingCart } from "react-icons/fa";
import newimg from "../../../images/new.png"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../features/slices/cartSlice";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { getProducts } from "../../../features/actions/productActions";

export default function ProductList() {
  const { productsData, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelnavigate = () => {
    navigate("/singleproduct");
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      {/* Your component content */}
      <style jsx>{`
        .custom-loader {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: conic-gradient(#0000 10%, #766df4);
          -webkit-mask: radial-gradient(
            farthest-side,
            #0000 calc(100% - 8px),
            #000 0
          );
          animation: s3 1s infinite linear;
        }

        @keyframes s3 {
          to {
            transform: rotate(1turn);
          }
        }
      `}</style>

      <div className="container mx-auto my-5 ">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex justify-center items-center ">
              <img
                className="rounded-lg"
                src="https://headsupfortails.com/cdn/shop/files/dd-web-65d736c0b38bc_1500x.webp?v=1708611678"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center ">
              <img
                className="rounded-lg"
                src="https://headsupfortails.com/cdn/shop/files/treats-web-65d736dde8a86_1500x.webp?v=1708611625"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <img
                className="rounded-lg"
                src="https://headsupfortails.com/cdn/shop/files/grooming-web-65d736d81ec69_1500x.webp?v=1708611646"
              />
            </div>
          </SwiperSlide>
          <div className="flex justify-center items-center ">
            <SwiperSlide>
              <img
                className="rounded-lg"
                src="https://headsupfortails.com/cdn/shop/files/saras-web-65d736da0ed77_1500x.webp?v=1708611605"
              />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>

      <div className="grid md:grid-cols-2 md:grid-rows-2 gap-3 container mx-auto p-5 border-red-500">
        <div>
          <img src="https://headsupfortails.com/cdn/shop/files/grain-free-web-01-65e08bd2dca7d.webp?v=1709214839" />
        </div>
        <div>
          <img src="https://headsupfortails.com/cdn/shop/files/hypoallergenic_web_02_b1c2e966-7195-4b23-a765-165e250bb676.webp?v=1709716942" />
        </div>
        <div>
          <img src="https://headsupfortails.com/cdn/shop/files/flavours-of-india-web-03-65e08bd4cf3d9.webp?v=1709214910" />
        </div>
        <div>
          <img src="https://headsupfortails.com/cdn/shop/files/classic-web-04-65e08bd51a648.webp?v=1709214921" />
        </div>
      </div>

      <div className=" max-w-screen-xl px-4 py-8 mx-auto">

        <div className="flex justify-center font-bold text-2xl mb-4 items-center">
          <div><img src={newimg} /></div>
          <div>New In Store</div>
        </div>
        <div className="grid grid-cols-4 gap-4 ">
          <img
            className="rounded-md"
            src="https://headsupfortails.com/cdn/shop/files/sassy-sausages-web-65d736c98424c.webp?v=1708611835"
            alt="product"
          />
          <img
            className="rounded-md"
            src="https://headsupfortails.com/cdn/shop/files/trooper-mob.webp?v=1709213470"
            alt="product"
          />
          <img
            className="rounded-md"
            src="https://headsupfortails.com/cdn/shop/files/perfumes-web-65d736c804b8e.webp?v=1708612074"
            alt="product"
          />
          <img
            className="rounded-md"
            src="https://headsupfortails.com/cdn/shop/files/calcium-web-65d736c93dd5d.webp?v=1708611971"
            alt="product"
          />
        </div>
      </div>




      <section
        id="Projects"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {isLoading ? Array(8).fill(true).map(item => {
          return <div class="w-80 bg-gray-50 animate-pulse shadow-md rounded-md p-3 space-y-3">
            <div class="bg-gray-200 w-full h-[18rem] rounded-md"></div>
            <div class="bg-gray-200 h-4 w-20"></div>
            <div class="bg-gray-200 h-4 w-32"></div>
            <div class="bg-gray-200 h-4 w-14"></div>
            <div class="bg-gray-200 h-4 w-32"></div>
            <div class="bg-gray-200 w-full h-9 rounded-md"></div>


          </div>
        }) : productsData?.map((el, id) => {
          return (
            <div class="w-80 bg-white  shadow-md rounded-md p-3 space-y-3">
              <Link to={`/singleproduct/${el._id}`}>
                <img
                  src={el?.productImg?.path}
                  alt="Product"
                  class="h-80 w-full object-cover rounded-t-xl"
                />

                <div class="px-4 py-3">
                  <span class="text-gray-400 mr-3 uppercase text-xs">
                    Brand
                  </span>

                  <p class="text-lg font-bold text-black truncate block capitalize">
                    {el?.productName}
                  </p>

                  <div class="flex flex-col">
                    <p class="text-lg font-semibold text-black cursor-auto mt-3 ">
                      ₹{el?.totalPrice}
                    </p>

                    {
                      el?.discount ? <div className="flex items-center">
                        <del className="text-slate-600 mt-3 mb-3 mr-3">
                          <p class="text-sm text-slate-500 cursor-auto ml-2 ">
                            ₹{el.price}
                          </p>
                        </del>
                        <p className="border py-1 px-1 rounded-md  text-xs font-semibold text-white bg-indigo-600">
                          {el?.discount}% OFF
                        </p>
                      </div> : <div className="flex items-center text-transparent">
                        <del className=" mt-3 mb-3 mr-3">
                          <p class="text-sm  cursor-auto ml-2 ">
                            00
                          </p>
                        </del>
                        <p className=" py-1 px-1 rounded-md  text-xs font-semibold ">
                          00
                        </p>
                      </div>
                    }

                    <div className="flex mb-3">
                      <button className="border border-slate-400 rounded-md text-xs p-1 mr-2 text-slate-600 hover:bg-[#4F46E5] hover:text-white hover:border-none">
                        450ml
                      </button>
                      <button className="border border-slate-400 rounded-md text-xs p-1 text-slate-600 hover:bg-[#4F46E5] hover:text-white hover:border-none">
                        450ml
                      </button>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="w-full">
                <button
                  className="w-full rounded-md border bg-blue-700 text-sm hover:bg-blue-800 h-9 flex items-center justify-center gap-3 px-4 my-2" // Added margin here
                  onClick={() => {
                    dispatch(addToCart(el));
                  }}
                >
                  <div className="mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="white"
                      class="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>

                  <div className="text-white font-semibold">ADD TO CART</div>
                </button>
              </div>
            </div>
          );
        })}
      </section>

    </>
  );
}
