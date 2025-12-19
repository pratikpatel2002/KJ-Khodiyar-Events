'use client'

import React, { useState } from 'react'
import { FiSend, FiCheckCircle } from 'react-icons/fi'

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          message: '',
        })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        alert(data.error || 'Failed to send message. Please try again.')
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred. Please try again later.')
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
        <FiCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600">
          We've received your message and sent a confirmation email to your inbox. We'll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
          placeholder="+91 XXX XXX XXXX"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="eventType" className="block text-sm font-semibold text-gray-700 mb-2">
            Event Type *
          </label>
          <select
            id="eventType"
            name="eventType"
            required
            value={formData.eventType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
          >
            <option value="">Select event type</option>
            <option value="wedding">Wedding / Marriage</option>
            <option value="birthday">Birthday</option>
            <option value="baby-shower">Baby Shower</option>
            <option value="corporate">Corporate Event</option>
            <option value="festival">Festival Decoration</option>
            <option value="haldi-mehendi">Haldi / Mehendi</option>
            <option value="surprise">Surprise Event</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-2">
            Event Date
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none"
          placeholder="Tell us about your event requirements, budget, and any specific preferences..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <FiSend />
          </>
        )}
      </button>
    </form>
  )
}

export default ContactForm





