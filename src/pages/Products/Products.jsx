import React, { useEffect, useState } from "react";
import ProductCard from "../Components/Product/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../features/actions/productActions";
import { useSearchParams } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [limit, setLimit] = useState(
    () => parseInt(searchParams.get("limit")) || 8
  );

  const [page, setPage] = useState(
    () => parseInt(searchParams.get("page")) || 1
  );

  const [search, setSearch] = useState(() => searchParams.get("search") || "");

  const dispatch = useDispatch();
  const { productsData, isLoading, totalPages } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    fetchdebouncedData();
  }, [page, limit, search]);

  const fetchdebouncedData = useDebouncedCallback(() => {
    dispatch(getProducts({ page, limit, search }));
    setSearchParams({ page, limit, search });
  }, 1000);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [productsData]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <div className="container mx-auto py-6 px-3 pt-20">
      <div className="mb-6 flex items-center justify-between">
        <div data-id="3">
          <h1 className="text-2xl font-bold" data-id="4">
            Products
          </h1>
          <p className="text-gray-500" data-id="5">
            Browse our collection of high-quality products.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground flex h-10 items-center justify-center space-x-2 whitespace-nowrap rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            type="button"
            id="radix-:r28:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
          >
            <span>Sort by</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
          <button className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground flex h-10 items-center justify-center space-x-2 whitespace-nowrap rounded-md border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
            <span>Filters</span>
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="mb-4 w-72">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search products..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <section
        id="Projects"
        className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {isLoading
          ? Array(8)
              .fill(true)
              .map((_, index) => (
                <div
                  key={index}
                  className="w-80 bg-gray-50 animate-pulse shadow-md rounded-md p-3 space-y-3"
                >
                  <div className="bg-gray-200 w-full h-[18rem] rounded-md"></div>
                  <div className="bg-gray-200 h-4 w-20"></div>
                  <div className="bg-gray-200 h-4 w-32"></div>
                  <div className="bg-gray-200 h-4 w-14"></div>
                  <div className="bg-gray-200 h-4 w-32"></div>
                  <div className="bg-gray-200 w-full h-9 rounded-md"></div>
                </div>
              ))
          : productsData?.map((el, id) => <ProductCard key={id} el={el} />)}
      </section>

      <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8 py-6">
        <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
          <button
            onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
            className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
          >
            Previous
          </button>
          <div>
            Page {page} of {totalPages}
          </div>
          <button
            onClick={() =>
              setPage((prev) => (prev < totalPages ? prev + 1 : prev))
            }
            className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
