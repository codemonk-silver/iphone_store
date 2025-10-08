import React from "react";
import {
  FaTruckFast,
  FaHeadset,
  FaMoneyBillWave,
} from "react-icons/fa6";

const Feature = () => {
  return (
    <div className="px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 py-12 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center rounded-xl py-10 px-6 hover:shadow-lg transition-all duration-300">
          <FaTruckFast className="text-red-600 text-4xl sm:text-5xl mb-4" />
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 uppercase">
            FAST AND FREE DELIVERY
          </h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Get your products quickly with no extra cost.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center rounded-xl py-10 px-6 hover:shadow-lg transition-all duration-300">
          <FaHeadset className="text-red-600 text-4xl sm:text-5xl mb-4" />
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 uppercase">
            24/7 CUSTOMER SERVICE
          </h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            We’re here to help you anytime, anywhere.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center rounded-xl py-10 px-6 hover:shadow-lg transition-all duration-300">
          <FaMoneyBillWave className="text-red-600 text-4xl sm:text-5xl mb-4" />
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 uppercase">
            MONEY BACK GUARANTEE
          </h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Full refund if you're not satisfied with your order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
