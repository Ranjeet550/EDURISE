'use client'

import Image from 'next/image'
import { MdBook, MdCheckCircle, MdStar } from 'react-icons/md'

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 lg:py-28 overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-accent-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Left Section - Our Offering */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Primary Offering Section */}
            <div className="border-l-4 border-primary-600 pl-6">
              <div className="flex items-start gap-4 mb-6">
                <MdStar className="w-10 h-10 text-accent-500 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-2">CLASS 1 TO 10</h2>
                  <div className="inline-block bg-accent-100 text-accent-700 px-3 py-1 text-sm font-bold uppercase tracking-wide rounded-sm">
                    ALL SUBJECTS
                  </div>
                </div>
              </div>
              <p className="text-neutral-600 text-lg font-light">Comprehensive education for <span className="font-bold text-red-600">All Academic Levels</span> with personalized coaching and expert guidance.</p>
              <p className="text-accent-600 font-semibold mt-4 flex items-center gap-2">
                ⭐⭐⭐⭐⭐ <span className="text-neutral-700">10+ Years Excellence</span>
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-neutral-200"></div>

            {/* Key Features Section */}
            <div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MdCheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 font-medium">1:1 Personal Attention</span>
                </li>
                <li className="flex items-start gap-3">
                  <MdCheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 font-medium">24/7 Doubt Support</span>
                </li>
                <li className="flex items-start gap-3">
                  <MdCheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 font-medium">Digital Board Classes</span>
                </li>
                <li className="flex items-start gap-3">
                  <MdCheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 font-medium">Doubt Revision Sessions</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Center Section - Founder Profile */}
          <div className="lg:col-span-1">
            
            {/* Founder Image and Title */}
            <div className="mb-8">
              <div className="relative mb-8">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/FOUNDER/WhatsApp Image 2026-06-19 at 6.50.55 PM.jpeg"
                    alt="Vivek Sir - Founder"
                    width={400}
                    height={500}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 text-accent-600 px-4 py-2 rounded-lg font-bold text-sm">
                  <span className="bg-yellow-200 px-2 py-1 rounded">Founder & Mentor</span>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-1">Vivek Sir</h3>
                <p className="text-primary-600 font-semibold text-base mb-3 bg-accent-100 px-3 py-1 rounded-md inline-block">Head Coach & Educator</p>
                <p className="text-neutral-600 text-sm font-light italic">Building Confidence, Shaping Futures</p>
              </div>

            </div>

          </div>

          {/* Right Section - Statistics and CTA */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Statistics Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-neutral-900 uppercase tracking-wide text-primary-700 mb-8">Track Record</h3>
              
              <div className="border-l-4 border-primary-600 pl-6 py-2">
                <p className="text-4xl font-bold text-primary-700">10+</p>
                <p className="text-neutral-600 text-sm font-medium mt-1">Years of Experience</p>
              </div>

              <div className="border-l-4 border-accent-500 pl-6 py-2">
                <p className="text-4xl font-bold text-accent-600">500+</p>
                <p className="text-neutral-600 text-sm font-medium mt-1">Students Trained</p>
              </div>

              <div className="border-l-4 border-primary-600 pl-6 py-2">
                <p className="text-4xl font-bold text-primary-700">100%</p>
                <p className="text-neutral-600 text-sm font-medium mt-1">Success Rate</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-8 border-t-2 border-neutral-200">
              <p className="text-neutral-700 text-sm font-medium mb-6 leading-relaxed">
                Join hundreds of students who have transformed their academic journey with personalized coaching from Vivek Sir.
              </p>
              <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 px-6 font-bold text-base hover:from-primary-700 hover:to-primary-800 transition duration-300 shadow-lg rounded-lg">
                Get Free Demo Class
              </button>
              <p className="text-center text-neutral-600 text-xs font-medium mt-4">No credit card required</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
