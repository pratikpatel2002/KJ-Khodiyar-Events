'use client'

import React from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion'
import VideoPlaceholder from './VideoPlaceholder'

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-royal-50 via-gold-50/30 to-maroon-50/20 dark:bg-gradient-to-br dark:from-royal-900 dark:via-maroon-900 dark:to-black transition-colors duration-300">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Large decorative circles */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-200/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-royal-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-maroon-200/30 rounded-full blur-3xl"></div>
        {/* Additional accent circles */}
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-gold-300/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-royal-300/30 rounded-full blur-2xl"></div>
      </div>
      
      {/* Background Video - Replace /videos/hero-banner.mp4 with your actual video */}
      <div className="absolute inset-0 z-0">
        <VideoPlaceholder
          src="/videos/hero-banner.mp4"
          className="w-full h-full"
          autoPlay={true}
          loop={true}
          muted={true}
          placeholderText="Replace with your video: Add /videos/hero-banner.mp4 (1920x1080, MP4 format)"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70 dark:from-black/50 dark:via-black/30 dark:to-black/50 z-0 transition-colors duration-300"></div>
      </div>

      {/* Content with smooth animations */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 container-custom text-center text-gray-900 dark:text-white transition-colors duration-300"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight md:leading-snug"
          >
            Creating{' '}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gradient bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent inline-block pb-1"
            >
              Unforgettable
            </motion.span>
            <br />
            Moments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-8 leading-relaxed"
          >
            Premium event management services that transform your special occasions into extraordinary experiences
            with royal elegance and unmatched attention to detail.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 lg:mb-20"
          >
            <Link href="/contact" className="btn-primary text-lg px-10 py-4 flex items-center space-x-2 group">
              <span>Plan Your Event</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="btn-secondary text-lg px-10 py-4 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator with smooth animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-gold-600 dark:border-gold-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gold-600 dark:bg-gold-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection


