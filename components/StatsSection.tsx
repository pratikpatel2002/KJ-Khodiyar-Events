'use client'

import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { number: '500+', label: 'Events Managed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '10+', label: 'Years Experience' },
  { number: '50+', label: 'Award Winners' },
]

const StatsSection: React.FC = () => {
  return (
    <section className="section-padding pt-24 md:pt-32 bg-gradient-to-r from-royal-50 via-white to-maroon-50 text-gray-900 dark:bg-gradient-to-r dark:from-royal-900 dark:via-maroon-900 dark:to-royal-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSIxMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJhIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PHBhdGggZD0iTTAgMGgxMDB2MTAwSDB6IiBmaWxsPSIjZmZkNzAwIiBmaWxsLW9wYWNpdHk9Ii4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwMCIgaGVpZ2h0PSIxMDAwIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')]"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 100 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                className="text-5xl md:text-6xl font-serif font-bold text-gold-400 mb-2"
              >
                {stat.number}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300"
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection


