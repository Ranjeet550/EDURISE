'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FaComments, FaMicrophone, FaRobot, FaLaptop, FaGlobe, FaLightbulb, FaPencil, FaCircleCheck, FaArrowTrendUp, FaChalkboardUser, FaUsers, FaBook, FaGraduationCap, FaHeadset, FaStar, FaChartLine, FaHandshake, FaQuestion } from 'react-icons/fa6'

const courses = [
  {
    id: 'english',
    title: 'ENGLISH SPEAKING',
    description: 'Speak better, Express better.',
    image: '/Courseimage/WhatsApp Image 2026-06-19 at 7.26.36 PM (1).jpeg',
  },
  {
    id: 'public-speaking',
    title: 'PUBLIC SPEAKING',
    description: 'Build Confidence, Lead Anywhere.',
    image: '/Courseimage/WhatsApp Image 2026-06-19 at 7.26.37 PM.jpeg',
  },
  {
    id: 'ai',
    title: 'BASIC ARTIFICIAL INTELLIGENCE',
    description: 'Learn AI basics, Shape the future.',
    image: '/Courseimage/ai.jpeg',
  },
  {
    id: 'computer',
    title: 'COMPUTER LEARNING',
    description: 'From basics to advanced level.',
    image: '/Courseimage/WhatsApp Image 2026-06-19 at 7.26.36 PM (3).jpeg',
  },
  {
    id: 'geopolitics',
    title: 'GEOPOLITICS',
    description: 'Understand the world, Lead with knowledge.',
    image: '/Courseimage/WhatsApp Image 2026-06-19 at 7.26.35 PM (2).jpeg',
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

const whyChooseItems = [
  { icon: <FaChalkboardUser />, text: 'Smart Digital Board Classes', highlight: 'Latest Technology' },
  { icon: <FaUsers />, text: 'Mentorship & Guidance', highlight: 'Expert Mentors' },
  { icon: <FaBook />, text: 'Small Batch Size', highlight: 'Better Learning' },
  { icon: <FaGraduationCap />, text: 'Focus on Concepts', highlight: 'Strong Foundation' },
  { icon: <FaHeadset />, text: 'Personalized Attention', highlight: 'Individual Care' },
  { icon: <FaStar />, text: 'Personality Development', highlight: 'Holistic Growth' },
  { icon: <FaChartLine />, text: 'Weekly Tests & Tracking', highlight: 'Progress Monitor' },
  { icon: <FaHandshake />, text: 'Safe & Motivating Environment', highlight: 'Student Wellness' },
  { icon: <FaQuestion />, text: 'Doubt Sessions Anytime', highlight: 'Always Available' },
]

function ScrollStack() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div 
      ref={containerRef}
      className="space-y-2 sm:space-y-3 max-h-96 sm:max-h-[500px] overflow-y-auto scrollbar-hide"
    >
      {whyChooseItems.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.05 }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ x: 8 }}
          className="relative group cursor-pointer"
        >
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-50 to-primary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-400/0 via-accent-300/0 to-primary-400/0 group-hover:from-accent-400/10 group-hover:via-accent-300/5 group-hover:to-primary-400/10 transition-all duration-500 rounded-xl"></div>
          
          {/* Main Content Container */}
          <div className="relative px-4 sm:px-5 py-3 sm:py-4 border-l-4 border-accent-400 group-hover:border-accent-600 rounded-r-xl bg-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary-50 shadow-sm group-hover:shadow-lg transition-all duration-300 flex items-center gap-3 sm:gap-4">
            {/* Icon Container */}
            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-accent-500 rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 text-base sm:text-lg">
                {item.icon}
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm sm:text-base lg:text-lg font-black text-primary-700 group-hover:text-accent-600 transition-colors duration-300 leading-tight mb-1">
                {item.text}
              </p>
              <span className="inline-block text-sm sm:text-base font-black text-accent-600 bg-accent-50 px-2 py-0.5 rounded-full group-hover:bg-accent-100 group-hover:text-accent-700 transition-all duration-300">
                {item.highlight}
              </span>
            </div>
            
            {/* Right Side Accent */}
            <div className="flex-shrink-0 text-accent-400 opacity-0 group-hover:opacity-100 text-lg transition-all duration-300 transform group-hover:translate-x-1">
              →
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function Courses() {
  return (
    <section id="courses" className="py-16 sm:py-20 bg-gradient-to-b from-white to-primary-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary-700 mb-4">
            Courses We <span className="text-accent-600">Offer</span>
          </h2>
          <p className="text-neutral-600 text-lg sm:text-xl font-bold max-w-2xl mx-auto">
            Comprehensive programs designed to build strong foundations and develop future-ready skills
          </p>
        </div>

        {/* Courses Marquee Carousel */}
        <div className="mb-16 overflow-hidden">
          <style>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            
            .marquee-container {
              display: flex;
              animation: marquee 40s linear infinite;
            }
            
            .marquee-container:hover {
              animation-play-state: paused;
            }
            
            .marquee-item {
              min-width: 100%;
              flex-shrink: 0;
            }
          `}</style>
          
          <div className="relative w-full overflow-hidden bg-gradient-to-r from-transparent via-transparent to-transparent">
            {/* Fade edges for smooth effect */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <div className="marquee-container" style={{ animationDuration: '20s' }}>
              {/* Original courses */}
              <div className="marquee-item px-4 flex gap-6 sm:gap-8">
                {courses.map((course) => (
                  <div
                    key={`${course.id}-1`}
                    className="group relative flex-shrink-0 w-80 sm:w-96 bg-gradient-to-br from-white to-primary-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-primary-100 flex flex-col h-full min-h-80"
                  >
                    {/* Course Image */}
                    <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-primary-100">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                        className="object-cover object-center group-hover:scale-110 transition duration-300"
                        priority={false}
                        quality={90}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>

                    {/* Course Content */}
                    <div className="p-5 sm:p-6 relative flex-1 flex flex-col">
                      {/* Background Accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

                      <div className="relative z-10 flex-1 flex flex-col">
                        <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition duration-300 text-accent-600">
                          {courseIcons[course.id]}
                        </div>
                        <h3 className="text-base sm:text-lg font-black text-primary-700 mb-1 group-hover:text-accent-600 transition line-clamp-2">
                          {course.title}
                        </h3>
                        <p className="text-sm sm:text-base font-bold text-neutral-600 leading-relaxed line-clamp-2">
                          {course.description}
                        </p>
                      </div>

                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent-500 to-accent-300 w-0 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Duplicate courses for seamless loop */}
              <div className="marquee-item px-4 flex gap-6 sm:gap-8">
                {courses.map((course) => (
                  <div
                    key={`${course.id}-2`}
                    className="group relative flex-shrink-0 w-80 sm:w-96 bg-gradient-to-br from-white to-primary-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-primary-100 flex flex-col h-full min-h-80"
                  >
                    {/* Course Image */}
                    <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-primary-100">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                        className="object-cover object-center group-hover:scale-110 transition duration-300"
                        priority={false}
                        quality={90}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>

                    {/* Course Content */}
                    <div className="p-5 sm:p-6 relative flex-1 flex flex-col">
                      {/* Background Accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

                      <div className="relative z-10 flex-1 flex flex-col">
                        <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition duration-300 text-accent-600">
                          {courseIcons[course.id]}
                        </div>
                        <h3 className="text-base sm:text-lg font-black text-primary-700 mb-1 group-hover:text-accent-600 transition line-clamp-2">
                          {course.title}
                        </h3>
                        <p className="text-sm sm:text-base font-bold text-neutral-600 leading-relaxed line-clamp-2">
                          {course.description}
                        </p>
                      </div>

                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent-500 to-accent-300 w-0 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Our Learning Approach Section */}
        <div className="relative">
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent-200 rounded-full opacity-20"></div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary-700 mb-12">Our Learning Approach</h3>

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
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-black text-primary-700 mb-1">{step.title}</h4>
                    <p className="text-base sm:text-lg font-bold text-neutral-600">{step.desc}</p>
                  </div>
                  {idx < 3 && <div className="text-2xl text-accent-400 flex-shrink-0">→</div>}
                </div>
              ))}
            </div>

            {/* Why Choose Features - Scroll Stack */}
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent-200 rounded-full opacity-30"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary-200 rounded-full opacity-20"></div>
              
              
              
              {/* Scroll Stack Container */}
              <ScrollStack />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
