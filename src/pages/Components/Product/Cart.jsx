import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItem,
  increaseItem,
  removeItem,
} from "../../../features/slices/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import catimg from "../../../images/cat11.jpg";


export function Cart() {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartData } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartChannel = new BroadcastChannel("cartChannel");
  
  // useEffect(()=>{

  //   return ()=>{
  //     cartChannel.close();
  //   }
  // },[]);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // Close the cart channel when component unmounts
    return () => {
      cartChannel.close();
    };
  }, []);

  // To update the total price of all items in the cart
  useEffect(() => {
    const updatedTotalPrice = cartData.reduce((acc, product) => {
      return acc + product.totalPrice;
    }, 0);
    setTotalPrice(updatedTotalPrice);
  }, [cartData]);

   const handleIncreaseItem = (product) => {
    // dispatch(increaseItem({ id: product?._id }));

    // Emit the increase item message only if the item count is updated
    cartChannel.postMessage({
      type: "INCREASE_ITEM",
      data: { id: product?._id },
    });
  };

 const handleDecreaseItem = (product) => {
    console.log("DECREASE_ITEM  ");
    cartChannel.postMessage({
      type: "DECREASE_ITEM",
      data: { id: product?._id },
    });
    // dispatch(decreaseItem({ id: product._id }));
  };

  const handleRemoveItem = (product) => {
    console.log("DECREASE_ITEM  ",product);
    cartChannel.postMessage({
      type: "REMOVE_ITEM",
      data: { id: product?._id },
    });  
  };

  return (
    <div className="mx-auto container pt-12 min-h-screen px-5 lg:px-32 ">
      {cartData.length > 0 ? (
        <div className="mx-auto  md:py-8 ">
          <h1 className="text-3xl border-b-2 pb-3 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <form className="md:mt-5 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section
              aria-labelledby="cart-heading"
              className="rounded-lg bg-white lg:col-span-8"
            >
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>
              <ul role="list" className="divide-y divide-gray-200">
                {cartData?.map((product) => (
                  <div key={product.id} className="">
                    <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                      <div className="relative flex flex-1  justify-between ">
                        <Link
                          to={`/singleproduct/${product?.productId}`}
                          className="flex flex-1 justify-between "
                        >
                          <div className="shrink-0">
                            <img
                              className="h-24 w-24 max-w-full rounded-lg object-cover"
                              src={product?.productImg}
                              alt=""
                              onError={(event) => {
                                event.target.src = "/placeholder.jpg";
                                event.onerror = null;
                              }}
                            />
                          </div>
                          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                            <div className="pr-8 sm:pr-5 space-y-1">
                              <p className="text-sm font-bold text-gray-900">
                                {product?.brand?.brand}
                              </p>
                              <p className="text-sm font-semibold text-gray-900">
                                {product?.productName}
                              </p>
                              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 ">
                                ₹{product?.totalPrice}
                              </p>
                              <div className="flex gap-2">
                                <del>
                                  <span className="shrink-0 w-20 text-sm font-semibold text-gray-900 sm:order-2 ">
                                    ₹{product?.price}
                                  </span>
                                </del>
                                <span className="shrink-0 px-2 py-[2px] rounded text-sm bg-blue-500  font-semibold text-white sm:order-2 ">
                                  {product?.discount}% OFF
                                </span>
                              </div>
                              <div className="font-semibold">
                                Unit:{" "}
                                <span className="shrink-0 px-2 py-[2px] rounded text-sm bg-blue-500   text-white sm:order-2 ">
                                  {product?.weight}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                        <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                          <div className="sm:order-1">
                            <div className="mx-auto flex h-8 items-stretch text-gray-600">
                              <button
                                type="button"
                                onClick={() => handleDecreaseItem(product)}
                                className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                              >
                                -
                              </button>
                              <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                {product.items}
                              </div>
                              <button
                                type="button"
                                onClick={() => handleIncreaseItem(product)}
                                className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                          <button
                            onClick={() => {
                              // dispatch(removeItem({ id: product?._id }));
                              handleRemoveItem(product)
                            }}
                            type="button"
                            className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                          >
                            <svg
                              className="h-5 w-5 hover:text-red-500"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </li>
                  </div>
                ))}
              </ul>
            </section>
            {/* Order summary */}
            <div className="relative col-span-full flex flex-col pl-8 pr-4 py-6 lg:col-span-4">
              <h2 className="sr-only">Order summary</h2>
              <div>
                <img
                  src={catimg}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(event) => {
                    event.target.src = "/placeholder.jpg";
                    event.onerror = null;
                  }}
                />
                <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50 to-blue-100 opacity-60"></div>
              </div>
              <div className="relative">
                <ul className="space-y-5">
                  {cartData?.map((item) => (
                    <li className="flex justify-between" key={item.id}>
                      <div className="inline-flex">
                        <img
                          src={item?.productImg}
                          alt=""
                          className="size-16"
                          onError={(event) => {
                            event.target.src = "/placeholder.jpg";
                            event.onerror = null;
                          }}
                        />
                        <div className="ml-3">
                          <p className="text-sm line-clamp-1 font-semibold ">
                            {item?.productName}
                          </p>
                          <p className="text-sm font-medium text-[#333333] text-opacity-80">
                            Pdf, doc Kindle
                          </p>
                          <p className="text-sm font-medium text-[#333333] text-opacity-80">
                            Quantity : {item?.items}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm font-semibold ">
                        ₹{item?.totalSum}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="my-6 flex items-center justify-between gap-5">
                  <h4 className="font-semibold">Total Amount</h4>
                  <h4 className="font-semibold">₹{totalPrice}</h4>
                </div>
                <div className="mt-5 flex gap-5">
                  <Link
                    to="/checkout"
                    className="rounded-sm bg-[#FF9900] py-3 px-8 font-semibold text-white hover:bg-[#3A7D12]"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <>
        <div className="min-h-[80dvh] grid place-items-center">
          <div className="">
            <img src='/cart.png' className="" onError={(event) => {
              event.target.src =
                "/placeholder.jpg";
              event.onerror = null;
            }} />
          </div>






          <div className="flex justify-center items-center pb-14">
            <div>


              <Link to='/'>
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 md:px-6 lg:px-8 md:py-3 lg:py-4 text-center md:mb-2 lg:me-2 lg:mb-0    w-full md:w-auto h-10 md:h-auto"
                >
                  Start Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>

      )}
    </div>
  );
}
