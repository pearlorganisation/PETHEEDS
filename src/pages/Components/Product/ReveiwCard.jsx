import React from 'react'
import ImageViewer from './ImageViewer'
import StarRating from '../StartRating/StarRating'
const Star = ({ filled }) => {
    return (
        <svg
            className={`w-6 h-6 ${filled ? 'text-yellow-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
    );
};
const ReveiwCard = ({ item }) => {
    return (
        <div class="flex items-start p-6 bg-slate-100 hover:bg-slate-200/70 cursor-pointer rounded-md">

            <div class="">
                <p class="flex items-baseline">
                    <span class="text-gray-600 font-bold">Abhishek007</span>

                </p>
                <div class="flex items-center mt-1">
                    <div className="flex space-x-1">
                        {Array.from({ length: 5 }, (_, index) => (
                            <Star key={index} filled={index < item?.rating} />
                        ))}
                    </div>
                </div>
                <div class="flex items-center gap-3 mt-4 text-gray-600">
                    <ImageViewer key={item?._id} imageData={item?.reviewImages} />
                </div>
                <div class="mt-3">
                    {/* <span class="font-bold">Sapien consequat eleifend!</span> */}
                    <p class="mt-1 font-bold">{item?.message}</p>
                </div>

            </div>
        </div>
    )
}

export default ReveiwCard