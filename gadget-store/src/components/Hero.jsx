import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import Slider from "react-slick";
import iphone14 from "../assets/iphone14.png";

// slick CSS is required for rendering
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,

    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
    ),

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
    <div className="flex w-full px-40">
      {/* Left nav + vertical line */}
      <div className="flex-shrink-0 flex">
        <div className="flex flex-col mt-8 space-y-2 text-sm">
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

        <div className="h-69 border-l border-gray-400 ml-4"></div>
      </div>

      {/* Right: Carousel */}
      <div className="flex-1 ml-6 mt-8 max-w-full overflow-hidden rounded-xl relative">
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="w-full relative">
              <div className="h-60 flex items-center justify-between rounded-xl bg-black px-8 overflow-hidden relative">
                {/* Left text */}
                <div className="w-1/2 pl-16 pr-4 text-white">
                  {card.apple ? (
                    <div className="flex items-center gap-2 mb-2">
                      <FaApple className="text-white text-3xl" />
                      <h2 className="text-sm font-bold">{card.title}</h2>
                    </div>
                  ) : (
                    <h2 className="text-sm font-bold mb-2">{card.title}</h2>
                  )}
                  <p className={`text-4xl font-bold w-80 mb-4 ${card.id === 1 ? "tracking-[0.2em]" : ""}`} >{card.desc}</p>
                  <a href="" className="underline underline-offset-8 text-white rounded-lg shadow hover:bg-indigo-700">
                    Shop Now
                  </a>
                </div>

                {/* Right image */}
                <div className="w-1/2 flex justify-center relative h-full">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-full -mt-6 object-contain rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/100 to-transparent rounded-b-lg"></div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
