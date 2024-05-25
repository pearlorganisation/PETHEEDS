import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import catimg from "../../../images/cat11.jpg"
import { FaCheck } from "react-icons/fa6";
import Address from './Address';

const CheckoutPage = () => {
    const { cartData } = useSelector((state) => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);
    const [step, setStep] = useState(1)
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
    return (
        <div className='min-h-screen pt-6  sm:pt-20'>
            <div className="px-4 pt-12 pb-8">
                <div className="mx-auto w-full max-w-lg">
                    <div className="relative">
                        <ul className="relative flex w-full  gap-4 flex-row items-center justify-between">
                            <li className="flex space-x-4 text-left">
                                <a
                                    className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white"
                                    href="#"
                                >
                                    1
                                </a>
                                <span className=" sm:text-sm font-semibold text-blue-600">
                                    Order Summary
                                </span>
                            </li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="hidden h-4 w-4 text-gray-400 sm:block"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <li className="flex space-x-4 text-left">
                                <a
                                    className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white ring ring-blue-500 ring-offset-2"
                                    href="#"
                                >
                                    2
                                </a>
                                <span className="text-sm font-semibold text-blue-600">
                                    Billing Information
                                </span>
                            </li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="hidden h-4 w-4 text-gray-400 sm:block"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <li className="flex space-x-4 text-left">
                                <a
                                    className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-sm font-semibold text-white"
                                    href="#"
                                >
                                    3
                                </a>
                                <span className="text-sm font-semibold text-gray-500">
                                    Success
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {
                step === 1 && <div className='max-w-6xl mx-auto sm:px-10  lg:px-20 xl:px-32'>
                    <div className=''>
                        {/* Order summary */}
                        <div class="relative col-span-full flex flex-col pl-8 pr-4 py-6 lg:col-span-4">
                            <p class="text-xl font-medium py-2 z-10">Order summary</p>

                            <div>
                                {/* <img
                                src={catimg}
                                alt=""
                                class="absolute inset-0 h-full w-full object-cover"
                            /> */}
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
                            <div class="relative mt-10 flex w-full  gap-3">
                                <input placeholder='Promo Code' type="text" className="rounded-md border border-[#d1d5db] bg-white px-3 py-2 text-sm shadow-sm focus:border-[#6366f1] focus:outline-none focus:ring-1 focus:ring-[#6366f1] dark:border-[#4b5563] dark:bg-[#1f2937] dark:text-gray-200" />
                                <button type="button" class="text-white bg-[#2563EB] font-medium rounded-lg text-sm px-7 py-2.5 me-2 mb-2focus:outline-none ">Apply</button>



                            </div>

                            <div className='pt-2'>
                                <p class=" text-lg font-medium text-black">Payment Methods</p>
                                <form class=" grid gap-6">
                                    <div class="relative">
                                        <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
                                        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                                        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
                                            <img class="w-14 object-contain" src="https://cdn-icons-png.flaticon.com/128/3812/3812106.png" alt="" />
                                            <div class="ml-5">
                                                <span class="mt-2 font-semibold">Cash On Delivery</span>
                                                <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                                            </div>
                                        </label>
                                    </div>
                                    <div class="relative">
                                        <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
                                        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                                        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
                                            <img class="w-14 object-contain" src="https://cdn-icons-png.flaticon.com/128/5097/5097344.png" alt="" />
                                            <div class="ml-5">
                                                <span class="mt-2 font-semibold">Online Payment</span>
                                                <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                                            </div>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            }

            {
                step === 2 && <Address />
            }
            {
                step === 3 && <div class=" flex items-center justify-center">
                    <div class="bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-md text-center">
                        <div className='grid place-items-center w-full'>
                            <div className='bg-green-500 size-10 rounded-full grid place-items-center text-white'>
                                <FaCheck size={30} />
                            </div>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-800 mb-2">Order Confirmed!</h2>
                        <p class="text-gray-600 mb-4">Thank you for your purchase. Your order number is <span class="font-semibold text-gray-800">#123456</span>.</p>
                        <div className='space-x-2'>
                            <button class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md mb-4">View Order Details</button>
                            <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">Continue Shopping</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CheckoutPage