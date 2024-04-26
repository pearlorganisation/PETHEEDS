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
import QuantityWithPrice from "./QuantityWithPrice";
import { getCategory } from "../../../features/actions/categoryAction";
import BrandSlider from "./BrandSlider";
import CategorySlider from "./CategorySlider";
import ProductCard from "./ProductCard";



export default function ProductList() {
  const { productsData, isLoading, totalPages } = useSelector((state) => state.products);
  const { categoryData } = useSelector((state) => state.category);
  const [limit, setLimit] = useState(2)
  const [page, setPage] = useState(1)
  const [price, setPrice] = useState({})
  const dispatch = useDispatch();
  const navigate = useNavigate();





  useEffect(() => {
    dispatch(getProducts({ page, limit }));
  }, [page]);
  useEffect(() => {
    console.log(price, "price")
  }, [price]);

  useEffect(() => {
    dispatch(getCategory())
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


      <BrandSlider />
      <CategorySlider data={categoryData} />
      {/* <section className="container mx-auto text-center space-y-3">
        <p className="font-medium text-xl py-2">Category</p>
        <div className='flex gap-3 justify-center items-start flex-wrap'>

          {
            categoryData?.map(item => {
              return <Link to={`/category/${item?._id}`} className='flex flex-col justify-center items-center cursor-pointer'><img className='size-24 border-4 border-yellow-200  object-center' src={item?.categoryImg} alt="" /> <div>{item?.title}</div> </Link>
            })
          }
        </div>
      </section> */}
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
            <ProductCard el={el} />
          );
        })}
      </section>


      <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8 py-6">
        <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
          <button
            onClick={() => {
              setPage((prev) => {
                return prev > 1 ? prev - 1 : prev
              })
            }}
            className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Previous</button>
          <div>
            Page {page} of {totalPages}
          </div>
          <button
            onClick={() => {
              setPage((prev) => {
                return prev < totalPages ? prev + 1 : prev
              })
            }}
            className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Next</button>
        </div>
      </div>

    </>
  );
}
