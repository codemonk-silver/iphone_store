import React from "react";
import cartBags from "../assets/cartBags.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ import

const Login = () => {
  const { setIsLoggedIn } = useAuth(); // ✅ access the function
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ update global state
    setIsLoggedIn(true);

    // ✅ redirect to account page
    navigate("/account");
  };

  return (
    <div className="pt-10 pb-10 md:pb-25">
      <div className="flex flex-col md:flex-row h-auto md:h-[70vh] w-full items-center gap-7 md:gap-28 px-4 md:px-0">
        <div className="bg-sky-300 flex items-center justify-center w-full md:w-1/2 h-[35vh] sm:h-[40vh] md:h-[70vh] px-4 md:pl-20">
          <img
            className="w-[90%] sm:w-[100%] md:w-[90%] object-contain md:scale-110"
            src={cartBags}
            alt="Shopping bags"
          />
        </div>

        <div className="bg-white w-full md:w-1/3 flex flex-col justify-center px-4 sm:px-6 md:px-25 py-6 md:py-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-2 text-center md:text-left">
            Log in to Exclusive
          </h2>
          <p className="text-sm text-gray-500 mb-8 text-center md:text-left">
            Enter your details below
          </p>

          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
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

            <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4 sm:gap-0">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-6 rounded-md transition w-full sm:w-auto"
              >
                Log in
              </button>
              <NavLink
                to="/account"
                className="hover:underline text-red-500 text-sm text-center sm:text-right"
              >
                Forget Password?
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
