import React, { useEffect, useState } from "react";
import Product4 from "../assets/product4.png";

const Banner = () => {
  const targetDate = new Date("2025-12-31T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="px-6 sm:px-12 lg:px-40 py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center bg-black rounded-2xl p-8 sm:p-10 lg:p-12 gap-8">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="font-bold text-sm text-green-400 mb-3 uppercase">
            Category
          </p>
          <p className="text-white font-semibold text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 max-w-xs sm:max-w-md lg:max-w-lg">
            Enhance Your Music Experience
          </p>

          {/* COUNTDOWN */}
          <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 flex-wrap">
            {/* Countdown Circles */}
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hrs", value: timeLeft.hours },
              { label: "Min", value: timeLeft.minutes },
              { label: "Sec", value: timeLeft.seconds },
            ].map((unit, idx) => (
              <React.Fragment key={unit.label}>
                <div className="bg-gray-200 text-black rounded-full w-12 h-12 sm:w-14 sm:h-14 flex flex-col justify-center items-center">
                  <p className="text-sm sm:text-base font-bold leading-none">
                    {String(unit.value).padStart(2, "0")}
                  </p>
                  <p className="text-[8px] sm:text-[9px] font-medium uppercase">
                    {unit.label}
                  </p>
                </div>
                {idx < 3 && (
                  <span className="text-white text-sm sm:text-base font-semibold">
                    :
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          <button className="bg-green-500 text-white px-5 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base font-medium mt-6 sm:mt-8 rounded-md hover:bg-green-600 transition-all duration-200">
            Buy Now
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center lg:justify-end w-full lg:w-auto">
          <img
            src={Product4}
            alt="Product"
            className="h-56 sm:h-64 md:h-72 lg:h-80 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
