import axios from 'axios';
import React, { useEffect, useState } from 'react'


import { useDispatch, useSelector } from 'react-redux';
import { createAddress, getAddress } from '../../../features/actions/addressAction';
import BillingAddress from './BillingAddress';
import { IoMdAdd } from "react-icons/io";
import { createPortal } from 'react-dom';
import Modal from './Modal';
import { selectAddress } from '../../../features/slices/addressSlice';

const Address = () => {
    const { userData } = useSelector(state => state.auth)

    const { addressData } = useSelector(state => state.address)
    const [modal, setModal] = useState(false)

    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getAddress(userData?.data?._id))
    }, [])
    useEffect(() => {
        console.log(modal)
    }, [modal])





    return (
        <div className='max-w-6xl  mx-auto sm:px-10  lg:px-20 xl:px-32'>
            {
                addressData?.length > 0 ?
                    <>
                        <div className='col-span-2 flex justify-between items-center py-4'>
                            <p className='font-medium text-xl'>Saved Address</p> <button onClick={() => { setModal(!modal) }} className='flex justify-start items-center px-4 py-2 rounded bg-blue-600 text-white active:scale-95 transition-all' type='button'><IoMdAdd /> Add New Address</button>
                        </div>
                        <div className='grid grid-cols-2 gap-5'>

                            {
                                addressData?.map((_, idx) => {
                                    return <div onClick={() => {
                                        dispatch(selectAddress(_))
                                    }} class="relative flex items-center justify-center rounded-xl bg-gray-50 font-medium text-gray-700">
                                        <input class="peer hidden" type="radio" name="radio" id={`radio1${idx}`} checked />
                                        <label class="peer-checked:border-blue-400 peer-checked:ring-4 absolute top-0 h-full w-full cursor-pointer rounded-xl border" for={`radio1${idx}`}> </label>
                                        <div class="peer-checked:border-transparent peer-checked:bg-blue-400 peer-checked:ring-2 absolute  bottom-4 right-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-400 ring-offset-2"></div>
                                        <div class="p-4 border min-h-52 rounded-lg shadow-sm">
                                            <div class="flex justify-between items-center">
                                                <h3 class="font-semibold text-lg">Address</h3>
                                                <a href="#" class="text-blue-500">Choose another address</a>
                                            </div>
                                            <p class="mt-2">
                                                <span class="font-bold">AINSLEY AIKEN</span><br />
                                                7XMP+22J, Chandrabani, Sewla Khurd, Dehradun, Uttarakhand 248171, India
                                            </p>
                                            <a href="#" class="text-blue-500 mt-2 inline-block">Edit address</a>
                                        </div>
                                    </div>


                                })
                            }
                        </div>
                    </> : <BillingAddress />


            }
            {
                modal && createPortal(<Modal setModal={setModal} modal={modal} />, document.body)
            }

        </div>
    )
}

export default Address