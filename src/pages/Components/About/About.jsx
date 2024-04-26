import React from "react";
import cat from "../../../images/cutedog.jpg";
import cat1 from "../../../images/cat11.jpg";
import cat2 from "../../../images/cutecat.jpg";
import ceo1 from "../../../images/ceo1.jpg"
import ceo2 from "../../../images/ceo2.jpg"
import ceo3 from "../../../images/ceo3.jpg"
const About= () => {
  return (
    <>
      <div className="w-full container mx-auto py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:gap-16 p-5">
          <div className="space-y-4 lg:space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">
              About PETHEEDS
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Welcome to PETHEEDS, where passion for pets meets a commitment to
              excellence in veterinary healthcare. Established in 2020, PETHEEDS
              was founded with a clear purpose: to redefine the standard of pet
              wellness through innovative nutraceutical products and unwavering
              dedication to our furry companions..
            </p>
          </div>
          <div className="grid container mx-auto  w-full grid-cols-1 items-center justify-center md:grid-cols-3 md:gap-4 lg:gap-8">
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                src={cat}
                width="400"
                height="400"
                alt="Image"
                className="aspect-video overflow-hidden rounded-lg object-cover object-center"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                src={cat1}
                width="400"
                height="400"
                alt="Image"
                className="aspect-video overflow-hidden rounded-lg object-cover object-center"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                src={cat2}
                width="400"
                height="400"
                alt="Image"
                className="aspect-video overflow-hidden rounded-lg object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="container py-12 space-y-12 md:py-16 lg:space-y-16">
          <div className="mx-auto max-w-3xl space-y-4 md:space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl p-5">
              Our Story
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400 p-5">
              The journey of PETHEEDS began with a shared love for animals and a
              deep-rooted desire to make a difference in their lives. As pet
              owners ourselves, we understand the joy, companionship, and
              unconditional love that pets bring into our homes. Yet, we also
              recognize the challenges and concerns that come with ensuring
              their health and well-being. Driven by a passion for animal
              welfare and a commitment to excellence, we embarked on a mission
              to create a company that would revolutionize the way pets are
              cared for. Drawing upon our collective expertise in veterinary
              medicine, nutrition, and product development, we set out to
              formulate a line of nutraceutical products that would offer a
              natural, holistic approach to pet wellness.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4 md:space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl p-5">
              Our Philosophy
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400 p-5">
              At PETHEEDS, we believe that every pet deserves to live a healthy,
              vibrant life. That&#39;s why we are dedicated to providing
              premium-quality nutraceutical solutions that address the unique
              health needs of pets, from puppies and kittens to senior
              companions. Our products are carefully crafted from the finest
              natural ingredients, backed by scientific research, and formulated
              to deliver optimal results.
            </p>
          </div>

          <div className=" mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-8 p-5">Our Team</h2>
            <p className="text-lg text-gray-700 mb-12 p-5">
              Behind every great company is a team of dedicated individuals who
              share a common vision and commitment to excellence. At PETHEEDS,
              our team is comprised of passionate professionals with diverse
              backgrounds in veterinary medicine, nutrition, research, and
              customer service. Together, we work tirelessly to ensure that our
              products meet the highest standards of quality, safety, and
              efficacy, while providing unparalleled support to our valued
              customers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
                <img
                  src={ceo1}
                  alt="John Doe"
                  className="w-32 h-32 rounded-full object-cover object-center mb-4"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold">John Doe</h3>
                  <p className="text-gray-600">CEO &amp; Founder</p>
                </div>
              </div>
              <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
                <img
                  src={ceo2}
                  alt="Alice Smith"
                  className="w-32 h-32 rounded-full object-cover object-center mb-4"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold">Alice Smith</h3>
                  <p className="text-gray-600">Head of Marketing</p>
                </div>
              </div>
              <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
                <img
                  src={ceo3}
                  alt="Mark Johnson"
                  className="w-32 h-32 rounded-full object-cover object-center mb-4"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold">Mark Johnson</h3>
                  <p className="text-gray-600">Customer Support</p>
                </div>
              </div>
              {/* Add more team members as needed */}
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-4 md:space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl p-5">
              Our Promise
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400 p-5">
              When you choose PETHEEDS, you can trust that you&#39;re choosing
              more than just a product – you&#39;re choosing a partner in your
              pet&#39;s healthcare journey. We are committed to transparency,
              integrity, and the well-being of every pet we serve. Whether
              you&#39;re seeking relief for a specific health concern or simply
              looking to enhance your pet&#39;s overall vitality, we are here to
              help you every step of the way.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4 md:space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl p-5">
              Join Us
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400 p-5">
              We invite you to join us on our mission to promote the health and
              happiness of pets everywhere. Explore our website to learn more
              about our products, mission, and commitment to excellence.
              Together, let&#39;s make a difference in the lives of our beloved
              companions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
