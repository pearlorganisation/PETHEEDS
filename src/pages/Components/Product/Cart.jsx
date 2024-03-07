import { Heart, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import img1 from "../../../../Images for Website/Aloevera Shampoo 250 ML/1.png";
import img2 from "../../../../Images for Website/Aloevera Shampoo 250 ML/3.png";
import { useDispatch, useSelector } from "react-redux";
import { decreaseItem, increaseItem, removeItem } from "../../../features/slices/cartSlice";
import cart from  "../../../../public/cart.png"
import { useNavigate } from "react-router-dom";



export function Cart() {
  const [count,setcount] = useState(1)
  const { cartData } = useSelector(state => state.cart)
  const dispatch = useDispatch()
 useEffect(() => {
   console.log("cartData::",cartData?.reduce((acc,item)=>{
    console.log(acc,item.items)
    return item.items + acc
   },0))
 }, [cartData])
  const navigate = useNavigate();
  const handelnavigate= ()=>{
     navigate("/productlist")
  }

    const totalPrice = cartData.reduce((acc, product) => acc + product.price * product.items, 0);
    const totalDiscount = cartData.reduce(
      (acc, product) => acc + (product.price - product.ourprice) * product.items,
      0
    );
    const finalPrice = totalPrice - totalDiscount;

   
 
  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0">
       {cartData.length>0?<div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section
            aria-labelledby="cart-heading"
            className="rounded-lg bg-white lg:col-span-8"
          >
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>
            <ul role="list" className="divide-y divide-gray-200">
              {cartData?.map((product, productIdx) => (
                <div key={product.id} className="">
                  <li className="flex py-6 sm:py-6 ">
                    <div className="flex-shrink-0">
                      <img
                        src={product.imageSrc}
                        alt={product.name}
                        className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <a
                                href={product.href}
                                className="font-semibold text-black"
                              >
                                {product.name}
                              </a>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm">
                            <p className="text-sm text-gray-500">
                              {product.color}
                            </p>
                            {product.quantity ? (
                              <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                                {product.quantity}
                              </p>
                            ) : null}
                          </div>
                          
                          <div className="mt-1 flex items-end">
                            <p className="text-xs font-medium text-gray-500 line-through">
                            ₹{product.price}
                            </p>
                            <p className="text-sm font-medium text-gray-900">
                              &nbsp;&nbsp; ₹{product.ourprice}
                            </p>
                            &nbsp;&nbsp;
                            <p className="text-sm font-medium text-green-500">
                              10% Off
                            </p>
                          </div>
                        </div>
                      </div>
                    </div> 
                  
                  </li>
                  <div className="mb-2 flex">
                    <div className="min-w-24 flex">
                      <button type="button" className="h-7 w-7"
                      onClick={()=>{
                        dispatch(decreaseItem({id:product.id}))
                      }}>
                        -
                      </button>
                      <span
                       
                        className="mx-1 h-7 w-9 rounded-md border text-center"
                        
                        
                      >
                        {product.items}
                      </span>
                      <button
                        type="button"
                        className="flex h-7 w-7 items-center justify-center"
                        onClick={()=>{
                          dispatch(increaseItem({id:product?.id}))
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div className="ml-6 flex text-sm">
                      <button
                        type="button"
                        className="flex items-center space-x-1 px-2 py-1 pl-0"
                        onClick={()=>{
                           dispatch(removeItem({id:product?.id}))
                        }}
                      >
                        <Trash size={12} className="text-red-500" />
                        <span className="text-xs font-medium text-red-500">
                          Remove
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </section>
          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
          >
            <h2
              id="summary-heading"
              className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
            >
              Price Details
            </h2>
            <div>
              <dl className=" space-y-1 px-2 py-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-800">Price (2 item)</dt>
                  <dd className="text-sm font-medium text-gray-900">₹ {totalPrice}</dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="flex items-center text-sm text-gray-800">
                    <span>Discount</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700">₹ {totalDiscount}</dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex text-sm text-gray-800">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700"></dd>
                </div>
                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                  <dt className="text-base font-medium text-gray-900">
                    Total Amount
                  </dt>
                  <dd className="text-base font-medium text-gray-900">₹ {finalPrice}</dd>
                </div>
              </dl>
              <div className="px-2 pb-4 font-medium text-green-700">
                You will save ₹ 100 on this order
              </div>
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none 
              focus:ring-4 focus:ring-blue-300 font-medium 
              rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2
               dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirm Payment</button>

            </div>
          </section>
        </form>
      </div>:
      <>
       <div>
        <img src={cart} className=""/> 
        </div>
        <div className="flex justify-center items-center pb-14">
        <div> 
        <button
        onClick={handelnavigate}
         type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 md:px-6 lg:px-8 md:py-3 lg:py-4 text-center md:mb-2 lg:me-2 lg:mb-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full md:w-auto h-10 md:h-auto">Start Shopping</button>

         </div>
        </div>
        </>}
    </div>
  );
}
