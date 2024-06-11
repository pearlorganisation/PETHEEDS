import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { TbCheckbox } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllUserOrders } from "../../../features/actions/order";
import { format } from 'date-fns';

export const OrderList = () => {

        const dispatch = useDispatch();
        const navigate = useNavigate();
        const {userData} = useSelector((state)=>state.auth)
        const {ordersData} = useSelector((state)=>state.order)
      
console.log(ordersData)
        useEffect(()=>{
dispatch(getAllUserOrders(userData?.data?._id))
        },[])

        useEffect(()=>{
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              },[])

  return (
    <div className="mx-auto my-8 max-w-6xl px-2 md:my-20 md:px-10">
      <h2 className="text-3xl font-bold">Order History</h2>
      <div className="mt-3 text-sm">
        Check the status of recent and old orders 
      </div>
      <div className="mt-5 border rounded-sm bg-gray-100">
        {/* //item 1 */}
        { Array.isArray(ordersData) && ordersData?.length>0 && 
                ordersData?.slice()?.reverse()?.map((item,idx)=>
                        (
                        <div key={idx} onClick={()=>{navigate("/order", {state:item})}}  className="my-5 mx-5 flex justify-between items-center overflow-hidden rounded-sm border border-gray-300 bg-white  hover:bg-opacity-5 hover:bg-black ">
        <div className="">
    <div className="flex gap-3  p-3">
      <div><TbTruckDelivery className="text-xl"/></div>
      <div className="flex-grow"><div className="text-yellow-600 font-bold text-[13px] md:text-[14px]">On the Way</div>
      <div className="text-[13px] md:text-[14px]">On {format(new Date(item?.createdAt), 'EEE, d MMM yyyy')}</div></div>
      <div className="md:hidden "><FaArrowRight className=""/></div>
    </div>
 
    <div className="p-3 flex flex-wrap gap-7 text-[12px] md:text-[14px]">
        
    { Array.isArray(item?.product) && item?.product?.map((product,idy)=>(
           <div key={idy} className="shadow-md rounded-lg flex gap-5 items-center p-2 w-72">
           <img src={Array.isArray(product?.productId) && product?.productId[0]?.productImg} className="rounded-lg w-24 h-20"/>
           <div>
             <div>
     {Array.isArray(product?.productId) && product?.productId[0]?.productName}
     </div>
             <div>
     Size: 350g
     </div>
           </div>
           </div>
    ))  
 
      }
     
   
     
   
    </div>
 
    </div>
    <div className="sm:hidden md:block mx-4"><FaArrowRight/></div>
            </div>)
                
                )
        
}
            {/* item 2 */}
            {/* <div className="my-5 mx-5 flex justify-between items-center overflow-hidden rounded-sm border border-gray-300 bg-white">
        <div className="">
    <div className="flex  gap-3  p-3">
      <div><TbCheckbox className="text-green-700 text-xl"/></div>
      <div className=""><div className="text-emerald-600 font-bold text-[13px] md:text-[14px]">Delivered</div>
      <div className="text-[13px] md:text-[14px]">On Tue, 4 Oct 2022</div></div>
    </div>
 
    <div className="p-3 flex flex-wrap gap-7 text-[12px] md:text-[14px]">
      <div className="shadow-md rounded-lg flex gap-5 items-center p-2 w-72">
      <img src="https://m.media-amazon.com/images/I/41vlTxXQD7L._SX300_SY300_QL70_FMwebp_.jpg" className="w-24 h-20"/>
      <div>
        <div className="font-medium">Pedigree</div>
        <div>
Biscuits</div>
        <div>
Size: 350g
</div>
      </div>
      </div>
      <div className="shadow-md rounded-lg flex gap-5 items-center p-2 w-72">
      <img src="https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Frame12314_89a8f769-48d6-4acd-8f9c-e3e10f1c8577.png?v=1696602504" className="w-24 h-20"/>
      <div>
        <div className="font-medium">Pedigree</div>
        <div>
Biscuits Biscuits...</div>
        <div>
Size: 350g
</div>
      </div>
      </div>
      <div className="shadow-md rounded-lg flex gap-5 items-center p-2 w-72">
      <img src="https://cdn.shopify.com/s/files/1/0565/8021/0861/files/DroolsOptimumPerformanceAdultDogFood_20kg.png?v=1699447569" className="w-24 h-20"/>
      <div>
        <div className="font-medium">Pedigree</div>
        <div>
Biscuits Biscuits...</div>
        <div>
Size: 350g
</div>
      </div>
      </div>
      <div className="shadow-md rounded-lg flex gap-5 items-center p-2 w-72">
      <img src="https://supertails.com/cdn/shop/files/DFODF0010PG_1.jpg?v=1713542639" className="w-24 h-20"/>
      <div>
        <div className="font-medium">Pedigree</div>
        <div>
Biscuits Biscuits...</div>
        <div>
Size: 350g
</div>
      </div>
      </div>
   
    </div>
 
    </div>
    <div className="font-bold mx-4"><FaArrowRight/></div>
            </div> */}
            </div>
          </div>
   
  );
};
