import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStar } from '../../../features/slices/reviewSlice';

const StarRating = ({ totalStars = 5, selectedStars }) => {
    const [rating, setRating] = useState(selectedStars);
    const [hover, setHover] = useState(0);
    const dispatch = useDispatch()

    const handleClick = (index) => {
        dispatch(setStar(index + 1))
        setRating(index + 1);
    };

    const handleMouseEnter = (index) => {
        setHover(index + 1);
    };

    const handleMouseLeave = () => {
        setHover(0);
    };


    return (
        <div className="flex">
            {Array.from({ length: totalStars }).map((_, index) => (
                <svg
                    key={index}
                    onClick={() => handleClick(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className={`w-6 h-6 cursor-pointer ${index < (hover || rating) ? 'text-yellow-500' : 'text-gray-400'
                        }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.217 3.742a1 1 0 00.95.69h3.929c.969 0 1.371 1.24.588 1.81l-3.182 2.31a1 1 0 00-.364 1.118l1.218 3.742c.3.922-.755 1.688-1.54 1.118l-3.182-2.31a1 1 0 00-1.175 0l-3.182 2.31c-.784.57-1.838-.196-1.54-1.118l1.218-3.742a1 1 0 00-.364-1.118l-3.182-2.31c-.783-.57-.38-1.81.588-1.81h3.929a1 1 0 00.95-.69l1.217-3.742z" />
                </svg>
            ))}
        </div>
    );
};

export default StarRating;