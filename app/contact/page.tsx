"use client"

import React from "react"
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-royal-50 via-white to-white text-gray-900 dark:bg-gradient-to-br dark:from-royal-900 dark:via-maroon-900 dark:to-black dark:text-white transition-colors duration-300">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Get In <span className="text-gold-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
              Let's discuss how we can make your event extraordinary
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900 dark:text-gray-50">
                Send Us a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Fill out the form below and we'll get back to you within 24 hours to discuss your event requirements.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900 dark:text-gray-50">
                Contact Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Reach out to us through any of these channels. We're here to help make your event planning smooth and stress-free.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a
                        href="tel:+91XXXXXXXXXX"
                        className="hover:text-gold-500 transition-colors"
                      >
                        +91 XXX XXX XXXX
                      </a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a
                        href="tel:+91YYYYYYYYYY"
                        className="hover:text-gold-500 transition-colors"
                      >
                        +91 XXX XXX XXXX
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-royal-500 to-royal-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a
                        href="mailto:info@kjkhodiyarevents.com"
                        className="hover:text-gold-500 transition-colors"
                      >
                        info@kjkhodiyarevents.com
                      </a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a
                        href="mailto:support@kjkhodiyarevents.com"
                        className="hover:text-gold-500 transition-colors"
                      >
                        support@kjkhodiyarevents.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-1">WhatsApp</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a
                        href="https://wa.me/91XXXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gold-500 transition-colors"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-maroon-500 to-maroon-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-1">Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Your Business Address<br />
                      City, State - PIN Code<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-3">Business Hours</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>By Appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <FAQ />
        </div>
      </section>
    </div>
  )
}



