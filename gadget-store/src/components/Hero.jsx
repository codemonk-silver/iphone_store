import React, { useState } from "react";
import { FaChevronRight, FaBars, FaXmark } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import Slider from "react-slick";
import iphone14 from "../assets/iphone14.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    customPaging: () => <div className="w-3 h-3 rounded-full bg-gray-400"></div>,
    appendDots: (dots) => (
      <div className="absolute bottom-3 left-0 right-0 flex justify-center">
        <ul className="flex gap-2">{dots}</ul>
      </div>
    ),
  };

  const cards = [
    {
      id: 1,
      title: "iPhone 14 Series",
      desc: "Up to 10% off Voucher.",
      img: iphone14,
      apple: true,
    },
    {
      id: 2,
      title: "Men's Collection",
      desc: "Fresh styles for every season.",
      img: "https://via.placeholder.com/500x300.png?text=Fashion+2",
    },
    {
      id: 3,
      title: "Electronics Sale",
      desc: "Best deals on gadgets and accessories.",
      img: "https://via.placeholder.com/500x300.png?text=Electronics",
    },
    {
      id: 4,
      title: "Sports Gear",
      desc: "Upgrade your game with top sports brands.",
      img: "https://via.placeholder.com/500x300.png?text=Sports",
    },
    {
      id: 5,
      title: "Health & Beauty",
      desc: "Care products that keep you glowing.",
      img: "https://via.placeholder.com/500x300.png?text=Beauty",
    },
  ];

  return (
    <section className="relative w-full bg-white mt-24 lg:mt-32 px-4 sm:px-8 md:px-20 lg:px-40">
      {/* 🔹 Outer wrapper needs relative positioning */}
      <div className="flex flex-col lg:flex-row w-full gap-2 sm:gap-4 relative">
        {/* 🔹 Mobile Menu Header */}
        <div className="flex items-center justify-between mt-2 lg:hidden relative z-30">
          <h2 className="text-lg font-semibold">Categories</h2>
          <button
            className="text-xl sm:text-lg"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>

          {/* ✅ Dropdown lives INSIDE header container for proper absolute positioning */}
          {menuOpen && (
            <div
              className="absolute top-12 left-0 right-0 bg-white shadow-lg rounded-lg p-4 z-40 animate-fadeIn"
            >
              <div className="flex flex-col space-y-2 text-sm">
                <a href="#" className="flex items-center gap-2 hover:text-indigo-600">
                  <span>Woman&apos;s Fashion</span>
                  <FaChevronRight className="text-gray-500 w-3 h-3" />
                </a>
                <a href="#" className="flex items-center gap-2 hover:text-indigo-600">
                  <span>Men&apos;s Fashion</span>
                  <FaChevronRight className="text-gray-500 w-3 h-3" />
                </a>
                <a href="#">Electronics</a>
                <a href="#">Home & Lifestyle</a>
                <a href="#">Medicine</a>
                <a href="#">Sports & Outdoor</a>
                <a href="#">Baby&apos;s & Toys</a>
                <a href="#">Groceries & Pets</a>
                <a href="#">Health & Beauty</a>
              </div>
            </div>
          )}
        </div>

        {/* 🔹 Sidebar Menu for large screens */}
        <div className="hidden lg:flex flex-shrink-0 bg-transparent mt-3 mr-6">
          <div className="flex flex-col space-y-2 text-sm w-full">
            <a href="#" className="flex items-center gap-2 hover:text-indigo-600">
              <span>Woman&apos;s Fashion</span>
              <FaChevronRight className="text-gray-500 w-3 h-3" />
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-indigo-600">
              <span>Men&apos;s Fashion</span>
              <FaChevronRight className="text-gray-500 w-3 h-3" />
            </a>
            <a href="#">Electronics</a>
            <a href="#">Home & Lifestyle</a>
            <a href="#">Medicine</a>
            <a href="#">Sports & Outdoor</a>
            <a href="#">Baby&apos;s & Toys</a>
            <a href="#">Groceries & Pets</a>
            <a href="#">Health & Beauty</a>
          </div>
          <div className="h-90 border-l border-gray-400 ml-4 -mt-28"></div>
        </div>

        {/* 🔹 Carousel */}
       <div className="flex-1 mt-3 lg:mt-3 max-w-full overflow-hidden rounded-xl relative z-10">
          <Slider {...settings}>
            {cards.map((card) => (
              <div key={card.id} className="w-full relative">
                <div className="flex flex-col md:flex-row items-center justify-between bg-black rounded-xl overflow-hidden h-auto md:h-60 p-6 sm:px-8 md:px-12 lg:px-16 relative">
                  {/* Left text */}
                  <div className="text-white text-center md:text-left md:w-1/2 mb-4 md:mb-0">
                    {card.apple ? (
                      <div className="flex justify-center md:justify-start items-center gap-2 mb-2">
                        <FaApple className="text-white text-3xl" />
                        <h2 className="text-base sm:text-lg font-bold">
                          {card.title}
                        </h2>
                      </div>
                    ) : (
                      <h2 className="text-base sm:text-lg font-bold mb-2">
                        {card.title}
                      </h2>
                    )}
                    <p
                      className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 ${
                        card.id === 1 ? "tracking-[0.2em]" : ""
                      }`}
                    >
                      {card.desc}
                    </p>
                    <a
                      href="#"
                      className="underline underline-offset-8 text-white hover:text-indigo-400 transition"
                    >
                      Shop Now
                    </a>
                  </div>

                  {/* Right image */}
                  <div className="w-full md:w-1/2 flex justify-center relative h-48 sm:h-56 md:h-full">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="object-contain h-full w-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/100 to-transparent rounded-b-lg"></div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Hero;
