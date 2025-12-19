'use client'

import React from 'react'
import Link from 'next/link'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import { motion } from 'framer-motion'
import VideoPlaceholder from '@/components/VideoPlaceholder'

// Note: Metadata moved to layout or use generateMetadata for client components

const services = [
  {
    title: 'Weddings / Marriages',
    slug: 'weddings',
    description: 'Create your dream wedding with our comprehensive wedding planning services. From intimate ceremonies to grand celebrations, we handle every detail with royal elegance.',
    features: [
      'Complete wedding planning & coordination',
      'Venue selection & decoration',
      'Catering & menu planning',
      'Photography & videography coordination',
      'Entertainment & music arrangements',
      'Transportation & logistics',
    ],
    icon: '💍',
    color: 'from-gold-500 to-gold-700',
  },
  {
    title: 'Birthdays',
    slug: 'birthdays',
    description: 'Make every birthday celebration special with our creative and personalized birthday party planning services.',
    features: [
      'Theme-based decorations',
      'Custom cake arrangements',
      'Entertainment & activities',
      'Photography services',
      'Catering coordination',
      'Surprise party planning',
    ],
    icon: '🎂',
    color: 'from-royal-500 to-royal-700',
  },
  {
    title: 'Baby Showers',
    slug: 'baby-showers',
    description: 'Celebrate the arrival of your little one with beautifully organized baby shower events filled with joy and warmth.',
    features: [
      'Elegant baby shower decorations',
      'Customized themes & color schemes',
      'Games & activities coordination',
      'Catering & refreshments',
      'Gift registry assistance',
      'Photography services',
    ],
    icon: '👶',
    color: 'from-maroon-500 to-maroon-700',
  },
  {
    title: 'Surprise Events',
    slug: 'surprise-events',
    description: 'Plan the perfect surprise with our discreet and creative surprise event planning services that create magical moments.',
    features: [
      'Complete surprise coordination',
      'Secret planning & execution',
      'Customized surprise themes',
      'Venue arrangements',
      'Entertainment & activities',
      'Photography & videography',
    ],
    icon: '🎉',
    color: 'from-gold-500 to-royal-700',
  },
  {
    title: 'Fire SFX & Cold Pyro',
    slug: 'fire-sfx-cold-pyro',
    description: 'Add spectacular visual effects to your events with our professional fire SFX and cold pyro services.',
    features: [
      'Fire SFX displays',
      'Cold pyro effects',
      'Safety-certified professionals',
      'Custom effect designs',
      'Stage & venue setup',
      'Coordination with event flow',
    ],
    icon: '🔥',
    color: 'from-gold-500 to-maroon-700',
  },
  {
    title: 'Corporate Events',
    slug: 'corporate-events',
    description: 'Professional corporate event management services for conferences, seminars, product launches, and team building events.',
    features: [
      'Conference & seminar planning',
      'Product launch events',
      'Team building activities',
      'AV equipment & technical support',
      'Corporate catering',
      'Branding & signage',
    ],
    icon: '🏢',
    color: 'from-royal-500 to-royal-700',
  },
  {
    title: 'Festival Decorations',
    slug: 'festival-decorations',
    description: 'Transform your space with stunning festival decorations that celebrate tradition with modern elegance.',
    features: [
      'Traditional & modern themes',
      'Lighting & ambiance creation',
      'Floral arrangements',
      'Custom decoration designs',
      'Installation & setup',
      'Cleanup services',
    ],
    icon: '🎊',
    color: 'from-maroon-500 to-gold-700',
  },
  {
    title: 'Haldi / Mehendi Setup',
    slug: 'haldi-mehendi',
    description: 'Beautiful and traditional Haldi and Mehendi ceremony setups that honor cultural traditions with contemporary style.',
    features: [
      'Traditional ceremony setup',
      'Floral & decorative arrangements',
      'Color-coordinated themes',
      'Mehendi artist coordination',
      'Photography setup',
      'Cultural authenticity',
    ],
    icon: '🪔',
    color: 'from-gold-500 to-maroon-700',
  },
]

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-royal-50 via-white to-white text-gray-900 dark:bg-gradient-to-br dark:from-royal-900 dark:via-maroon-900 dark:to-black dark:text-white transition-colors duration-300">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our <span className="text-gold-500">Services</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
              Comprehensive event management solutions for every occasion
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link key={service.slug} href={`/gallery/${service.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800 cursor-pointer"
                >
                  <div className={`bg-gradient-to-br ${service.color} p-8 text-white`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-5xl">{service.icon}</div>
                      <h2 className="text-3xl font-serif font-bold">{service.title}</h2>
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed">{service.description}</p>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-50">What's Included:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <FiCheckCircle className="text-gold-500 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-gold-600 font-semibold">
                      View {service.title.includes(' / ') ? service.title.split(' / ')[0] : service.title} gallery →
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - Replace /videos/services-promo.mp4 with your actual video */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-serif font-bold mb-4">
                See Our <span className="text-gradient">Work in Action</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Watch how we transform events into extraordinary experiences
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <VideoPlaceholder
                src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
                className="w-full h-full"
                autoPlay={true}
                loop={true}
                muted={true}
                showControls={true}
                placeholderText="Temporary demo video from the internet. Replace src with your own file, e.g. /videos/services-promo.mp4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-royal-100 to-maroon-100 text-gray-900 dark:from-royal-900 dark:to-maroon-900 dark:text-white transition-colors duration-300">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's work together to create an unforgettable experience for your special occasion
          </p>
          <Link
            href="/contact"
            className="btn-primary text-lg px-10 py-4 inline-flex items-center space-x-2"
          >
            <span>Get Started Today</span>
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </div>
  )
}


