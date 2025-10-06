import React from "react";
import {
  FaTruckFast,     // replaces FaShippingFast
  FaHeadset,       // same name in fa6
  FaMoneyBillWave, // same name in fa6
} from "react-icons/fa6"; // ✅ correct Font Awesome 6 import

const Feature = () => {
  return (
    <div className="px-40 py-16 bg-white">
      <div className="flex flex-wrap justify-between items-center gap-6">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center rounded-xl py-10 px-6 flex-1 min-w-[250px] hover:shadow-lg transition-all duration-300">
          <FaTruckFast className="text-red-600 text-5xl mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 uppercase">
            FAST AND FREE DELIVERY
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            Get your products quickly with no extra cost.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center rounded-xl py-10 px-6 flex-1 min-w-[250px] hover:shadow-lg transition-all duration-300">
          <FaHeadset className="text-red-600 text-5xl mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 uppercase">
            24/7 CUSTOMER SERVICE
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            We’re here to help you anytime, anywhere.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center rounded-xl py-10 px-6 flex-1 min-w-[250px] hover:shadow-lg transition-all duration-300">
          <FaMoneyBillWave className="text-red-600 text-5xl mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 uppercase">
            MONEY BACK GUARANTEE
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            Full refund if you're not satisfied with your order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
