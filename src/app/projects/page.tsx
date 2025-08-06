'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    id: 101,
    title: 'Rabat Iconic Bridge',
    location: 'Rabat, Morocco',
    category: 'urban',
    year: '2024',
    image: '/images/R.jpeg',
    description: 'A landmark bridge connecting the banks of the Bouregreg river, blending modern engineering with Moroccan design motifs.',
    size: '350 meters',
    status: 'In Progress'
  },
  {
    id: 102,
    title: 'Casablanca Marina Tower',
    location: 'Casablanca, Morocco',
    category: 'commercial',
    year: '2023',
    image: '/images/marina-tower-casablanca-05-scaled.jpg',
    description: 'A high-rise tower overlooking the Atlantic, designed for mixed-use with luxury offices and retail.',
    size: '50,000 sq m',
    status: 'Completed'
  },
  {
    id: 1,
    title: 'Skyline Residences',
    location: 'Los Angeles, CA',
    category: 'residential',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Luxury residential complex with panoramic city views.',
    size: '45,000 sq ft',
    status: 'Completed'
  },
  {
    id: 2,
    title: 'Manhattan Corporate Tower',
    location: 'New York, NY',
    category: 'commercial',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Modern office tower in the heart of Manhattan.',
    size: '120,000 sq ft',
    status: 'Completed'
  },
  {
    id: 3,
    title: 'Green Valley Community',
    location: 'Austin, TX',
    category: 'sustainable',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Eco-responsible and innovative community development.',
    size: '85,000 sq ft',
    status: 'Completed'
  },
  {
    id: 4,
    title: 'Urban Plaza Chicago',
    location: 'Chicago, IL',
    category: 'urban',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Modern public space in downtown Chicago.',
    size: '25,000 sq ft',
    status: 'In Progress'
  },
  {
    id: 5,
    title: 'Miami Beach Resort',
    location: 'Miami, FL',
    category: 'residential',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Luxury beachfront hotel complex.',
    size: '75,000 sq ft',
    status: 'Completed'
  },
  {
    id: 6,
    title: 'Silicon Valley Tech Campus',
    location: 'San Francisco, CA',
    category: 'commercial',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Innovative technology campus in Silicon Valley.',
    size: '200,000 sq ft',
    status: 'In Progress'
  },
  {
    id: 7,
    title: 'Portland Eco District',
    location: 'Portland, OR',
    category: 'sustainable',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Ecological district with positive energy buildings.',
    size: '150,000 sq ft',
    status: 'Completed'
  },
  {
    id: 8,
    title: 'Denver Cultural Center',
    location: 'Denver, CO',
    category: 'urban',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Modern cultural center with versatile spaces.',
    size: '60,000 sq ft',
    status: 'Completed'
  }
]

const categories = [
  { id: 'all', name: 'All Projects', count: projects.length },
  { id: 'residential', name: 'Residential', count: projects.filter(p => p.category === 'residential').length },
  { id: 'commercial', name: 'Commercial', count: projects.filter(p => p.category === 'commercial').length },
  { id: 'urban', name: 'Urban', count: projects.filter(p => p.category === 'urban').length },
  { id: 'sustainable', name: 'Sustainable', count: projects.filter(p => p.category === 'sustainable').length },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')` 
            }}
          />
          <div className="absolute inset-0 bg-pantera-charcoal/70" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="block text-pantera-gold">Projects</span>
            </h1>
            <p className="text-xl text-pantera-beige/90 max-w-3xl mx-auto">
              Discover our portfolio of exceptional architectures that redefine American urban landscapes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-pantera-gray-warm/20">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-pantera-gold text-white shadow-lg'
                    : 'bg-gray-100 text-pantera-charcoal hover:bg-pantera-beige'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer card-hover"
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <div 
                      className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Terminé' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Hover Content */}
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium capitalize">
                          {project.category === 'residential' && 'Residential'}
                          {project.category === 'commercial' && 'Commercial'}
                          {project.category === 'urban' && 'Urban'}
                          {project.category === 'sustainable' && 'Sustainable'}
                        </span>
                        <span className="text-sm">{project.size}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-display text-xl font-semibold text-pantera-charcoal group-hover:text-pantera-gold transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-sm text-pantera-gray-warm">
                      <div className="flex items-center gap-1">
                        <MapPinIcon className="w-4 h-4" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        {project.year}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-pantera-gray-warm">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
