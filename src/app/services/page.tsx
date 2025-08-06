'use client'

import { motion } from 'framer-motion'
import { 
  BuildingOffice2Icon, 
  HomeIcon, 
  GlobeAmericasIcon, 
  ArrowPathIcon,
  CheckIcon,
  PencilSquareIcon,
  CogIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    id: 'architectural-design',
    title: 'Architectural Design',
    icon: PencilSquareIcon,
    description: 'Innovative and functional design for all types of residential and commercial projects.',
    features: [
      'Detailed architectural plans',
      '3D modeling and visualizations',
      'Feasibility studies',
      'Spatial optimization',
      'Landscape integration',
      'Regulatory compliance'
    ],
    process: [
      'Needs and constraints analysis',
      'Preliminary design',
      'Project development',
      'Execution plans',
      'Construction supervision'
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'residential',
    title: 'Residential Architecture',
    icon: HomeIcon,
    description: 'Contemporary homes and personalized living spaces tailored to your needs and lifestyle.',
    features: [
      'Custom individual homes',
      'Residential complexes',
      'Renovations and extensions',
      'Interior design',
      'Gardens and outdoor spaces',
      'Home automation and technology'
    ],
    process: [
      'Personalized consultation',
      'Site analysis',
      'Custom design',
      'Permits and authorizations',
      'Construction coordination'
    ],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'urban-planning',
    title: 'Urban Planning & Development',
    icon: GlobeAmericasIcon,
    description: 'Sustainable urban planning and public space development for vibrant communities.',
    features: [
      'Strategic urban planning',
      'Public spaces and parks',
      'Sustainable urban mobility',
      'Mixed-use development',
      'Urban revitalization',
      'Community consultation'
    ],
    process: [
      'Territorial analysis',
      'Public consultation',
      'Master plan',
      'Development plans',
      'Implementation'
    ],
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sustainable',
    title: 'Sustainable Renovation',
    icon: ArrowPathIcon,
    description: 'Ecological transformation of existing buildings with the latest green technologies.',
    features: [
      'Complete energy audit',
      'High-performance insulation',
      'Renewable energy',
      'Ecological materials',
      'LEED/BREEAM certifications',
      'Water recovery systems'
    ],
    process: [
      'Energy assessment',
      'Renovation plan',
      'Technology selection',
      'Coordinated construction',
      'Final certification'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

const additionalServices = [
  {
    title: 'Consultations & Studies',
    icon: LightBulbIcon,
    description: 'Technical expertise and strategic advice for your architectural projects.'
  },
  {
    title: 'Project Management',
    icon: CogIcon,
    description: 'Complete coordination of your projects from design to delivery.'
  },
  {
    title: 'Commercial Architecture',
    icon: BuildingOffice2Icon,
    description: 'Offices, retail spaces, and industrial buildings adapted to your activities.'
  }
]

export default function Services() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2031&q=80')` 
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
              <span className="block text-pantera-gold">Services</span>
            </h1>
            <p className="text-xl text-pantera-beige/90 max-w-3xl mx-auto">
              Complete expertise to bring your most ambitious architectural projects to life, from conception to realization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-pantera-gold rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="font-display text-3xl font-bold text-pantera-charcoal">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-pantera-gray-warm mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-pantera-charcoal mb-4">Nos Prestations :</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-pantera-gray-warm">
                          <CheckIcon className="w-4 h-4 text-pantera-gold mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div>
                    <h3 className="font-semibold text-pantera-charcoal mb-4">Notre Processus :</h3>
                    <div className="space-y-2">
                      {service.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center text-sm text-pantera-gray-warm">
                          <div className="w-6 h-6 bg-pantera-beige rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-xs font-medium text-pantera-gold">{stepIndex + 1}</span>
                          </div>
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div 
                    className="h-96 bg-cover bg-center rounded-lg shadow-xl"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-pantera-beige">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-pantera-charcoal mb-4">
              Services Complémentaires
            </h2>
            <p className="text-lg text-pantera-gray-warm max-w-2xl mx-auto">
              Une gamme étendue de services pour répondre à tous vos besoins architecturaux
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-pantera-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-pantera-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-pantera-gray-warm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-pantera-charcoal mb-4">
              Our Methodology
            </h2>
            <p className="text-lg text-pantera-gray-warm max-w-2xl mx-auto">
              A structured three-phase approach to ensure the success of your project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                phase: '01',
                title: 'Explore',
                description: 'In-depth analysis of your needs, constraints, and opportunities to define a clear project vision.'
              },
              {
                phase: '02',
                title: 'Design',
                description: 'Creative development of innovative architectural solutions adapted to your context and budget.'
              },
              {
                phase: '03',
                title: 'Realize',
                description: 'Complete support during realization, from construction supervision to final delivery.'
              }
            ].map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-pantera-gold mb-4 opacity-20">
                  {step.phase}
                </div>
                <h3 className="font-display text-2xl font-semibold text-pantera-charcoal mb-4">
                  {step.title}
                </h3>
                <p className="text-pantera-gray-warm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-pantera-charcoal">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start
              <span className="block text-gradient">Your Project?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your needs and discover together how we can bring your architectural vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact" className="btn-primary">
                Free Consultation
              </a>
              <a href="/projects" className="btn-secondary">
                View Our Projects
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
