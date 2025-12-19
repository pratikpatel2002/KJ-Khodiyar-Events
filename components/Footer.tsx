import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiMessageCircle } from 'react-icons/fi'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    'Weddings',
    'Birthdays',
    'Baby Showers',
    'Corporate Events',
    'Festival Decorations',
    'Surprise Events',
  ]

  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black dark:from-black dark:to-gray-950 text-white transition-colors duration-300">
      <div className="w-full px-3 min-[400px]:px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8 min-[400px]:py-10 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 min-[520px]:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16 mb-12 md:mb-16">
          {/* Company Info */}
          <div className="flex flex-col items-center min-[520px]:items-start text-center min-[520px]:text-left">
            <Logo showText={true} className="mb-6" variant="footer" />
            <p className="text-gray-400 mb-6 leading-relaxed text-sm min-[400px]:text-base max-w-md">
              Creating unforgettable moments with royal elegance and premium event management services.
            </p>
            <div className="flex space-x-4 justify-center min-[520px]:justify-start">
              <a
                href="#"
                className="w-9 h-9 min-[400px]:w-10 min-[400px]:h-10 bg-gold-500 hover:bg-gold-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={18} className="min-[400px]:w-5 min-[400px]:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 min-[400px]:w-10 min-[400px]:h-10 bg-gold-500 hover:bg-gold-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={18} className="min-[400px]:w-5 min-[400px]:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 min-[400px]:w-10 min-[400px]:h-10 bg-gold-500 hover:bg-gold-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={18} className="min-[400px]:w-5 min-[400px]:h-5" />
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 min-[400px]:w-10 min-[400px]:h-10 bg-gold-500 hover:bg-gold-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <FiMessageCircle size={18} className="min-[400px]:w-5 min-[400px]:h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="text-center min-[520px]:text-left">
            <h3 className="text-lg min-[400px]:text-xl font-serif font-bold mb-6 text-gold-400">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-gold-400 transition-colors text-sm min-[400px]:text-base"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center min-[520px]:text-left">
            <h3 className="text-lg min-[400px]:text-xl font-serif font-bold mb-6 text-gold-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 min-[400px]:space-x-3 justify-center min-[520px]:justify-start">
                <FiPhone className="text-gold-400 mt-1 flex-shrink-0 w-4 h-4 min-[400px]:w-5 min-[400px]:h-5" />
                <a 
                  href="tel:+91XXXXXXXXXX" 
                  className="text-gray-400 hover:text-gold-400 transition-colors text-sm min-[400px]:text-base break-words cursor-pointer"
                >
                  +91 XXX XXX XXXX
                </a>
              </li>
              <li className="flex items-start space-x-2 min-[400px]:space-x-3 justify-center min-[520px]:justify-start">
                <FiMail className="text-gold-400 mt-1 flex-shrink-0 w-4 h-4 min-[400px]:w-5 min-[400px]:h-5" />
                <a 
                  href="mailto:info@kjkhodiyarevents.com" 
                  className="text-gray-400 hover:text-gold-400 transition-colors text-sm min-[400px]:text-base break-words cursor-pointer"
                >
                  info@kjkhodiyarevents.com
                </a>
              </li>
              <li className="flex items-start space-x-2 min-[400px]:space-x-3 justify-center min-[520px]:justify-start">
                <FiMessageCircle className="text-gold-400 mt-1 flex-shrink-0 w-4 h-4 min-[400px]:w-5 min-[400px]:h-5" />
                <a 
                  href="https://wa.me/91XXXXXXXXXX" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold-400 transition-colors text-sm min-[400px]:text-base break-words cursor-pointer"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-start space-x-2 min-[400px]:space-x-3 justify-center min-[520px]:justify-start">
                <FiMapPin className="text-gold-400 mt-1 flex-shrink-0 w-4 h-4 min-[400px]:w-5 min-[400px]:h-5" />
                <span className="text-gray-400 text-sm min-[400px]:text-base break-words">
                  Your City, State, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 md:pt-10 mt-12 md:mt-16">
          <div className="flex justify-center">
            <p className="text-gray-400 text-xs min-[400px]:text-sm text-center px-2">
              © {currentYear} KJ Khodiyar Events. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer



