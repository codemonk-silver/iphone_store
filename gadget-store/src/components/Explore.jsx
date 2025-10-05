import React, { useRef } from "react";
import Slider from "react-slick";
import { FaHeart, FaEye, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 🖼️ Import images
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product10 from "../assets/product10.png";
import product9 from "../assets/product9.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.avif";
import product8 from "../assets/product8.png";

// ✅ Custom Arrow Buttons
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-gray-200 hover:bg-red-600 text-gray-700 hover:text-white rounded-full p-2 transition"
  >
    <FaChevronRight size={18} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-gray-200 hover:bg-red-600 text-gray-700 hover:text-white rounded-full p-2 transition"
  >
    <FaChevronLeft size={18} />
  </button>
);

const Explore = () => {
  const sliderRef = useRef(null);

  const products = [
    { id: 1, name: "Wireless Headphone", price: "$120", rating: 4.8, reviews: 124, image: product3 },
    { id: 2, name: "Smart Watch", price: "$95", rating: 4.6, reviews: 89, image: product4 },
    { id: 3, name: "Bluetooth Speaker", price: "$75", rating: 4.4, reviews: 63, image: product5 },
    { id: 4, name: "DSLR Camera", price: "$520", rating: 4.9, reviews: 201, image: product10 },
    { id: 5, name: "Gaming Mouse", price: "$49", rating: 4.7, reviews: 76, image: product9 },
    { id: 6, name: "Smartphone", price: "$799", rating: 4.8, reviews: 342, image: product6 },
    { id: 7, name: "Laptop", price: "$1099", rating: 4.9, reviews: 421, image: product7 },
    { id: 8, name: "VR Headset", price: "$450", rating: 4.5, reviews: 58, image: product8 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="px-40 py-10 relative">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2 items-center">
          <div className="w-3 h-7 bg-red-600 rounded-sm"></div>
          <p className="text-red-600 font-semibold">This Month</p>
        </div>
        <p className="text-gray-800 text-xl font-semibold cursor-pointer hover:text-red-600 transition">
          Browse More →
        </p>
      </div>

      {/* Explore title + Carousel buttons */}
      <div className="flex justify-between items-center mb-8">
        <p className="text-3xl font-semibold">Explore Our Product</p>
        <div className="flex gap-3">
          <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>

      {/* ✅ Carousel Section */}
      <Slider ref={sliderRef} {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <div className="group">
              <div className="relative bg-gray-200 rounded-xl overflow-hidden h-60 flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain h-40 transition-transform duration-300 group-hover:scale-105"
                />

                {/* Icons */}
                <div className="absolute top-3 right-3 flex flex-col gap-3">
                  <button className="bg-white p-2 rounded-full shadow hover:bg-red-100 transition">
                    <FaHeart className="text-gray-700" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
                    <FaEye className="text-gray-700" />
                  </button>
                </div>

                {/* Add to Cart Hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Add to Cart
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-3">
                <p className="font-medium text-gray-800 text-sm">{product.name}</p>
                <div className="flex items-center gap-6 text-gray-600 text-sm mt-1">
                  <p className="font-semibold">{product.price}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400 text-xs" />
                    <span className="text-xs font-medium">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* 🆕 Static 4-column Section */}
      <div className="py-10 grid grid-cols-4 gap-6">
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="group">
            <div className="relative bg-gray-200 rounded-xl overflow-hidden h-60 flex justify-center items-center">
              {/* Badge + Icons */}
              <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">NEW</span>
                <div className="flex flex-col gap-3">
                  <button className="bg-white p-2 rounded-full shadow hover:bg-red-100 transition">
                    <FaHeart className="text-gray-700" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
                    <FaEye className="text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="object-contain h-40 transition-transform duration-300 group-hover:scale-105"
              />

              {/* Add to Cart Hover */}
              <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                Add to Cart
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-3">
              <p className="font-medium text-gray-800 text-sm">{product.name}</p>
              <div className="flex items-center gap-6 text-gray-600 text-sm mt-1">
                <p className="font-semibold">{product.price}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400 text-xs" />
                  <span className="text-xs font-medium">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
              </div>

              {/* Available Colors */}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-gray-500 text-xs">Available in:</span>
                <div className="flex gap-2">
                  <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                  <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔴 View All Products Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Explore;
