'use client'

import React from 'react'
import { FiStar } from 'react-icons/fi'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Priya Sharma',
    event: 'Wedding',
    rating: 5,
    text: 'KJ Khodiyar Events made our wedding absolutely magical! Every detail was perfect, and the team was incredibly professional. Our guests are still talking about it!',
    image: '👰',
  },
  {
    name: 'Rajesh Patel',
    event: 'Corporate Event',
    rating: 5,
    text: 'Outstanding service for our annual corporate event. The team handled everything seamlessly, and the event was a huge success. Highly recommended!',
    image: '👔',
  },
  {
    name: 'Anita Mehta',
    event: 'Baby Shower',
    rating: 5,
    text: 'The baby shower they organized was beyond our expectations! Beautiful decorations, perfect coordination, and such a warm, caring team. Thank you!',
    image: '👶',
  },
  {
    name: 'Vikram Singh',
    event: 'Birthday Party',
    rating: 5,
    text: 'My daughter\'s birthday party was a dream come true! The attention to detail and creativity was amazing. KJ Khodiyar Events truly understands how to create magic.',
    image: '🎂',
  },
]

const Testimonials: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center text-3xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-gray-900 dark:text-gray-50">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">{testimonial.event}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-gold-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials


