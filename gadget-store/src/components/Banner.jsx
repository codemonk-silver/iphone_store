import React, { useEffect, useState } from 'react';
import Product4 from '../assets/product4.png';

const Banner = () => {
  // 🎯 Set your countdown target date here
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
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="px-40 py-10">
      <div className="flex justify-between bg-black h-3/5 w-full rounded-2xl p-12 items-center">
        {/* LEFT SIDE */}
        <div className="pl-8">
          <p className="font-bold text-sm text-green-400 mb-3">Category</p>
          <p className="text-white font-medium text-5xl mb-8 w-96">
            Enhance Your Music Experience
          </p>

          {/* COUNTDOWN BOX */}
          <div className="flex items-center gap-3">
            {/* Days */}
            <div className="bg-gray-200 text-black rounded-full w-14 h-14 flex flex-col justify-center items-center">
              <p className="text-sm font-bold leading-none">
                {String(timeLeft.days).padStart(2, '0')}
              </p>
              <p className="text-[9px] font-medium uppercase">Days</p>
            </div>

            <span className="text-white text-sm font-semibold">:</span>

            {/* Hours */}
            <div className="bg-gray-200 text-black rounded-full w-14 h-14 flex flex-col justify-center items-center">
              <p className="text-sm font-bold leading-none">
                {String(timeLeft.hours).padStart(2, '0')}
              </p>
              <p className="text-[9px] font-medium uppercase">Hrs</p>
            </div>

            <span className="text-white text-sm font-semibold">:</span>

            {/* Minutes */}
            <div className="bg-gray-200 text-black rounded-full w-14 h-14 flex flex-col justify-center items-center">
              <p className="text-sm font-bold leading-none">
                {String(timeLeft.minutes).padStart(2, '0')}
              </p>
              <p className="text-[9px] font-medium uppercase">Min</p>
            </div>

            <span className="text-white text-sm font-semibold">:</span>

            {/* Seconds */}
            <div className="bg-gray-200 text-black rounded-full w-14 h-14 flex flex-col justify-center items-center">
              <p className="text-sm font-bold leading-none">
                {String(timeLeft.seconds).padStart(2, '0')}
              </p>
              <p className="text-[9px] font-medium uppercase">Sec</p>
            </div>
          </div>

          <button className="bg-green-500 text-white px-5 py-2 text-sm font-medium mt-8 rounded-md hover:bg-green-600 transition-all duration-200">
            Buy Now
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <img src={Product4} alt="Product" className="h-72 pr-16 object-contain" />
      </div>
    </div>
  );
};

export default Banner;
