import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategory } from "../../features/actions/productActions";
import { useLocation } from "react-router-dom";
import ProductSupportingComponent from "./ProductSupportingComponent ";
import ProductCard from "../Components/Product/ProductCard";

const ProductByCollection = () => {
  const dispatch = useDispatch();
  const { filteredProduct, isLoading } = useSelector((state) => state.products);
  const [price, setPrice] = useState({});
  let { search } = useLocation();

  useEffect(() => {
    dispatch(getProductByCategory({ query: search }));
  }, [dispatch, search]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen container mx-auto">
      <div className="container mx-auto px-4 py-20 md:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div data-id="3">
            <h1 className="text-2xl font-bold" data-id="4">
              {filteredProduct[0]?.brand?.brand}
            </h1>
            <p className="text-gray-500" data-id="5">
              Browse our collection of high-quality products.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading
            ? Array(8)
              .fill(true)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="w-full bg-gray-50 animate-pulse shadow-md rounded-md p-3 space-y-3"
                >
                  <div className="bg-gray-200 w-full h-[18rem] rounded-md"></div>
                  <div className="bg-gray-200 h-4 w-20"></div>
                  <div className="bg-gray-200 h-4 w-32"></div>
                  <div className="bg-gray-200 h-4 w-14"></div>
                  <div className="bg-gray-200 h-4 w-32"></div>
                  <div className="bg-gray-200 w-full h-9 rounded-md"></div>
                </div>
              ))
            : Array.isArray(filteredProduct) && filteredProduct.length > 0
              ? filteredProduct.map((el, id) => (
                <ProductCard el={el} key={id} />
                // <ProductSupportingComponent key={id} el={el} />
              ))
              : "No Data Found"}
        </div>
      </div>
    </div>
  );
};

export default ProductByCollection;
