'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaX, FaHouse, FaBook, FaLightbulb, FaPhone, FaArrowRight, FaCircleInfo, FaImages, FaUsers } from 'react-icons/fa6'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home', icon: <FaHouse /> },
    { href: '/#about', label: 'About', icon: <FaCircleInfo /> },
    { href: '/#courses', label: 'Courses', icon: <FaBook /> },
    { href: '/gallery', label: 'Gallery', icon: <FaImages /> },
    { href: '/team', label: 'Team', icon: <FaUsers /> },
    { href: '/#why-us', label: 'Why Us', icon: <FaLightbulb /> },
    { href: '/#contact', label: 'Contact', icon: <FaPhone /> },
  ]

  return (
    <header className="bg-gradient-to-r from-white to-primary-50 shadow-lg sticky top-0 z-50 border-b-2 border-accent-500">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-lg border-2 border-accent-500 transform group-hover:scale-110 transition duration-300">
              <Image
                src="/images/logo.jpg"
                alt="Edu Rise Logo"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-700 to-accent-600 bg-clip-text text-transparent">
                Edu Rise
              </h1>
              <p className="text-xs sm:text-sm text-accent-600 font-semibold">Coaching Institute</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 px-4 py-2 text-neutral-700 hover:text-accent-600 hover:bg-accent-50 rounded-lg transition duration-300 font-medium text-sm"
              >
                <span className="text-lg">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="#contact" className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:from-accent-600 hover:to-accent-700 transition duration-300 font-bold text-sm sm:text-base shadow-lg transform hover:scale-105 flex items-center gap-2">
              Enroll Now
              <FaArrowRight className="text-sm" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-700 hover:text-accent-600 transition duration-300 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FaX className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-2 border-t-2 border-accent-200 pt-4 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-neutral-700 hover:bg-accent-50 hover:text-accent-600 rounded-lg transition duration-300 font-medium"
              >
                <span className="text-lg text-accent-600">{link.icon}</span>
                {link.label}
              </Link>
            ))}
            <Link href="#contact" onClick={() => setIsOpen(false)} className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-3 rounded-xl hover:from-accent-600 hover:to-accent-700 transition duration-300 font-bold shadow-lg mt-4 flex items-center justify-center gap-2">
              Enroll Now
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
