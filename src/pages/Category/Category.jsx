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
            <div class="container mx-auto px-4 py-12 md:px-6 lg:px-8">
                <div class="mb-6 flex items-center justify-between">
                    <div data-id="3"><h1 class="text-2xl font-bold" data-id="4">Products</h1><p class="text-gray-500 " data-id="5">Browse our collection of high-quality products.</p></div>
                    <div class="flex items-center space-x-4">
                        <button class="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground flex h-10 items-center justify-center space-x-2 whitespace-nowrap rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" type="button" id="radix-:r28:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                            <span>Filter</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
                        <button class="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground flex h-10 items-center justify-center space-x-2 whitespace-nowrap rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                            </svg>
                            <span>Filters</span>
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                </div>

            </div>


        </div>
    )
}

export default Category