import { Heart, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import img1 from "../../../../Images for Website/Aloevera Shampoo 250 ML/1.png";
import img2 from "../../../../Images for Website/Aloevera Shampoo 250 ML/3.png";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItem,
  increaseItem,
  removeItem,
} from "../../../features/slices/cartSlice";
// import cart from "/cart.png";
import { Link, useNavigate } from "react-router-dom";
import catimg from "../../../images/cat11.jpg"
export function Cart() {

  
  const [count, setcount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartData } = useSelector((state) => state.cart);
  
  const dispatch = useDispatch();


  useEffect(() => {
    console.log(
      "cartData::",
      cartData?.reduce((acc, item) => {
        console.log(acc, item.items);
        return item.items + acc;
      }, 0)
    );
    const totalP = cartData?.reduce((acc, item) => {
      return acc + item.totalSum;
    }, 0);
    setTotalPrice(totalP);
    console.log("totalPrice::", totalP);
  }, [cartData]);
  const navigate = useNavigate();
  const handelnavigate = () => {
    navigate("/productlist");
  };

  return (
    <div className="mx-auto container pt-12 px-5 lg:px-32 ">
      {cartData.length > 0 ? (
        <div className="mx-auto  py-8 ">
          <h1 className="text-3xl border-b-2 pb-3 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section
              aria-labelledby="cart-heading"
              className="rounded-lg bg-white lg:col-span-8"
            >
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>
              <ul role="list" className="divide-y divide-gray-200">
                {cartData?.map((product, productIdx) => (
                  <div key={product.id} className="">
                    <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                      <div class="shrink-0">
                        <img
                          class="h-24 w-24 max-w-full rounded-lg object-cover"
                          src={product?.productImg}
                          alt=""
                        />
                      </div>

                      <div class="relative flex flex-1 flex-col justify-between">
                        <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                          <div class="pr-8 sm:pr-5 space-y-1">
                            <p class="text-sm font-semibold text-gray-900">
                              {product?.productName}
                            </p>
                            <p class="shrink-0 w-20 text-base  font-semibold text-gray-900 sm:order-2 ">
                              ₹{product?.totalPrice}
                            </p>
                            <div className="flex gap-2">
                              <del>
                                <span class="shrink-0 w-20 text-sm  font-semibold text-gray-900 sm:order-2 ">
                                  ₹{product?.price}
                                </span>
                              </del>
                              <span class="shrink-0 px-2 py-[2px] rounded text-sm bg-blue-500  font-semibold text-white sm:order-2 ">
                                {product?.discount}% OFF
                              </span>
                            </div>
                            <div className="font-semibold">
                              Weight: <span class="shrink-0 px-2 py-[2px] rounded text-sm bg-blue-500   text-white sm:order-2 ">
                                {product?.weight}
                              </span>
                            </div>
                          </div>

                          <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">


                            <div class="sm:order-1">
                              <div class="mx-auto flex h-8 items-stretch text-gray-600">
                                <button
                                  type="button"
                                  onClick={() => {
                                    dispatch(decreaseItem({ id: product._id }));
                                  }}
                                  class="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                >
                                  -
                                </button>
                                <div class="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                  {" "}
                                  {product.items}
                                </div>
                                <button
                                  type="button"
                                  onClick={() => {
                                    dispatch(
                                      increaseItem({ id: product?._id })
                                    );
                                  }}
                                  class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                          <button
                            onClick={() => {
                              dispatch(removeItem({ id: product?._id }));
                            }}
                            type="button"
                            class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                          >
                            <svg
                              class="h-5 w-5 hover:text-red-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                                class=""
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </li>
                  </div>
                ))}
              </ul>
            </section>
            {/* Order summary */}
            <div class="relative col-span-full flex flex-col pl-8 pr-4 py-6 lg:col-span-4">
              <h2 class="sr-only">Order summary</h2>
              <div>
                <img
                  src={catimg}
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover"
                />
                <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50 to-blue-100   opacity-60"></div>
              </div>
              <div class="relative">
                <ul class="space-y-5">
                  {cartData?.map((item) => {
                    return (
                      <li class="flex justify-between">
                        <div class="inline-flex">
                          <img
                            src={item?.productImg}
                            alt=""
                            class="size-16"
                          />
                          <div class="ml-3">
                            <p class="text-sm line-clamp-1 font-semibold ">
                              {item?.productName}
                            </p>
                            <p class="text-sm font-medium text-[#333333] text-opacity-80">
                              Pdf, doc Kindle
                            </p>
                            <p class="text-sm font-medium text-[#333333]  text-opacity-80">
                              Quantity : {item?.items}
                            </p>
                          </div>
                        </div>

                        <p class="text-sm font-semibold ">
                          ₹{item?.totalSum}
                        </p>
                      </li>
                    );
                  })}
                </ul>
                <div class="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
                <div class="space-y-2">
                  <p class="flex justify-between text-lg font-bold ">
                    <span>Total price:</span>
                    <span>₹{totalPrice}</span>
                  </p>

                </div>
              </div>
              <div class="relative mt-10 text-[#333333]">
                <h3 class="mb-5 text-lg font-bold text-[#333333]">Support</h3>
                <a href="tel:9650185800" class="text-sm font-semibold">
                  +91 96501 85800{" "}
                  <span class="font-light">(International)</span>
                </a>
                <p class="mt-1 text-sm font-semibold text-[#333333]">
                  info@petheeds.in <span class="font-light">(Email)</span>
                </p>
                <p class="mt-2 text-xs font-medium text-[#333333]">
                  Call us now for payment related issues
                </p>
              </div>
              <div class="relative mt-10 flex">
                <Link
                to='/checkout/1'
             
                 class="text-white text-center bg-[#2563EB] w-full font-medium rounded-lg text-sm px-7 py-2.5 me-2 mb-2focus:outline-none ">Buy</Link>



              </div>
            </div>

          </form>

        </div>
      ) : (
        <>
          <div className="h-[80dvh] grid place-items-center">
            <div className="">
              <img src='/cart.png' className="" />
            </div>



            <div className="flex justify-center items-center pb-14">
              <div>
                <button
                  onClick={handelnavigate(totalPrice)}
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 md:px-6 lg:px-8 md:py-3 lg:py-4 text-center md:mb-2 lg:me-2 lg:mb-0    w-full md:w-auto h-10 md:h-auto"
                >
                  Start Shopping
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
