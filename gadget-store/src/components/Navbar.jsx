import React, { useState } from "react";
import { FaMagnifyingGlass, FaRegHeart, FaBars, FaXmark } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
    { code: "de", label: "Deutsch" },
  ];

  return (
    <div className="w-full">
      {/* 🔹 Top Banner */}
      <div className="bg-black w-full h-8 flex flex-wrap justify-center sm:justify-between items-center px-4 text-white text-xs">
        <p className="text-center sm:text-left font-medium">
          Summer Sales For All Swim Suits And Free Express Delivery - OFF 50%!
          <a href="#" className="underline ml-1">
            Shop Now
          </a>
        </p>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="hidden sm:block text-xs text-white bg-black border border-gray-600 rounded-md px-2 py-0.5 focus:outline-none"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code} className="bg-gray-200 text-black">
              {lang.label}
            </option>
          ))}
        </select>
      </div>

      {/* 🔹 Navbar Main */}
      <div className="mt-5 px-4 sm:px-8 md:px-20 lg:px-40 flex items-center justify-between w-full">
        {/* Logo */}
        <h1 className="text-2xl font-semibold">Exclusive</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink
            to="/"
            className="hover:underline hover:decoration-gray-400 decoration-2 underline-offset-4 transition-all"
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:underline hover:decoration-gray-400 decoration-2 underline-offset-4 transition-all"
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className="hover:underline hover:decoration-gray-400 decoration-2 underline-offset-4 transition-all"
          >
            About
          </NavLink>
          <NavLink
            to="/signUp"
            className="hover:underline hover:decoration-gray-400 decoration-2 underline-offset-4 transition-all"
          >
            Sign Up
          </NavLink>
        </div>

        {/* Icons + Search */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative hidden sm:block">
            <input
              type="search"
              placeholder="What Are You Looking For?"
              className="border w-52 placeholder-gray-400 rounded-md pl-2 pr-8 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <FaMagnifyingGlass className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs" />
          </div>

          {/* Icons */}
          <FaRegHeart className="text-lg cursor-pointer hover:text-red-500" />
          <HiOutlineShoppingCart className="text-lg cursor-pointer hover:text-blue-500" />

          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden text-xl ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-gray-100 w-full px-6 py-4 flex flex-col gap-3 text-sm font-medium">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/signUp" onClick={() => setMenuOpen(false)}>
            Sign Up
          </NavLink>
          {/* Mobile Search */}
          <div className="relative mt-3">
            <input
              type="search"
              placeholder="What Are You Looking For?"
              className="border w-full placeholder-gray-400 rounded-md pl-2 pr-8 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <FaMagnifyingGlass className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs" />
          </div>
        </div>
      )}

      <hr className="mt-4 text-gray-300" />
    </div>
  );
};

export default Navbar;
