import React from "react";

const Booknow = () => {
  return (
    <>
      <div class="h-full">
        <div class="mx-auto">
          <div class="flex justify-center px-6 py-12">
            <div class="flex w-full lg:w-11/12 xl:w-3/4">
              {/* <div class="hidden h-auto w-full rounded-l-lg bg-gray-400 bg-cover lg:block lg:w-5/12 dark:bg-gray-800"
       style="background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"
       
       ></div> */}
              <div
                className="hidden h-auto w-full rounded-l-lg bg-gray-400 bg-cover lg:block lg:w-5/12 dark:bg-gray-800"
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')",
                }}
              ></div>

              <div class="w-full rounded-lg bg-white p-5 lg:w-7/12 lg:rounded-l-none dark:bg-gray-700">
                <h3 class="py-4 text-center text-2xl text-gray-800 dark:text-white">
                  Book Your Pet's Appointment
                </h3>
                <form class="mb-4 rounded bg-white px-8 pb-8 pt-6 dark:bg-gray-800">
                  <div class="mb-4">
                    <div class="mb-4 md:mb-0 md:mr-2">
                      <label
                        class="mb-2 block text-sm font-bold text-gray-700 dark:text-white"
                        for="firstName"
                      >
                        {" "}
                        Name{" "}
                      </label>
                      <input
                        class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none dark:text-white"
                        id="firstName"
                        type="text"
                        placeholder=" Name"
                      />
                    </div>
                  </div>

                  <div class="mb-4">
                    <label
                      class="mb-2 block text-sm font-bold text-gray-700 dark:text-white"
                      for="email"
                    >
                      {" "}
                      Email{" "}
                    </label>
                    <input
                      class="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none dark:text-white"
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="mb-4">
                    <label
                      class="mb-2 block text-sm font-bold text-gray-700 dark:text-white"
                      for="email"
                    >
                      {" "}
                      Number{" "}
                    </label>
                    <input
                      class="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none dark:text-white"
                      id="number"
                      type="number"
                      placeholder="Enter Your Number"
                    />
                  </div>

                  <div class="mb-4">
                    <label class="mb-2 block text-sm font-bold text-gray-700 dark:text-white">
                      {" "}
                      Your Message{" "}
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Write your thoughts here..."
                    ></textarea>
                  </div>

                  <div class="mb-6 text-center">
                    <button
                      class="focus:shadow-outline w-full rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900"
                      type="button"
                    >
                      Book now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booknow;
