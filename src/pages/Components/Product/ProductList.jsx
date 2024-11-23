import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import { getBrands, getProducts } from "../../../features/actions/productActions";
import { getCategory } from "../../../features/actions/categoryAction";
import BrandSlider from "./BrandSlider";
import CategorySlider from "./CategorySlider";
import ProductCard from "./ProductCard";
import NewInStore from "./NewInStore";
import { GoArrowRight } from "react-icons/go";


export default function ProductList() {
  const { productsData, isLoading, totalPages, brands } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  useEffect(() => {
    dispatch(getProducts({ page: 1, limit: 8 }));
  }, []);

  useEffect(() => {
    dispatch(getCategory())
    dispatch(getBrands())
  }, []);

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

      <NewInStore />





      <BrandSlider />
      <CategorySlider />

      <div className="container mx-auto py-6 px-3">
        <div class="mb-6 flex items-center justify-between">
          <div data-id="3"><h1 class="text-2xl font-bold" data-id="4">Products</h1><p class="text-gray-500 " data-id="5">Browse our collection of high-quality products.</p></div>

        </div>
        <section
          id="Projects"
          class=" container mx-auto grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4"
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
        <div className="flex justify-end w-full mt-6">
            <button 
              onClick={() => {
                navigate('/products')
              }}
            className="flex px-5 py-2 rounded-md items-center space-x-2 text-[#7568c7] border-[#7568c7] border  ">
              <span>View More</span> <GoArrowRight />
            </button>
          </div>
      </div>

    </div>
  );
}
