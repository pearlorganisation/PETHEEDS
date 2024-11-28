import React, { useEffect, useMemo } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";
import newimg from "../../../images/new.png";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategory } from "../../../features/actions/productActions";
import { Link } from "react-router-dom";

const NewInStore = () => {
  const dispatch = useDispatch();
  const { filteredProduct } = useSelector((state) => state.products);

  // Function to divide array into chunks
  function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array?.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  // Memoized chunk data
  const chunkData = useMemo(() => {
    if (!filteredProduct || filteredProduct.length === 0) return [];
    return chunkArray(filteredProduct, 4);
  }, [filteredProduct]);

  // Fetch new products on component mount
  useEffect(() => {
    console.log("Fetching new products...");
    dispatch(getProductByCategory({ query: `?newInStore=true` }));
  }, [dispatch]);

  useEffect(() => {
    console.log("Filtered products updated:", filteredProduct);
  }, [filteredProduct]);

  return (
    <div className="container mx-auto my-5">
      {/* Section Header */}
      <div className="flex justify-center font-bold text-2xl md:text-3xl mb-4 items-center">
        <div>
          <img
            src={newimg}
            alt="New In Store"
            onError={(event) => {
              event.target.src = "/placeholder.jpg";
              event.onerror = null;
            }}
          />
        </div>
        <div>New In Store</div>
      </div>

      {/* Content */}
      {chunkData.length > 0 ? (
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 4000 }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {chunkData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid md:grid-cols-2 md:grid-rows-2 gap-3 container mx-auto p-5">
                {item.map((d) => (
                  <Link key={d._id} to={`/singleproduct/${d?._id}`}>
                    <img
                      className="rounded-md h-[197px] w-[742px]"
                      src={d?.productBanner}
                      alt={d?.name || "Product"}
                      onError={(event) => {
                        event.target.src = "/placeholder.jpg";
                        event.onerror = null;
                      }}
                    />
                  </Link>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="text-center my-5">No new products available.</div>
      )}
    </div>
  );
};

export default NewInStore;
