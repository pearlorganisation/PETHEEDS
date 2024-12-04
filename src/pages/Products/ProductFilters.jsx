import React, { useEffect, useState } from 'react';
import { FaFilter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../../features/actions/categoryAction';

const ProductFilters = ({ categories, onCategoryChange, onSortChange, onDiscountChange }) => {
    const dispatch = useDispatch();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSort, setSelectedSort] = useState("");
    const [selectedDiscount, setSelectedDiscount] = useState("");
    const { categoryData } = useSelector((state) => state.category);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleClearFilters = () => {
        setSelectedCategory("");
        setSelectedSort("");
        setSelectedDiscount("");
        onCategoryChange("");
        onSortChange("");
        onDiscountChange("");
    };

    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch]);

    return (
        <div className="">
            {/* Toggle button for mobile */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden absolute top-[3rem] right-4 z-50 bg-blue-600 text-white p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
                {isSidebarOpen ? <IoMdClose /> : <FaFilter />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-[4.5rem] md:top-[5.5rem] left-0 w-3/4  max-w-sm h-full bg-white shadow-md transform transition-transform duration-300 ease-in-out z-40 lg:relative lg:w-full lg:transform-none ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 h-full overflow-y-auto">
                    <div className='flex justify-between items-center pb-3'>
                        <h2 className="text-lg font-semibold">Filters</h2> {/* Clear Filters Button */}
                        <div className="">
                            <button
                                onClick={handleClearFilters}
                                className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-red-400"
                            >
                                Clear Filters
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {/* Category Filter */}
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                                Category
                            </label>
                            <select
                                id="category"
                                value={selectedCategory}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setSelectedCategory(value);
                                    onCategoryChange(value);
                                }}
                                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="">All Categories</option>
                                {categoryData?.map((category) => (
                                    <option key={category._id} value={category._id}>
                                        {category.title}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Sort Filter */}
                        <div>
                            <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
                                Sort by
                            </label>
                            <select
                                id="sort"
                                value={selectedSort}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setSelectedSort(value);
                                    onSortChange(value);
                                }}
                                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="">Default</option>
                                <option value="1">Low to High</option>
                                <option value="-1">High to Low</option>
                                <option value="better-discount">Better Discount</option>
                            </select>
                        </div>

                        {/* Discount Filter */}
                        {/* <div>
                            <label htmlFor="discount" className="block text-sm font-medium text-gray-700 mb-1">
                                Minimum Discount (%)
                            </label>
                            <input
                                type="number"
                                id="discount"
                                min="0"
                                max="100"
                                value={selectedDiscount}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setSelectedDiscount(value);
                                    onDiscountChange(value);
                                }}
                                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter discount %"
                            />
                        </div> */}
                    </div>


                </div>
            </div>

            {/* Background overlay for mobile */}
            {isSidebarOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                ></div>
            )}
        </div>
    );
};

export default ProductFilters;
