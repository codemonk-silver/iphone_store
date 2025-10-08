import { useState, useEffect, useRef } from "react";
import {
  FaHeart,
  FaEye,
  FaStar,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const ProductItem = () => {
  const targetDate = new Date("2025-12-31T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    if (difference <= 0)
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const products = [
    { id: 1, name: "Wireless Headphones", price: "39.99", oldPrice: "59.99", discount: "30% OFF", image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4, reviews: 128 },
    { id: 2, name: "Smart Watch", price: "49.99", oldPrice: "69.99", discount: "25% OFF", image: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 5, reviews: 254 },
    { id: 3, name: "Camera Lens", price: "29.99", oldPrice: "49.99", discount: "40% OFF", image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 3, reviews: 87 },
    { id: 4, name: "Laptop Stand", price: "59.99", oldPrice: "69.99", discount: "15% OFF", image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400", rating: 4, reviews: 112 },
    { id: 5, name: "Gaming Mouse", price: "44.99", oldPrice: "59.99", discount: "20% OFF", image: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 5, reviews: 300 },
    { id: 6, name: "USB Microphone", price: "34.99", oldPrice: "49.99", discount: "10% OFF", image: "https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 3, reviews: 65 },
    { id: 7, name: "Bluetooth Speaker", price: "24.99", oldPrice: "39.99", discount: "35% OFF", image: "https://images.pexels.com/photos/1279365/pexels-photo-1279365.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 4, reviews: 143 },
    { id: 8, name: "Mechanical Keyboard", price: "54.99", oldPrice: "109.99", discount: "50% OFF", image: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 5, reviews: 412 },
  ];

  // ✅ Updated slide functions with responsive step + infinite looping
  const slideLeft = () => {
    const container = containerRef.current;
    if (!container) return;

    let slidesPerView = 4;
    if (window.innerWidth < 640) slidesPerView = 1;
    else if (window.innerWidth < 1024) slidesPerView = 2;

    const slideWidth = container.offsetWidth / slidesPerView;

    if (container.scrollLeft <= 0) {
      container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -slideWidth, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    const container = containerRef.current;
    if (!container) return;

    let slidesPerView = 4;
    if (window.innerWidth < 640) slidesPerView = 1;
    else if (window.innerWidth < 1024) slidesPerView = 2;

    const slideWidth = container.offsetWidth / slidesPerView;

    if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: slideWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="px-3 sm:px-6 md:px-12 lg:px-20 xl:px-40 py-10 w-full overflow-hidden">
      {/* Header */}
      <div className="flex gap-2 items-center">
        <div className="w-2 h-6 bg-red-600 rounded-sm"></div>
        <p className="text-red-600 font-semibold text-sm">Today's</p>
      </div>

      {/* Flash Sales + Countdown + Buttons */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-2 gap-3 sm:gap-4">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center w-full lg:w-auto">
          <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Flash Sales
          </h2>

          {/* Countdown */}
          <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
              <div key={label} className="flex items-center">
                <div className="text-center">
                  <p className="text-[10px] text-gray-600">{label}</p>
                  <p className="text-sm sm:text-base font-bold text-gray-900">
                    {String(Object.values(timeLeft)[index]).padStart(2, "0")}
                  </p>
                </div>
                {label !== "Seconds" && (
                  <span className="text-base font-bold text-red-600 ml-1">:</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2 self-end lg:self-auto mt-2 lg:mt-0">
          <button
            onClick={slideLeft}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition text-sm sm:text-base"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={slideRight}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition text-sm sm:text-base"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* ✅ Carousel with scroll snapping */}
      <div
        ref={containerRef}
        className="flex gap-4 sm:gap-7 overflow-x-auto scroll-smooth mt-4 scrollbar-hide snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>
          {`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[100%] sm:min-w-[48%] md:min-w-[30%] lg:min-w-[23%] bg-white rounded-lg shadow-sm overflow-hidden group snap-center"
          >
            <div className="relative bg-gray-100 h-48 sm:h-56 flex items-center justify-center">
              <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded">
                {product.discount}
              </span>

              <div className="absolute top-2 right-2 flex flex-col gap-2">
                <button className="bg-white p-1.5 sm:p-2 rounded-full shadow hover:bg-gray-200">
                  <FaHeart className="text-gray-700 text-sm sm:text-base" />
                </button>
                <button
                  className="bg-white p-1.5 sm:p-2 rounded-full shadow hover:bg-gray-200"
                  onClick={() => setSelectedImage(product.image)}
                >
                  <FaEye className="text-gray-700 text-sm sm:text-base" />
                </button>
              </div>

              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 sm:w-32 sm:h-32 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-1.5 sm:py-2 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition">
                Add to Cart
              </button>
            </div>

            <div className="p-3 text-left">
              <p className="font-semibold text-sm sm:text-base truncate">
                {product.name}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-red-600 font-bold text-sm sm:text-base">
                  ${product.price}
                </p>
                <p className="text-gray-400 line-through text-xs sm:text-sm">
                  ${product.oldPrice}
                </p>
              </div>
              <div className="flex items-center mt-1 text-yellow-400 text-xs sm:text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < product.rating ? "text-yellow-400" : "text-gray-300"
                    }
                  />
                ))}
                <span className="text-gray-500 ml-1 text-xs sm:text-sm">
                  ({product.reviews})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-6">
        <button className="bg-red-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-semibold hover:bg-red-700 transition">
          View All Products
        </button>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[90vw] max-h-[80vh]">
            <img
              src={selectedImage}
              alt="Product preview"
              className="max-w-full max-h-full rounded-lg object-contain"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -top-4 -right-4 bg-red-600 text-white text-xl sm:text-2xl rounded-full p-2 hover:bg-red-700 transition"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
