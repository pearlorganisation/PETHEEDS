import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns';
import { useSelector } from 'react-redux';



export const Order = () => {
  const {state:item}= useLocation();
  const {userData}= useSelector((state)=>state.auth)

  console.log(item)

  useEffect(()=>{
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  },[])
  return (
    <div className="mx-auto my-4 max-w-5xl md:my-6 pt-16">
      <div className="overflow-hidden rounded-xl border border-gray-100 shadow">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product List */}

          <div className="px-5 py-6 md:border-r md:border-r-gray-200 md:px-8">
            <div className="flow-root">
              <ul className="-my-7 divide-y divide-gray-200">
                {Array.isArray(item?.product) && item?.product?.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-stretch justify-between space-x-5 py-7"
                  >
                    <div className="flex flex-1 items-stretch">
                      <div className="flex-shrink-0">
                        <img
                          className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                          src={product?.productId[0]?.productImg}
                          
                        />
                      </div>

                      <div className="ml-5 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-900">{product?.productId[0]?.productName}</p>
                          <p className="mt-1.5 text-sm font-medium text-gray-600">
                            {product?.weight}
                          </p>
                        </div>
                        <p className="mt-4 text-xs font-medium  text-gray-500">Quantity : {product?.totalItem}</p>
                      </div>
                    </div>
                    <div className="ml-auto flex flex-col items-end justify-between">
                      <p className="text-right text-sm font-bold text-gray-900">{product?.price}</p>
                    
                    </div>
                  </li>
                ))}
              </ul>
              <hr className="mt-6 border-gray-200" />
              <ul className="mt-6 space-y-3">
              
                <li className="flex items-center justify-between">
                  <p className=" font-medium ">Total Amount</p>
                  <p className="text-sm font-bold ">₹{item?.amount}</p>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Info */}
          <div className="px-5 py-6 md:px-8">
            <div className="flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="py-6">
                  <h2 className="text-base font-bold text-black">Contact Information</h2>
                  <p className="font-medium mt-3 text-sm text-gray-700">Order Number: #{item?._id}</p>
                  <p className="text-sm font-medium text-gray-700">Date: {format(new Date(item?.createdAt), 'EEE, d MMM yyyy')}</p>
                  {/* <button
                    type="button"
                    className="mt-4 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    View Invoice
                  </button> */}
                </div>
                <div className="py-6">
                  <h2 className="mb-2 text-base font-bold text-black">Shipping Information</h2>
                  <p className="mt-3 text-sm font-medium text-gray-700">{userData?.data?.fullName}</p>
                  <p className="text-sm font-medium text-gray-700">{item?.address?.address}</p>
                  <p className="text-sm font-medium text-gray-700">{item?.address?.locality}</p>
                  <p className="text-sm font-medium text-gray-700">{item?.address?.city}, {item?.address?.state}</p>
                  <p className="text-sm font-medium text-gray-700">{item?.address?.pincode}</p>
                
                </div>
                <div className="py-6">
                  <h2 className="text-base font-bold text-black">Shipping Contact Number</h2>
                  <p className="mt-3 text-sm font-medium text-gray-700">{item?.address?.phoneNumber}</p>
              
                </div>
                <div className="py-6">
                  <h2 className="text-base font-bold text-black">Payment Information</h2>
                  <p className={`mt-3 text-sm font-medium ${item?.paymentType === 'Online Paid'? "text-green-600" : "text-yellow-600" } `}>{item?.paymentType}</p>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
