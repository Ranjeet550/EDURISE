'use client'

import { useState } from 'react'
import { FaPhone, FaLocationDot, FaCar, FaFacebook, FaInstagram, FaYoutube, FaPaperPlane } from 'react-icons/fa6'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Replace with your Google Form action URL
      const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse'
      
      // Create FormData object to send to Google Forms
      const formDataToSubmit = new FormData()
      
      // Replace these with your actual Google Form field IDs
      // You can find these by inspecting the form or using the pre-filled link method
      formDataToSubmit.append('entry.XXXXXXXXX', formData.name) // Replace XXXXXXXXX with Name field ID
      formDataToSubmit.append('entry.YYYYYYYYY', formData.email) // Replace YYYYYYYYY with Email field ID
      formDataToSubmit.append('entry.ZZZZZZZZZ', formData.phone) // Replace ZZZZZZZZZ with Phone field ID
      formDataToSubmit.append('entry.WWWWWWWWW', formData.message) // Replace WWWWWWWWW with Message field ID
      
      // Send to Google Forms (using no-cors mode to avoid CORS issues)
      await fetch(googleFormUrl, {
        method: 'POST',
        body: formDataToSubmit,
        mode: 'no-cors'
      })
      
      console.log('Form submitted:', formData)
      setFormData({ name: '', email: '', phone: '', message: '' })
      alert('Thank you for your inquiry! We will contact you soon.')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error sending your message. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-700 mb-4">
            Get In <span className="text-accent-600">Touch</span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us anytime.
          </p>
        </div>

        {/* Map Section - Full Width */}
        <div className="mb-16 sm:mb-20 rounded-3xl overflow-hidden shadow-2xl h-96 sm:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5234567890123!2d77.1900!3d28.7500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd281cf1d6e1%3A0x1234567890abcdef!2s12%2F383%20Joshi%20Road%2C%20Karolbagh%2C%20New%20Delhi%20110005!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl"
          ></iframe>
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-700">Contact Information</h3>

            {/* Phone */}
            <div className="group flex items-start gap-6 pb-8 border-b border-primary-100 last:border-b-0">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 text-white group-hover:scale-110 transition duration-300">
                  <FaPhone className="text-xl" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg sm:text-xl font-bold text-primary-700 mb-3">Call Us</h4>
                <div className="space-y-2">
                  <p className="text-base sm:text-lg font-semibold text-accent-600 hover:text-accent-700 transition">+91 8799722327</p>
                  <p className="text-base sm:text-lg font-semibold text-accent-600 hover:text-accent-700 transition">+91 9811012150</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="group flex items-start gap-6 pb-8 border-b border-primary-100 last:border-b-0">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-white group-hover:scale-110 transition duration-300">
                  <FaLocationDot className="text-xl" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg sm:text-xl font-bold text-primary-700 mb-3">Visit Us</h4>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  12/383, Joshi Road,<br />
                  Karolbagh, Near JMC Hospital,<br />
                  New Delhi - 110005
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="group flex items-start gap-6 pb-8 border-b border-primary-100 last:border-b-0">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 text-white group-hover:scale-110 transition duration-300">
                  <FaCar className="text-xl" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg sm:text-xl font-bold text-primary-700 mb-3">Pick & Drop</h4>
                <p className="text-sm sm:text-base text-neutral-700">
                  Complimentary pick and drop service available for all students
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="group flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-white group-hover:scale-110 transition duration-300">
                  <FaFacebook className="text-xl" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg sm:text-xl font-bold text-primary-700 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-2xl text-blue-600 hover:text-blue-700 hover:scale-125 transition duration-300 transform">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-2xl text-pink-600 hover:text-pink-700 hover:scale-125 transition duration-300 transform">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-2xl text-red-600 hover:text-red-700 hover:scale-125 transition duration-300 transform">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-white text-primary-700 rounded-3xl p-8 sm:p-10 shadow-2xl overflow-hidden sticky top-20">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-8 relative z-10">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-50 border border-primary-200 rounded-xl focus:outline-none focus:border-accent-400 focus:ring-2 focus:ring-accent-400 focus:ring-opacity-50 text-primary-700 placeholder-neutral-500 transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-50 border border-primary-200 rounded-xl focus:outline-none focus:border-accent-400 focus:ring-2 focus:ring-accent-400 focus:ring-opacity-50 text-primary-700 placeholder-neutral-500 transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-50 border border-primary-200 rounded-xl focus:outline-none focus:border-accent-400 focus:ring-2 focus:ring-accent-400 focus:ring-opacity-50 text-primary-700 placeholder-neutral-500 transition"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-primary-50 border border-primary-200 rounded-xl focus:outline-none focus:border-accent-400 focus:ring-2 focus:ring-accent-400 focus:ring-opacity-50 text-primary-700 placeholder-neutral-500 transition resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-accent-600 hover:to-accent-700 transition duration-300 shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane className="text-lg" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
