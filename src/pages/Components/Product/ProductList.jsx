import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { getBrands, getProducts } from "../../../features/actions/productActions";
import QuantityWithPrice from "./QuantityWithPrice";
import { getCategory } from "../../../features/actions/categoryAction";
import BrandSlider from "./BrandSlider";
import CategorySlider from "./CategorySlider";
import ProductCard from "./ProductCard";
import NewInStore from "./NewInStore";



export default function ProductList() {
  const { productsData, isLoading, totalPages, brands } = useSelector((state) => state.products);
  const { categoryData } = useSelector((state) => state.category);
  const [limit, setLimit] = useState(2)
  const [page, setPage] = useState(1)
  const [price, setPrice] = useState({})
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation()
  console.log(search, "search")




  useEffect(() => {
    dispatch(getProducts({ page, limit }));
  }, [page]);
  useEffect(() => {
    console.log(price, "price")
  }, [price]);

  useEffect(() => {
    dispatch(getCategory())
    dispatch(getBrands())
  }, []);

  useEffect(() => {
    console.log(brands, "brands")
  }, [brands]);




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

      <NewInStore />





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
      <div className="container mx-auto py-6">
        <div class="mb-6 flex items-center justify-between">
          <div data-id="3"><h1 class="text-2xl font-bold" data-id="4">Products</h1><p class="text-gray-500 dark:text-gray-400" data-id="5">Browse our collection of high-quality products.</p></div>

        </div>
        <section
          id="Projects"
          class=" container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
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
      </div>


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
