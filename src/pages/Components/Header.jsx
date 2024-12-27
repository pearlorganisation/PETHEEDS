import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { logout } from '../../features/actions/auth';


const ProfileDropDown = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const { userData } = useSelector(state => state.auth)
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
          className="md:w-10 md:h-10 w-8 h-8 outline-none rounded-full lg:focus:ring-2 lg:focus:ring-blue-600"
          onClick={() => setState(!state)}
        >
          <FaUserCircle className="w-full   h-full rounded-full" />
        </button>
        <div className="flex flex-col">
          <span className="font-medium">{userData?.data?.fullName}</span>
        </div>
      </div>
      <ul
        className={`bg-white md:top-12 right-0 mt-5 space-y-5 absolute border rounded-md text-sm w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? "" : "hidden"
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

export default function Header() {
  const menuItems = [
    {
      name: "Home",
      href: "/home",
    },
    {
      name: "Our Products",
      href: "/",
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
  const { cartData } = useSelector((state) => state.cart);
  const { isUserLoggedIn } = useSelector((state) => state.auth);

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount] = useState(0)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const navigate = useNavigate();
  const handelnavigatelogin = () => {
    navigate("/login");
  };
  const handelnavigatesignup = () => {
    navigate("/signup");
  };






  return (
    <header className="fixed top-0 z-50 w-full md:font-medium bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src='/android-chrome-192x192.png'
            className="size-10 md:size-[4rem] lg:size-[5rem]"
            onError={(event) => {
              event.target.src =
                "/placeholder.jpg";
              event.onerror = null;
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 text-xs lg:text-base lg:gap-8">
          {
            menuItems?.map(item => {
              return <Link to={`${item?.href}`} className="text-gray-700 hover:text-gray-900">
                {item?.name}
              </Link>
            })
          }


        </nav>

        {/* User Profile and Cart */}
        <div className="flex items-center gap-4">
          {/* <div className="hidden md:flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <span className="text-sm text-gray-700">avnish</span>
          </div> */}
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

          <div className="relative">
            <Link

              to="/cart"
              className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              {cartData?.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-100 text-blue-600 rounded-full text-xs flex items-center justify-center">
                  {cartData?.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-6">
          <button
            className="mb-8 text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="flex flex-col gap-4">
            {
              menuItems?.map(item => {
                return <Link to={`${item?.href}`} className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>
                  {item?.name}
                </Link>
              })
            }


          </nav>
          {/* <div className="mt-8 flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <span className="text-sm text-gray-700">avnish</span>
          </div> */}
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  )
}

