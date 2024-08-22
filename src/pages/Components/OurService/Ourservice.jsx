import React from "react";
import { GiJumpingDog } from "react-icons/gi";
import { FaCat } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
const OurService = () => {
  return (

    <section className=" lg:pb-[20px] ">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className=" text-3xl font-bold leading-[1.2] text-dark  sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              {/* <p className="text-base text-body-color ">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p> */}
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Medical "
            details="Our medical-grade supplements are formulated to address specific health concerns in pets.
Whether it&#39;s joint support, skin and coat health, or immune system boosting, our products are
developed with the highest standards of veterinary science. Trust PETHEEDS to provide your
pets with the essential nutrients they need for optimal health and longevity."
            icon={<GiJumpingDog size={50} className="text-[#a38660]" />}
          />
          <ServiceCard
            title=" Nutrition"
            details="We understand that proper nutrition is the foundation of a healthy pet. Our range of nutritional
supplements is designed to complement your pet&#39;s diet, providing essential vitamins, minerals,

and other nutrients that may be missing from their regular food. From daily multivitamins to
specialized supplements, we ensure your pets receive the balanced nutrition they deserve."
            icon={<FaCat size={50} className="text-[#1A4E8D]" />}
          />
          <ServiceCard
            title="Care"
            details="Caring for your pet goes beyond just their physical health. Our care products are crafted to
enhance your pet&#39;s overall well-being. This includes stress relief supplements, probiotics for
digestive health, and products aimed at improving cognitive function. At PETHEEDS, we care
about every aspect of your pet&#39;s life, ensuring they are happy and healthy in every way."
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
