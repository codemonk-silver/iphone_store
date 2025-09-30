import React, { useState } from "react";
import { FaMagnifyingGlass, FaRegHeart } from "react-icons/fa6"; 
import { HiOutlineShoppingCart } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [language, setLanguage] = useState("en");

  const languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
    { code: "de", label: "Deutsch" },
  ];

  return (
    <div>
      {/* Top banner */}
      <div className="bg-black w-full h-8 flex justify-between items-center px-4">
        {/* Left side text */}
        <div className="flex gap-3 font-medium text-xs items-center justify-center flex-1">
          <p className="text-white">
            Summer Sales For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a className="text-white underline" href="">
            Shop Now
          </a>
        </div>

        {/* Right side language selector */}
        <div className="pr-36">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="text-xs text-white rounded-md px-2 py-0.5 focus:outline-none border-none"
          >
            {languages.map((lang) => (
              <option
                key={lang.code}
                value={lang.code}
                className="bg-gray-200 text-black"
              >
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Navbar links + search */}
      <div className="mt-7 px-40 flex items-center justify-between w-full">
        {/* Logo + Links grouped */}
        <div className="flex items-center gap-44">
          <h1 className="text-2xl font-medium">Exclusive</h1>

          <div className="flex gap-8">
            <NavLink to='/' className="hover:underline hover:decoration-gray-400 decoration-2 underline-offset-4 transition-all duration-300 ease-in-out">Home</NavLink>
            <NavLink to='/contact' className="hover:underline hover:decoration-gray-400 decoration-2 underline-offset-4 transition-all duration-300 ease-in-out">Contact</NavLink>
            <NavLink to='/about' className="hover:underline hover:decoration-gray-400 decoration-2 underline-offset-4 transition-all duration-300 ease-in-out">About</NavLink>
            <NavLink to='/signUp' className="hover:underline hover:decoration-gray-400 decoration-2 underline-offset-4 transition-all duration-300 ease-in-out">Sign Up</NavLink>
          </div>
        </div>

        {/* Search + icons */}
        <div className="flex items-center gap-4">
          {/* Search box with icon */}
          <div className="relative">
            <input
              type="search"
              placeholder="What Are You Looking For?"
              className="border w-52 placeholder-gray-400 rounded-md pl-2 pr-8 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <FaMagnifyingGlass className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs" />
          </div>

          {/* Heart + Cart */}
          <FaRegHeart className="text-lg cursor-pointer hover:text-red-500" />
          <HiOutlineShoppingCart className="text-lg cursor-pointer hover:text-blue-500" />
        </div>
      </div>
      <hr className="mt-3 text-gray-400" />
    </div>
  );
};

export default Navbar;
