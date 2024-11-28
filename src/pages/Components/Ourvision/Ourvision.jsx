import React from "react";
import { RxEyeOpen } from "react-icons/rx";
import { GoGoal } from "react-icons/go";
import { FaHandHoldingHeart } from "react-icons/fa";
const Ourvision = () => {
  <style jsx>{`
    @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

    /* Your component-specific styles go here */
  `}</style>;

  return (
    <>
      <section id="Werdegang" class="py-5   ">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-9  ">
          <h1
            id="mycareer"
            className="mb-6 text-center text-[30px] md:text-[44px] font-bold text-[#4b5563] "
          >
            We are PetHeeds nurturing your pet
          </h1>
          <div className="section_title flex justify-center mb-9">
            <span class="line ">
              <span class="box"></span>
            </span>
          </div>

          <ul class="max-w-3xl mx-auto mt-16 space-y-12 ">
            <li class="relative flex items-start">
              <div
                class="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                aria-hidden="true"
              ></div>

              <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow text-[#e54e1b] font-medium">
                {/* <img src="https://petheeds.in/wp-content/uploads/2019/06/mission-1.png" /> */}
                <RxEyeOpen />
              </div>
              <div class="ml-6">
                <h1 className="text-2xl md;text-4xl font-medium">Our vision</h1>
                <p class="mt-4 text-sm  md:text-lg font-medium text-gray-600">
                  Petheeds LLP has the vision to emerge as a leading,
                  knowledge-driven global veterinary company serving livestock
                  farmers to veterinarians and pet owners globally. The
                  gentleness of animals has always made this world a better
                  place to live in. As much as they contribute to our happiness,
                  it is our duty to provide the best care.
                </p>
              </div>
            </li>

            <li class="relative flex items-start">
              <div
                class="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                aria-hidden="true"
              ></div>

              <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow text-[#e54e1b] font-medium">
                {/* <img src="https://petheeds.in/wp-content/uploads/2019/06/mission1-1.png" /> */}
                <GoGoal />
              </div>
              <div class="ml-6">
                <h1 className="text-2xl md;text-4xl font-medium">
                  Our Mission
                </h1>
                <p class="mt-4 text-sm  md:text-lg font-medium text-gray-600">
                  We, at Petheeds, make sincere efforts to deliver best
                  healthcare solutions veterinary preparations, feed
                  supplements, grooming care, nutritious food and snacks to feed
                  and nurture them with utmost love and care for their overall
                  growth, development and health.
                </p>
              </div>
            </li>

            <li class="relative flex items-start">
              <div
                class="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                aria-hidden="true"
              ></div>

              <div class="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow text-[#e54e1b] font-medium">
                {/* <img src="https://petheeds.in/wp-content/uploads/2019/06/values-1.png" /> */}
                <FaHandHoldingHeart />
              </div>
              <div class="ml-6">
                <h1 className="text-2xl md;text-4xl font-medium">Our Values</h1>
                <p class="mt-4 text-sm  md:text-lg font-medium text-gray-600">
                  Commitment and quality are the pillars of Petheeds. We take
                  all the vital measures to ensure that excellent quality
                  products are being offered at reasonable prices to the medical
                  fraternity globally.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Ourvision;
