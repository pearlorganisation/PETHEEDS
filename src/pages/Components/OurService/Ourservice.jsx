import React from "react";

const OurService = () => {
  return (
    <div className=" py-16"> {/* Increased py-16 for more vertical padding */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Our Services
        </h1>
        <div className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-center">
          <p>
            Petheads LLP is an animal healthcare company that specializes in the
            development, manufacturing, and marketing of quality finished
            veterinary formulations. Petheads LLP has the vision to emerge as a
            leading, knowledge-driven global veterinary company serving
            livestock farmers to veterinarians and pet owners globally. The
            gentleness of animals has always made this world a better place to
            live in. As much as they contribute to our happiness, it is our duty
            to provide the best care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurService;
