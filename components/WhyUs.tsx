'use client'

import Image from 'next/image'
import { FaMusic, FaDrum, FaWater, FaGamepad, FaBaseball, FaUsers, FaFire, FaRocket, FaGift, FaAward, FaLaptop, FaGlobe, FaNewspaper, FaClipboard } from 'react-icons/fa6'

const activities = [
  { icon: <FaMusic />, label: 'Dance' },
  { icon: <FaDrum />, label: 'Tabla' },
  { icon: <FaWater />, label: 'Swimming' },
  { icon: <FaGamepad />, label: 'Gaming' },
  { icon: <FaBaseball />, label: 'Cricket' },
  { icon: <FaFire />, label: 'Jumba' },
  { icon: <FaClipboard />, label: 'Fitness' },
  { icon: <FaUsers />, label: 'Activities' },
]

const focusAreas = [
  { icon: <FaLaptop />, title: 'Computer Learning', desc: 'Master modern tech skills', image: '/Courseimage/dbdd642597a7b61e9608adc910334272.jpg.jpeg' },
  { icon: <FaGlobe />, title: 'Geopolitical Studies', desc: 'Understand global affairs', image: '/Courseimage/190a975111240459b9775b610fb55bb4 (1).jpg.jpeg' },
  { icon: <FaNewspaper />, title: 'Newspaper Reading', desc: 'Stay informed & aware', image: '/Courseimage/015c4ba03a6c6ebd2cac2f17e41e97b3.jpg.jpeg' },
  { icon: <FaRocket />, title: 'Future Ready Skills', desc: 'Prepare for tomorrow', image: '/Courseimage/images (31).jpeg' },
]

const offers = [
  { icon: <FaGift />, title: 'FREE DEMO CLASS', desc: 'Experience our teaching style' },
  { icon: <FaUsers />, title: 'EARLY ADMISSION BENEFITS', desc: 'Exclusive perks for early joiners' },
  { icon: <FaAward />, title: 'SPECIAL DISCOUNT', desc: 'Up to 20% off on fees' },
  { icon: <FaRocket />, title: '100% SUCCESS RATE', desc: 'Proven track record' },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -ml-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -mr-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-20 sm:mb-28 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 mb-6">
            Why Choose <span className="text-accent-600">EDU RISE</span>?
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We believe in holistic development, combining academics with extracurricular excellence to shape well-rounded individuals ready for the future.
          </p>
        </div>

        {/* Co-curricular Activities Section */}
        <div className="mb-28 sm:mb-36">
          <div className="mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
              Diverse Learning Beyond Classroom
            </h3>
            <div className="w-20 h-1.5 bg-accent-600 rounded-full"></div>
          </div>

          <p className="text-lg text-neutral-600 mb-10 max-w-2xl">
            We nurture talent across multiple disciplines with programs in Dance, Tabla, Swimming, Gaming, Cricket, Jumba, Fitness and more.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {activities.map((activity, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center gap-3 group cursor-pointer"
              >
                <div className="text-4xl sm:text-5xl text-accent-600 group-hover:scale-110 transition duration-300 transform">
                  {activity.icon}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-neutral-700 text-center group-hover:text-accent-600 transition">
                  {activity.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-neutral-200">
            <p className="text-center text-lg sm:text-xl font-semibold text-primary-900">
              ✨ We focus on Overall Development – Academics + Co-curricular Activities for a Bright Future! ✨
            </p>
          </div>
        </div>

        {/* Special Focus Areas */}
        <div className="mb-28 sm:mb-36">
          <div className="mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
              Special Focus Areas
            </h3>
            <div className="w-20 h-1.5 bg-accent-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {focusAreas.map((item, idx) => (
              <div key={idx} className="group flex flex-col h-full">
                {item.image && (
                  <div className="mb-3 sm:mb-4 rounded-lg overflow-hidden relative w-full h-40 sm:h-48 lg:h-56">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={idx < 2}
                      className="object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>
                )}
                <div className="text-4xl sm:text-5xl lg:text-6xl text-accent-600 mb-3 sm:mb-4 group-hover:scale-110 transition duration-300">
                  {item.icon}
                </div>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-primary-900 mb-2 sm:mb-3 group-hover:text-accent-600 transition">
                  {item.title}
                </h4>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed flex-grow">
                  {item.desc}
                </p>
                <div className="mt-3 sm:mt-4 h-1 w-12 bg-accent-600 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Limited Period Offers */}
        <div className="mb-20">
          <div className="mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
              Limited Time Offers
            </h3>
            <div className="w-20 h-1.5 bg-accent-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10">
            {offers.map((item, idx) => (
              <div key={idx} className="group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl text-accent-600 flex-shrink-0 group-hover:scale-110 transition duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-neutral-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full sm:w-auto bg-accent-600 hover:bg-accent-700 text-white px-10 sm:px-12 py-4 sm:py-5 rounded-lg font-bold text-lg transition duration-300 shadow-lg hover:shadow-xl">
            Claim Your Offer Now
          </button>
        </div>

        {/* Bottom CTA Section */}
        <div className="border-t border-neutral-200 pt-16 sm:pt-20 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
            Ready to Transform Your Future?
          </h3>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Join 500+ successful students who have already embarked on their journey of excellence with EDU RISE.
          </p>
          <button className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition duration-300 shadow-lg hover:shadow-xl">
            Enroll Today
          </button>
        </div>
      </div>
    </section>
  )
}
