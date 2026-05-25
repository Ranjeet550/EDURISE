'use client'

import { FaGift, FaClock, FaRocket, FaGem } from 'react-icons/fa6'

export default function SpecialOffer() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block bg-accent-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-pulse flex items-center gap-2">
              <FaGift className="text-lg" />
              LIMITED PERIOD OFFER!
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Special Admission <span className="text-accent-300">Benefits</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-100 leading-relaxed">
              Join EDU RISE today and unlock exclusive benefits designed to accelerate your learning journey.
            </p>

            <div className="space-y-4">
              {[
                { icon: FaGift, text: 'FREE DEMO CLASS' },
                { icon: FaClock, text: 'EARLY ADMISSION BENEFITS' },
                { icon: FaGem, text: 'UP TO 20% DISCOUNT' },
                { icon: FaRocket, text: 'PRIORITY BATCH PLACEMENT' },
              ].map((item, idx) => {
                const ItemIcon = item.icon
                return (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300">
                    <span className="text-2xl sm:text-3xl flex-shrink-0">
                      <ItemIcon />
                    </span>
                    <span className="font-bold text-base sm:text-lg">{item.text}</span>
                  </div>
                )
              })}
            </div>

            <button className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-accent-600 hover:to-accent-700 transition duration-300 shadow-lg transform hover:scale-105 w-full sm:w-auto">
              Claim Your Offer Now
            </button>
          </div>

          {/* Right Content - Why Act Now */}
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent-400 rounded-full opacity-10"></div>

            <h3 className="text-2xl sm:text-3xl font-bold mb-8">Why Act Now?</h3>

            <div className="space-y-4">
              {[
                {
                  icon: FaRocket,
                  title: 'Limited Seats Available',
                  desc: 'Only 20 seats left for this batch',
                },
                {
                  icon: FaClock,
                  title: 'Time-Sensitive Offer',
                  desc: 'Valid only for the next 30 days',
                },
                {
                  icon: FaRocket,
                  title: 'Early Bird Advantage',
                  desc: 'Get priority placement in batches',
                },
                {
                  icon: FaGem,
                  title: 'Special Discount',
                  desc: 'Up to 20% off on annual fees',
                },
              ].map((item, idx) => {
                const ItemIcon = item.icon
                return (
                  <div
                    key={idx}
                    className="group p-5 sm:p-6 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl sm:text-4xl flex-shrink-0 group-hover:scale-110 transition duration-300">
                        <ItemIcon />
                      </span>
                      <div className="flex-1">
                        <h4 className="font-bold text-base sm:text-lg mb-1">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-neutral-200">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Button */}
            <button className="w-full mt-8 bg-white text-primary-700 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-neutral-100 transition duration-300 shadow-lg transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
