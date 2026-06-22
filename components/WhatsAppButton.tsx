'use client'

import { FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '@/config/site.config'

export default function WhatsAppButton() {
  // Get the first phone number from config
  const phoneNumber = siteConfig.contact.phone[0].replace(/\s+/g, '')
  
  // WhatsApp API URL format: https://wa.me/[country-code][phone-number]
  const whatsappLink = `https://wa.me/${phoneNumber}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  )
}
