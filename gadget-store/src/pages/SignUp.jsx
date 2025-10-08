import React from "react";
import cartBags from "../assets/cartBags.png";
import { FaGoogle } from "react-icons/fa6"; // ✅ Font Awesome v6
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="pt-10 pb-25">
      <div className="flex flex-col md:flex-row h-auto md:h-[70vh] w-full items-center gap-7 md:gap-28">
        {/* 🔹 Left Side (Blue Background with Image) */}
        <div className="bg-sky-300 flex items-center justify-center w-full md:w-1/2 h-[40vh] md:h-[70vh] px-6 md:pl-20">
          <img
            className="w-[100%] md:w-[90%] object-contain md:scale-110"
            src={cartBags}
            alt="Shopping bags"
          />
        </div>

        {/* 🔹 Right Side (Form Section) */}
        <div className="bg-white w-full md:w-1/3 flex flex-col justify-center px-6 md:px-25 py-0 md:py-0">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
            Create an account
          </h2>
          <p className="text-sm text-gray-500 mb-8">Enter your details below</p>

          {/* Form */}
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border-b border-gray-300 focus:border-gray-500 outline-none py-2 text-sm"
            />
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="border-b border-gray-300 focus:border-gray-500 outline-none py-2 text-sm"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b border-gray-300 focus:border-gray-500 outline-none py-2 text-sm"
            />

            {/* Create Account Button */}
            <button
              type="submit"
              className="mt-6 bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 rounded-md transition"
            >
              Create Account
            </button>

            {/* Sign up with Google Button */}
            <button
              type="button"
              className="flex items-center justify-center gap-2 border border-gray-300 text-sm py-2 rounded-md hover:bg-gray-50 transition"
            >
              <FaGoogle className="text-red-500 text-lg" />
              Sign up with Google
            </button>
          </form>

          {/* Already have an account link */}
          <p className="text-sm text-gray-600 mt-6 text-center">
            Already have an account?{" "}
            <NavLink
            to="/login"
            className="hover:underline text-red-500"
          >
            Log in
          </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
