import React, { useEffect, useState } from 'react'

const QuantityWithPrice = ({ item, price, setPrice }) => {
    const [priceData, setPriceData] = useState(Array.isArray(item?.price) && item?.price[0])
    useEffect(() => {
        setPrice(priceData)
    }, [priceData])
    
    console.log(item)


    return <div className="flex flex-col py-3 gap-2">
        <div className="flex justify-start items-center  space-x-2">
            <p class="text-sm md:text-lg font-semibold text-black cursor-auto  ">
                ₹{priceData?.totalPrice}
            </p>

            {
                item?.discount ? <div className="flex justify-start items-center gap-2">
                    <del className="text-slate-600">
                        <p class="text-sm text-slate-500 cursor-auto">
                            ₹{priceData?.price}
                        </p>
                    </del>

                    <p className="border py-1 px-1 rounded-md text-[10px] text-nowrap sm:text-xs font-semibold text-white bg-indigo-600">
                        {item?.discount}% OFF
                    </p>
                </div> : <div className="flex items-center text-transparent">
                    <del className="">
                        <p class="text-sm  cursor-auto  ">
                            00
                        </p>
                    </del>
                    <p className=" py-1 px-1 rounded-md  text-xs font-semibold ">
                        00
                    </p>
                </div>
            }
        </div>
        <div className="space-y-1">
            <span className="font-medium md:font-semibold text-sm md:text-base">Select Size:</span>

            <div className='flex gap-1 justify-start items-start flex-wrap'>
                {
                    item?.price?.map((pr, ind) => {
                        console.log(pr?.weight, "pr?.weight")
                        return <>
                            <label
                                onClick={() => {
                                    setPriceData(pr)
                                    setPrice(pr)
                                }}

                                htmlFor={pr?._id}
                                className='themeSwitcherTwo border shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white'>
                                <input
                                    name={`weight${item?._id}`}
                                    className="peer hidden" type="radio" value={pr?.weight + ind} id={`${pr?._id}`}

                                />
                                <span
                                    className={`flex peer-checked:text-white peer-checked:ring-4 ring-indigo-600/30 items-center  rounded py-1 px-2 text-xs lg:text-sm md:font-medium peer-checked:bg-indigo-600
                                                    }`}
                                >

                                    {pr?.weight}
                                </span>

                            </label>
                        </>
                    })
                }
            </div>

        </div>


    </div>
}

export default QuantityWithPrice


