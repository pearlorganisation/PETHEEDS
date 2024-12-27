import React from "react";
import dog from "../../images/singledog.png";
import cat from "../../images/cat.png";
import { useNavigate } from "react-router-dom";
const Booking = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/booknow");
  };
  return (
    <>
      <div className="container mx-auto grid md:grid-cols-3 place-items-center py-5 my-5 rounded">
        {/* Dog Image */}
        <div className="flex justify-center md:justify-start ">
          <img src={dog} alt="Dog" className=" w-[250px]" onError={(event) => {
            event.target.src =
              "/placeholder.jpg";
            event.onerror = null;
          }} />
        </div>
        {/* Spacer */}
        <div className="w-full flex flex-col items-center">
          <div>
            <h1 className="text-xl md:text-3xl text-center font-bold ">
              Book Your Pet's Appointment Now!
            </h1>
          </div>
          <div className="py-5">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium 
         rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
              onClick={handleNavigate}
            >
              Make an appointment
            </button>
          </div>
        </div>
        {/* Cat Image */}
        <div className="flex justify-center md:justify-end">
          <img src={cat} alt="Cat" className=" w-[250px]" onError={(event) => {
            event.target.src =
              "/placeholder.jpg";
            event.onerror = null;
          }} />
        </div>
      </div>
    </>
  );
};

export default Booking;
