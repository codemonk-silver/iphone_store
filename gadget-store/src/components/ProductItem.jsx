import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { FaHeart, FaEye, FaStar, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductItem = () => {
  const targetDate = new Date("2025-12-31T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
    { id: 9, name: "Webcam HD", price: "64.99", oldPrice: "119.99", discount: "45% OFF", image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=400", rating: 5, reviews: 198 },
    { id: 10, name: "External SSD", price: "74.99", oldPrice: "99.99", discount: "30% OFF", image: "https://images.pexels.com/photos/4316/technology-computer-chips-gigabyte.jpg?auto=compress&cs=tinysrgb&w=400", rating: 4, reviews: 152 },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 800,
    cssEase: "ease-in-out",
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 py-8 sm:py-18 relative w-full overflow-hidden">
      <div className="flex gap-2 items-center">
        <div className="w-2 sm:w-3 h-6 sm:h-7 bg-red-600 rounded-sm"></div>
        <p className="text-red-600 font-semibold text-xs sm:text-sm md:text-base">Today's</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-3 sm:mt-4 gap-3 sm:gap-4">
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-8 items-start md:items-center w-full lg:w-auto">
          <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Flash Sales</h2>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
              <div key={label} className="flex items-center">
                <div className="text-center">
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">{label}</p>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                    {String(Object.values(timeLeft)[index]).padStart(2, '0')}
                  </p>
                </div>
                {label !== "Seconds" && (
                  <span className="text-base sm:text-lg md:text-xl font-bold text-red-600 ml-2 sm:ml-3">:</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 self-end lg:self-auto">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="p-2 sm:p-2.5 md:p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200 active:scale-95"
            aria-label="Previous products"
          >
            <FaChevronLeft className="text-sm sm:text-base md:text-lg" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="p-2 sm:p-2.5 md:p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200 active:scale-95"
            aria-label="Next products"
          >
            <FaChevronRight className="text-sm sm:text-base md:text-lg" />
          </button>
        </div>
      </div>

      <div className="mt-6 sm:mt-8">
        <Slider ref={sliderRef} {...settings}>
          {products.map((product) => (
            <div key={product.id} className="p-2 sm:p-3">
              <div className="relative rounded-lg overflow-hidden group cursor-pointer flex flex-col">
                <div className="relative bg-gray-100 flex flex-col justify-between items-center h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg shadow-sm overflow-hidden">
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded z-10">
                    {product.discount}
                  </span>

                  <div className="absolute top-2 right-2 flex flex-col gap-1.5 sm:gap-2 z-10">
                    <button
                      className="bg-white p-1.5 sm:p-2 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-200 active:scale-95"
                      aria-label="Add to favorites"
                    >
                      <FaHeart className="text-gray-700 text-xs sm:text-sm md:text-base" />
                    </button>
                    <button
                      className="bg-white p-1.5 sm:p-2 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-200 active:scale-95"
                      aria-label="Quick view"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(product.image);
                      }}
                    >
                      <FaEye className="text-gray-700 text-xs sm:text-sm md:text-base" />
                    </button>
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain transition-transform duration-300 group-hover:scale-110 mt-6 sm:mt-8"
                    onClick={() => setSelectedImage(product.image)}
                    loading="lazy"
                  />

                  <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 sm:py-2.5 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs sm:text-sm md:text-base active:bg-gray-900">
                    Add to Cart
                  </button>
                </div>

                <div className="text-left mt-2 sm:mt-3 px-1">
                  <p className="font-semibold text-xs sm:text-sm md:text-base truncate">{product.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-red-600 font-bold text-sm sm:text-base md:text-lg">
                      ${product.price}
                    </p>
                    <p className="text-gray-400 line-through text-xs sm:text-sm">
                      ${product.oldPrice}
                    </p>
                  </div>
                  <div className="flex items-center mt-1 text-yellow-400 text-xs sm:text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} className={i < product.rating ? "text-yellow-400" : "text-gray-300"} />
                    ))}
                    <span className="text-gray-500 ml-1 text-[10px] sm:text-xs">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="text-center mt-8 sm:mt-10">
        <button className="bg-red-600 text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-md text-sm sm:text-base md:text-lg font-semibold hover:bg-red-700 transition-colors duration-200 active:scale-95 shadow-md">
          View All Products
        </button>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <img
              src={selectedImage}
              alt="Product preview"
              className="max-w-[90vw] max-h-[80vh] sm:max-w-[85vw] sm:max-h-[85vh] md:max-w-[80vw] md:max-h-[80vh] rounded-lg object-contain"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -top-2 -right-2 sm:top-2 sm:right-2 text-white text-xl sm:text-2xl md:text-3xl bg-red-600 rounded-full p-1.5 sm:p-2 hover:bg-red-700 transition-colors duration-200 active:scale-95 shadow-lg"
              aria-label="Close preview"
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
