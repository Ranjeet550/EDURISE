'use client'

import Image from 'next/image'
import { FaComments, FaMicrophone, FaRobot, FaLaptop, FaGlobe, FaLightbulb, FaPencil, FaCircleCheck, FaArrowTrendUp, FaChalkboardUser, FaUsers, FaBook, FaGraduationCap, FaHeadset, FaStar, FaChartLine, FaHandshake, FaQuestion } from 'react-icons/fa6'

const courses = [
  {
    id: 'english',
    title: 'ENGLISH SPEAKING',
    description: 'Speak better, Express better.',
    image: '/Courseimage/f5662775f1254b74b167c86fe8175f14.jpg.jpeg',
  },
  {
    id: 'public-speaking',
    title: 'PUBLIC SPEAKING',
    description: 'Build Confidence, Lead Anywhere.',
    image: '/Courseimage/1000162474-Picsart-AiImageEnhancer.png',
  },
  {
    id: 'ai',
    title: 'BASIC ARTIFICIAL INTELLIGENCE',
    description: 'Learn AI basics, Shape the future.',
    image: '/Courseimage/ec3ef21f07feae4856befe7cd5f40f1c.jpg.jpeg',
  },
  {
    id: 'computer',
    title: 'COMPUTER LEARNING',
    description: 'From basics to advanced level.',
    image: '/Courseimage/1fb57a816c19da90cd6e51bb4994106c.jpg.jpeg',
  },
  {
    id: 'geopolitics',
    title: 'GEOPOLITICS',
    description: 'Understand the world, Lead with knowledge.',
    image: '/Courseimage/e77fc6f983045606e2fea6ca4590e549.jpg.jpeg',
  },
]

const courseIcons: { [key: string]: React.ReactNode } = {
  'english': <FaComments />,
  'public-speaking': <FaMicrophone />,
  'ai': <FaRobot />,
  'computer': <FaLaptop />,
  'geopolitics': <FaGlobe />,
}

const approachSteps = [
  { icon: <FaLightbulb />, title: 'CONCEPT', desc: 'Build strong understanding' },
  { icon: <FaPencil />, title: 'PRACTICE', desc: 'Apply knowledge regularly' },
  { icon: <FaCircleCheck />, title: 'TEST', desc: 'Test performance consistently' },
  { icon: <FaArrowTrendUp />, title: 'IMPROVEMENT', desc: 'Analyze & improve always' },
]

export default function Courses() {
  return (
    <section id="courses" className="py-16 sm:py-20 bg-gradient-to-b from-white to-primary-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-700 mb-4">
            Courses We <span className="text-accent-600">Offer</span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive programs designed to build strong foundations and develop future-ready skills
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 mb-16">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative bg-gradient-to-br from-white to-primary-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-primary-100 flex flex-col h-full"
            >
              {/* Course Image - Full and Responsive */}
              <div className="relative w-full h-56 sm:h-52 md:h-56 lg:h-48 overflow-hidden bg-primary-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover object-center group-hover:scale-110 transition duration-300"
                  priority={false}
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Course Content */}
              <div className="p-4 sm:p-5 lg:p-6 relative flex-1 flex flex-col">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition duration-300 text-accent-600">
                    {courseIcons[course.id]}
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-primary-700 mb-1 sm:mb-2 group-hover:text-accent-600 transition line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-2">
                    {course.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent-500 to-accent-300 w-0 group-hover:w-full transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Our Learning Approach Section */}
        <div className="relative">
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent-200 rounded-full opacity-20"></div>
          <h3 className="text-2xl sm:text-3xl font-bold text-primary-700 mb-12">Our Learning Approach</h3>

          {/* Approach Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              {approachSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-lg group-hover:scale-110 transition duration-300 text-xl">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-bold text-primary-700 mb-1">{step.title}</h4>
                    <p className="text-sm text-neutral-600">{step.desc}</p>
                  </div>
                  {idx < 3 && <div className="text-2xl text-accent-400 flex-shrink-0">→</div>}
                </div>
              ))}
            </div>

            {/* Why Choose Features */}
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary-200 rounded-full opacity-20"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-3 sm:gap-4">
                {[
                  { icon: <FaChalkboardUser />, text: 'Smart Digital Board Classes' },
                  { icon: <FaUsers />, text: 'Mentorship & Guidance' },
                  { icon: <FaBook />, text: 'Small Batch Size' },
                  { icon: <FaGraduationCap />, text: 'Focus on Concepts' },
                  { icon: <FaHeadset />, text: 'Personalized Attention' },
                  { icon: <FaStar />, text: 'Personality Development' },
                  { icon: <FaChartLine />, text: 'Weekly Tests & Tracking' },
                  { icon: <FaHandshake />, text: 'Safe & Motivating Environment' },
                  { icon: <FaQuestion />, text: 'Doubt Sessions Anytime' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 sm:gap-4 py-2 sm:py-3 pl-3 sm:pl-4 pr-2 sm:pr-4 border-l-4 border-accent-400 hover:border-accent-600 hover:pl-4 sm:hover:pl-6 hover:bg-primary-50 rounded-r-lg transition-all duration-300 group"
                  >
                    <span className="text-lg sm:text-xl flex-shrink-0 text-accent-600 group-hover:scale-125 group-hover:text-accent-700 transition-transform duration-300">{item.icon}</span>
                    <span className="text-xs sm:text-sm lg:text-base font-bold text-primary-700 group-hover:text-accent-600 transition-colors duration-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
