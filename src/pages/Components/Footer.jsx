import React, { useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <footer className="w-full">
        <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
          <div className="w-full px-4 md:w-1/2 lg:px-0">
            <h1 className="max-w-sm text-3xl font-bold">
              Subscribe to our Newsletter
            </h1>
            <form
              action=""
              className="mt-4 inline-flex w-full items-center md:w-3/4"
            >
              <input
                className="flex h-10 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
              ></input>
              <button
                type="button"
                className="ml-4 rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </form>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-2/4 lg:grid-cols-3">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="mb-8 lg:mb-0">
                <p className="mb-6 text-lg font-semibold text-gray-700 ">
                  Company
                </p>
                <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
                  <li>About us</li>
                  <li>Company History</li>
                  <li>Our Team</li>
                  <li>Our Vision</li>
                  <li>Press Release</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-4" />
        <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
          <div className="inline-flex items-center">
            <img
              src="https://petheeds.in/wp-content/uploads/2022/09/Petheeds-Aspect-Logo-1.png"
              className="w-[120px]"
            />
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm font-medium text-gray-500">
              © 2024 pearlorg. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}

      <footer class="bg-gray-50">
        <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
          <div class="max-w-sm">
            <div class="mb-6 flex h-12 items-center space-x-2">
              {/* <span class="text-2xl font-bold">
                PETHEEDS<span class="text-blue-600"> LLP</span>.
              </span> */}
              <a href="/">
                <img
                  src="https://petheeds.in/wp-content/uploads/2022/09/Petheeds-Aspect-Logo-1.png"
                  className="w-[120px]"
                />
              </a>
            </div>
            <div class="text-gray-500">
              Petheads LLP is an animal healthcare company that specializes in
              the development, manufacturing, and marketing of quality finished
              veterinary formulations.
            </div>
          </div>
          <div class="">
            <div class="mt-4 mb-2 font-medium xl:mb-4">Address</div>
            <div class="text-gray-500">
              B4, North EX Mall, Sector-9 Rohini,
              <br />
              New Delhi – 110085
              <br />
            </div>
          </div>

          <div class="">
            <div class="mt-4 mb-2 font-medium xl:mb-4">Links</div>

            <nav aria-label="Footer Navigation" class="text-gray-500">
              <ul class="space-y-3">
                <li>
                  <Link
                    class="hover:text-blue-600 hover:underline"
                    to="/privacy"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    class="hover:text-blue-600 hover:underline"
                    to="/productlist"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    class="hover:text-blue-600 hover:underline"
                    to="/Booknow"
                  >
                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link
                    class="hover:text-blue-600 hover:underline"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div class="">
            <div class="mt-4 mb-2 font-medium xl:mb-4">
              Subscribe to our Newsletter
            </div>
            <div class="flex flex-col">
              <div class="mb-4">
                <input
                  type="email"
                  class="focus:outline mb-2 block h-14 w-full rounded-xl bg-gray-200 px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  placeholder="Enter your email"
                />
                <button class="block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-100">
          <div class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
            <div class="">

              <Link to="https://www.pearlorganisation.com/">
                © 2024 Pearl Organisation | All Rights Reserved
              </Link>
            </div>

            <div class="">
              <Link class="" to="/privacy">
                Privacy Policy
              </Link>
              <span> | </span>

              <Link class="" href="/privacy">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
