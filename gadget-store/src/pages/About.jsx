import React from "react";
import profilepics from "../assets/profilepics.png";
import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";
import {
  FaUsers,
  FaCartShopping,
  FaUserCheck,
  FaDollarSign,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTruckFast,
  FaHeadset,
  FaMoneyBillWave,
} from "react-icons/fa6";


const About = () => {
  return (
    <div className="pt-40 pb-16 min-h-[200vh] bg-white overflow-x-hidden">
      {/* Breadcrumb */}
      <p className="text-lg px-6 md:px-20 lg:px-40">
        <span className="text-gray-500">Home</span>
        <span className="text-gray-400 mx-1">/</span>
        <span className="text-black font-medium">About</span>
      </p>

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-12 gap-16 px-4 sm:px-6 md:px-10 lg:px-0">
        {/* Text Section */}
        <div className="flex flex-col max-w-3xl w-full lg:w-1/2 lg:pl-40">
          <h1 className="font-semibold text-4xl lg:text-5xl mb-8 text-gray-900 text-center lg:text-left">
            Our Story
          </h1>
          <p className="text-black leading-relaxed text-sm sm:text-base text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            illo, voluptatum molestias magni laudantium quidem impedit ex in
            eos, exercitationem at atque tempore possimus aliquam repellendus
            voluptate adipisci officiis omnis! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Adipisci, perspiciatis! Quia iste,
            dolorem repellendus distinctio harum iusto animi facere nesciunt,
            quis suscipit earum et eaque ad, maiores quam! Amet, neque?
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={profilepics}
            alt="About our team"
            className="w-full max-w-xl shadow-xl object-cover object-center rounded-lg"
          />
        </div>
      </div>

      {/* Stats Cards Section */}
      <div className="px-6 md:px-20 lg:px-40 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <FaUsers />, stat: "2,500+", text: "Sellers active on our site" },
            { icon: <FaCartShopping />, stat: "15,000+", text: "Monthly product sale" },
            { icon: <FaUserCheck />, stat: "50,000+", text: "Customers active on our site" },
            { icon: <FaDollarSign />, stat: "$5M+", text: "Annual gross sale in our site" },
          ].map((card, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg 
                         hover:shadow-xl transition-all duration-300 hover:scale-105 
                         hover:bg-red-600 cursor-pointer"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 
                           bg-gray-100 border-[4px] border-gray-400
                           transition-all duration-300 
                           group-hover:bg-white/20"
              >
                {React.cloneElement(card.icon, {
                  className:
                    "w-6 h-6 text-gray-600 transition-colors duration-300 group-hover:text-white",
                })}
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-white">
                {card.stat}
              </h3>

              <p className="text-gray-600 transition-colors duration-300 group-hover:text-white">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Cards Section */}
      <div className="px-6 md:px-20 lg:px-40 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { img: member1, role: "Chief Executive Officer" },
            { img: member2, role: "Head of Marketing" },
            { img: member3, role: "Lead Developer" },
          ].map((member, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-full bg-gray-200 flex justify-center items-center h-72 shadow-lg rounded-lg overflow-hidden">
                <img
                  src={member.img}
                  alt={member.role}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="mt-4 pl-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {member.role}
                </h3>

                <div className="flex justify-start space-x-4 text-gray-600">
                  <a href="#" className="hover:text-blue-500 transition-colors">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-blue-700 transition-colors">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Cards Section */}
      <div className="px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center rounded-xl py-10 px-6 hover:shadow-lg transition-all duration-300">
            <FaTruckFast className="text-red-600 text-4xl sm:text-5xl mb-4" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 uppercase">
              FAST AND FREE DELIVERY
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Get your products quickly with no extra cost.
            </p>
          </div>

          <div className="flex flex-col items-center text-center rounded-xl py-10 px-6 hover:shadow-lg transition-all duration-300">
            <FaHeadset className="text-red-600 text-4xl sm:text-5xl mb-4" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 uppercase">
              24/7 CUSTOMER SERVICE
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              We’re here to help you anytime, anywhere.
            </p>
          </div>

          <div className="flex flex-col items-center text-center rounded-xl py-10 px-6 hover:shadow-lg transition-all duration-300">
            <FaMoneyBillWave className="text-red-600 text-4xl sm:text-5xl mb-4" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 uppercase">
              MONEY BACK GUARANTEE
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Full refund if you're not satisfied with your order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
