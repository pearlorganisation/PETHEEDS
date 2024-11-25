import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa6";
import Address from "./Address";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";
import { sendOrderMail } from "../../../features/actions/orderMail";
import { clearCart } from "../../../features/slices/cartSlice";


const CheckoutPage = () => {
  const [order, setOrder] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { cartData } = useSelector((state) => state.cart);
  const { userData } = useSelector((state) => state.auth);

  const [totalPrice, setTotalPrice] = useState(0);
  const [steps, setStep] = useState(Number(1));
  const [codData, setCodData] = useState();
  const [onlineData, setOnlineData] = useState();

  const navigate = useNavigate();
  const { selectedAddress, addressData } = useSelector((state) => state.address);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [steps]);

  useEffect(() => {
    console.log(steps);
  }, [steps]);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      paymentMethod: "online",
    },
  });

  const handlePayment = async (amount) => {
    setIsLoading(true);
    try {
      const product = cartData?.map((item) => {
        return {
          productId: item?.productId,
          price: item?.totalSum,
          weight: item?.weight,
          totalItem: item?.items,
        };
      });

      const orderById = userData?.data?._id;
      const email = userData?.data?.email;
      const {
        data: { bookingId, order },
      } = await axios.post(
        import.meta.env.VITE_REACT_APP_WORKING_ENVIRONMENT === "development"
          ? `${import.meta.env.VITE_REACT_APP_API_BASE_URL_DEVELOPMENT
          }/booking/bookingOrder`
          : `${import.meta.env.VITE_REACT_APP_API_BASE_URL_MAIN_PRODUCTION
          }/booking/bookingOrder`,
        {
          amount,
          product,
          orderById,
          email,
          address: selectedAddress,
        }
      );
      setOrder(order?.id);
      setIsLoading(false);


      const options = {
        key: import.meta.env.VITE_APP_RAZORPAY_KEY,
        amount: order.amount,
        currency: "INR",
        name: "PETHEEDS",
        description: "PETHEEDS",
        image: "./apple-touch-icon.png",
        order_id: order.id,
        handler: async function (response) {
          const body = { ...response };
          try {
            const validateResponse = await axios.post(
              import.meta.env.VITE_REACT_APP_WORKING_ENVIRONMENT ===
                "development"
                ? `${import.meta.env.VITE_REACT_APP_API_BASE_URL_DEVELOPMENT
                }/booking/verifyOrder/${bookingId}`
                : `${import.meta.env.VITE_REACT_APP_API_BASE_URL_MAIN_PRODUCTION
                }/booking/verifyOrder/${bookingId}`,
              body
            );
            var jsonResponse = validateResponse?.data;
            setOnlineData(jsonResponse);
            if (jsonResponse.status) {
              setStep(3);
              toast.success(jsonResponse?.message, { position: "top-center" });
            }
          } catch (error) {
            console.error("Error verifying payment:", error);
            toast.error("Error verifying payment", { position: "top-center" });
          }
        },
        //  callback_url: `http://localhost:8000/api/v1/booking/verifyOrder/${bookingId}`,

        modal: {
          ondismiss: function () {
            alert("Payment window closed without completing the payment.");
          },
        },

        theme: {
          color: "#121212",
        },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error("Error creating or processing payment:", error);
      toast.error("Error creating or processing payment", {
        position: "top-center",
      });
      setIsLoading(false);
    }
  };

  const handleCod = async () => {
    setIsLoading(true);
    try {
      const product = cartData?.map((item) => {
        return {
          productId: item?.productId,
          price: item?.totalSum,
          weight: item?.weight,
          totalItem: item?.items,
        };
      });

      const orderById = userData?.data?._id;
      const email = userData?.data?.email;

      const { data } = await axios.post(
        import.meta.env.VITE_REACT_APP_WORKING_ENVIRONMENT === "development"
          ? `${import.meta.env.VITE_REACT_APP_API_BASE_URL_DEVELOPMENT
          }/booking/codOrder`
          : `${import.meta.env.VITE_REACT_APP_API_BASE_URL_MAIN_PRODUCTION
          }/booking/codOrder`,
        {
          product,
          orderById,
          email,
          amount: totalPrice,
          address: selectedAddress,
        }
      );
      dispatch(clearCart())
      setIsLoading(false);
      setCodData(data);
      setStep(3);
      toast.success(data?.message, { position: "top-center" });
    } catch (error) {
      console.error("Error creating the COD order:", error);
      setIsLoading(false);
    }
  };

  const onSubmit = (data) => {
    const { paymentMethod } = data;

    if (paymentMethod === "online") {
      handlePayment(totalPrice);
    } else {
      handleCod();
    }
  };

  useEffect(() => {
    const totalP = cartData?.reduce((acc, item) => {
      return acc + item.totalSum;
    }, 0);
    setTotalPrice(totalP);
  }, [cartData]);

  useEffect(() => {
    if (codData?.status) {
      dispatch(
        sendOrderMail({
          id: codData?.data?._id,
          payload: codData?.data,
        })
      );
    }
  }, [codData]);

  useEffect(() => {
    if (onlineData?.status) {
      dispatch(
        sendOrderMail({
          id: onlineData?.data?._id,
          payload: onlineData?.data,
        })
      );
    }
  }, [onlineData]);

  return (
    <div className="min-h-screen py-8 space-y-8 container mx-auto  sm:pt-20">
      <div className="px-4 pt-3 lg:pt-0 ">
        <div className="mx-auto w-full max-w-lg">
          <div className="">
            <ul className=" flex w-full gap-4 flex-row justify-between">
              <li className="flex space-x-4 text-left">
                <a
                  className={`shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600  text-sm font-semibold text-white ${steps === 1 ? "ring ring-blue-600 ring-offset-2 " : ""
                    }`}
                  href="#"
                >
                  1
                </a>
                <span className="text-sm md:text-base font-semibold text-blue-600">
                  Billing Information
                </span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hidden h-4 w-4 text-gray-400 sm:block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex space-x-4 text-left">
                <a
                  className={`shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600  text-sm font-semibold text-white  ${steps === 2 ? "ring ring-blue-600 ring-offset-2 " : ""
                    }`}
                  href="#"
                >
                  2
                </a>
                <span className="text-sm  font-semibold text-blue-600">
                  Order Summary
                </span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hidden h-4 w-4 text-gray-400 sm:block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex space-x-4 text-left">
                <a
                  className={`shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600  text-sm font-semibold text-white  ${steps === 3 ? "ring ring-blue-600  ring-offset-2" : ""
                    }`}
                  href="#"
                >
                  3
                </a>
                <span className="text-sm  font-semibold text-gray-500">
                  Success
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {steps === 2 && (
        <div className="max-w-6xl mx-auto sm:px-10  lg:px-20 xl:px-32">
          <div className="">
            {/* Order summary */}
            <div class="relative col-span-full flex flex-col  rounded-md pl-8 pr-4 lg:col-span-4">
              <p class="text-xl font-medium pb-4 z-10">Order summary</p>

              <div>
                {/* <img
                                src={catimg}
                                alt=""
                                class="absolute inset-0 h-full w-full object-cover"
                            /> */}
                <div class="absolute inset-0 h-full w-full bg-gradient-to-t     opacity-60"></div>
              </div>
              <div class="relative">
                <ul class="space-y-5">
                  {cartData?.map((item) => {
                    return (
                      <li class="flex justify-between">
                        <div class="inline-flex">
                          <img src={item?.productImg} alt="" class="size-16 rounded-lg" onError={(event) => {
                            event.target.src =
                              "/placeholder.jpg";
                            event.onerror = null;
                          }} />
                          <div class="ml-3">
                            <p class="text-sm line-clamp-1 font-semibold ">
                              {item?.productName}
                            </p>
                            <p class="text-sm font-medium text-[#333333] text-opacity-80">
                              Pdf, doc Kindle
                            </p>
                            <p class="text-sm font-medium text-[#333333]  text-opacity-80">
                              Quantity : {item?.items}
                            </p>
                          </div>
                        </div>

                        <p class="text-sm font-semibold ">₹{item?.totalSum}</p>
                      </li>
                    );
                  })}
                </ul>
                <div class="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
                <div class="space-y-2">
                  <p class="flex justify-between text-lg font-bold ">
                    <span>Total price:</span>
                    <span>₹{totalPrice}</span>
                  </p>
                </div>
              </div>
              <div class="relative mt-10 text-[#333333]">
                <h3 class="mb-5 text-lg font-bold text-[#333333]">Support</h3>
                <a href="tel:9650185800" class="text-sm font-semibold">
                  +91 96501 85800{" "}
                  <span class="font-light">(International)</span>
                </a>
                <p class="mt-1 text-sm font-semibold text-[#333333]">
                  info@petheeds.in <span class="font-light">(Email)</span>
                </p>
                <p class="mt-2 text-xs font-medium text-[#333333]">
                  Call us now for payment related issues
                </p>
              </div>
              <div class="relative mt-10 flex w-full  gap-3">
                <input
                  placeholder="Promo Code"
                  type="text"
                  className="rounded-md border border-[#d1d5db] bg-white px-3 py-2 text-sm shadow-sm focus:border-[#6366f1] focus:outline-none focus:ring-1 focus:ring-[#6366f1] dark:border-[#4b5563] dark:bg-[#1f2937] dark:text-gray-200"
                />
                <button
                  type="button"
                  class="text-white bg-[#2563EB] font-medium rounded-lg text-sm px-7 py-2.5 me-2 mb-2focus:outline-none "
                >
                  Apply
                </button>
              </div>

              <div className="pt-5">
                <p class=" text-lg font-medium text-black">Payment Methods</p>
                <form class="pt-2 grid gap-6" onSubmit={handleSubmit(onSubmit)}>
                  <div class="relative">
                    <input
                      {...register("paymentMethod")}
                      class="peer hidden"
                      id="radio_1"
                      type="radio"
                      value="cod"
                    />
                    <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                      for="radio_1"
                    >
                      <img
                        class="w-14 object-contain"
                        src="https://cdn-icons-png.flaticon.com/128/3812/3812106.png"
                        alt=""
                        onError={(event) => {
                          event.target.src =
                            "/placeholder.jpg";
                          event.onerror = null;
                        }}
                      />
                      <div class="ml-5">
                        <span class="mt-2 font-semibold">Cash On Delivery</span>
                        <p class="text-slate-500 text-sm leading-6">
                          Delivery: 2-4 Days
                        </p>
                      </div>
                    </label>
                  </div>
                  <div class="relative">
                    <input
                      {...register("paymentMethod")}
                      class="peer hidden"
                      id="radio_2"
                      type="radio"
                      value="online"
                    />
                    <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                      for="radio_2"
                    >
                      <img
                        class="w-14 object-contain"
                        src="https://cdn-icons-png.flaticon.com/128/5097/5097344.png"
                        alt=""
                        onError={(event) => {
                          event.target.src =
                            "/placeholder.jpg";
                          event.onerror = null;
                        }}
                      />
                      <div class="ml-5">
                        <span class="mt-2 font-semibold">Online Payment</span>
                        <p class="text-slate-500 text-sm leading-6">
                          Delivery: 2-4 Days
                        </p>
                      </div>
                    </label>
                  </div>

                  <button
                    disabled={isLoading}
                    className="bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-md z-20"
                  >
                    {isLoading ? (
                      <ClipLoader color="#c4c2c2" />
                    ) : (
                      <span>Place the order</span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {steps === 1 && <Address />}
      {steps === 3 && (
        <div class=" flex items-center justify-center">
          <div class="bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-md text-center">
            <div className="grid place-items-center w-full">
              <div className="bg-green-500 size-10 rounded-full grid place-items-center text-white">
                <FaCheck size={30} />
              </div>
            </div>
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              Order Confirmed!
            </h2>
            <p class="text-gray-600 mb-4">
              Thank you for your purchase.
              <span class="font-semibold text-gray-800">{order}</span>.
            </p>
            <div className="space-x-2">
              <button
                onClick={() => {
                  navigate("/orderList");
                }}
                class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md mb-4"
              >
                View Order Details
              </button>
              <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
      {steps < 2 && (
        <div className=" grid place-items-center">
          <button
            onClick={() => {
              if (addressData?.length > 0) {
                if (Object.keys(selectedAddress || {}).length === 0) {

                  toast.error("Please Select Address!", { position: 'top-center' })
                }
                else {
                  return setStep(steps + 1);
                }
              } else {
                toast.error("Please Add Address!", { position: 'top-center' })
              }

            }}
            className="px-8 active:scale-95 transition-all py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
            type="button"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
