import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllUserOrders } from "../../../features/actions/order";
import { format } from "date-fns";
import StarRating from "../StartRating/StarRating";
import { createPortal } from "react-dom";
import ReviewModal from "./ReviewModal";
import OrderStatus from "./OrderStatus";

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
    <div className="mx-auto pt-16 max-w-6xl px-4 md:px-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Order History</h2>
      <p className="text-sm text-gray-600 mb-6">
        Check the status of recent and past orders.
      </p>

      <div className="space-y-6">
        {Array.isArray(ordersData) &&
          ordersData.map((item, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-md">
              {/* Order Info */}
              <div
                onClick={() => navigate("/order", { state: item })}
                className="flex justify-between items-center p-4 hover:bg-gray-100 cursor-pointer rounded-t-md"
              >
                <OrderStatus status={item?.orderStatus} createdAt={item?.createdAt} key={idx} />
                {/* <div className="flex items-center space-x-4">
                  <TbTruckDelivery className="text-2xl text-blue-600" />
                  <div>
                    <p className="text-sm font-bold text-blue-700">
                      On the Way
                    </p>
                    <p className="text-xs text-gray-600">
                      On {format(new Date(item.createdAt), "EEE, d MMM yyyy")}
                    </p>
                  </div>
                </div> */}
                <FaArrowRight className="text-gray-400 hidden md:block" />
              </div>

              {/* Products */}
              <div className="p-4 border-t flex flex-wrap gap-4">
                {Array.isArray(item?.product) &&
                  item.product.map((product, idy) => (
                    <div
                      key={idy}
                      className="flex items-center bg-gray-100 p-3 rounded-lg shadow-sm w-full"
                    >
                      <img
                        src={product?.productId[0]?.productImg}
                        alt="Product"
                        className="w-20 h-20 rounded-md object-cover"
                        onError={(event) => {
                          event.target.src = "/placeholder.jpg";
                          event.onerror = null;
                        }}
                      />
                      <div className="ml-4 text-sm">
                        <p className="font-semibold text-gray-800">
                          {product?.productId[0]?.productName}
                        </p>
                        <p className="text-gray-600 text-xs">Size: 350g</p>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Review Section */}
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-b-md">
                <StarRating totalStars={5} />
                <button
                  onClick={() => {
                    setOrder(item);
                    setOpenReview(true);
                  }}
                  className="text-sm font-semibold text-blue-600 hover:underline"
                >
                  Write a Review
                </button>
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
