'use client'

import { FaMusic, FaDrum, FaWater, FaGamepad, FaBaseball, FaUsers, FaBrain, FaFire, FaHeadset, FaRocket, FaGift, FaAward } from 'react-icons/fa6'

const activities = [
  { icon: <FaMusic />, label: 'Dance' },
  { icon: <FaDrum />, label: 'Tabla' },
  { icon: <FaWater />, label: 'Swimming' },
  { icon: <FaGamepad />, label: 'Gaming' },
  { icon: <FaBaseball />, label: 'Sports' },
  { icon: <FaUsers />, label: 'Activities' },
]

const focusAreas = [
  { icon: <FaBrain />, title: 'Personality Development', desc: 'Build confidence & leadership' },
  { icon: <FaFire />, title: 'Strong Concepts', desc: 'Deep understanding of subjects' },
  { icon: <FaHeadset />, title: 'Communication Skills', desc: 'Express ideas effectively' },
  { icon: <FaRocket />, title: 'Future Ready Skills', desc: 'Prepare for tomorrow' },
]

const offers = [
  { icon: <FaGift />, title: 'FREE DEMO CLASS', desc: 'Experience our teaching style' },
  { icon: <FaUsers />, title: 'EARLY ADMISSION BENEFITS', desc: 'Exclusive perks for early joiners' },
  { icon: <FaAward />, title: 'SPECIAL DISCOUNT', desc: 'Up to 20% off on fees' },
  { icon: <FaRocket />, title: '100% SUCCESS RATE', desc: 'Proven track record' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 sm:py-20 bg-gradient-to-b from-white to-primary-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Co-curricular Activities Section */}
        <div className="mb-16 sm:mb-20">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent-400 rounded-full mix-blend-multiply filter blur-2xl opacity-10"></div>

            <div className="relative z-10">
              <h3 className="text-center font-bold text-lg sm:text-2xl mb-8">
                We Also Provide Dance, Tabla, Swimming & Other Hobbies
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 mb-8">
                {activities.map((activity, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col items-center justify-center h-20 sm:h-24 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300 transform hover:scale-110"
                  >
                    <div className="text-3xl sm:text-4xl text-white group-hover:scale-125 transition duration-300">
                      {activity.icon}
                    </div>
                    <p className="text-xs mt-2 text-center text-white font-semibold">{activity.label}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-base sm:text-lg font-bold">
                  ✨ We focus on Overall Development – Academics + Co-curricular Activities for a Bright Future! ✨
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Focus & Limited Offer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Special Focus */}
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-700 mb-8">Special Focus Areas</h3>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {focusAreas.map((item, idx) => (
                <div
                  key={idx}
                  className="group p-6 sm:p-8 bg-gradient-to-br from-white to-primary-50 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-primary-100 text-center transform hover:-translate-y-2"
                >
                  <div className="text-4xl sm:text-5xl mb-3 group-hover:scale-125 transition duration-300 text-accent-600 flex justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-primary-700 text-sm sm:text-base mb-2">{item.title}</h4>
                  <p className="text-xs text-neutral-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Limited Period Offer */}
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent-200 rounded-full opacity-20"></div>

            <h3 className="text-2xl sm:text-3xl font-bold text-primary-700 mb-8">Limited Period Offer!</h3>

            <div className="space-y-4 mb-8">
              {offers.map((item, idx) => (
                <div
                  key={idx}
                  className="group p-5 sm:p-6 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl sm:text-3xl flex-shrink-0 group-hover:scale-125 transition duration-300">
                      {item.icon}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm sm:text-base mb-1">{item.title}</h4>
                      <p className="text-xs text-accent-100">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-primary-700 hover:to-primary-800 transition duration-300 shadow-lg transform hover:scale-105">
              Claim Offer Now
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-2xl shadow-xl">
            <p className="text-base sm:text-lg font-bold mb-2">Ready to Transform Your Future?</p>
            <p className="text-xs sm:text-sm text-accent-100">Join 500+ successful students at EDU RISE</p>
          </div>
        </div>
      </div>
    </section>
  )
}
