'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Vivek Shankar',
      position: 'Founder & Director',
      subject: 'Mathematics & Geography',
      image: '/teams/WhatsApp Image 2026-06-19 at 6.50.55 PM.jpeg',
      bio: 'B.Sc in Mathematics, M.A in Geography. Experienced educator with 10+ years in coaching',
      expertise: ['Mathematics', 'Geography', 'Problem Solving']
    },
    {
      id: 2,
      name: 'Smita',
      position: 'Head of Science Department',
      subject: 'Science & Health',
      image: '/teams/WhatsApp Image 2026-06-19 at 6.50.55 PM (1).jpeg',
      bio: 'Bachelor in Science. Specialist in making science concepts engaging and relatable',
      expertise: ['Physics', 'Chemistry', 'Biology']
    },
    {
      id: 3,
      name: 'Prince Singh',
      position: 'Science Coordinator',
      subject: 'Physics & Chemistry',
      image: '/teams/WhatsApp Image 2026-06-19 at 6.50.56 PM.jpeg',
      bio: 'Dedicated to making science concepts clear and practical',
      expertise: ['Physics', 'Chemistry', 'Experiments']
    },
    {
      id: 4,
      name: 'Sami Mam',
      position: 'Hindi & Sanskrit Faculty',
      subject: 'Hindi & Sanskrit',
      image: '/teams/WhatsApp Image 2026-06-22 at 7.18.32 PM.jpeg',
      bio: 'Expert in Hindi and Sanskrit language teaching with passion for cultural education',
      expertise: ['Hindi', 'Sanskrit', 'Language']
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group relative"
                style={{ aspectRatio: '3/4' }}
              >
                {/* Image Section */}
                <div className="relative w-full h-full bg-gradient-to-br from-primary-100 to-accent-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                {/* Content Section - Hidden by default, shown on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black/95 p-6 flex flex-col justify-center items-start opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-3xl font-black text-white mb-2 drop-shadow-lg">{member.name}</h3>
                  <p className="text-xl font-bold text-accent-300 mb-3 drop-shadow-md">{member.position}</p>
                  <p className="text-sm text-gray-100 mb-4 font-medium drop-shadow-md leading-relaxed">{member.bio}</p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                      >
                        {skill}
                      </span>
                    ))}
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
