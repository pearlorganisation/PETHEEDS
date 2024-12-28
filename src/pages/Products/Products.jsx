import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";
import ProductFilters from "./ProductFilters";
import { getProducts } from "../../features/actions/productActions";
import ProductCard from "../Components/Product/ProductCard";

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [limit, setLimit] = useState(() => parseInt(searchParams.get("limit")) || 12);
    const [page, setPage] = useState(() => parseInt(searchParams.get("page")) || 1);
    const [search, setSearch] = useState(() => searchParams.get("search") || "");
    const [category, setCategory] = useState(() => searchParams.get("category") || "");
    const [sort, setSort] = useState(() => searchParams.get("sort") || "");
    const [discount, setDiscount] = useState(() => searchParams.get("discount") === "");

    const dispatch = useDispatch();
    const { productsData, isLoading, totalPages } = useSelector((state) => state.products);

    useEffect(() => {
        fetchDebouncedData();
    }, [page, limit, search, category, sort, discount]);

    useEffect(() => {
        console.log(search, "search")
    }, [search])

    const fetchDebouncedData = useDebouncedCallback(() => {
        dispatch(getProducts({ page, limit, search, category, sort }));
        setSearchParams({ page, limit, search, category, sort, });
    }, 1000);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [productsData]);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setPage(1);
    };

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
        setPage(1);
    };

    const handleSortChange = (selectedSort) => {
        setSort(selectedSort);
        setPage(1);
    };

    const handleDiscountChange = (showDiscount) => {
        setDiscount(showDiscount);
        setPage(1);
    };

    // Assuming you have a list of categories
    const categories = ["Electronics", "Clothing", "Books", "Home & Garden"];

    return (
        <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 pt-20  relative">
            <div className="mb-6 flex lg:flex-row flex-col lg:gap-0 gap-3 w-full">
                <div className="w-full">
                    <h1 className="text-2xl font-bold">Products</h1>
                    <p className="text-gray-500">Browse our collection of high-quality products.</p>
                </div>
                <div className="w-full">
                    <input
                        type="search"
                        value={search}
                        onChange={handleSearchChange}
                        placeholder="Search products..."
                        className="w-full px-4 py-2 border  rounded-md outline-none focus:border-2 border-blue-600 focus:ring-4 ring-blue-600/30"
                    />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 ">
                <div className="w-full lg:w-1/4 ">
                    <ProductFilters
                        categories={categories}
                        onCategoryChange={handleCategoryChange}
                        onSortChange={handleSortChange}
                        onDiscountChange={handleDiscountChange}
                    />

                </div>

                <div className="w-full lg:w-3/4">
                    {
                        productsData?.length > 0 ? <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {isLoading
                                ? Array(8)
                                    .fill(true)
                                    .map((_, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-50 animate-pulse shadow-md rounded-md p-3 space-y-3"
                                        >
                                            <div className="bg-gray-200 w-full h-48 rounded-md"></div>
                                            <div className="bg-gray-200 h-4 w-20"></div>
                                            <div className="bg-gray-200 h-4 w-32"></div>
                                            <div className="bg-gray-200 h-4 w-14"></div>
                                            <div className="bg-gray-200 h-4 w-32"></div>
                                            <div className="bg-gray-200 w-full h-9 rounded-md"></div>
                                        </div>
                                    ))
                                : productsData?.map((product, id) => (
                                    <ProductCard key={id} el={product} />
                                ))}
                        </div> : <div className="flex flex-col justify-center items-center mx-auto" >
                            <img className="h-[30rem]" src="https://img.freepik.com/free-vector/purchase-ban-online-store-website-error-cancel-buying-order-placing-inability-buy-limit-budget-line-online-buyer-cartoon-character_335657-1173.jpg?t=st=1732361714~exp=1732365314~hmac=353736fd23c56e85833ee90bf25f3e0f12233204e292429cecfde88e25431535&w=740" alt="" srcset="" />
                            <span className="text-xl md:text-3xl font-medium">No Data Found</span>
                        </div>
                    }

                    <div className="mt-8 flex items-center justify-between">
                        <button
                            onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
                            className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50 disabled:opacity-50"
                            disabled={page === 1}
                        >
                            Previous
                        </button>
                        <div>
                            Page {page} of {totalPages}
                        </div>
                        <button
                            onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
                            className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50 disabled:opacity-50"
                            disabled={page === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;

