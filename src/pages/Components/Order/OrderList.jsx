import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllUserOrders } from "../../../features/actions/order";
import { createPortal } from "react-dom";
import ReviewModal from "./ReviewModal";
import OrderStatus from "./OrderStatus";
import StarRating from "../StartRating/StarRating";

export const OrderList = () => {
  const [openReview, setOpenReview] = useState(false);
  const [order, setOrder] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.auth);
  const { ordersData } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getAllUserOrders(userData?.data?._id));
  }, []);

  useEffect(() => {
    if (openReview) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openReview]);

  return (
    <div className="mx-auto pt-16 max-w-6xl px-4 md:px-10 bg-gray-50 min-h-screen my-2">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Order History</h2>
      <p className="text-sm text-gray-600 mb-6">
        Check the status of recent and past orders.
      </p>

      <div className="space-y-6">
        {Array.isArray(ordersData) && ordersData?.length <= 0 ? <div className=" bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 text-center">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/empty-box-illustration-download-in-svg-png-gif-file-formats--cart-is-explore-state-error-pack-design-development-illustrations-3613888.png?f=webp"
              alt="No order found illustration"

              className="mx-auto "
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              No Order Found
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              We couldn't find any orders associated with your account. Try placing a new order or check back later.
            </p>
            <div className="mt-5">
              <Link to="/productsList"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div> :
          ordersData?.map((item, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-md">
              {/* Order Info */}
              <div
                onClick={() => navigate("/order", { state: item })}
                className="flex justify-between items-center p-4 hover:bg-gray-100 cursor-pointer rounded-t-md"
              >
                <OrderStatus status={item?.orderStatus} createdAt={item?.createdAt} key={idx} />
                <FaArrowRight className="text-gray-400 hidden md:block" />
              </div>

              {/* Products */}
              <div className="p-4 border-t flex flex-wrap gap-4">
                {Array.isArray(item?.product) &&
                  item.product.map((product, idy) => (
                    <div className="w-full grid">
                      <div
                        key={idy}
                        className="flex w-full items-center bg-gray-100 p-3 rounded-lg shadow-sm"
                      >
                        <img
                          src={
                            Array.isArray(product?.productId) &&
                              product?.productId[0]?.productImg
                              ? product.productId[0].productImg
                              : "/placeholder.jpg"
                          }
                          alt="Product"
                          className="w-20 h-20 rounded-md object-cover"
                          onError={(event) => {
                            event.target.src = "/placeholder.jpg";
                            event.onerror = null;
                          }}
                        />
                        <div className="ml-4 text-sm">
                          <p className="font-semibold text-gray-800">
                            {Array.isArray(product?.productId) &&
                              product?.productId[0]?.productName
                              ? product.productId[0].productName
                              : "Unknown Product"}
                          </p>
                          <p className="text-gray-600 text-xs">Size: 350g</p>
                        </div>
                      </div>
                      {/* Review Section */}
                      <div className={`flex w-full ${product?.rating ? 'justify-between' : 'justify-end'}  items-center bg-gray-50 p-3 rounded-b-md`}>
                        {
                          product?.rating && <StarRating
                            selectedStars={Number(product?.rating?.rating || 0)}
                            totalStars={5}
                          />
                        }
                        {
                          item?.orderStatus === 'Completed' && <button
                            onClick={() => {
                              setOrder({ ...product, orderId: item?._id });
                              setOpenReview(true);
                            }}
                            className="text-sm font-semibold text-blue-600 hover:underline"
                          >
                            {product?.rating ? "View Review" : "Write a Review"}
                          </button>
                        }

                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>

      {/* Review Modal */}
      {openReview &&
        createPortal(
          <ReviewModal order={order} setOpenReview={setOpenReview} />,
          document.body
        )}
    </div>
  );
};
