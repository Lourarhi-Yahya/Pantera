'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import FeaturedProjects from '@/components/FeaturedProjects'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <FeaturedProjects />
      <Services />
      <Testimonials />
      <CTA />
    </div>
  )
}
