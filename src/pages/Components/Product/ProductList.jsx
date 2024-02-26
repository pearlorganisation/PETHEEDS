import { useNavigate } from "react-router-dom";
import img from "../../../../Images for Website/Aloevera Shampoo 250 ML/2.png";
import img2 from "../../../../Images for Website/Aloevera Shampoo 500 ML/2.png";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Earthen Bottle ",
    quantity: "500ml",
    href: "#",
    price: " ₹480",
    imageSrc: img,
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    quantity: "250ml",
    href: "#",
    price: " ₹350",
    imageSrc: img2,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Nomad Tumbler",
    quantity: "250ml",
    href: "#",
    price: " ₹350",
    imageSrc: img2,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 4,
    name: "Nomad Tumbler",
    quantity: "250ml",
    href: "#",
    price: " ₹350",
    imageSrc: img2,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 5,
    name: "Nomad Tumbler",
    quantity: "250ml",
    href: "#",
    price: " ₹350",
    imageSrc: img2,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 6,
    name: "Nomad Tumbler",
    quantity: "250ml",
    href: "#",
    price: " ₹350",
    imageSrc: img2,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 7,
    name: "Nomad Tumbler",
    quantity: "250ml",
    href: "#",
    price: " ₹350",
    imageSrc: img2,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 8,
    name: "Nomad Tumbler",
    quantity: "250ml",
    href: "#",
    price: " ₹350",
    imageSrc: img2,
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
];

export default function ProductList() {
  const navigate = useNavigate();
  const handelnavigate = () => {
    navigate("/singleproduct");
  };
  return (
    <>
      <div className="bg-white ">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8  ">
          <div className=" py-10">
            <h1 className="text-center text-2xl font-semibold md:text-3xl">
              {" "}
              Explore Our Pet Products{" "}
            </h1>
          </div>

          <h2 className="sr-only"> Products </h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <h3 className="mt-4 text-sm text-gray-700">
                  {product.quantity}
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>

                <div className="py-4 flex items-center">
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={handelnavigate}
                  >
                    Buy Now
                  </button>
                  <button
                    type="button"
                    class="text-black border border-black bg-transparent hover:bg-gray-200  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                  >
                    <div className="flex items-center">
                      <div className="">
                        <FaShoppingCart />
                      </div>
                      <div> Add to cart</div>
                    </div>
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
