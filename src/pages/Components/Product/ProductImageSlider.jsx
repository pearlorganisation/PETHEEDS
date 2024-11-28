import React, { useEffect, useRef, useState } from 'react'
import style from './style.module.css'

const ProductImageSlider = ({ singleProduct }) => {
    useEffect(() => {
        if (singleProduct) {
            const temp = singleProduct?.gallery?.map(item => item)
            const allImages = [singleProduct?.productImg, ...temp]
            console.log(allImages, "allImages")
            setProductImage(allImages)
        }
    }, [singleProduct]);
    const [productImage, setProductImage] = useState([]);
    const [image, setImage] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const intervalRef = useRef(null);
    const startLoop = () => {
        intervalRef.current = setInterval(() => {
            setImage((prevIndex) => (prevIndex + 1) % productImage.length);
        }, 4000);
    };

    // Function to stop the interval
    const stopLoop = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    // Toggle loop based on isPlaying state
    useEffect(() => {
        if (isPlaying) {
            startLoop();
        } else {
            stopLoop();
        }

        // Clean up interval on component unmount
        return () => stopLoop();
    }, [isPlaying, productImage.length]);

    return (
        <div class="lg:col-span-3 lg:row-end-1  ">
            <div class="lg:flex  space-y-4 lg:space-y-0 lg:items-start ">
                <div class="lg:order-2 lg:ml-5  ">
                    <div class="max-w-xl overflow-hidden rounded-lg border shadow-lg  mx-auto ">
                        <img
                            onMouseOver={() => {
                                stopLoop()
                            }}
                            onMouseLeave={() => {
                                startLoop()
                            }}
                            class="h-[25rem] w-full max-w-full object-cover"
                            src={productImage[image]}
                            alt=""
                            onError={(event) => {
                                event.target.src =
                                    "/placeholder.jpg";
                                event.onerror = null;
                            }}
                        />
                    </div>
                </div>

                <div class={`mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0 max-h-[25rem]  py-2 overflow-auto ${style.productScroll}`}>
                    <div class="flex flex-row gap-3  lg:flex-col  justify-center items-center">
                        {productImage?.map((el, ind) => {
                            return (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setImage(ind);
                                    }}
                                    class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg ring  ring-blue-100 text-center"
                                >
                                    <img
                                        class="h-full w-full object-cover"
                                        src={el}
                                        alt=""
                                        onError={(event) => {
                                            event.target.src =
                                                "/placeholder.jpg";
                                            event.onerror = null;
                                        }}
                                    />
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductImageSlider