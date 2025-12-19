import React from 'react'
import Link from 'next/link'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import HeroSection from '@/components/HeroSection'
import ServicesPreview from '@/components/ServicesPreview'
import Testimonials from '@/components/Testimonials'
import WhyChooseUs from '@/components/WhyChooseUs'
import StatsSection from '@/components/StatsSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
    </>
  )
}










