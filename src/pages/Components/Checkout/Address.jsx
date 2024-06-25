import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";


import { useDispatch, useSelector } from 'react-redux';
import { createAddress, deleteAddress, getAddress } from '../../../features/actions/addressAction';
import BillingAddress from './BillingAddress';
import { IoMdAdd } from "react-icons/io";
import { createPortal } from 'react-dom';
import Modal from './Modal';
import { selectAddress } from '../../../features/slices/addressSlice';

const Address = () => {
    const { userData } = useSelector(state => state.auth)

    const { addressData } = useSelector(state => state.address)
    const [modal, setModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [updateData, setUpdateData] = useState(null)

    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getAddress(userData?.data?._id))
    }, [])

    useEffect(() => {
        if(addressData?.status){
            dispatch(getAddress(userData?.data?._id))
        }
    }, [addressData])


    useEffect(() => {
        console.log(modal)
    }, [modal])





    return (
        <div className='max-w-6xl  mx-auto sm:px-10  lg:px-20 xl:px-32 p-5 lg:p-0'>
            {
                addressData?.length > 0 ?
                    <>
                        <div className='col-span-2 flex justify-between items-center pb-4'>
                            <p className='font-medium text-xl'>Saved Addresses</p> <button onClick={() => { setModal(!modal) }} className='flex justify-start items-center px-2 py-1 lg:px-4 lg:py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white active:scale-95 transition-all' type='button'><IoMdAdd /> Add New Address</button>
                        </div>
                        <div className='grid md:grid-cols-2 gap-5'>

                            {
                                addressData?.map((_, idx) => {
                                    return <div className='grid'>
                                    <div onClick={() => {
                                        dispatch(selectAddress(_))
                                    }} class="relative flex items-center justify-center rounded-xl bg-gray-50 font-medium text-gray-700">
                                        <input class="peer hidden" type="radio" name="radio" id={`radio1${idx}`} />
                                        <label class="peer-checked:border-blue-400 peer-checked:ring-4 absolute top-0 h-full w-full cursor-pointer rounded-xl border" for={`radio1${idx}`}> </label>
                                        <div class="peer-checked:border-transparent peer-checked:bg-blue-700 peer-checked:ring-2 absolute  bottom-4 right-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-700 ring-offset-2"></div>
                                        <div class="px-4 border w-full min-h-44 rounded-lg shadow-sm">
                                            <div class="flex justify-between items-center">
                                                
                                               
                                            </div>
                                            <p class="mt-2">
                                                <span class="font-bold">{userData?.data?.fullName}</span><br />
                                               {_?.address}<br/>
                                               {_?.locality}<br/>
                                               {_?.city} , {_?.state}<br/>
                                               {_?.pincode}
                                            </p>
                                        </div>
                                            
                                    </div>

                                    <div className='flex justify-between'>
                                    <button type='button' onClick={()=>{
                                        setEditModal(true)
                                        setUpdateData(_)
                                    }} class="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1  mt-2 "><MdEditSquare/>Edit address</button>
                                    <button type='button' onClick={()=>{
                                      dispatch(deleteAddress(_?._id))
                                    }} class="text-red-600 hover:text-red-700 font-semibold flex items-center gap-1 mt-2 "><MdDelete/>Delete address</button>
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
             {
                editModal && createPortal(<Modal data={updateData} setModal={setEditModal} modal={editModal} />, document.body)
            }

        </div>
    )
}

export default Address