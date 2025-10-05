import React, { useState, useEffect } from 'react';

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
    { id: 1, name: "Product 1", price: "39.99", oldPrice: "59.99", discount: "30% OFF", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", rating: 4 },
    { id: 2, name: "Product 2", price: "49.99", oldPrice: "69.99", discount: "25% OFF", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400", rating: 5 },
    { id: 3, name: "Product 3", price: "29.99", oldPrice: "49.99", discount: "40% OFF", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", rating: 3 },
    { id: 4, name: "Product 4", price: "59.99", oldPrice: "69.99", discount: "15% OFF", image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400", rating: 4 },
    { id: 5, name: "Product 5", price: "44.99", oldPrice: "59.99", discount: "20% OFF", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400", rating: 5 },
    { id: 6, name: "Product 6", price: "34.99", oldPrice: "49.99", discount: "10% OFF", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400", rating: 3 },
    { id: 7, name: "Product 7", price: "24.99", oldPrice: "39.99", discount: "35% OFF", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", rating: 4 },
    { id: 8, name: "Product 8", price: "54.99", oldPrice: "109.99", discount: "50% OFF", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400", rating: 5 },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const getVisibleProducts = () => {
    const visible = [];
    for (let i = 0; i < slidesToShow; i++) {
      visible.push(products[(currentIndex + i) % products.length]);
    }
    return visible;
  };

  return (
    <div className="px-8 md:px-40 py-12 bg-white">
      {/* Section Header */}
      <div className="flex gap-2 items-center">
        <div className="w-3 h-7 bg-red-600 rounded-sm"></div>
        <p className="text-red-600 font-semibold">Today's</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center justify-between">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center">
          <p className="font-medium text-3xl mt-3">Flash Sales</p>
          <div className="flex items-center gap-1">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
              <React.Fragment key={label}>
                <div className="text-center">
                  <p className="text-xs text-gray-600">{label}</p>
                  <p className="text-2xl font-bold text-red-600">
                    {String(Object.values(timeLeft)[index]).padStart(2, '0')}
                  </p>
                </div>
                {label !== "Seconds" && (
                  <span className="text-2xl font-bold text-red-600 mt-4 mx-1">:</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)}
            className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % products.length)}
            className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Product Carousel */}
      <div className="mt-8 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-500">
          {getVisibleProducts().map((product) => (
            <div key={product.id} className="group">
              {/* Gray Background Container */}
              <div className="relative bg-gray-100 rounded-lg p-4 overflow-hidden">
                {/* Discount Badge */}
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                  {product.discount}
                </span>

                {/* Heart & Eye Icons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                  <button className="bg-white p-2 rounded-full shadow hover:bg-red-50 transition">
                    <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="bg-white p-2 rounded-full shadow hover:bg-red-50 transition">
                    <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>

                {/* Product Image */}
                <div className="flex justify-center items-center h-48 cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-40 h-40 object-contain transition-transform duration-300 group-hover:scale-110"
                    onClick={() => setSelectedImage(product.image)}
                  />
                </div>

                {/* Add to Cart Button - Shows on Hover */}
                <button className="w-full bg-black text-white py-2.5 rounded-md font-medium hover:bg-gray-800 transition mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                  Add to Cart
                </button>
              </div>

              {/* Product Info - Outside Gray Background */}
              <div className="text-left mt-3">
                <p className="font-semibold text-gray-800">{product.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-red-600 font-bold text-lg">${product.price}</p>
                  <p className="text-gray-400 line-through text-sm">${product.oldPrice}</p>
                </div>
                <div className="flex mt-1 text-yellow-400">
                  {Array.from({ length: product.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Zoomed"
              className="max-w-[90vw] max-h-[80vh] rounded-lg object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-2xl bg-red-600 rounded-full p-2 hover:bg-red-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductItem;