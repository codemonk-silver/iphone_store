import React, { useState, useEffect } from 'react'
import { FaMobileAlt, FaDesktop, FaCamera, FaHeadphones, FaGamepad, FaTshirt, FaFutbol, FaBook, FaCouch, FaBaby } from 'react-icons/fa'
import { BsSmartwatch } from 'react-icons/bs'
import { GiLipstick, GiRunningShoe } from 'react-icons/gi'

const Category = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(6);

  const categories = [
    { id: 1, name: 'Phones', icon: FaMobileAlt },
    { id: 2, name: 'Computers', icon: FaDesktop },
    { id: 3, name: 'SmartWatch', icon: BsSmartwatch },
    { id: 4, name: 'Camera', icon: FaCamera },
    { id: 5, name: 'HeadPhones', icon: FaHeadphones },
    { id: 6, name: 'Gaming', icon: FaGamepad },
    { id: 7, name: 'Fashion', icon: FaTshirt },
    { id: 8, name: 'Sports', icon: FaFutbol },
    { id: 9, name: 'Books', icon: FaBook },
    { id: 10, name: 'Furniture', icon: FaCouch },
    { id: 11, name: 'Beauty', icon: GiLipstick },
    { id: 12, name: 'Footwear', icon: GiRunningShoe },
    { id: 13, name: 'Baby', icon: FaBaby },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(3);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleCategories = () => {
    const visible = [];
    for (let i = 0; i < slidesToShow; i++) {
      visible.push(categories[(currentIndex + i) % categories.length]);
    }
    return visible;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <div className='px-8 md:px-40 py-12'>
      <div className="flex gap-2 items-center">
        <div className="w-3 h-7 bg-red-600 rounded-sm"></div>
        <p className="text-red-600 font-semibold">Categories</p>
      </div>
      
      <div className="flex items-center justify-between">
        <p className='text-3xl font-semibold mt-3'>Browse By Category</p>
        
        {/* Carousel Navigation Buttons */}
        <div className="flex gap-2 mt-3">
          <button
            onClick={prevSlide}
            className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-8 transition-all duration-500'>
        {getVisibleCategories().map((category) => {
          const Icon = category.icon;
          return (
            <div 
              key={category.id}
              className='border-2 border-gray-300 rounded-lg p-6 hover:bg-red-600 hover:text-white hover:border-red-600 transition cursor-pointer flex flex-col items-center justify-center gap-3 h-32'
            >
              <Icon className='text-5xl' />
              <p className='font-medium text-sm'>{category.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Category