import React from 'react'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'  // ✅ Correct import for React Icons v6

const Contact = () => {
  return (
    <div className='pt-40 pb-10'>
      {/* ✅ Breadcrumb */}
      <p className="text-base sm:text-lg px-4 sm:px-10 md:px-20 lg:px-40">
        <span className="text-gray-500">Home</span>
        <span className="text-gray-400 mx-1">/</span>
        <span className="text-black font-medium">About</span>
      </p>

      <div className='py-10 px-4 sm:px-10 md:px-20 lg:px-40'>
        <div className='flex flex-col lg:flex-row gap-6'>

          {/* ✅ Left Card */}
          <div className='bg-white shadow-lg w-full lg:w-1/3 rounded-lg flex flex-col items-start p-6 min-h-[320px]'>
            {/* Call To Us */}
            <p className="flex items-center gap-3 text-sm sm:text-base font-medium text-gray-800">
              <span className="bg-red-600 rounded-full p-2 flex items-center justify-center border-2 border-white">
                <FaPhone className="text-white" size={16} />
              </span>
              Call To Us
            </p>
            <p className='text-xs sm:text-sm mt-3'>We are available 24/7, 7 days a week.</p>
            <p className='text-xs sm:text-sm mt-1'>Phone: +2348144793210</p>

            <hr className='mt-8 mb-4 w-full border-gray-200' />

            {/* Write To Us */}
            <p className="flex items-center gap-3 text-sm sm:text-base font-medium text-gray-800">
              <span className="bg-red-600 rounded-full p-2 flex items-center justify-center border-2 border-white">
                <FaEnvelope className="text-white" size={16} />
              </span>
              Write To Us
            </p>
            <p className='text-xs sm:text-sm mt-3'>Fill out our form and we will contact you via email.</p>
            <p className='text-xs sm:text-sm mt-1'>Email: support@example.com</p>
          </div>

          {/* ✅ Right Card */}
          <div className='bg-white shadow-lg w-full rounded-lg flex flex-col items-start p-6 min-h-[320px]'>
            {/* Input Fields */}
            <form className='w-full'>
            <div className='flex flex-col sm:flex-row gap-4 w-full'>
              <input
                className='bg-gray-100 p-2 rounded-sm flex-1 text-sm sm:text-base'
                type='text'
                placeholder='Your Name'
                name='name'
              />
              <input
                className='bg-gray-100 p-2 rounded-sm flex-1 text-sm sm:text-base'
                type='email'
                placeholder='Your Email'
                name='email'
              />
              <input
                className='bg-gray-100 p-2 rounded-sm flex-1 text-sm sm:text-base'
                type='tel'
                placeholder='Your Phone'
                name='phone'
              />
            </div>

            {/* ✅ Taller Message Box */}
            <textarea
              className='bg-gray-100 p-2 rounded-sm w-full mt-4 min-h-42 resize-none text-sm sm:text-base'
              placeholder='Your Message'
              name='message'
            ></textarea>

            {/* ✅ Submit Button */}
             <div className='flex justify-end'>
              <button className='mt-5 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md self-end text-sm sm:text-base'>
                Send Message
              </button>
            </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
