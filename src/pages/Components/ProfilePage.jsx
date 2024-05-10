import React from "react";

const ProfilePage = () => {
  const name = "Tony stark";
  const email = "johndoe@example.com";
  const orderedProducts = [
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 25 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Welcome, {name}!
        </h1>
        <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-8">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtHN0UH_400AmpA05BWxPYFv3xN8e5pgOnxG7KMg6Sig&s"
                alt="Avatar"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />

              <div className="ml-6">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p className="text-gray-600">{email}</p>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">Ordered Products</h2>
            <ul>
              {orderedProducts.map((product) => (
                <li
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden mb-4"
                >
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <p className="text-gray-600">${product.price}</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300">
                      Buy Again
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
