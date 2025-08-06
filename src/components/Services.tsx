'use client'

import { motion } from 'framer-motion'
import { 
  BuildingOffice2Icon, 
  HomeIcon, 
  GlobeAmericasIcon, 
  ArrowPathIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    id: 1,
    title: 'Architectural Design',
    description: 'Innovative and functional design for all types of residential and commercial projects.',
    icon: BuildingOffice2Icon,
    features: ['Detailed plans', '3D modeling', 'Realistic visualizations', 'Spatial optimization']
  },
  {
    id: 2,
    title: 'Residential Architecture',
    description: 'Contemporary homes and personalized living spaces tailored to your needs.',
    icon: HomeIcon,
    features: ['Custom homes', 'Residential complexes', 'Renovations', 'Extensions']
  },
  {
    id: 3,
    title: 'Urban Planning & Development',
    description: 'Sustainable urban planning and public space development.',
    icon: GlobeAmericasIcon,
    features: ['Urban planning', 'Public spaces', 'Urban mobility', 'Sustainable development']
  },
  {
    id: 4,
    title: 'Sustainable Renovation',
    description: 'Ecological transformation of existing buildings with green technologies.',
    icon: ArrowPathIcon,
    features: ['Energy efficiency', 'Eco-friendly materials', 'LEED certifications', 'Rehabilitation']
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-pantera-beige">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-pantera-charcoal mb-4">
            Our Services
          </h2>
          <p className="text-lg text-pantera-gray-warm max-w-2xl mx-auto">
            Complete expertise to bring your most ambitious architectural projects to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-pantera-gold rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-pantera-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-pantera-gray-warm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-pantera-gold rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
