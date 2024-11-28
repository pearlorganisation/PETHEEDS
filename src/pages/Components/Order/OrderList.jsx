import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { TbCheckbox } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllUserOrders } from "../../../features/actions/order";
import { format } from "date-fns";
import StarRating from "../StartRating/StarRating";
import { createPortal } from "react-dom";
import ReviewModal from "./ReviewModal";

export const OrderList = () => {
  const [openReview, setOpenReview] = useState(false);
  const [order, setOrder] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.auth);
  const { ordersData } = useSelector((state) => state.order);

  console.log(ordersData);
  useEffect(() => {
    dispatch(getAllUserOrders(userData?.data?._id));
  }, []);

  useEffect(() => {
    if (openReview) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup when the component is unmounted or modal is closed
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openReview]);

  // if (!openReview) return null;

  return (
    <div className="mx-auto my-8 max-w-6xl px-2 md:my-20 md:px-10">
      <h2 className="text-3xl font-bold">Order History</h2>
      <div className="mt-3 text-sm">
        Check the status of recent and old orders
      </div>
      <div className="mt-5 border rounded-sm bg-gray-100">
        {/* //item 1 */}
        {Array.isArray(ordersData) &&
          ordersData.map((item, idx) => (
            <div className="px-5 py-5 space-y-2">
              <div
                key={idx}
                onClick={() => {
                  navigate("/order", { state: item });
                }}
                className=" flex justify-between items-center overflow-hidden rounded-sm border border-gray-300 bg-white  hover:bg-opacity-5 hover:bg-black "
              >
                <div className="">
                  <div className="flex gap-3  p-3">
                    <div>
                      <TbTruckDelivery className="text-xl" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-yellow-600 font-bold text-[13px] md:text-[14px]">
                        On the Way
                      </div>
                      <div className="text-[13px] md:text-[14px]">
                        On {format(new Date(item.createdAt), "EEE, d MMM yyyy")}
                      </div>
                    </div>
                    <div className="md:hidden ">
                      <FaArrowRight className="" />
                    </div>
                  </div>

                  <div className="p-3 flex flex-wrap gap-7 text-[12px] md:text-[14px]">
                    {Array.isArray(item?.product) &&
                      item?.product?.map((product, idy) => (
                        <div
                          key={idy}
                          className="shadow-md rounded-lg flex gap-5 items-center p-2 w-72"
                        >
                          <img
                            src={product?.productId[0]?.productImg}
                            className="rounded-lg w-24 h-20"
                            onError={(event) => {
                              event.target.src = "/placeholder.jpg";
                              event.onerror = null;
                            }}
                          />
                          <div>
                            <div>{product?.productId[0]?.productName}</div>
                            <div>Size: 350g</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="sm:hidden md:block mx-4">
                  <FaArrowRight />
                </div>
              </div>
              <div className="flex justify-between items-center  bg-white px-3 py-2 ">
                <StarRating totalStars={5} />{" "}
                <button
                  onClick={() => {
                    setOrder(item);
                    setOpenReview(true);
                  }}
                  className=" text-blue-600 font-semibold"
                >
                  Write a Review
                </button>{" "}
              </div>
            </div>
          ))}
      </div>
      {openReview &&
        createPortal(
          <ReviewModal order={order} setOpenReview={setOpenReview} />,
          document.body
        )}
    </div>
  );
};
