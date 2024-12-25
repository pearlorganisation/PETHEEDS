import React, { useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../images/petheedslogo.jpg";
const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <footer class="bg-gray-50">
        <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
          <div class="max-w-sm">
            <div class="mb-6 flex h-12 items-center space-x-2">

              <Link to="/">
                <img
                  src={logo}
                  className="w-[60px]"
                  onError={(event) => {
                    event.target.src =
                      "/placeholder.jpg";
                    event.onerror = null;
                  }}
                />
              </Link>
            </div>
            <div class="text-gray-500">
              Petheeds LLP is an animal healthcare company that specializes in
              the development, manufacturing, and marketing of quality finished
              veterinary formulations.
            </div>
          </div>
          <div class="">
            <div class="mt-4 mb-2 font-medium xl:mb-4">Address</div>
            <div class="text-gray-500">
              Petheeds LLP at B-223, Eldeco Sidcul Industrial Park, Sitarganj, Uttarakhand, 262405
              <br />
            </div>
          </div>

          <div class="">
            <div class="mt-4 mb-2 font-medium xl:mb-4">Policies</div>

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
                    to="/refund_policy"
                  >
                    Refund Policy
                  </Link>
                </li>
                {/* 
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
                    Contact Us
                  </Link>
                </li> */}
              </ul>
            </nav>
          </div>
          <div class="">
            <div class="mt-4 mb-2 font-medium xl:mb-4">Links</div>

            <nav aria-label="Footer Navigation" class="text-gray-500">
              <ul class="space-y-3">




                <li>
                  <Link
                    class="hover:text-blue-600 hover:underline"
                    to="/productsList"
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
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* <div class="">
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
          </div> */}
        </div>

        <div class="bg-gray-100">
          <div class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
            <div class="">

              © {new Date().getFullYear()} Petheeds LLP | All Rights Reserved

            </div>

            <div class="">
              <Link class="" to="/privacy">
                Privacy Policy
              </Link>
              <span> | </span>

              <Link class="" to="/terms">
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
