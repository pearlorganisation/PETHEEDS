import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { FaLocationCrosshairs } from "react-icons/fa6";

const Address = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("location", location)
    }, [location])


    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await axios.get(
                            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAEg8nFyUAu8zlt1NK5N1HrqLYLhpPhIlQ`
                        );
                        const address = response.data.results[0].formatted_address;
                        setLocation(address);
                        setValue('address', location)

                    } catch (error) {
                        setError('Error retrieving location');
                    }
                },
                (error) => {
                    setError(error.message);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    };
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div className='max-w-6xl  mx-auto sm:px-10  lg:px-20 xl:px-32'>

            <form onSubmit={handleSubmit(onSubmit)} class=" bg-gradient-to-t from-blue-50 to-blue-100 px-4 pt-8 lg:mt-0 h-full">
                <p class="text-xl font-medium">Address Details</p>
                <p class="text-gray-400">Complete your order by providing your payment details.</p>
                <div class=" space-y-4">

                    <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Contact Details</label>
                    <div class="relative">
                        <input
                            {...register("fullName", { required: true })}
                            type="text" id="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
                        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                            </svg>
                        </div>

                    </div>
                    {errors.fullName && <span className='text-red-500'>This field is required</span>}

                    <div class="relative">
                        <input
                            {...register("email", { required: true })}
                            type="text" id="email" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
                        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                        </div>
                    </div>
                    {errors.fullName && <span className='text-red-500'>This field is required</span>}

                    <div class="relative">
                        <input
                            {...register("contactNumber", { required: true })}
                            type="text" id="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Contact Number" />
                        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                            </svg>
                        </div>
                    </div>
                    {errors.fullName && <span className='text-red-500'>This field is required</span>}
                    <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium"> Address</label>
                    <div class="relative space-y-4">
                        <div>
                            <input {...register("pincode", { required: true })} type="text" id="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Pin Code" />
                        </div>
                        <div className='relative'>
                            <input {...register("address", { required: true })} readOnly defaultValue={location} type="text" id="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Address (House No, Building, Street, Area)*" />
                            <button onClick={() => {
                                getLocation()
                            }} className='px-4 py-[0.4rem] active:scale-95 transition-all flex justify-center items-center gap-2 bg-blue-500 text-white rounded-md absolute right-[0.30rem] top-[0.29rem]' type="button"> <FaLocationCrosshairs />
                                Use My Location</button>
                        </div>
                        <div>
                            <input {...register("locality", { required: true })} type="text" id="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Locality / Town*" />
                        </div>
                        <div className='flex gap-2'>
                            <input
                                {...register("city", { required: true })}
                                type="text" id="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="City / District*" />

                            <input
                                {...register("state", { required: true })}
                                type="text" id="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="State*" />


                        </div>

                    </div>





                </div>
                <button type='submit' class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
            </form>
        </div>
    )
}

export default Address