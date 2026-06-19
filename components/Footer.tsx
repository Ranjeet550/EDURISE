'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaLocationDot, FaClock } from 'react-icons/fa6'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-primary-700 to-primary-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg transform hover:scale-110 transition duration-300 flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="Edu Rise Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">Edu Rise</h3>
                <p className="text-xs text-accent-200 font-semibold">Coaching Institute</p>
              </div>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Learn Today, Lead Tomorrow - Your partner in academic excellence and personal growth.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/people/Edurise-Academy/61590300124385/" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-400 hover:scale-125 transition duration-300 transform">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/eduriseacedemy?igsh=MTFlODl5dTV6ZnhjNg==" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-400 hover:scale-125 transition duration-300 transform">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl text-red-400 hover:scale-125 transition duration-300 transform">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-accent-300">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-neutral-300 hover:text-accent-400 transition duration-300 text-sm flex items-center gap-2">
                  <span>→</span> About Us
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-neutral-300 hover:text-accent-400 transition duration-300 text-sm flex items-center gap-2">
                  <span>→</span> Courses
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="text-neutral-300 hover:text-accent-400 transition duration-300 text-sm flex items-center gap-2">
                  <span>→</span> Why Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-neutral-300 hover:text-accent-400 transition duration-300 text-sm flex items-center gap-2">
                  <span>→</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-accent-300">Courses</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-300 hover:text-accent-400 transition duration-300 text-sm flex items-center gap-2">
                  <span>→</span> English Speaking
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-accent-400 transition duration-300 text-sm flex items-center gap-2">
                  <span>→</span> Public Speaking
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-accent-400 transition duration-300 text-sm flex items-center gap-2">
                  <span>→</span> AI & ML
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-accent-400 transition duration-300 text-sm flex items-center gap-2">
                  <span>→</span> Computer Learning
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-accent-300">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-neutral-300">
                <FaPhone className="text-accent-400" />
                +91 8799722327
              </li>
              <li className="flex items-center gap-2 text-neutral-300">
                <FaPhone className="text-accent-400" />
                +91 9811012150
              </li>
              <li className="flex items-center gap-2 text-neutral-300">
                <FaLocationDot className="text-accent-400" />
                Karolbagh, New Delhi
              </li>
              <li className="flex items-center gap-2 text-neutral-300">
                <FaClock className="text-accent-400" />
                Mon-Sat: 9AM-6PM
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-600 pt-4 sm:pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center text-center sm:text-left">
            {/* Copyright */}
            <p className="text-neutral-400 text-xs sm:text-sm">
              © {currentYear} Edu Rise Coaching Institute. All rights reserved.
            </p>

            {/* Links */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4 text-xs sm:text-sm">
              <a href="#" className="text-neutral-400 hover:text-accent-400 transition duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent-400 transition duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent-400 transition duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Badge */}
        <div className="mt-4 text-center">
          <div className="inline-block bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-2 rounded-full text-xs font-bold shadow-lg">
            ✨ Building Confidence, Shaping Futures ✨
          </div>
        </div>
      </div>
    </footer>
  )
}
