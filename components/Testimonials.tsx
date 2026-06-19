'use client'

import { FaStar, FaUsers, FaAward, FaGraduationCap } from 'react-icons/fa6'
import Marquee from 'react-fast-marquee'

const testimonials = [
  {
    id: 'founder',
    name: 'Vivek Sir',
    role: 'Founder & Head Coach',
    quote: 'Building confidence, Shaping futures. Our mission is to transform every student into a confident leader.',
    duration: '10+ Years',
    color: 'from-primary-500 to-primary-600',
    icon: <FaGraduationCap />,
  },
  {
    id: 'student',
    name: 'Priya Sharma',
    role: 'Student - Class 10',
    quote: 'Edu Rise helped me improve my grades significantly. The personalized attention made all the difference!',
    duration: '2 Years',
    color: 'from-accent-500 to-accent-600',
    icon: <FaGraduationCap />,
  },
  {
    id: 'parent',
    name: 'Rajesh Kumar',
    role: 'Parent',
    quote: 'My son\'s confidence and academic performance have improved tremendously. Highly recommended!',
    duration: '1 Year',
    color: 'from-primary-600 to-primary-700',
    icon: <FaUsers />,
  },
]

const stats = [
  { icon: <FaUsers />, number: '500+', label: 'Happy Students' },
  { icon: <FaAward />, number: '100%', label: 'Success Rate' },
  { icon: <FaStar />, number: '10+', label: 'Years Experience' },
  { icon: <FaGraduationCap />, number: '20', label: 'Batch Size' },
]

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-700 mb-4">
            Success <span className="text-accent-600">Stories</span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto">
            Hear from our students, parents, and founder about their transformative journey with EDU RISE
          </p>
        </div>

        {/* Testimonials Marquee */}
        <div className="overflow-hidden w-full bg-gray-100 rounded-2xl py-8 px-4">
          <Marquee
            gradient={true}
            gradientColor="rgb(243, 244, 246)"
            gradientWidth={120}
            speed={80}
            pauseOnHover={true}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 w-[380px] flex-shrink-0 mx-6"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-10 transition duration-300`}></div>

                {/* Card Content */}
                <div className="relative z-10 bg-white p-8 sm:p-10 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-xl text-accent-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-neutral-700 italic font-semibold text-sm sm:text-base leading-tight mb-8 flex-1">
                    "{testimonial.quote}"
                  </p>

                  {/* Divider */}
                  <div className="h-1 w-12 bg-gradient-to-r from-accent-500 to-accent-300 rounded-full mb-6"></div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white shadow-lg text-2xl`}>
                        {testimonial.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-primary-700 text-sm sm:text-base leading-tight">{testimonial.name}</h3>
                      <p className="text-xs text-neutral-600 font-medium leading-tight">{testimonial.role}</p>
                      <p className="text-xs font-bold text-accent-600 mt-1">{testimonial.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Top Border Accent */}
                <div className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${testimonial.color} w-0 group-hover:w-full transition-all duration-300`}></div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-8 bg-gradient-to-br from-white to-primary-50 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-primary-100 text-center transform hover:scale-105"
            >
              <div className="text-3xl sm:text-4xl text-accent-600 mb-3 group-hover:scale-110 transition duration-300 flex justify-center">
                {stat.icon}
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-accent-600 mb-2">
                {stat.number}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-primary-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
