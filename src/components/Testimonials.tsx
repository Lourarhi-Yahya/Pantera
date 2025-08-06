'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const testimonials = [
  {
    id: 1,
    name: 'Robert Williams',
    role: 'CEO, Metropolitan Holdings',
    company: 'Metropolitan Holdings LLC',
    content: 'Pantera transformed our vision into reality. Their innovative approach and attention to detail exceeded all our expectations.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    name: 'Jennifer Davis',
    role: 'Director, Skyline Properties',
    company: 'Skyline Properties Inc.',
    content: 'Pantera\'s team perfectly understands contemporary urban challenges. Their technical expertise is remarkable.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 3,
    name: 'Thomas Anderson',
    role: 'Principal, Anderson Development',
    company: 'Anderson Development Group',
    content: 'Exceptional collaboration on our sustainable project. Pantera perfectly masters green technologies and energy efficiency.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-pantera-charcoal mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-pantera-gray-warm max-w-2xl mx-auto">
            Our clients' satisfaction demonstrates our commitment to excellence
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-pantera-beige rounded-lg p-8 md:p-12 text-center border border-transparent"
            >
              <div className="mb-6">
                <div 
                  className="w-20 h-20 rounded-full mx-auto mb-4 bg-cover bg-center"
                  style={{ backgroundImage: `url('${testimonials[currentIndex].image}')` }}
                />
                <h3 className="font-semibold text-pantera-charcoal text-lg">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-pantera-gray-warm">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-pantera-gold font-medium">
                  {testimonials[currentIndex].company}
                </p>
              </div>
              
              <blockquote className="text-lg md:text-xl text-pantera-charcoal italic leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100"
          >
            <ChevronLeftIcon className="w-6 h-6 text-pantera-gold" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100"
          >
            <ChevronRightIcon className="w-6 h-6 text-pantera-gold" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-pantera-gold' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
