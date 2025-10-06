import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa6"; // v6 icons

const Footer = () => {
  const barcodeUrl =
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/Barcode-128.svg";
  const playstoreUrl =
    "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
  const appstoreUrl =
    "https://upload.wikimedia.org/wikipedia/commons/9/9d/Download_on_the_App_Store_Badge.svg";

  return (
    <div className="px-40 pb-5">
      <div className="bg-black text-white py-10 text-sm">
        <div className="flex p-8 px-24 gap-10">
          {/* Exclusive */}
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-base">Exclusive</p>
            <a href="#" className="underline hover:text-gray-400">
              Subscribe
            </a>
            <span>Get 10% off your first order</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 px-3 py-1.5 rounded text-black text-sm bg-white outline-none"
            />
          </div>

          {/* Support */}
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-base mb-3">Support</p>
            <span className="w-36">17 Awotile Street Road 7, Ile Ife, Osun State</span>
            <p>exclusive@gmail.com</p>
            <p>+234 804 158 2240</p>
          </div>

          {/* Account */}
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-base mb-3">Account</p>
            <div className="flex flex-col gap-1">
              <a href="#">My Account</a>
              <a href="#">Login / Register</a>
              <a href="#">Cart</a>
              <a href="#">Wishlist</a>
              <a href="#">Shop</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-base mb-3">Quick Link</p>
            <div className="flex flex-col gap-1">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms Of Use</a>
              <a href="#">FAQ</a>
              <a href="#">Contact</a>
            </div>
          </div>

          {/* Download App */}
          <div className="flex flex-col gap-3">
            <p className="font-semibold text-base mb-2">Download App</p>
            <span>Save $3 with App New User Only</span>

            {/* Barcode + Store Buttons */}
            <div className="flex items-center gap-3 mt-1">
              {/* Barcode */}
              <div>
                <img src={barcodeUrl} alt="Barcode" className="w-20 h-auto" />
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center border border-white rounded-md px-2 py-1 gap-2">
                  <img
                    src={playstoreUrl}
                    alt="Playstore"
                    className="w-20 h-auto"
                  />
                  <span className="text-xs">Get on Playstore</span>
                </div>

                <div className="flex items-center border border-white rounded-md px-2 py-1 gap-2">
                  <img src={appstoreUrl} alt="App Store" className="w-20 h-auto" />
                  <span className="text-xs">Get it on App Store</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-3 text-lg">
              <a href="#">
                <FaFacebookF className="hover:text-gray-400" />
              </a>
              <a href="#">
                <FaInstagram className="hover:text-gray-400" />
              </a>
              <a href="#">
                <FaTwitter className="hover:text-gray-400" />
              </a>
              <a href="#">
                <FaLinkedinIn className="hover:text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
