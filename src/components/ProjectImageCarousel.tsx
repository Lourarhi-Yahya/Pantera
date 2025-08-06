'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface ProjectImageCarouselProps {
  images: string[]
  title: string
}

export default function ProjectImageCarousel({ images, title }: ProjectImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative w-full h-[350px] md:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
      <motion.img
        key={currentImageIndex}
        src={images[currentImageIndex]}
        alt={`${title} - Image ${currentImageIndex + 1}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="object-cover object-center w-full h-full"
      />
      
      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-pantera-gold hover:text-white text-white p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pantera-gold/70 shadow-lg w-10 h-10 flex items-center justify-center"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-pantera-gold hover:text-white text-white p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pantera-gold/70 shadow-lg w-10 h-10 flex items-center justify-center"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Image Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pantera-gold/70 ${index === currentImageIndex ? 'bg-pantera-gold border-pantera-gold shadow-md scale-110' : 'bg-white/60 border-white'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
