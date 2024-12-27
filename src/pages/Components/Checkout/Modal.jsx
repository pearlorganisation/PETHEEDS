import React from 'react'
import BillingAddress from './BillingAddress'
import { MdClose } from "react-icons/md";

const Modal = ({ setModal, modal, data }) => {
    return (
        <div className='fixed w-full h-full bg-black/30 top-0 z-50 grid md:grid-cols-[auto_30rem]'>
            <button onClick={() => {
                setModal(!modal)
            }} className='absolute top-4 right-0 md:right-auto md:left-4 bg-white px-3 py-2 rounded grid place-items-center' type='button'><MdClose size={25} /></button>
            <div className='hidden md:block'></div> <div className={`bg-white`}>
                <BillingAddress data={data} />
            </div>
        </div>
    )
}

export default Modal