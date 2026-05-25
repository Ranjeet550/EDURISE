'use client'

import { FaBook, FaStar, FaChalkboardUser, FaUsers, FaChartLine } from 'react-icons/fa6'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-lg">
              <FaBook className="text-2xl sm:text-3xl text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                <span className="text-primary-700">EDU</span>
                <span className="text-accent-600 ml-2">RISE</span>
              </h1>
              <p className="text-sm sm:text-base text-primary-600 font-semibold mt-1">COACHING INSTITUTE</p>
            </div>
          </div>
          <p className="text-accent-600 text-lg sm:text-xl font-semibold italic">Learn Today, Lead Tomorrow</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Offer Box */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-6 sm:p-8 shadow-2xl transform hover:scale-105 transition duration-300">
              <div className="flex items-start gap-4">
                <div className="text-5xl sm:text-6xl flex-shrink-0">
                  <FaStar className="text-accent-300" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3">CLASS 1 TO 10</h2>
                  <div className="inline-block bg-accent-500 text-white px-4 py-2 rounded-full font-bold text-sm sm:text-base mb-3">
                    ALL SUBJECTS
                  </div>
                  <p className="text-sm sm:text-base text-accent-100">⭐⭐⭐⭐⭐ 10+ Years Excellence</p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-primary-700 mb-6">Why Choose EDU RISE?</h3>
              
              <div className="flex gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                <div className="text-3xl flex-shrink-0 text-accent-600">
                  <FaChalkboardUser />
                </div>
                <div>
                  <p className="font-bold text-primary-700 text-sm sm:text-base">Smart Digital Board Classes</p>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1">Interactive learning with cutting-edge technology</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                <div className="text-3xl flex-shrink-0 text-accent-600">
                  <FaUsers />
                </div>
                <div>
                  <p className="font-bold text-primary-700 text-sm sm:text-base">Small Batch Size</p>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1">Personalized attention for every student</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                <div className="text-3xl flex-shrink-0 text-accent-600">
                  <FaChartLine />
                </div>
                <div>
                  <p className="font-bold text-primary-700 text-sm sm:text-base">Weekly Tests & Tracking</p>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1">Regular assessments and performance monitoring</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Founder Info */}
          <div className="relative">
            {/* Admissions Open Badge */}
            <div className="absolute -top-4 -right-4 sm:top-0 sm:right-0 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-center z-20 shadow-xl animate-pulse">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider">🎉 Admissions</p>
              <p className="text-2xl sm:text-3xl font-bold text-white">OPEN</p>
              <p className="text-xs mt-1">Limited Seats Available</p>
            </div>

            {/* Founder Card */}
            <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white rounded-3xl p-6 sm:p-10 pt-16 sm:pt-20 relative shadow-2xl overflow-hidden">
              {/* Card Background Accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10"></div>

              <div className="relative z-10 text-center">
                {/* Avatar */}
                <div className="mb-6 flex justify-center">
                  <div className="w-24 sm:w-28 h-24 sm:h-28 bg-white bg-opacity-10 rounded-full flex items-center justify-center text-6xl sm:text-7xl shadow-lg border-4 border-accent-400">
                    👨‍🏫
                  </div>
                </div>

                {/* Name and Title */}
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">Vivek Sir</h3>
                <p className="text-accent-300 font-semibold text-sm sm:text-base uppercase tracking-wider mb-3">Founder & Head Coach</p>
                <p className="text-neutral-200 text-sm mb-2">Mentor | Guide | Motivator</p>
                <p className="text-accent-200 italic text-xs sm:text-sm mb-6">Building Confidence, Shaping Futures</p>

                {/* Divider */}
                <div className="h-1 w-16 bg-gradient-to-r from-accent-400 to-accent-300 rounded-full mx-auto mb-6"></div>

                {/* Experience Badge */}
                <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-5 sm:p-6 text-center mb-6 hover:bg-opacity-20 transition">
                  <p className="text-4xl sm:text-5xl font-bold text-accent-300 mb-1">10+</p>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Years of Excellence</p>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white py-3 sm:py-4 rounded-xl font-bold hover:from-accent-600 hover:to-accent-700 transition duration-300 shadow-lg text-sm sm:text-base transform hover:scale-105">
                  Get Free Demo Class
                </button>

                {/* Trust Badge */}
                <p className="text-xs text-neutral-300 mt-4">✓ 500+ Happy Students | ✓ 100% Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
