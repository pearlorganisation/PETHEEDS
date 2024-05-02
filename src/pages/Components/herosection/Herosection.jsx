import React from "react";
import { PiDog } from "react-icons/pi";
import { FaDog } from "react-icons/fa6";
import { FaBone } from "react-icons/fa";
import { BiSolidInjection } from "react-icons/bi";



const Herosection = () => {
  return (
    <>
      <section className="px-4 md:px-0 py-5">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4  mx-auto py-5 rounded">
          <div className="flex flex-col justify-center">
            <div className="md:p-14">
              <h1 className="font-poppins text-2xl md:text-4xl font-medium leading-10 md:leading-17 text-black-900">
                Optimal Health for Furry Friends: Comprehensive Veterinary
                Services
              </h1>
            </div>
            
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ServiceCard
              icon={<PiDog size={25} className="text-[#1A4E8D]" />}
              title="Physical Exam"
              description="Exercitation culpa velit non desedder"
            />
            <ServiceCard
              icon={<FaDog size={25} className="text-[#1A4E8D]" />}
              title="Skin Care"
              description="Consectetur incididunt esse in eiusmod"
            />
            <ServiceCard
              icon={<BiSolidInjection size={25} className="text-[#1A4E8D]" />}
              title="Pet Vaccination"
              description="Exercitation culpa velit non desedder"
            />
            <ServiceCard
              icon={<FaBone size={25} className="text-[#1A4E8D]" />}
              title="Pet Nutrition"
              description="Exercitation culpa velit non desedder"
            />
          </div>
        </div>
      </section>

     
    </>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="border rounded border-blue-300">
      <div className="px-2 py-2">{icon}</div>
      <div className="px-2">
        <h1 className="text-[#1A4E8D] text-lg font-semibold py-0">{title}</h1>
      </div>
      <div>
        <h1 className="px-2 font-medium">{description}</h1>
      </div>
      <div>
        <p className="underline px-2 text-blue-500">View</p>
      </div>
    </div>
  );
};

export default Herosection;
