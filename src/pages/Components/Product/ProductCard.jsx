import React, { useState } from 'react'
import QuantityWithPrice from './QuantityWithPrice';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../features/slices/cartSlice';
import { useDispatch } from "react-redux";

const ProductCard = ({ el }) => {
    const [price, setPrice] = useState({})
    const dispatch = useDispatch();

    return (
        <div class="w-full bg-white shadow-md rounded-md p-3 space-y-3">
            <Link to={`/singleproduct/${el?._id}`}>
                <img
                    src={el?.productImg?.path}
                    alt="Product"
                    class="h-80 w-full object-cover rounded-t-xl"
                />
            </Link>

            <div class="px-4 py-3">
                <span class="text-gray-400 mr-3 uppercase text-xs">
                    Brand
                </span>

                <p class="text-lg font-bold text-black truncate block capitalize">
                    {el?.productName}
                </p>

                <div class="flex flex-col">


                    <QuantityWithPrice item={el} price={price} setPrice={setPrice} />
                </div>
            </div>

            <div className="w-full">
                <button
                    className="w-full rounded-md border bg-blue-700 text-sm hover:bg-blue-800 h-9 flex items-center justify-center gap-3 px-4 my-2" // Added margin here
                    onClick={() => {
                        dispatch(addToCart({ ...el, ...price }));
                    }}
                >
                    <div className="mr-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="white"
                            class="bi bi-bag-plus"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                            />
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                    </div>

                    <div className="text-white font-semibold">ADD TO CART</div>
                </button>
            </div>
        </div>
    )
}

export default ProductCard