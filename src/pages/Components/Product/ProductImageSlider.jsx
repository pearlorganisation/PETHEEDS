import React, { useEffect, useState } from 'react';
import style from './style.module.css';

const ProductImageSlider = ({ singleProduct }) => {
    const [productImage, setProductImage] = useState([]);
    const [image, setImage] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    useEffect(() => {
        if (singleProduct) {
            const temp = singleProduct?.gallery?.map(item => item);
            const allImages = [singleProduct?.productImg, ...temp];
            setProductImage(allImages);
        }
    }, [singleProduct]);

    // Detect swipe direction
    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const swipeDistance = touchStart - touchEnd;
        if (swipeDistance > 50) {
            // Swipe Left - Next Image
            setImage((prevIndex) => (prevIndex + 1) % productImage.length);
        } else if (swipeDistance < -50) {
            // Swipe Right - Previous Image
            setImage((prevIndex) => (prevIndex - 1 + productImage.length) % productImage.length);
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex space-y-4 lg:space-y-0 lg:items-start">
                <div className="lg:order-2 lg:ml-5 relative">
                    <img
                        className="h-[19rem] lg:h-[25rem] w-full rounded-lg shadow-lg max-w-full object-contain lg:object-cover"
                        src={productImage[image]}
                        alt="Product"
                        onError={(event) => {
                            event.target.src = "/placeholder.jpg";
                            event.onerror = null;
                        }}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    />
                </div>

                <div
                    className={`mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0 max-h-[25rem] py-2 overflow-auto ${style.productScroll}`}
                >
                    <div className="flex flex-row gap-3 lg:flex-col justify-center items-center">
                        {productImage?.map((el, ind) => (
                            <button
                                key={ind}
                                type="button"
                                onClick={() => setImage(ind)}
                                className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg ${
                                    image === ind ? 'ring-2 ring-blue-500' : 'ring ring-blue-100'
                                }`}
                            >
                                <img
                                    className="h-full w-full object-cover"
                                    src={el}
                                    alt="Thumbnail"
                                    onError={(event) => {
                                        event.target.src = "/placeholder.jpg";
                                        event.onerror = null;
                                    }}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductImageSlider;
