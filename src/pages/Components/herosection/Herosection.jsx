import React from "react";
import { PiDog } from "react-icons/pi";
import { FaDog } from "react-icons/fa6";
import { FaBone } from "react-icons/fa";
import { BiSolidInjection } from "react-icons/bi";

import callback from "../../../images/callback.png";
const Herosection = () => {
  return (
    <>
      <section>
        <div className="container grid grid-cols-2 border mx-auto py-5">
          <div className="  ">
            <div className="  md:p-14 ">
              <h1 className="font-poppins text-4xl font-medium leading-17 text-black-900">
                Optimal Health for Furry Friends: Comprehensive Veterinary
                Services
              </h1>
            </div>
            <div className="md:px-10">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                View More
              </button>
            </div>
          </div>

          <div className=" grid grid-cols-2 grid-rows-2 gap-5 ">
            <div className=" border rounded border-blue-300 ">
              <div className="px-2 py-2 ">
                <PiDog size={25} className="text-[#1A4E8D]" />
              </div>
              <div className="px-2 ">
                <h1 className="text-[#1A4E8D]  text-lg font-semibold py-0 ">
                  Physical Exam
                </h1>
              </div>
              <div>
                <h1 className="px-2 font-medium">
                  Exercitation culpa velit non <br /> desedder
                </h1>
              </div>
              <div>
                <p className="underline px-2 text-blue-500">View</p>
              </div>
            </div>

            <div className="">
              <div className=" border rounded border-blue-300 ">
                <div className="px-2 py-2  ">
                  <FaDog size={25} className="text-[#1A4E8D]" />
                </div>
                <div className="px-2 ">
                  <h1 className="text-[#1A4E8D]  text-lg font-semibold py-0 ">
                    Skin Care
                  </h1>
                </div>
                <div>
                  <h1 className="px-2 font-medium">
                    Consectetur incididunt esse
                    <br /> in eiusmod
                  </h1>
                </div>
                <div>
                  <p className="underline px-2 text-blue-500">View</p>
                </div>
              </div>
            </div>
            <div>
              <div className=" border rounded border-blue-300 ">
                <div className="px-2 py-2">
                  <BiSolidInjection size={25} className="text-[#1A4E8D]" />
                </div>
                <div className="px-2 ">
                  <h1 className="text-[#1A4E8D]  text-lg font-semibold py-0 ">
                    Pet Vaccination
                  </h1>
                </div>
                <div>
                  <h1 className="px-2 font-medium">
                    Exercitation culpa velit non <br /> desedder
                  </h1>
                </div>
                <div>
                  <p className="underline px-2 text-blue-500">View</p>
                </div>
              </div>
            </div>
            <div>
              <div className=" border rounded border-blue-300 ">
                <div className="px-2 py-2 ">
                  <FaBone size={25} className="text-[#1A4E8D]" />
                </div>
                <div className="px-2 ">
                  <h1 className="text-[#1A4E8D]  text-lg font-semibold py-0 ">
                    Pet Nutrition
                  </h1>
                </div>
                <div>
                  <h1 className="px-2 font-medium">
                    Exercitation culpa velit non <br /> desedder
                  </h1>
                </div>
                <div>
                  <p className="underline px-2 text-blue-500">View</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-5">
          <img src={callback} />
        </div>
      </section>
    </>
  );
};

export default Herosection;
