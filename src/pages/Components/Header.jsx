import React, { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/actions/auth";
import logo from "../../images/petheedslogo.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";

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
    name: "Contact us",
    href: "/contact",
  },
];

const ProfileDropDown = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const {userData} = useSelector(state=>state.auth)
  const profileRef = useRef();

  console.log(userData)
  const navigation = [
    {
      title: "Orders",
      path: "/orderList",
    },
  ];

  useEffect(() => {
    const handleDropDown = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setState(false);
      }
    };
    document.addEventListener("click", handleDropDown);
  }, []);

  return (
    <div className={`relative ${props.class} z-50`}>
      <div className="flex items-center space-x-4">
        <button
          ref={profileRef}
          className="w-10 h-10 outline-none rounded-full lg:focus:ring-2 lg:focus:ring-blue-600"
          onClick={() => setState(!state)}
        >
        <FaUserCircle   className="w-full h-full rounded-full"/>
        </button>
        <div className="flex flex-col">
          <span className="font-medium">{userData?.data?.fullName}</span>
          <span className="text-sm text-gray-500">{userData?.data?.email}</span>
        </div>
      </div>
      <ul
        className={`bg-white top-12 right-0 mt-5 space-y-5 absolute border rounded-md text-sm w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? "" : "hidden"
          }`}
      >
        {navigation.map((item, idx) => (
          <li>
            <Link
              key={idx}
              className="block text-black font-semibold lg:hover:bg-gray-50 p-2.5"
              to={item.path}
            >
              {item.title}
            </Link>
          </li>
        ))}
        <li>
          <button
            onClick={() => {
              dispatch(logout());
            }}
            className="block text-black w-full font-semibold text-left lg:hover:bg-gray-50 p-2.5"
          >
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};
const Header = () => {
  const navigate = useNavigate();
  const handelnavigatelogin = () => {
    navigate("/login");
  };
  const handelnavigatesignup = () => {
    navigate("/signup");
  };
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { cartData } = useSelector((state) => state.cart);
  const { isUserLoggedIn } = useSelector((state) => state.auth);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-white py-2 border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <Link to="/">
              <img
                src='./android-chrome-192x192.png'
                className="size-14 md:size-[5rem]"
              />
            </Link>

            <span className="font-bold"></span>
          </div>
          <div className={`  items-start  lg:flex absolute left-0  top-0 md:static z-50  bg-blue-200/50 md:bg-transparent backdrop-blur ${isMenuOpen ? ' translate-x-0 ' : 'translate-x-[-100%]'} md:translate-x-0 h-screen md:h-auto  transition-al w-full`}>

            <ul className={` flex flex-col py-3 md:py-0 md:flex-row md:justify-between w-full h-full l     `}>
              <div className=" md:flex py-2  md:flex-row flex flex-col h-full px-4 md:pl-4 md:items-center  justify-around md:space-x-8">
                {menuItems.map((item) => (
                  <li key={item.name} className="">
                    <Link
                      to={item.href}
                      onClick={toggleMenu}
                      className="inline-flex items-center text-sm font-semibold  text-gray-800 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  </li>

                ))}
              </div>
              <div className="flex gap-2">
                {isUserLoggedIn ? (
                  <ProfileDropDown class="" />
                ) : (
                  <div className="min-w-44 space-x-2 flex justify-center items-center">
                    <button
                      type="button"
                      className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"

                      onClick={handelnavigatelogin}

                    >
                      Log In
                    </button>

                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none "
                      onClick={handelnavigatesignup}
                    >
                      Sign Up
                    </button>
                  </div>
                )}

              </div>

            </ul>


          </div>



          <div className="flex gap-6 justify-center items-center md:pl-4 ">

            <Link
              to="/cart"
              class="text-white relative z-10  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-lg rounded-lg px-5 py-2.5    focus:outline-none "
            >
              <FaCartShopping />{" "}
              <span className="absolute w-[1.5rem] h-[1.5rem] shadow-md text-xs grid place-items-center bg-white text-blue-500 rounded-full top-[-0.5rem] right-[-0.5rem]">
                {cartData?.length || 0}
              </span>
            </Link>
            <div className="lg:hidden z-50 ">
              <button type="button" onClick={toggleMenu}> {isMenuOpen ? <RxCross2 size={30} /> : <RxHamburgerMenu size={30} />}  </button>
            </div>
          </div>
          {/* {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">

              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <a href="/">
                        <img
                          src="https://petheeds.in/wp-content/uploads/2022/09/Petheeds-Aspect-Logo-1.png"
                          className="w-[120px]"
                        />
                      </a>
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
                      Log In
                    </button>

                    <button
                      type="button"
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      onClick={handelnavigatesignup}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default Header;
