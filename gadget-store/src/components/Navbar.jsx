import React, { useState, useEffect } from "react";
import {
  FaMagnifyingGlass,
  FaRegHeart,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const isAuthPage =
    location.pathname === "/signUp" || location.pathname === "/login";

  // Close menus when route changes
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    // also ensure page is scrolled to top when route changes (prevents jumping)
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    setDropdownOpen(false);
  };

  const languages = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
    { code: "de", label: "Deutsch" },
  ];

  return (
    // fixed at top so navbar is always visible
    <div className="w-full fixed top-0 left-0 bg-white z-[60] shadow-md">
      {/* Top banner */}
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

      {/* Navbar main */}
      <div className="relative mt-5 px-4 sm:px-8 md:px-20 lg:px-40 flex items-center justify-between w-full">
        <h1 className="text-2xl font-semibold">Exclusive</h1>

        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" className="hover:underline decoration-2 underline-offset-4">Home</NavLink>
          <NavLink to="/contact" className="hover:underline decoration-2 underline-offset-4">Contact</NavLink>
          <NavLink to="/about" className="hover:underline decoration-2 underline-offset-4">About</NavLink>
          <NavLink to="/signUp" className="hover:underline decoration-2 underline-offset-4">Sign Up</NavLink>
        </div>

        <div className="flex items-center gap-3 relative">
          <div className="relative hidden sm:block">
            <input
              type="search"
              placeholder="What Are You Looking For?"
              className="border w-52 placeholder-gray-400 rounded-md pl-2 pr-8 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <FaMagnifyingGlass className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs" />
          </div>

          {!isAuthPage && (
            <>
              <FaRegHeart className="text-lg cursor-pointer hover:text-red-500" />
              <HiOutlineShoppingCart className="text-lg cursor-pointer hover:text-blue-500" />

              {isLoggedIn && (
                <div className="relative">
                  <FaUserCircle
                    className="text-2xl cursor-pointer hover:text-gray-700"
                    title="My Account"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  />
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden border z-[70] animate-slide-down">
                      <NavLink to="/account" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>Manage My Account</NavLink>
                      <NavLink to="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>My Orders</NavLink>
                      <NavLink to="/cancellations" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>My Cancellations</NavLink>
                      <NavLink to="/reviews" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>My Reviews</NavLink>
                      <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">Log Out</button>
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          <button className="md:hidden text-xl ml-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu: fixed so it DOES NOT push page content */}
      {menuOpen && (
        <div className="md:hidden fixed top-24 left-0 w-full bg-gray-100 px-6 py-4 flex flex-col gap-3 text-sm font-medium shadow-lg z-50">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/signUp" onClick={() => setMenuOpen(false)}>Sign Up</NavLink>
        </div>
      )}

      <hr className="mt-4 text-gray-300" />
    </div>
  );
};

export default Navbar;
