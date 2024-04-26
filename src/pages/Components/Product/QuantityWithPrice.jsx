import React, { useEffect, useState } from 'react'

const QuantityWithPrice = ({ item, price, setPrice }) => {
    const [priceData, setPriceData] = useState(Array.isArray(item?.price) && item?.price[0])
    useEffect(() => {
        setPrice(priceData)
    }, [priceData])
    console.log(item)


    return <div className="flex flex-col mb-3">
        <div className="flex justify-start items-center">
            <p class="text-lg font-semibold text-black cursor-auto mt-3  mb-3 ">
                ₹{priceData?.totalPrice}
            </p>

            {
                item?.discount ? <div className="flex justify-start items-center">
                    <del className="text-slate-600 mt-3  mb-3 mr-3">
                        <p class="text-sm text-slate-500 cursor-auto ml-2 ">
                            ₹{priceData?.price}
                        </p>
                    </del>
                    <p className="border py-1 px-1 rounded-md  text-xs font-semibold text-white bg-indigo-600">
                        {item?.discount}% OFF
                    </p>
                </div> : <div className="flex items-center text-transparent">
                    <del className=" mt-3 mb-3 mr-3">
                        <p class="text-sm  cursor-auto ml-2 ">
                            00
                        </p>
                    </del>
                    <p className=" py-1 px-1 rounded-md  text-xs font-semibold ">
                        00
                    </p>
                </div>
            }
        </div>
        <div className="space-x-2">
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
                                className={`flex peer-checked:text-white peer-checked:ring-4 ring-indigo-600/30 items-center space-x-[6px] rounded py-1 px-2 text-sm font-medium peer-checked:bg-indigo-600
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
}

export default QuantityWithPrice


