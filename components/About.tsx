'use client'

import Image from 'next/image'
import { MdBook, MdGpsFixed, MdPeople, MdBarChart, MdCheckCircle, MdStar } from 'react-icons/md'

export default function About() {
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
              <MdBook className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
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
                <MdStar className="w-12 sm:w-14 h-12 sm:h-14 flex-shrink-0 text-yellow-300" />
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
                <MdGpsFixed className="w-8 h-8 flex-shrink-0 text-primary-600" />
                <div>
                  <p className="font-bold text-primary-700 text-sm sm:text-base">Smart Digital Board Classes</p>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1">Interactive learning with cutting-edge technology</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                <MdPeople className="w-8 h-8 flex-shrink-0 text-primary-600" />
                <div>
                  <p className="font-bold text-primary-700 text-sm sm:text-base">Small Batch Size</p>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1">Personalized attention for every student</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                <MdBarChart className="w-8 h-8 flex-shrink-0 text-primary-600" />
                <div>
                  <p className="font-bold text-primary-700 text-sm sm:text-base">Weekly Tests & Tracking</p>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1">Regular assessments and performance monitoring</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Founder Info - Modern Split Layout */}
          <div className="relative">
            

            {/* Modern Split Layout */}
            <div className="grid grid-cols-1 gap-4">
              {/* Top Section - Avatar & Quick Info */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-primary-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-100 rounded-full -mr-16 -mt-16 opacity-40"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-100 rounded-full -ml-12 -mb-12 opacity-40"></div>
                  
                  <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 rounded-3xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition duration-300 overflow-hidden">
                        <Image
                          src="/FOUNDER/IMG-20260525-WA0001.jpg"
                          alt="Vivek Sir - Founder"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Info */}
                    <div className="text-center sm:text-left flex-1">
                      <div className="inline-block bg-gradient-to-r from-accent-100 to-primary-100 text-accent-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                        <MdStar className="w-4 h-4 inline mr-1" /> Founder & Mentor
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-primary-700 mb-1">Vivek Sir</h3>
                      <p className="text-primary-600 font-semibold text-base mb-2">Head Coach & Educator</p>
                      <p className="text-neutral-600 text-sm italic">Building Confidence, Shaping Futures</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Section - Stats Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-4 border-2 border-primary-200 hover:border-primary-400 hover:shadow-lg transition text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-primary-700">10+</p>
                  <p className="text-xs text-primary-600 font-semibold mt-2">Years Experience</p>
                </div>
                <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-4 border-2 border-accent-200 hover:border-accent-400 hover:shadow-lg transition text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-accent-600">500+</p>
                  <p className="text-xs text-accent-600 font-semibold mt-2">Happy Students</p>
                </div>
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-4 border-2 border-primary-200 hover:border-primary-400 hover:shadow-lg transition text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-primary-700">100%</p>
                  <p className="text-xs text-primary-600 font-semibold mt-2">Success Rate</p>
                </div>
              </div>

              {/* Bottom Section - Features & CTA */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-35 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-white to-neutral-50 rounded-3xl p-6 sm:p-8 shadow-xl overflow-hidden border border-neutral-200">
                  {/* Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"></div>
                  
                  <div className="relative z-10">
                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <MdCheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                        <p className="text-sm font-semibold text-neutral-700">1:1 Personal Attention</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <MdCheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                        <p className="text-sm font-semibold text-neutral-700">24/7 Doubt Support</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <MdCheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                        <p className="text-sm font-semibold text-neutral-700">Digital Board Classes</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-4 rounded-xl font-bold hover:from-primary-700 hover:to-accent-700 transition duration-300 shadow-lg text-base transform hover:scale-105 active:scale-95">
                      Get Free Demo Class with Vivek Sir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
