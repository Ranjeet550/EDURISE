'use client'

import { FaComments, FaMicrophone, FaRobot, FaLaptop, FaGlobe, FaLightbulb, FaPencil, FaCircleCheck, FaArrowTrendUp, FaChalkboardUser, FaUsers, FaBook, FaGraduationCap, FaHeadset, FaStar, FaChartLine, FaHandshake, FaQuestion } from 'react-icons/fa6'

const courses = [
  {
    id: 'english',
    title: 'ENGLISH SPEAKING',
    description: 'Speak better, Express better.',
  },
  {
    id: 'public-speaking',
    title: 'PUBLIC SPEAKING',
    description: 'Build Confidence, Lead Anywhere.',
  },
  {
    id: 'ai',
    title: 'BASIC ARTIFICIAL INTELLIGENCE',
    description: 'Learn AI basics, Shape the future.',
  },
  {
    id: 'computer',
    title: 'COMPUTER LEARNING',
    description: 'From basics to advanced level.',
  },
  {
    id: 'geopolitics',
    title: 'GEOPOLITICS',
    description: 'Understand the world, Lead with knowledge.',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-16">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative bg-gradient-to-br from-white to-primary-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-primary-100 overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative z-10">
                <div className="text-5xl sm:text-6xl mb-4 group-hover:scale-110 transition duration-300 text-accent-600">
                  {courseIcons[course.id]}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-primary-700 mb-2 group-hover:text-accent-600 transition">
                  {course.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent-500 to-accent-300 w-0 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Our Approach Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Learning Approach */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent-200 rounded-full opacity-20"></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-700 mb-8">Our Learning Approach</h3>

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
          </div>

          {/* Why Choose Section */}
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary-200 rounded-full opacity-20"></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-700 mb-8">Why Choose EDU RISE?</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-primary-50 transition duration-300 border border-primary-100"
                >
                  <span className="text-lg flex-shrink-0 text-accent-600">{item.icon}</span>
                  <span className="text-xs sm:text-sm font-semibold text-primary-700">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-2xl text-center shadow-lg">
              <p className="text-sm sm:text-base font-bold flex items-center justify-center gap-2"><FaStar /> 10+ YEARS OF EXCELLENCE <FaStar /></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
