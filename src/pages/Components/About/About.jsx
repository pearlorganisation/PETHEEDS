import React from "react";
import cat from "../../../images/cutedog.jpg";
import cat1 from "../../../images/cat11.jpg";
import cat2 from "../../../images/cutecat.jpg";

const About = () => {
  return (
    <>
      <div className="w-full container mx-auto py-12  lg:pt-16">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6 lg:gap-16 ">
          <div className="space-y-4 lg:space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
              About PETHEEDS
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Welcome to PETHEEDS, where passion for pets meets a commitment to
              excellence in veterinary healthcare. Established in 2021, PETHEEDS
              was founded with a clear purpose: to redefine the standard of pet
              wellness through innovative nutraceutical products and unwavering
              dedication to our furry companions..
            </p>
          </div>
          <div className="grid container mx-auto  w-full grid-cols-1 items-center justify-center md:grid-cols-3 md:gap-4 lg:gap-8">
            <div className="mx-auto flex w-full items-center justify-center py-3 px-8">
              <img
                src={cat}
                width="400"
                height="400"
                alt="Image"
                className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                onError={(event) => {
                  event.target.src =
                    "/placeholder.jpg";
                  event.onerror = null;
                }}
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center py-3 px-8">
              <img
                src={cat1}
                width="400"
                height="400"
                alt="Image"
                className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                onError={(event) => {
                  event.target.src =
                    "/placeholder.jpg";
                  event.onerror = null;
                }}
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center py-3  px-8">
              <img
                src={cat2}
                width="400"
                height="400"
                alt="Image"
                className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                onError={(event) => {
                  event.target.src =
                    "/placeholder.jpg";
                  event.onerror = null;
                }}
              />
            </div>
          </div>
        </div>
        <div className="container py-12 md:py-12">
          <div className="mx-auto max-w-3xl space-y- md:space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl p-5">
              Our Story
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed xl:text-base/relaxed  p-5">
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
          <div className="mx-auto max-w-3xl space-y- md:space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl p-5">
              Our Philosophy
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed xl:text-base/relaxed  p-5">
              At PETHEEDS, we believe that every pet deserves to live a healthy,
              vibrant life. That&#39;s why we are dedicated to providing
              premium-quality nutraceutical solutions that address the unique
              health needs of pets, from puppies and kittens to senior
              companions. Our products are carefully crafted from the finest
              natural ingredients, backed by scientific research, and formulated
              to deliver optimal results.
            </p>
          </div>

          <div className=" mx-auto max-w-3xl">
            <h2 className="text-3xl  md:text-4xl font-bold mb-8 p-5">Our Team</h2>
            <p className="text-gray-500 md:text-xl/relaxed xl:text-base/relaxed  p-5">
              Behind every great company is a team of dedicated individuals who
              share a common vision and commitment to excellence. At PETHEEDS,
              our team is comprised of passionate professionals with diverse
              backgrounds in veterinary medicine, nutrition, research, and
              customer service. Together, we work tirelessly to ensure that our
              products meet the highest standards of quality, safety, and
              efficacy, while providing unparalleled support to our valued
              customers.
            </p>



          </div>

          <div className="mx-auto max-w-3xl space-y- md:space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl p-5">
              Our Promise
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed xl:text-base/relaxed  p-5">
              When you choose PETHEEDS, you can trust that you&#39;re choosing
              more than just a product – you&#39;re choosing a partner in your
              pet&#39;s healthcare journey. We are committed to transparency,
              integrity, and the well-being of every pet we serve. Whether
              you&#39;re seeking relief for a specific health concern or simply
              looking to enhance your pet&#39;s overall vitality, we are here to
              help you every step of the way.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y- md:space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl p-5">
              Join Us
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed xl:text-base/relaxed  p-5">
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
