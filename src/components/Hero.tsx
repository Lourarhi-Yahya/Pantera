'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-pantera-charcoal/80 via-pantera-charcoal/60 to-transparent" />
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="heading-xl text-pantera-gold mb-10">
            Lead in architecture and interior design
          </h1>
          <p className="text-xl md:text-2xl text-pantera-beige/90 mb-12 max-w-3xl leading-relaxed">
            Transforming urban landscapes across America with innovative design, 
            sustainable solutions, and architectural excellence that defines the future of living.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/projects" 
              className="btn-primary inline-flex items-center justify-center text-lg px-10 py-5"
            >
              Explore Our Work
              <ArrowRightIcon className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDownIcon className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
