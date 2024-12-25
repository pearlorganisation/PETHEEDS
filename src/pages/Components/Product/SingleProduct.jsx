// import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../../features/actions/productActions";
import { useEffect, useRef, useState } from "react";
import { addToCart } from "../../../features/slices/cartSlice";
import { IoStar } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { GrGlobe } from "react-icons/gr";
import { CiCreditCard1 } from "react-icons/ci";
import QuantityWithPrice from "./QuantityWithPrice";
import ReveiwCard from "./ReveiwCard";
import ImageViewer from "./ImageViewer";
import { getReview } from "../../../features/actions/reviewAction";
import style from './style.module.css'
import ProductImageSlider from "./ProductImageSlider";

// import img2 from "../../../../Images for Website/Aloevera Shampoo 250 ML/2.png";
// import img3 from "../../../../Images for Website/Aloevera Shampoo 250 ML/3.png";
// import img4 from "../../../../Images for Website/Aloevera Shampoo 250 ML/4.png";

const SingleProduct = () => {


  const dispatch = useDispatch();
  const { singleProduct, isLoading } = useSelector((state) => state.products);
  const { reviewData } = useSelector((state) => state.review);
  const [price, setPrice] = useState({});

  const navigate = useNavigate();
  const { productId } = useParams();
  console.log(productId, "product id hai");
  useEffect(() => {
    dispatch(getSingleProduct({ productId }));
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    dispatch(getReview(singleProduct?._id))
  }, [productId])
  useEffect(() => {
    console.log(reviewData, "reviewData")
  }, [reviewData])





  return (
    <>
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
      {isLoading ? (
        <div className="grid place-content-center h-[50vh] w-full">
          <div class="custom-loader"></div>
        </div>
      ) : (
        <section class="py-12 sm:py-[6rem]">
          <div class="container mx-auto px-4 md:px-2">
            <nav class="flex">
              <ol role="list" class="flex items-center">
                <li class="text-left">
                  <div class="-m-1">
                    <a
                      href="#"
                      class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                    >
                      {" "}
                      Home{" "}
                    </a>
                  </div>
                </li>

                <li class="text-left">
                  <div class="flex items-center">
                    <span class="mx-2 text-gray-400">/</span>
                    <div class="-m-1">
                      <a
                        href="#"
                        class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                      >
                        {" "}
                        Products{" "}
                      </a>
                    </div>
                  </div>
                </li>


              </ol>
            </nav>

            <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
              <ProductImageSlider singleProduct={singleProduct} />
              {/* <div class="lg:col-span-3 lg:row-end-1">
                <div class="lg:flex  space-y-4 lg:space-y-0 lg:items-start">
                  <div class="lg:order-2 lg:ml-5  ">
                    <div class="max-w-xl overflow-hidden rounded-lg border shadow-lg  mx-auto ">
                      <img
                        class="h-[25rem] w-full max-w-full object-cover"
                        src={productImage[image]}
                        alt=""
                        onError={(event) => {
                          event.target.src =
                            "/placeholder.jpg";
                          event.onerror = null;
                        }}
                      />
                    </div>
                  </div>

                  <div class={`mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0 h-[25rem]  py-2 overflow-auto ${style.productScroll}`}>
                    <div class="flex flex-row gap-3  lg:flex-col  justify-center items-center">
                      {productImage?.map((el, ind) => {
                        return (
                          <button
                            type="button"
                            onClick={() => {
                              setImage(ind);
                            }}
                            class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg ring  ring-blue-100 text-center"
                          >
                            <img
                              class="h-full w-full object-cover"
                              src={el}
                              alt=""
                              onError={(event) => {
                                event.target.src =
                                  "/placeholder.jpg";
                                event.onerror = null;
                              }}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div> */}

              <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                <h1 class="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                  {singleProduct?.productName}
                </h1>

                <div class="mt-5 flex items-center">
                  <div class="flex items-center gap-1">
                    <IoStar className="text-yellow-400" />
                    <IoStar className="text-yellow-400" />
                    <IoStar className="text-yellow-400" />
                    <IoStar className="text-yellow-400" />
                    <IoStar className="text-yellow-400" />
                  </div>
                  <p class="ml-2 text-sm font-medium text-gray-500">
                    1,209 Reviews
                  </p>
                </div>

                <div class="lg:col-span-3">
                  <h1 className="text text-xl font-semibold py-2">
                    Description
                  </h1>
                  <p className="line-clamp-5">{singleProduct?.description}</p>
                </div>

                <div class="flex  flex-col">
                  <div className="flex items-center">
                    <QuantityWithPrice
                      item={singleProduct}
                      price={price}
                      setPrice={setPrice}
                    />
                  </div>
                </div>

                <div class="mt-10 flex  items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(addToCart({ ...singleProduct, productId: singleProduct?._id, ...price }));
                    }}
                    class="inline-flex gap-2 w-full sm:w-auto items-center justify-center rounded-md border-2 border-transparent bg-[#1D4ED8] bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-[#1D4ED8]"
                  >
                    <FaShoppingCart />
                    Add to cart
                  </button>
                </div>

                <ul class="mt-8 space-y-2">
                  <li class="flex gap-1 items-center text-left text-sm font-medium text-gray-600">
                    <GrGlobe />
                    Free shipping worldwide
                  </li>

                  <li class="flex gap-1 items-center text-left text-sm font-medium text-gray-600">
                    <CiCreditCard1 />
                    Cancel Anytime
                  </li>
                </ul>

                <div>
                  <h1 className="text text-xl font-semibold py-2">
                    About
                  </h1>
                  <p className="text-slate-600"> {singleProduct?.about}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Reveiw section starts */}

          {
            Array.isArray(reviewData) && reviewData?.length > 0 && <div className="container mx-auto space-y-5 py-8 px-4 md:px-2">
              <div className="text-4xl font-semibold">Customer Reviews:</div>
              {
                reviewData?.map(item => {
                  return <ReveiwCard item={item} />
                })
              }
            </div>
          }

          {/* Reveiw section ends */}
        </section>
      )}
    </>
  );
};

export default SingleProduct;
