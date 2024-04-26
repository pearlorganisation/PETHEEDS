import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductByCategory } from '../../features/actions/productActions'
import { Link, useParams } from 'react-router-dom'
import QuantityWithPrice from '../Components/Product/QuantityWithPrice'
import { addToCart } from '../../features/slices/cartSlice'

const Category = () => {
    const dispatch = useDispatch()
    const { filteredProduct, isLoading } = useSelector((state) => state.products);
    const [price, setPrice] = useState({})
    const { categoryId } = useParams()
    useEffect(() => {
        dispatch(getProductByCategory({ categoryId }))
    }, [])

    return (
        <div className='min-h-screen container mx-auto'>
            <div className='sm:text-lg md:text-2xl font-medium px-6 py-4' >Category</div>
            <section
                id="Projects"
                class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
            >
                {isLoading ? Array(8).fill(true).map(item => {
                    return <div class="w-80 bg-gray-50 animate-pulse shadow-md rounded-md p-3 space-y-3">
                        <div class="bg-gray-200 w-full h-[18rem] rounded-md"></div>
                        <div class="bg-gray-200 h-4 w-20"></div>
                        <div class="bg-gray-200 h-4 w-32"></div>
                        <div class="bg-gray-200 h-4 w-14"></div>
                        <div class="bg-gray-200 h-4 w-32"></div>
                        <div class="bg-gray-200 w-full h-9 rounded-md"></div>


                    </div>
                }) : Array.isArray(filteredProduct) && filteredProduct?.length > 0 ? filteredProduct?.map((el, id) => {
                    return (
                        <div class="w-80 bg-white  shadow-md rounded-md p-3 space-y-3">
                            <Link to={`/singleproduct/${el?._id}`}>
                                <img
                                    src={el?.productImg?.path}
                                    alt="Product"
                                    class="h-80 w-full object-cover rounded-t-xl"
                                />

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
                            </Link>

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
                    );
                }) : "No Data Found"}
            </section>

        </div>
    )
}

export default Category