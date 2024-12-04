import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import ImageViewer from "../Product/ImageViewer";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../../../features/actions/reviewAction";
import { clearReview } from "../../../features/slices/reviewSlice";
import StarRating from "../StartRating/StarRating";
import { toast } from "sonner";
import { getAllUserOrders } from "../../../features/actions/order";

const ReviewModal = ({ order, setOpenReview }) => {
  console.log(order, "order")
  const { singleReviewStar, isLoading, reviewData } = useSelector(
    (state) => state.review
  );
  const { userData } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      review: order?.rating?.message
    }
  });

  const dispatch = useDispatch();
  const [selectedImages, setSelectedImages] = useState(order?.rating?.
    reviewImages || []);
  const [imageFiles, setImageFiles] = useState([]);

  const onSubmit = (data) => {
    let formData = new FormData();
    if (Number(singleReviewStar) < 1) {
      toast.error("Please Select Rating Star!")
    } else {
      formData.append("rating", singleReviewStar);
      formData.append("message", data.review);
      formData.append("username", userData?.data?.fullName);
      formData.append("product", order?.productId[0]?._id);
      formData.append("orderId", order?.orderId);
      formData.append("productData", JSON.stringify({ ...order, productId: order?.productId[0]?._id }));
      console.log(imageFiles);
      imageFiles.length > 0 &&
        imageFiles.forEach((image) => formData.append("reviewImages", image));
      dispatch(addReview({ formData }));
    }

  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles(files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setSelectedImages(imageUrls);
  };
  console.log(order?.productId[0]?._id);
  useEffect(() => {
    if (reviewData?.status) {
      setOpenReview(false);
    }
  }, [reviewData]);
  useEffect(() => {
    return () => {
      dispatch(clearReview());
      dispatch(getAllUserOrders(userData?.data?._id));
    };
  }, []);



  return (
    <div class="bg-black/30 h-screen grid place-items-center p-4 z-50  fixed top-0 w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        class="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6 relative"
      >
        <button
          onClick={() => {
            setOpenReview(false);
          }}
          class="absolute top-4 right-4 text-gray-500"
        >
          <IoMdClose />
        </button>
        <h2 class="text-center text-lg md:text-xl font-semibold mb-4">
          {order?.rating ? 'View Review' : 'WRITE REVIEW'}
        </h2>

        <div class="flex items-center mb-4">
          <img
            src={order?.productId[0]?.productImg}
            alt="Product Image"
            class="w-12 h-12 rounded-full mr-4"
            onError={(event) => {
              event.target.src = "/placeholder.jpg";
              event.onerror = null;
            }}
          />
          <div>
            <h3 class="text-xs sm:text-sm md:text-lg font-semibold">
              {order?.productId[0]?.productName}
            </h3>
            <div class="flex items-center">
              <StarRating
                selectedStars={Number(order?.rating?.rating || 0)}
                totalStars={5} />
            </div>
          </div>
        </div>

        <div className="py-2">
          <textarea
            {...register("review", { required: true })}
            class="w-full border border-gray-300 rounded-md p-2 "
            rows="4"
            placeholder="Please write product review here."
          ></textarea>
          {errors.review && (
            <span className="text-red-500">Review is required</span>
          )}
        </div>

        <div class="flex items-center mb-4 gap-3">
          {selectedImages.length > 0 ? (
            <ImageViewer imageData={selectedImages} />
          ) : null}

          {
            order?.rating ? null : <label class="cursor-pointer flex items-center space-x-2">
              <div class="flex items-center justify-center w-10 md:w-14 h-10 md:h-14 border border-dashed border-gray-400 rounded-md">
                <svg
                  class="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  ></path>
                </svg>
              </div>
              <input
                multiple
                onChange={handleImageChange}
                type="file"
                class="hidden"
              />
              <span class="text-blue-500">Add Photos</span>
            </label>
          }
        </div>

        <p class="text-xs text-gray-500 mb-4">
          By submitting review you give us consent to publish and process
          personal information in accordance with
          <a href="#" class="text-blue-500 underline">
            Terms of use
          </a>{" "}
          and
          <a href="#" class="text-blue-500 underline">
            Privacy Policy
          </a>
        </p>

        {order?.rating ? null : isLoading ? (
          <button
            disabled={isLoading}
            type="button"
            class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Loading...
          </button>
        ) : (
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            SUBMIT
          </button>
        )}
      </form>
    </div>
  );
};

export default ReviewModal;
