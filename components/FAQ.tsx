'use client'

import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const faqs = [
  {
    question: 'How far in advance should I book your services?',
    answer: 'We recommend booking at least 3-6 months in advance for weddings and major events to ensure availability and proper planning. However, we can accommodate shorter timelines depending on the event size and requirements.',
  },
  {
    question: 'What is included in your event management package?',
    answer: 'Our comprehensive packages include event planning, venue selection, decoration, catering coordination, entertainment arrangements, photography/videography coordination, and day-of-event management. Specific inclusions vary based on the package you choose.',
  },
  {
    question: 'Do you provide services for events outside the city?',
    answer: 'Yes, we provide event management services across multiple cities. Additional travel and accommodation charges may apply for out-of-city events. Please contact us to discuss your specific requirements.',
  },
  {
    question: 'Can I customize the event package according to my budget?',
    answer: 'Absolutely! We offer flexible packages that can be customized to fit your budget and requirements. We work closely with clients to create the perfect event within their budget constraints.',
  },
  {
    question: 'Do you handle all vendor coordination?',
    answer: 'Yes, we take care of all vendor coordination including caterers, decorators, photographers, entertainers, and other service providers. We have a network of trusted vendors to ensure quality service.',
  },
  {
    question: 'What types of events do you specialize in?',
    answer: 'We specialize in weddings, birthdays, baby showers, corporate events, festival decorations, Haldi/Mehendi ceremonies, surprise events, and provide fire SFX & cold pyro services. We handle events of all sizes from intimate gatherings to grand celebrations.',
  },
  {
    question: 'How do you ensure the safety of fire SFX and cold pyro effects?',
    answer: 'Safety is our top priority. All our fire SFX and cold pyro services are handled by certified professionals with proper safety equipment and protocols. We ensure all necessary permits and safety measures are in place.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellation policies vary based on the event type and timeline. Generally, cancellations made 30+ days in advance receive a partial refund. Please refer to your contract for specific terms or contact us for details.',
  },
]

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Find answers to common questions about our event management services
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden transition-colors duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="font-semibold text-gray-900 dark:text-gray-50 pr-4">{faq.question}</span>
              {openIndex === index ? (
                <FiChevronUp className="text-gold-500 flex-shrink-0" size={24} />
              ) : (
                <FiChevronDown className="text-gold-500 flex-shrink-0" size={24} />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ



