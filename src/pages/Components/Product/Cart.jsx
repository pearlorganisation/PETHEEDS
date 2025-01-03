
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItem,
  increaseItem,
  removeItem,
  updateCart,
} from "../../../features/slices/cartSlice";
// import cart from "/cart.png";
import { Link, useNavigate } from "react-router-dom";
import catimg from "../../../images/cat11.jpg"
const channel = new BroadcastChannel('cart-sync')
export default function Cart() {


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


  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);






  return (
    <div className="mx-auto container  pt-12 min-h-screen px-5  ">


      {cartData.length > 0 ? (
        <div className="mx-auto  md:py-8 ">
          <h1 className="text-3xl border-b-2 pb-3 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <form className="md:mt-5 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section
              aria-labelledby="cart-heading"
              className="rounded-lg bg-white lg:col-span-8"
            >
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>
              <ul role="list" className="divide-y divide-gray-200">
                {cartData?.map((product, productIdx) => (
                  <div key={product._id} className="">
                    <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0 relative">

                      <div class="relative flex flex-1  ">
                        <Link to={`/singleproduct/${product?.productSlug}`} className="flex flex-1 gap-4  ">
                          <div class="shrink-0">
                            <img
                              class="h-24 w-24 lg:h-24 lg:w-32 max-w-full rounded-lg object-contain"
                              src={product?.productImg}
                              alt=""
                              onError={(event) => {
                                event.target.src =
                                  "/placeholder.jpg";
                                event.onerror = null;
                              }}
                            />
                          </div>
                          <div class="sm:col-gap-5 sm:grid sm:grid-cols-[80%_auto]">
                            <div class="pr-8 sm:pr-5 space-y-1">
                              <p class="text-sm font-bold text-gray-900">
                                {product?.brand?.brand}
                              </p>
                              <p class="text-xs md:text-sm font-semibold text-gray-900 line-clamp-2 md:line-clamp-none">
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
                                <span class="shrink-0 px-2 py-[2px] rounded text-xs md:text-sm bg-blue-500  font-semibold text-white sm:order-2 ">
                                  {product?.discount}% OFF
                                </span>
                              </div>
                              <div className="font-semibold text-xs md:text-base">
                                Unit: <span class="shrink-0 px-2 py-[2px] rounded text-xs md:text-sm bg-blue-500   text-white sm:order-2 ">
                                  {product?.weight}
                                </span>
                              </div>
                            </div>

                          </div>
                        </Link>
              



                      </div>
                      <div className="flex flex-col justify-between ">
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
                                channel.postMessage({ type: 'INCREASE_CART', data: { id: product?._id } })

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
                        <div class="absolute md:static md:flex justify-end top-0  right-0  w-fit md:w-full">
                          <button
                            onClick={() => {
                              dispatch(removeItem({ id: product?._id }))

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
                  onError={(event) => {
                    event.target.src =
                      "/placeholder.jpg";
                    event.onerror = null;
                  }}
                />
                <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50 to-blue-100   opacity-60"></div>
              </div>
              <div class="relative">
                <ul class="space-y-5">
                  {cartData?.map((item, idx) => {
                    return (
                      <li key={idx} class="flex justify-between">
                        <div class="inline-flex">
                          <img
                            src={item?.productImg}
                            alt=""
                            class="size-16 object-contain"
                            onError={(event) => {
                              event.target.src =
                                "/placeholder.jpg";
                              event.onerror = null;
                            }}
                          />
                          <div class="ml-3">
                            <p class="text-sm line-clamp-1 font-semibold ">
                              {item?.productName}
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
                  to='/checkout'

                  class="text-white text-center bg-blue-600 hover:bg-blue-700 w-full font-medium rounded-lg text-sm px-7 py-2.5 me-2 mb-2focus:outline-none ">Buy</Link>



              </div>
            </div>

          </form>

        </div>
      ) : (
        <>
          <div className="min-h-[80dvh] grid place-items-center">
            <div className="">
              <img src='/cart.png' className="" onError={(event) => {
                event.target.src =
                  "/placeholder.jpg";
                event.onerror = null;
              }} />
            </div>



            <div className="flex justify-center items-center pb-14">
              <div>

                <Link to='/'>
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 md:px-6 lg:px-8 md:py-3 lg:py-4 text-center md:mb-2 lg:me-2 lg:mb-0    w-full md:w-auto h-10 md:h-auto"
                  >
                    Start Shopping
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
