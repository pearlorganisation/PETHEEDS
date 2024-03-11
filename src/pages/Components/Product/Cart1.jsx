import React from 'react'
import { ChevronDown } from 'lucide-react'
import { useNavigate } from "react-router-dom";
import img from "../../../../Images for Website/Aloevera Shampoo 250 ML/2.png";
import img2 from "../../../../Images for Website/Aloevera Shampoo 500 ML/2.png";
import { FaShoppingCart } from "react-icons/fa";
import img3 from "../../../../Images for Website/Bang On Ticks/1.png";
import img4 from "../../../../Images for Website/Bang On Ticks/2.png";
import img5 from "../../../../Images for Website/Bang On Ticks/3.png";
import img6 from "../../../../Images for Website/Bang On Ticks/4.png";
import img7 from "../../../../Images for Website/Bone and Joint and Motleyvit Combo/1.png";
import img8 from "../../../../Images for Website/Bone and Joint and Motleyvit Combo/2.png";
import img9 from "../../../../Images for Website/Bone and Joint and Motleyvit Combo/3.png";
import img10 from "../../../../Images for Website/Bone and Joint and Motleyvit Combo/4.png";
import img11 from "../../../../Images for Website/Bone and Joint and Motleyvit Combo/5.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/slices/cartSlice";
const products = [
    {
      id: 1,
      name: "Earthen Bottle ",
      quantity: "500ml",
      items:1,
      href: "#",
      price: 500,
      ourprice: 450,
      imageSrc: img,
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 2,
      name: "Nomad Tumbler",
      quantity: "250ml",
      items:1,
      href: "#",
      price: 500,
      ourprice: 450,
      imageSrc: img11,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 3,
      name: "Earthen Bottle",
      quantity: "250ml",
      items:1,
      href: "#",
      price: 500,
      ourprice: 450,
      imageSrc: img3,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 4,
      name: "Nomad Tumbler",
      quantity: "250ml",
      items:1,
      href: "#",
      price: 500,
      ourprice: 450,
      imageSrc: img4,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 5,
      name: "Earthen Bottle",
      quantity: "250ml",
      items:1,
      href: "#",
      price: 500,
      ourprice: 450,
      imageSrc: img5,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 6,
      name: "Nomad Tumbler",
      quantity: "250ml",
      items:1,
      href: "#",
      price: 500,
      ourprice:450,
      imageSrc: img6,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 7,
      name: "Nomad Tumbler",
      quantity: "250ml",
      items:1,
      href: "#",
      price: 500,
      ourprice: 450,
      imageSrc: img7,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 8,
      name: "Nomad Tumbler",
      quantity: "250ml",
      items:1,
      href: "#",
      price:500,
      ourprice: 450,
      imageSrc: img8,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 9,
      name: "Nomad Tumbler",
      quantity: "250ml",
      items:1,
      href: "#",
      price: 350,
      ourprice: 450,
      imageSrc: img9,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 10,
      name: "Nomad Tumbler",
      quantity: "250ml",
      items:1,
      href: "#",
      price: 350,
      ourprice:450,
      imageSrc: img10,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 11,
      name: "Nomad Tumbler",
      quantity: "250ml",
      items:1,
      href: "#",
      price:350,
      ourprice:450,
      imageSrc: img2,
      imageAlt:"Olive drab green insulated bottle with flared screw lid and flat top.",
    },
  ];

const Cart1 = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handelnavigate = () => {
      navigate("/singleproduct");
    };
    const handelcart = () => {
      navigate("/cart");
    };  


    const products = [
        {
          id: 1,
          name: "Earthen Bottle ",
          quantity: "500ml",
          items:1,
          href: "#",
          price: 500,
          ourprice: 450,
          imageSrc: img,
          imageAlt:
            "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
        },
        {
          id: 2,
          name: "Nomad Tumbler",
          quantity: "250ml",
          items:1,
          href: "#",
          price: 500,
          ourprice: 450,
          imageSrc: img11,
          imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
        {
          id: 3,
          name: "Earthen Bottle",
          quantity: "250ml",
          items:1,
          href: "#",
          price: 500,
          ourprice: 450,
          imageSrc: img3,
          imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
        {
          id: 4,
          name: "Nomad Tumbler",
          quantity: "250ml",
          items:1,
          href: "#",
          price: 500,
          ourprice: 450,
          imageSrc: img4,
          imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
        {
          id: 5,
          name: "Earthen Bottle",
          quantity: "250ml",
          items:1,
          href: "#",
          price: 500,
          ourprice: 450,
          imageSrc: img5,
          imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
        {
          id: 6,
          name: "Nomad Tumbler",
          quantity: "250ml",
          items:1,
          href: "#",
          price: 500,
          ourprice:450,
          imageSrc: img6,
          imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
        {
          id: 7,
          name: "Nomad Tumbler",
          quantity: "250ml",
          items:1,
          href: "#",
          price: 500,
          ourprice: 450,
          imageSrc: img7,
          imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
        {
          id: 8,
          name: "Nomad Tumbler",
          quantity: "250ml",
          items:1,
          href: "#",
          price:500,
          ourprice: 450,
          imageSrc: img8,
          imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
        {
          id: 9,
          name: "Nomad Tumbler",
          quantity: "250ml",
          items:1,
          href: "#",
          price: 350,
          ourprice: 450,
          imageSrc: img9,
          imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
        {
          id: 10,
          name: "Nomad Tumbler",
          quantity: "250ml",
          items:1,
          href: "#",
          price: 350,
          ourprice:450,
          imageSrc: img10,
          imageAlt:
            "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
        {
          id: 11,
          name: "Nomad Tumbler",
          quantity: "250ml",
          items:1,
          href: "#",
          price:350,
          ourprice:450,
          imageSrc: img2,
          imageAlt:"Olive drab green insulated bottle with flared screw lid and flat top.",
        },
      ];


    const filters = [
        {
          id: 'color',
          name: 'Color',
          options: [
            { value: 'white', label: 'White' },
            { value: 'beige', label: 'Beige' },
            { value: 'blue', label: 'Blue' },
            { value: 'brown', label: 'Brown' },
            { value: 'green', label: 'Green' },
            { value: 'purple', label: 'Purple' },
          ],
        },
        {
          id: 'category',
          name: 'Category',
          options: [
            { value: 'new-arrivals', label: 'All New Arrivals' },
            { value: 'tees', label: 'Tees' },
            { value: 'crewnecks', label: 'Crewnecks' },
            { value: 'sweatshirts', label: 'Sweatshirts' },
            { value: 'pants-shorts', label: 'Pants & Shorts' },
          ],
        },
        {
          id: 'sizes',
          name: 'Sizes',
          options: [
            { value: 'xs', label: 'XS' },
            { value: 's', label: 'S' },
            { value: 'm', label: 'M' },
            { value: 'l', label: 'L' },
            { value: 'xl', label: 'XL' },
            { value: '2xl', label: '2XL' },
          ],
        },
      ]

   
      
  return (
    <>
      <section className="w-full  border border-red-500 ">
      <div className="mx-auto max-w-8xl px-2 py-5 lg:px-5 border border-red-500">
        {/* Top */}
        <div className="md:flex md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-xl font-bold">Products</h1>
          </div>
          <div className="mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0">
            <button
              type="button"
              className="hidden items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:inline-flex"
            >
              Sort <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              Category <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              Color <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
            >
              Size <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
        <hr className="my-8" />
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-6  border border-red-500 ">
            
          <div className="hidden space-y-6 divide-y lg:col-span-3 lg:block  border border-red-500 ">
            {filters.map((filter) => (
              <div key={filter.id} className="pt-6">
                <h3 className="text-lg font-semibold text-gray-900">{filter.name}</h3>
                <ul className="mt-2">
                  {filter.options.map((option) => (
                    <li key={option.value} className="flex items-center justify-between py-2">
                      <div className="flex items-center">
                        <input
                          id={`${filter.id}-${option.value}`}
                          name={`${filter.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                        />
                        <label
                          htmlFor={`${filter.id}-${option.value}`}
                          className="ml-3 text-sm font-medium text-gray-900"
                        >
                          {option.label}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="h-[400px] w-full  rounded-lg border-2 border-dashed px-2 lg:col-span-9 lg:h-full">

               
     


      <section id="Projects"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {
          products.map((el, id) => {
            return <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <img
                  src={el.imageSrc}
                  alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                <div class="px-4 py-3 w-72">
                  <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                  <p class="text-lg font-bold text-black truncate block capitalize">{el.name}</p>
                  <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">{el.ourprice}</p>
                    <del>
                      <p class="text-sm text-gray-600 cursor-auto ml-2">{el.price}</p>
                    </del>
                    <div onClick={() => { dispatch(addToCart(el)) }} class="ml-auto">
                      cart
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                        <path
                          d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>


                    </div>
                  </div>
                </div>
              </a>
            </div>
          })
        }




      </section>

 

          </div>
       
       
       
         </div>
      </div>
    </section>
    </>
  )
}

export default Cart1