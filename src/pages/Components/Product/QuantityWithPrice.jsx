import React, { useEffect, useState } from "react";

const QuantityWithPrice = ({ item, price, setPrice }) => {
  const [priceData, setPriceData] = useState(
    Array.isArray(item?.price) && item?.price[0]
  );
  useEffect(() => {
    setPrice(priceData);
  }, [priceData]);

  return (
    <div className="flex flex-col mb-3">
      <div className="flex justify-start items-center">
        <p class="text-lg font-semibold text-black cursor-auto mt-3  mb-3 ">
          ₹{priceData?.totalPrice}
        </p>

        {item?.discount ? (
          <div className="flex justify-start items-center">
            <del className="text-slate-600 mt-3  mb-3 mr-3">
              <p class="text-sm text-slate-500 cursor-auto ml-2 ">
                ₹{priceData?.price}
              </p>
            </del>
            <p className="border py-1 px-1 rounded-md  text-xs font-semibold text-white bg-indigo-600 ">
              {item?.discount}%OFF
            </p>
          </div>
        ) : (
          <div className="flex items-center text-transparent">
            <del className=" mt-3 mb-3 mr-3">
              <p class="text-sm  cursor-auto ml-2 ">00</p>
            </del>
            <p className=" py-1 px-1 rounded-md  text-xs font-semibold ">00</p>
          </div>
        )}
      </div>
      <div className="">
        {item?.price?.map((pr) => {
          return (
            <button
              onClick={() => {
                setPriceData(pr);
                setPrice(pr);
              }}
              className="border border-slate-400 rounded-md text-xs p-1 mr-2 text-slate-600 hover:bg-[#4F46E5] hover:text-white hover:border-none"
            >
              {pr?.weight}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuantityWithPrice;
