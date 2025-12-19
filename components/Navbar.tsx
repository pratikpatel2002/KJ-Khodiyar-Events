'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from 'next-themes'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Avoid hydration mismatch by ensuring theme is available on client
  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-gray-900 shadow-lg py-2 min-[400px]:py-2.5 sm:py-3'
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm py-2.5 min-[400px]:py-3 sm:py-4'
      }`}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0,
        width: '100%',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
    >
      <div className="max-w-7xl mx-auto px-2 min-[360px]:px-3 min-[400px]:px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-1.5 min-[360px]:gap-2 min-[400px]:gap-3 sm:gap-4">
          <Link href="/" className="flex-shrink-0 min-w-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden min-[901px]:flex items-center space-x-6">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-200 relative group ${
                  isActive
                    ? 'text-gold-500 dark:text-gold-400'
                    : 'text-gray-700 dark:text-gray-200 hover:text-gold-600 dark:hover:text-gold-400'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gold-500 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            )
          })}
            <button
              type="button"
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-gold-500 hover:border-gold-500 transition-colors"
              aria-label="Toggle dark mode"
            >
              {mounted && (theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />)}
            </button>
            <Link
              href="/contact"
              className="btn-primary text-sm"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex min-[901px]:hidden items-center gap-1.5 min-[360px]:gap-2 min-[400px]:gap-3 sm:gap-4">
            <button
              type="button"
              onClick={toggleTheme}
              className="w-7 h-7 min-[360px]:w-8 min-[360px]:h-8 min-[400px]:w-9 min-[400px]:h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-gold-500 hover:border-gold-500 transition-colors flex-shrink-0"
              aria-label="Toggle dark mode"
            >
              {mounted && (theme === 'dark' ? <FiSun size={14} className="min-[360px]:w-4 min-[360px]:h-4 min-[400px]:w-[18px] min-[400px]:h-[18px] sm:w-5 sm:h-5" /> : <FiMoon size={14} className="min-[360px]:w-4 min-[360px]:h-4 min-[400px]:w-[18px] min-[400px]:h-[18px] sm:w-5 sm:h-5" />)}
            </button>
            <button
              className="text-gray-700 dark:text-gray-200 hover:text-gold-600 dark:hover:text-gold-400 transition-colors flex items-center justify-center flex-shrink-0 p-0 min-[360px]:p-0.5 min-[400px]:p-1"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={20} className="min-[360px]:w-5 min-[360px]:h-5 min-[400px]:w-6 min-[400px]:h-6 sm:w-8 sm:h-8" /> : <FiMenu size={20} className="min-[360px]:w-5 min-[360px]:h-5 min-[400px]:w-6 min-[400px]:h-6 sm:w-8 sm:h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="block min-[901px]:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-3 sm:space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base sm:text-lg text-gray-700 dark:text-gray-200 hover:text-gold-600 dark:hover:text-gold-400 font-medium transition-colors py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-primary text-sm sm:text-base text-center py-2.5 sm:py-3"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar



