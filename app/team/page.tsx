'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa6'

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'Founder & Director',
      subject: 'Mathematics & Science',
      image: '/FOUNDER/IMG-20260525-WA0001.jpg',
      bio: 'Experienced educator with 15+ years in coaching',
      expertise: ['Mathematics', 'Physics', 'Problem Solving']
    },
    {
      id: 2,
      name: 'Priya Singh',
      position: 'Head of English Department',
      subject: 'English & Communication',
      image: '/images/logo.jpg',
      bio: 'Specialist in personality development and English',
      expertise: ['English Literature', 'Communication', 'Writing']
    },
    {
      id: 3,
      name: 'Amit Sharma',
      position: 'Science Coordinator',
      subject: 'Physics & Chemistry',
      image: '/images/logo.jpg',
      bio: 'Dedicated to making science concepts clear',
      expertise: ['Physics', 'Chemistry', 'Experiments']
    },
    {
      id: 4,
      name: 'Neha Verma',
      position: 'Mathematics Faculty',
      subject: 'Advanced Mathematics',
      image: '/images/logo.jpg',
      bio: 'Expert in solving complex mathematical problems',
      expertise: ['Algebra', 'Geometry', 'Calculus']
    },
    {
      id: 5,
      name: 'Vikram Patel',
      position: 'Social Studies Lead',
      subject: 'History & Geography',
      image: '/images/logo.jpg',
      bio: 'Passionate about making history and geography engaging',
      expertise: ['History', 'Geography', 'Social Science']
    },
    {
      id: 6,
      name: 'Anjali Desai',
      position: 'Student Counselor',
      subject: 'Career & Personal Development',
      image: '/images/logo.jpg',
      bio: 'Helping students achieve their dreams',
      expertise: ['Career Guidance', 'Counseling', 'Mentoring']
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-white to-primary-50 min-h-screen pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">
              Meet Our Team
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Dedicated educators committed to shaping the future. Our experienced team brings passion and expertise to every class.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group"
              >
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-neutral-800 mb-1">{member.name}</h3>
                  <p className="text-accent-600 font-semibold mb-2">{member.position}</p>
                  <p className="text-sm text-neutral-600 mb-4">{member.bio}</p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4 border-t border-neutral-200">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-primary-50 hover:bg-primary-100 text-primary-700 py-2 rounded-lg transition duration-300 font-semibold text-sm">
                      <FaLinkedinIn /> LinkedIn
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 bg-accent-50 hover:bg-accent-100 text-accent-700 py-2 rounded-lg transition duration-300 font-semibold text-sm">
                      <FaEnvelope /> Email
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

         
        </div>
      </main>
      <Footer />
    </>
  )
}
