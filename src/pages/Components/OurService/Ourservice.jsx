import React from "react";
import { GiJumpingDog } from "react-icons/gi";
import { FaCat } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
const OurService = () => {
  return (

    <section className="pb-12 pt-20  lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark  sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-body-color ">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Medical "
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={<GiJumpingDog size={50} className="text-[#a38660]" />}
          />
          <ServiceCard
            title=" Nutrition"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={<FaCat size={50} className="text-[#1A4E8D]" />}
          />
          <ServiceCard
            title="Care"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={<MdOutlinePets size={50} className="text-[#FFAF00]" />}
          />
        </div>
      </div>
    </section>

  );
};

export default OurService;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg  md:px-7 xl:px-10">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark ">
            {title}
          </h4>
          <p className="text-body-color ">{details}</p>
        </div>
      </div>
    </>
  );
};
