import React from 'react'
import { FiAward, FiHeart, FiTarget, FiUsers } from 'react-icons/fi'

export const metadata = {
  title: 'About Us - KJ Khodiyar Events | Premium Event Management',
  description: 'Learn about KJ Khodiyar Events - a premier event management company with years of experience creating unforgettable celebrations.',
}

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-royal-50 via-white to-white text-gray-900 dark:bg-gradient-to-br dark:from-royal-900 dark:via-maroon-900 dark:to-black dark:text-white transition-colors duration-300">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              About <span className="text-gold-400">KJ Khodiyar Events</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
              Crafting extraordinary experiences with passion, precision, and royal elegance
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-gray-900 dark:text-gray-50">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-200 leading-relaxed">
                <p>
                  KJ Khodiyar Events was founded with a vision to transform ordinary celebrations into extraordinary experiences. 
                  With over a decade of expertise in event management, we have established ourselves as a premier event planning 
                  company known for our attention to detail, creative excellence, and unwavering commitment to client satisfaction.
                </p>
                <p>
                  Our journey began with a simple belief: every event, no matter how big or small, deserves to be executed with 
                  perfection and elegance. We specialize in creating memorable moments that reflect your unique style and vision, 
                  whether it's an intimate gathering or a grand celebration.
                </p>
                <p>
                  What sets us apart is our ability to blend traditional elegance with modern innovation, creating events that 
                  are both timeless and contemporary. Our team of experienced professionals works tirelessly to ensure that every 
                  aspect of your event is flawlessly executed, from initial planning to the final celebration.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gold-500 to-gold-700 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-6xl mb-4">🎉</div>
                  <p className="text-lg opacity-90">Image Placeholder</p>
                  <p className="text-sm opacity-75 mt-2">Add your company photo here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FiHeart,
                title: 'Passion',
                description: 'We love what we do, and it shows in every event we create.',
              },
              {
                icon: FiTarget,
                title: 'Excellence',
                description: 'We strive for perfection in every detail, no matter how small.',
              },
              {
                icon: FiUsers,
                title: 'Integrity',
                description: 'Honest, transparent, and reliable service you can trust.',
              },
              {
                icon: FiAward,
                title: 'Innovation',
                description: 'We bring fresh ideas and creative solutions to every event.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-gray-900 dark:text-gray-50">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="rounded-2xl p-10 text-gray-900 bg-gradient-to-br from-royal-50 via-white to-royal-100 dark:from-royal-900 dark:via-royal-900 dark:to-royal-800 dark:text-white transition-colors duration-300">
              <h3 className="text-3xl font-serif font-bold mb-6 text-gold-500">
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                To create unforgettable experiences that exceed expectations, bringing dreams to life through 
                exceptional event planning and management. We are committed to delivering premium services 
                that reflect our clients' unique vision while maintaining the highest standards of quality 
                and professionalism.
              </p>
            </div>
            {/* Vision */}
            <div className="rounded-2xl p-10 text-gray-900 bg-gradient-to-br from-maroon-50 via-white to-maroon-100 dark:from-maroon-900 dark:via-maroon-900 dark:to-maroon-800 dark:text-white transition-colors duration-300">
              <h3 className="text-3xl font-serif font-bold mb-6 text-gold-500">
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                To be the most trusted and sought-after event management company, recognized for our 
                innovative approach, royal elegance, and unwavering commitment to creating magical moments. 
                We envision a future where every celebration is transformed into an extraordinary experience 
                that leaves lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



