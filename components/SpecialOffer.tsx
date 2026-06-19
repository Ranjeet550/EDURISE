'use client'

import { FaGift, FaClock, FaRocket, FaGem, FaCheck } from 'react-icons/fa6'

export default function SpecialOffer() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated background elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-6 px-5 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-bold shadow-sm border border-accent-200">
            <FaGift className="text-lg animate-bounce" style={{ animationDelay: '0.2s' }} />
            LIMITED TIME OFFER
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Your Path to Success <br />
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Starts Here</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful students who transformed their careers with EDU RISE. Get exclusive admission benefits today.
          </p>
        </div>

        {/* Main Offer Banner */}
        <div className="mb-16 relative">
          <div className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-600 rounded-3xl p-1 shadow-2xl">
            <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              {/* Corner decorations */}
              <div className="absolute top-6 right-6 text-accent-400 opacity-10 text-9xl">
                <FaGift />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
                {/* Left side - Main offer */}
                <div className="text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-1 bg-gradient-to-r from-accent-400 to-accent-300"></div>
                    <span className="text-accent-300 font-bold text-sm">EXCLUSIVE BENEFITS</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                    Special Admission Package
                  </h3>

                  <p className="text-neutral-200 text-lg mb-8 leading-relaxed">
                    Limited to 20 seats only. Join this batch and get premium benefits designed to fast-track your success.
                  </p>

                  <button className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-accent-600 hover:to-accent-700 transition duration-300 shadow-xl transform hover:scale-105 w-full sm:w-auto">
                    Claim Your Offer
                  </button>
                </div>

                {/* Right side - Benefits Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: FaGift, label: 'FREE Demo', value: 'Class' },
                    { icon: FaClock, label: '50% OFF', value: 'Fees' },
                    { icon: FaRocket, label: 'Priority', value: 'Placement' },
                    { icon: FaCheck, label: '100%', value: 'Guarantee' },
                  ].map((item, idx) => {
                    const ItemIcon = item.icon
                    return (
                      <div key={idx} className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-2xl p-5 sm:p-6 text-center hover:bg-opacity-20 transition duration-300 transform hover:-translate-y-1">
                        <ItemIcon className="text-3xl sm:text-4xl text-accent-300 mx-auto mb-3" />
                        <p className="text-white font-bold text-sm sm:text-base">{item.label}</p>
                        <p className="text-accent-200 font-bold text-xs sm:text-sm">{item.value}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Act Now Section - Vertical Timeline with Icons */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why You Should Act Now</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Time is running out. Here's what makes this moment critical for your success.</p>
          </div>

          {/* Desktop: Vertical timeline with alternating layout */}
          <div className="hidden lg:block max-w-4xl mx-auto">
            {[
              {
                icon: FaRocket,
                number: '01',
                title: 'Limited Seats Available',
                desc: 'Only 20 spots left in this batch',
                color: 'from-blue-500 to-blue-600',
                bgColor: 'bg-blue-50',
              },
              {
                icon: FaClock,
                number: '02',
                title: '30-Day Offer Window',
                desc: 'Offer expires in 30 days – don\'t wait',
                color: 'from-orange-500 to-orange-600',
                bgColor: 'bg-orange-50',
              },
              {
                icon: FaGem,
                number: '03',
                title: 'Best Pricing Ever',
                desc: 'Highest discount we\'ve ever offered',
                color: 'from-purple-500 to-purple-600',
                bgColor: 'bg-purple-50',
              },
              {
                icon: FaCheck,
                number: '04',
                title: 'Instant Access',
                desc: 'Start learning immediately after enrollment',
                color: 'from-green-500 to-green-600',
                bgColor: 'bg-green-50',
              },
            ].map((item, idx) => {
              const ItemIcon = item.icon
              const isEven = idx % 2 === 0
              return (
                <div key={idx} className="mb-12 last:mb-0">
                  <div className={`flex gap-8 items-center ${!isEven && 'flex-row-reverse'}`}>
                    {/* Timeline dot and line */}
                    <div className="flex flex-col items-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition duration-300`}>
                        <ItemIcon className="text-2xl" />
                      </div>
                      {idx < 3 && <div className="w-1 h-12 bg-gradient-to-b from-gray-300 to-transparent mt-4"></div>}
                    </div>

                    {/* Content Card */}
                    <div className={`flex-1 ${item.bgColor} rounded-2xl p-8 border-l-4 border-gradient-to-b`} style={{ borderLeftColor: `var(--color-gradient-start)` }}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-bold text-gray-500">REASON {item.number}</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile & Tablet: Stacked cards layout */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: FaRocket,
                number: '01',
                title: 'Limited Seats',
                desc: 'Only 20 spots left in this batch',
                color: 'from-blue-500 to-blue-600',
                bgColor: 'bg-blue-50',
              },
              {
                icon: FaClock,
                number: '02',
                title: '30-Day Window',
                desc: 'Offer expires in 30 days',
                color: 'from-orange-500 to-orange-600',
                bgColor: 'bg-orange-50',
              },
              {
                icon: FaGem,
                number: '03',
                title: 'Best Pricing',
                desc: 'Highest discount ever offered',
                color: 'from-purple-500 to-purple-600',
                bgColor: 'bg-purple-50',
              },
              {
                icon: FaCheck,
                number: '04',
                title: 'Instant Access',
                desc: 'Start learning immediately',
                color: 'from-green-500 to-green-600',
                bgColor: 'bg-green-50',
              },
            ].map((item, idx) => {
              const ItemIcon = item.icon
              return (
                <div key={idx} className={`${item.bgColor} rounded-2xl p-6 border-t-4 border-gray-200 hover:shadow-lg transition duration-300 transform hover:-translate-y-1 group`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-110 transition duration-300`}>
                      <ItemIcon className="text-lg" />
                    </div>
                    <span className="inline-block text-xs font-bold text-gray-600 bg-white px-3 py-1 rounded-full">#{item.number}</span>
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="relative bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl border-2 border-primary-100 p-8 sm:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Don't Miss Out on This Opportunity
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              Join successful students and transform your career with world-class education.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-3 rounded-2xl font-bold text-lg hover:shadow-lg transition duration-300 transform hover:scale-105">
                Apply Now
              </button>
              <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-2xl font-bold text-lg hover:bg-primary-50 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
