'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ImagePlaceholder from '@/components/ImagePlaceholder'

// Note: Metadata moved to layout or use generateMetadata for client components

const galleryCategories = [
  {
    title: 'Weddings',
    slug: 'weddings',
    count: 24,
    image: '💍',
    color: 'from-gold-500 to-gold-700',
  },
  {
    title: 'Birthdays',
    slug: 'birthdays',
    count: 18,
    image: '🎂',
    color: 'from-royal-500 to-royal-700',
  },
  {
    title: 'Baby Showers',
    slug: 'baby-showers',
    count: 12,
    image: '👶',
    color: 'from-maroon-500 to-maroon-700',
  },
  {
    title: 'Corporate Events',
    slug: 'corporate-events',
    count: 15,
    image: '🏢',
    color: 'from-gold-500 to-royal-700',
  },
  {
    title: 'Festival Decorations',
    slug: 'festival-decorations',
    count: 20,
    image: '🎊',
    color: 'from-maroon-500 to-gold-700',
  },
  {
    title: 'SFX & Cold Pyro',
    slug: 'fire-sfx-cold-pyro',
    count: 10,
    image: '🔥',
    color: 'from-orange-500 to-amber-700',
  },
  {
    title: 'Haldi / Mehendi',
    slug: 'haldi-mehendi',
    count: 16,
    image: '🪔',
    color: 'from-gold-500 to-maroon-700',
  },
]

export default function Gallery() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-royal-50 via-white to-white text-gray-900 dark:bg-gradient-to-br dark:from-royal-900 dark:via-maroon-900 dark:to-black dark:text-white transition-colors duration-300">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our <span className="text-gold-500">Gallery</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
              A glimpse into the magical moments we've created
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 min-[450px]:grid-cols-2 min-[770px]:grid-cols-3 gap-8">
            {galleryCategories.map((category, index) => (
              <Link key={category.slug} href={`/gallery/${category.slug}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div
                    className={`bg-gradient-to-br ${category.color} aspect-[4/3] flex flex-col items-center justify-center text-white p-8 transform group-hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="text-7xl mb-4">{category.image}</div>
                    <h3 className="text-3xl font-serif font-bold mb-2">
                      {category.title}
                    </h3>
                    <p className="text-white/90">{category.count} Events</p>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-lg">
                      View Gallery →
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid with High-Quality Placeholders */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold mb-4">
              Featured <span className="text-gradient">Events</span>
            </h2>
            <p className="text-xl text-gray-600">
              Showcasing our finest work across all event types
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: 'wedding', alt: 'Wedding Event Photo' },
              { category: 'birthday', alt: 'Birthday Celebration Photo' },
              { category: 'baby-shower', alt: 'Baby Shower Event Photo' },
              { category: 'corporate', alt: 'Corporate Event Photo' },
              { category: 'festival', alt: 'Festival Decoration Photo' },
              { category: 'haldi-mehendi', alt: 'Haldi Mehendi Ceremony Photo' },
              { category: 'wedding', alt: 'Wedding Event Photo' },
              { category: 'birthday', alt: 'Birthday Celebration Photo' },
              { category: 'corporate', alt: 'Corporate Event Photo' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <ImagePlaceholder
                  src={`/images/${item.category}/image-${index + 1}.jpg`}
                  alt={item.alt}
                  width={600}
                  height={600}
                  category={item.category}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-semibold text-lg">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


