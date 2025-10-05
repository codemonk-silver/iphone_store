import React from "react";
import sony from "../assets/sony.png";
import women from "../assets/women.png";
import product6 from "../assets/product6.png";
import scent from "../assets/scent.png";

const Arrival = () => {
  return (
    <div className="px-40 py-10">
      {/* Section Title */}
      <div className="flex gap-2 items-center">
        <div className="w-3 h-7 bg-red-600 rounded-sm"></div>
        <p className="text-red-600 font-semibold">Featured</p>
      </div>
      <p className="text-3xl font-semibold mt-3">New Arrival</p>

      {/* Main Layout */}
      <div className="flex justify-between mt-10 gap-4 h-[500px]">
        {/* LEFT LARGE IMAGE */}
        <div className="relative w-1/2 bg-black rounded-xl overflow-hidden">
          <img
            src={sony}
            alt="Sony Headphones"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl font-semibold">PlayStation 5</h2>
            <p className="text-sm text-gray-300 mt-1">
              Experience the next generation of gaming
            </p>
            <button className="mt-3 bg-white text-black px-4 py-1.5 rounded text-sm font-medium hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col w-1/2 gap-4">
          {/* TOP IMAGE */}
          <div className="relative bg-black rounded-xl h-1/2 overflow-hidden">
            <img
              src={women}
              alt="Women's Collection"
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute bottom-5 left-5 text-white">
              <h2 className="text-xl font-semibold">Women’s Collection</h2>
              <p className="text-sm text-gray-300">Spring Fashion Trends</p>
            </div>
          </div>

          {/* BOTTOM TWO IMAGES */}
          <div className="flex gap-3 h-1/2">
            {/* Bottom Left Image */}
            <div className="relative bg-black rounded-xl w-1/2 overflow-hidden">
              <img
                src={product6}
                alt="Smartphone"
                className="w-full h-full object-contain opacity-85"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg font-semibold">Smartphone</h2>
                <p className="text-sm text-gray-300">Latest Devices</p>
              </div>
            </div>

            {/* Bottom Right Image */}
            <div className="relative bg-black rounded-xl w-1/2 overflow-hidden">
              <img
                src={scent}
                alt="Luxury Perfume"
                className="w-full h-full object-contain opacity-85"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-lg font-semibold">Perfume</h2>
                <p className="text-sm text-gray-300">Luxury Fragrance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
