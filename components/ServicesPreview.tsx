'use client'

import React from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Weddings',
    description: 'Elegant wedding planning with royal touches',
    icon: '💍',
    color: 'from-gold-500 to-gold-700',
  },
  {
    title: 'Birthdays',
    description: 'Memorable birthday celebrations',
    icon: '🎂',
    color: 'from-royal-500 to-royal-700',
  },
  {
    title: 'Baby Showers',
    description: 'Joyful baby shower arrangements',
    icon: '👶',
    color: 'from-maroon-500 to-maroon-700',
  },
  {
    title: 'Corporate Events',
    description: 'Professional corporate gatherings',
    icon: '🏢',
    color: 'from-gold-500 to-royal-700',
  },
]

const ServicesPreview: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our <span className="text-gradient">Premium Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Link
              key={index}
              href="/services"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 cursor-pointer h-full"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900 dark:text-gray-50">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <div className="text-gold-600 font-semibold flex items-center space-x-2 group-hover:text-gold-700 transition-colors">
                  <span>Learn More</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services" className="btn-primary inline-flex items-center space-x-2">
            <span>View All Services</span>
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview


