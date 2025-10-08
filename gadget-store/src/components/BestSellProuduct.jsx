import React from "react";
import { FaHeart, FaEye, FaStar } from "react-icons/fa";

const BestSellProduct = () => {
  const products = [
    {
      id: 1,
      name: "The north coat",
      price: "260",
      oldPrice: "360",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
      rating: 5,
    },
    {
      id: 2,
      name: "Gucci duffle bag",
      price: "960",
      oldPrice: "1160",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400",
      rating: 4,
    },
    {
      id: 3,
      name: "RGB liquid CPU Cooler",
      price: "160",
      oldPrice: "170",
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400",
      rating: 5,
    },
    {
      id: 4,
      name: "Small BookShelf",
      price: "360",
      oldPrice: "400",
      image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400",
      rating: 5,
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-12">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-7 bg-red-600 rounded-sm"></div>
        <p className="text-red-600 font-semibold text-sm sm:text-base">This Month</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Best Selling Products
        </p>

        <button className="bg-red-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-medium hover:bg-red-700 transition">
          View All
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            {/* Product Image Box */}
            <div className="relative bg-gray-100 rounded-lg p-4 sm:p-5 h-56 sm:h-64 flex items-center justify-center overflow-hidden">
              {/* Icons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                <button className="bg-white p-2 rounded-full shadow hover:bg-red-50 transition">
                  <FaHeart className="text-gray-700 w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="bg-white p-2 rounded-full shadow hover:bg-red-50 transition">
                  <FaEye className="text-gray-700 w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-36 h-36 sm:w-44 sm:h-44 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Product Info */}
            <div className="mt-4 text-center sm:text-left">
              <p className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
                {product.name}
              </p>
              <div className="flex justify-center sm:justify-start items-center gap-2 mt-2">
                <p className="text-red-600 font-bold text-base sm:text-lg">
                  ${product.price}
                </p>
                <p className="text-gray-400 line-through text-xs sm:text-sm">
                  ${product.oldPrice}
                </p>
              </div>

              {/* Rating */}
              <div className="flex justify-center sm:justify-start items-center gap-1 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-3 h-3 sm:w-4 sm:h-4 ${
                      i < product.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellProduct;
