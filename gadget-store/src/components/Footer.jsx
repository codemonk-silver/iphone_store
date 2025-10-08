import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa6"; // ✅ Font Awesome v6 icons

const Footer = () => {
  const barcodeUrl =
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/Barcode-128.svg";
  const playstoreUrl =
    "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
  const appstoreUrl =
    "https://upload.wikimedia.org/wikipedia/commons/9/9d/Download_on_the_App_Store_Badge.svg";

  return (
    <footer className="bg-black text-white text-sm">
      <div className="px-6 sm:px-12 md:px-24 lg:px-32 xl:px-40 py-10">
        <div className="flex flex-wrap justify-between gap-10">
          {/* Exclusive */}
          <div className="flex flex-col gap-2 min-w-[220px] w-full sm:w-auto">
            <p className="font-semibold text-base">Exclusive</p>
            <a href="#" className="underline hover:text-gray-400">
              Subscribe
            </a>
            <span>Get 10% off your first order</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 px-3 py-2 rounded text-black text-sm bg-white outline-none w-full sm:w-56"
            />
          </div>

          {/* Support */}
          <div className="flex flex-col gap-1 min-w-[200px] w-full sm:w-auto">
            <p className="font-semibold text-base mb-3">Support</p>
            <span className="max-w-[200px]">
              17 Awotile Street Road 7, Ile Ife, Osun State
            </span>
            <p>exclusive@gmail.com</p>
            <p>+234 804 158 2240</p>
          </div>

          {/* Account */}
          <div className="flex flex-col gap-1 min-w-[150px] w-full sm:w-auto">
            <p className="font-semibold text-base mb-3">Account</p>
            <div className="flex flex-col gap-1">
              <a href="#" className="hover:text-gray-400">My Account</a>
              <a href="#" className="hover:text-gray-400">Login / Register</a>
              <a href="#" className="hover:text-gray-400">Cart</a>
              <a href="#" className="hover:text-gray-400">Wishlist</a>
              <a href="#" className="hover:text-gray-400">Shop</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-1 min-w-[150px] w-full sm:w-auto">
            <p className="font-semibold text-base mb-3">Quick Link</p>
            <div className="flex flex-col gap-1">
              <a href="#" className="hover:text-gray-400">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400">Terms Of Use</a>
              <a href="#" className="hover:text-gray-400">FAQ</a>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </div>
          </div>

          {/* Download App */}
          <div className="flex flex-col gap-3 min-w-[220px] w-full sm:w-auto">
            <p className="font-semibold text-base mb-2">Download App</p>
            <span>Save $3 with App New User Only</span>

            {/* Barcode + Store Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-1">
              {/* Barcode */}
              <img src={barcodeUrl} alt="Barcode" className="w-20 h-auto" />

              {/* Store Buttons */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center border border-white rounded-md px-2 py-1 gap-2">
                  <img
                    src={playstoreUrl}
                    alt="Playstore"
                    className="w-20 h-auto"
                  />
                  <span className="text-xs hidden sm:inline">
                    Get on Playstore
                  </span>
                </div>

                <div className="flex items-center border border-white rounded-md px-2 py-1 gap-2">
                  <img src={appstoreUrl} alt="App Store" className="w-20 h-auto" />
                  <span className="text-xs hidden sm:inline">
                    Get it on App Store
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-3 text-lg">
              <a href="#"><FaFacebookF className="hover:text-gray-400" /></a>
              <a href="#"><FaInstagram className="hover:text-gray-400" /></a>
              <a href="#"><FaTwitter className="hover:text-gray-400" /></a>
              <a href="#"><FaLinkedinIn className="hover:text-gray-400" /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-xs text-gray-400">
          © 2025 Exclusive. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
