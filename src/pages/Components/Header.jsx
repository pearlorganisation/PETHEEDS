import React from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Our Products",
    href: "/productlist",
  },
  {
    name: "Book Appointment",
    href: "/Booknow",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Orders",
    href: "#",
  },
  {
    name: "Contact us",
    href: "#",
  },
];
const Header = () => {
  const navigate= useNavigate();
  const handelnavigatelogin= () =>{
     navigate("/login")
  }
  const handelnavigatesignup= () =>{
     navigate("/signup")
  }
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    // console.log()
    setIsMenuOpen(!isMenuOpen);
  };

  console.log("Hello");

  return (
    <>
      <div className="relative w-full bg-white py-5 border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <img
              src="https://petheeds.in/wp-content/uploads/2022/09/Petheeds-Aspect-Logo-1.png"
              className="w-[120px]"
            />
            <span className="font-bold"></span>
          </div>
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden space-x-2 lg:block">
            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={handelnavigatelogin}
            >
              Log In
            </button>

            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handelnavigatesignup}
            >
              Sign Up
            </button>
          </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span className="font-bold">Your Logo</span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                          <span>
                            <ChevronRight className="ml-3 h-4 w-4" />
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>

                  <div className="mt-2 space-y-2">
                    <button
                      type="button"
                      className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      onClick={handelnavigatelogin}
                   >
                      Sign In
                    </button>
                    <button
                      type="button"
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      onClick={handelnavigatesignup}
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
