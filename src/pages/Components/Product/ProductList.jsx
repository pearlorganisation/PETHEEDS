import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper/modules";
import { getBrands, getProducts } from "../../../features/actions/productActions";
// import QuantityWithPrice from "./QuantityWithPrice";
import { getCategory } from "../../../features/actions/categoryAction";
import BrandSlider from "./BrandSlider";
import CategorySlider from "./CategorySlider";
import ProductCard from "./ProductCard";
// import NewInStore from "./NewInStore";



export default function ProductList() {
  const { productsData, isLoading, brands } = useSelector((state) => state.products);
  const [searchParams, setSearchParams] = useSearchParams();

  const [limit, setLimit] = useState(4)
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1)
  const [price, setPrice] = useState({})
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation()
  console.log(searchParams.get('page'), "searchParams.get('page')")




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
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])




  return (
    <div className="pt-14">
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

      {/* <NewInStore /> */}





      <BrandSlider />
      <CategorySlider />

      <div className="container mx-auto py-6 px-3">
        <div class="mb-6 flex items-center justify-between">
          <div data-id="3"><h1 class="text-2xl font-bold" data-id="4">Products</h1><p class="text-gray-500 " data-id="5">Browse our collection of high-quality products.</p></div>

        </div>
        <section
          id="Projects"
          class=" container mx-auto grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6"
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
              <ProductCard el={el} key={id} />
            );
          })}
        </section>
      </div>
      <div className="grid place-items-center pb-5  ">
        <Link to='/productsList'>
          <button className="px-6 py-2 rounded-md text-blue-600 hover:underline font-medium" type="button">View More...</button>
        </Link>
      </div>


      {/* <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8 py-6">
        <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
          <button
            onClick={() => {
              setPage((prev) => {
                if (prev > 1) {
                  const nextPage = prev - 1;
                  // Update the query parameter without using navigate
                  setSearchParams({ page: nextPage });
                  return nextPage;
                }
                return prev;
              });
            }}
            className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Previous</button>
          <div>
            Page {page} of {totalPages}
          </div>
          <button
            onClick={() => {
              setPage((prev) => {
                if (prev < totalPages) {
                  const nextPage = prev + 1;
                  // Update the query parameter without using navigate
                  setSearchParams({ page: nextPage });
                  return nextPage;
                }
                return prev;
              });
            }}
            className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Next</button>
        </div>
      </div> */}

    </div>
  );
}
