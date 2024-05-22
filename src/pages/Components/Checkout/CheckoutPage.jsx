import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import catimg from "../../../images/cat11.jpg"
import { FaCheck } from "react-icons/fa6";

const CheckoutPage = () => {
    const { cartData } = useSelector((state) => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);
    const [step, setStep] = useState(3)
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
                step === 2 && <div className='max-w-6xl  mx-auto sm:px-10  lg:px-20 xl:px-32'>

                    <div class=" bg-gradient-to-t from-blue-50 to-blue-100 px-4 pt-8 lg:mt-0 h-full">
                        <p class="text-xl font-medium">Address Details</p>
                        <p class="text-gray-400">Complete your order by providing your payment details.</p>
                        <div class=" space-y-4">

                            <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Contact Details</label>
                            <div class="relative">
                                <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
                                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                    </svg>
                                </div>
                            </div>

                            <div class="relative">
                                <input type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
                                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </div>
                            </div>

                            <div class="relative">
                                <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Contact Number" />
                                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                    </svg>
                                </div>
                            </div>
                            <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium"> Address</label>
                            <div class="relative space-y-4">
                                <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Pin Code" />
                                <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Address (House No, Building, Street, Area)*" />
                                <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Locality / Town*" />
                                <div className='flex gap-2'>
                                    <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="City / District*" />

                                    <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="State*" />


                                </div>

                            </div>




                            {/* <div class="mt-6 border-t border-b py-2">
            <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Subtotal</p>
                <p class="font-semibold text-gray-900">$399.00</p>
            </div>
            <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">Shipping</p>
                <p class="font-semibold text-gray-900">$8.00</p>
            </div>
        </div>
        <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Total</p>
            <p class="text-2xl font-semibold text-gray-900">$408.00</p>
        </div> */}
                        </div>
                        <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
                    </div>
                </div>
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