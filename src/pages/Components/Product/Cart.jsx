import { Heart, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import img1 from "../../../../Images for Website/Aloevera Shampoo 250 ML/1.png";
import img2 from "../../../../Images for Website/Aloevera Shampoo 250 ML/3.png";
import { useDispatch, useSelector } from "react-redux";
import { decreaseItem, increaseItem, removeItem } from "../../../features/slices/cartSlice";
import cart from "../../../../public/cart.png"
import { useNavigate } from "react-router-dom";


export function Cart() {

  const [count, setcount] = useState(1)
  const [totalPrice, setTotalPrice] = useState(0)
  const { cartData } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log("cartData::", cartData?.reduce((acc, item) => {
      console.log(acc, item.items)
      return item.items + acc
    }, 0))
    const totalP = cartData?.reduce((acc, item) => {
      return acc + item.totalPrice
    }, 0)
    setTotalPrice(totalP)
    console.log("totalPrice::", totalP)
  }, [cartData])
  const navigate = useNavigate();
  const handelnavigate = () => {
    navigate("/productlist")
  }

  return (

    <div className="mx-auto container px-2 lg:px-0 ">
      {cartData.length > 0 ? <div className="mx-auto  py-8 ">
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
                      <img class="h-24 w-24 max-w-full rounded-lg object-cover" src={product?.productImg?.path} alt="" />
                    </div>

                    <div class="relative flex flex-1 flex-col justify-between">
                      <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                        <div class="pr-8 sm:pr-5">
                          <p class="text-base font-semibold text-gray-900">{product?.productName}</p>
                          <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p>
                        </div>

                        <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                          <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">${product?.price}</p>

                          <div class="sm:order-1">
                            <div class="mx-auto flex h-8 items-stretch text-gray-600">
                              <button
                                type="button"
                                onClick={() => {
                                  dispatch(decreaseItem({ id: product._id }))
                                }}
                                class="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">-</button>
                              <div class="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition"> {product.items}</div>
                              <button
                                type="button"
                                onClick={() => {
                                  dispatch(increaseItem({ id: product?._id }))
                                }}
                                class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">+</button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                        <button
                          onClick={() => {
                            dispatch(removeItem({ id: product?._id }))
                          }}
                          type="button" class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                          <svg class="h-5 w-5 hover:text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" class=""></path>
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
              <img src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" class="absolute inset-0 h-full w-full object-cover" />
              <div class="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-95"></div>
            </div>
            <div class="relative">
              <ul class="space-y-5">
                {
                  cartData?.map(item => {
                    return <li class="flex justify-between">
                      <div class="inline-flex">
                        <img src={item?.productImg?.path} alt="" class="size-16" />
                        <div class="ml-3">
                          <p class="text-base font-semibold text-white">{item?.productName}</p>
                          <p class="text-sm font-medium text-white text-opacity-80">Pdf, doc Kindle</p>
                          <p class="text-sm font-medium text-white text-opacity-80">Quantity : {item?.items}</p>
                        </div>
                      </div>

                      <p class="text-sm font-semibold text-white">${item?.totalPrice}</p>
                    </li>
                  })
                }

              </ul>
              <div class="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
              <div class="space-y-2">
                <p class="flex justify-between text-lg font-bold text-white"><span>Total price:</span><span>${totalPrice}</span></p>
                <p class="flex justify-between text-sm font-medium text-white"><span>Vat: 10%</span><span>$55.00</span></p>
              </div>
            </div>
            <div class="relative mt-10 text-white">
              <h3 class="mb-5 text-lg font-bold">Support</h3>
              <p class="text-sm font-semibold">+01 653 235 211 <span class="font-light">(International)</span></p>
              <p class="mt-1 text-sm font-semibold">support@nanohair.com <span class="font-light">(Email)</span></p>
              <p class="mt-2 text-xs font-medium">Call us now for payment related issues</p>
            </div>
            <div class="relative mt-10 flex">
              <p class="flex flex-col"><span class="text-sm font-bold text-white">Money Back Guarantee</span><span class="text-xs font-medium text-white">within 30 days of purchase</span></p>
            </div>
          </div>
        </form>
      </div> :
        <>
          <div>
            <img src={cart} className="" />
          </div>
          <div className="flex justify-center items-center pb-14">
            <div>
              <button
                onClick={handelnavigate}
                type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 md:px-6 lg:px-8 md:py-3 lg:py-4 text-center md:mb-2 lg:me-2 lg:mb-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full md:w-auto h-10 md:h-auto">Start Shopping</button>

            </div>
          </div>
        </>}
    </div>
  );
}
