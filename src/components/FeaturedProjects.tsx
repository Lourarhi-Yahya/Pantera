'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const featuredProjects = [
  {
    id: 1,
    title: 'Skyline Residences',
    location: 'Los Angeles, CA',
    category: 'Residential',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Luxury residential complex with panoramic city views.',
  },
  {
    id: 2,
    title: 'Manhattan Corporate Tower',
    location: 'New York, NY',
    category: 'Commercial',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Modern office tower in the heart of Manhattan.',
  },
  {
    id: 3,
    title: 'Green Valley Community',
    location: 'Austin, TX',
    category: 'Sustainable',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Eco-responsible and innovative community development.',
  },
]

export default function FeaturedProjects() {
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
          <h2 className="heading-lg mb-6">
            Featured Projects
          </h2>
          <p className="text-body-lg max-w-4xl mx-auto">
            Discover our latest architectural achievements that showcase innovation, sustainability, and design excellence across America.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="card card-hover group">
                  <div className="relative overflow-hidden">
                    <div 
                      className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">{project.category}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pantera-beige text-pantera-charcoal">
                        {project.category}
                      </span>
                      <span className="text-sm font-medium text-pantera-gold">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="heading-sm text-xl mb-3 group-hover:text-pantera-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-body mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-pantera-gray-warm">
                        📍 {project.location}
                      </span>
                      <ArrowRightIcon className="w-4 h-4 text-pantera-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-pantera-gold hover:text-pantera-gold-dark font-semibold transition-colors duration-200"
          >
            View All Projects
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
