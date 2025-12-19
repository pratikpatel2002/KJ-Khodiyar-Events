'use client'

import React from 'react'
import { FiAward, FiUsers, FiHeart, FiZap } from 'react-icons/fi'
import { motion } from 'framer-motion'

const features = [
  {
    icon: FiAward,
    title: 'Premium Quality',
    description: 'We maintain the highest standards in every event, ensuring luxury and elegance in every detail.',
  },
  {
    icon: FiUsers,
    title: 'Expert Team',
    description: 'Our experienced professionals bring creativity and expertise to make your event truly special.',
  },
  {
    icon: FiHeart,
    title: 'Personalized Service',
    description: 'Every event is unique. We tailor our services to match your vision and exceed your expectations.',
  },
  {
    icon: FiZap,
    title: 'Innovative Ideas',
    description: 'We stay ahead with the latest trends and innovative concepts to create memorable experiences.',
  },
]

const WhyChooseUs: React.FC = () => {
  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Why Choose <span className="text-gradient">KJ Khodiyar Events</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We combine passion, expertise, and attention to detail to create extraordinary events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
              >
                <feature.icon className="text-white text-3xl" />
              </motion.div>
              <h3 className="text-xl font-serif font-bold mb-3 text-gray-900 dark:text-gray-50">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs


