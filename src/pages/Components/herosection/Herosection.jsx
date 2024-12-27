import React from "react";
import { BiSupport } from "react-icons/bi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { PiMedalBold } from "react-icons/pi";
import { FaRecycle } from "react-icons/fa";
import { IoMdStopwatch } from "react-icons/io";


const Herosection = () => {
  return (
    <>
      <section class="w-full py-12 container  mx-auto">
        <div class="container grid items-center gap-6 px-4">
          <div class="space-y-2">
            <div class="text-center text-3xl font-medium">
              Why Our Customers Love Us?
            </div>
            {/* <p class="text-center text-base text-gray-500 ">
              The top 5 reasons to trust PETHEEDS for your pet's well-being.
            </p> */}
          </div>
          <div class="columns-1 md:columns-2 lg:columns-3 space-y-4 ">
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm w-full break-inside-avoid"
              data-v0-t="card"
            >
              <div class="flex flex-col space-y-1.5 p-6 pb-4">
                <PiMedalBold size={30} className="text-blue-600" />
                <h3 class="text-lg md:text-xl font-semibold  leading-none tracking-tight ">
                  Superior Quality Products
                </h3>
              </div>
              <div class="p-6 pt-0">
                <p>
                  We use only the finest ingredients, backed by rigorous scientific research
                  and testing, to create supplements that are safe, effective, and beneficial for your pets.
                </p>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm w-full break-inside-avoid"
              data-v0-t="card"
            >
              <div class="flex flex-col space-y-1.5 p-6 pb-4">
                <MdOutlineHealthAndSafety size={30} className="text-green-600" />
                <h3 class="text-lg md:text-xl font-semibold  leading-none tracking-tight">
                  Visible Health Benefits
                </h3>
              </div>
              <div class="p-6 pt-0">
                <p>
                  Our products are formulated to address specific health needs, from joint
                  support to improved digestion, ensuring your pets feel their best every day.
                </p>
              </div>
            </div>

            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm w-full break-inside-avoid"
              data-v0-t="card"
            >
              <div class="flex flex-col space-y-1.5 p-6 pb-4">
                <AiOutlineSafety size={30} className="text-yellow-500" />
                <h3 class="text-lg md:text-xl font-semibold leading-none tracking-tight ">
                  Trusted by Pet Owners
                </h3>
              </div>
              <div class="p-6 pt-0">
                <p>
                  Thousands of pet owners trust PETHEEDS for their pets&#39; health. Our loyal
                  customer base and positive reviews speak to the satisfaction and peace of mind our products provide.
                </p>
              </div>
            </div>

            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm w-full break-inside-avoid"
              data-v0-t="card"
            >
              <div class="flex flex-col space-y-1.5 p-6 pb-4">
                <BiSupport size={30} className="text-blue-700" />
                <h3 class="text-lg md:text-xl font-semibold  leading-none tracking-tight ">
                  Expert Support
                </h3>
              </div>
              <div class="p-6 pt-0">
                <p>
                  Our team of pet nutrition experts and veterinarians are always available to provide
                  guidance and answer any questions you may have. We believe in supporting you every step of the way.
                </p>
              </div>
            </div>

            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm w-full break-inside-avoid"
              data-v0-t="card"
            >
              <div class="flex flex-col space-y-1.5 p-6 pb-4">
                <FaRecycle size={30} className="text-green-500" />
                <h3 class="text-lg md:text-xl  font-semibold leading-none tracking-tight">
                  Commitment to Sustainability
                </h3>
              </div>
              <div class="p-6 pt-0">
                <p>
                  We care about the planet as much as we care about pets. Our eco-
                  friendly practices and sustainable sourcing ensure we are doing our part for the environment.
                </p>
              </div>
            </div>
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm w-full break-inside-avoid"
              data-v0-t="card"
            >
              <div class="flex flex-col space-y-1.5 p-6 pb-4">
                <IoMdStopwatch size={30} className="text-rose-500" />
                <h3 class="text-lg md:text-xl  font-semibold leading-none tracking-tight">
                  Fast and Reliable Service
                </h3>
              </div>
              <div class="p-6 pt-0">
                <p>
                  From easy online ordering to prompt delivery, we strive to make your
                  experience as seamless as possible. Our customer service team is always ready to assist you with any
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};


export default Herosection;
