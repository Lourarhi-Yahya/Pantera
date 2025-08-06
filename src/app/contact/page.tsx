'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline'

const contactInfo = [
  {
    icon: MapPinIcon,
    title: 'Address',
    details: ['123 Architecture Avenue', 'New York, NY 10001', 'United States']
  },
  {
    icon: PhoneIcon,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 123-4568']
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    details: ['contact@pantera-architecture.com', 'projects@pantera-architecture.com']
  },
  {
    icon: ClockIcon,
    title: 'Hours',
    details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM', 'Sun: Closed']
  }
]

const offices = [
  {
    city: 'New York',
    address: '123 Architecture Avenue, NY 10001',
    phone: '+1 (555) 123-4567',
    email: 'ny@pantera-architecture.com'
  },
  {
    city: 'Los Angeles',
    address: '456 Design Boulevard, CA 90210',
    phone: '+1 (555) 987-6543',
    email: 'la@pantera-architecture.com'
  },
  {
    city: 'Chicago',
    address: '789 Urban Street, IL 60601',
    phone: '+1 (555) 456-7890',
    email: 'chicago@pantera-architecture.com'
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      })
    }, 2000)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80')` 
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
              Contact
              <span className="block text-pantera-gold">Us</span>
            </h1>
            <p className="text-xl text-pantera-beige/90 max-w-3xl mx-auto">
              Ready to transform your vision into reality? Let's discuss your architectural project and discover the possibilities together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-pantera-charcoal mb-6">
                Let's Start Your Project
              </h2>
              <p className="text-pantera-gray-warm mb-8">
                Fill out this form and we'll get back to you within 24 hours to discuss your project.
              </p>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-pantera-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pantera-gold focus:border-transparent transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-pantera-charcoal mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pantera-gold focus:border-transparent transition-colors duration-200"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-pantera-charcoal mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pantera-gold focus:border-transparent transition-colors duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-pantera-charcoal mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pantera-gold focus:border-transparent transition-colors duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-pantera-charcoal mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pantera-gold focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select a type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="urban">Urban</option>
                      <option value="sustainable">Sustainable</option>
                      <option value="renovation">Renovation</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-pantera-charcoal mb-2">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pantera-gold focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select a range</option>
                      <option value="under-100k">Under $100k</option>
                      <option value="100k-500k">$100k - $500k</option>
                      <option value="500k-1m">$500k - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="over-5m">Over $5M</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-pantera-charcoal mb-2">
                    Desired Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pantera-gold focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a timeline</option>
                    <option value="asap">As soon as possible</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="6-months">Within 6 months</option>
                    <option value="1-year">Within a year</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-pantera-charcoal mb-2">
                    Describe Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pantera-gold focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us about your vision, needs, constraints and objectives..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send My Request'}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-3xl font-bold text-pantera-charcoal mb-6">
                  Contact Information
                </h2>
                <p className="text-pantera-gray-warm mb-8">
                  Multiple ways to reach us to discuss your architectural project.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="bg-pantera-beige p-6 rounded-lg">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-pantera-gold rounded-lg flex items-center justify-center mr-3">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-pantera-charcoal">{info.title}</h3>
                    </div>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-pantera-gray-warm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Offices */}
              <div>
                <h3 className="font-display text-2xl font-bold text-pantera-charcoal mb-6">
                  Our Offices
                </h3>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <div key={office.city} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center mb-3">
                        <BuildingOffice2Icon className="w-5 h-5 text-pantera-gold mr-2" />
                        <h4 className="font-semibold text-pantera-charcoal">{office.city}</h4>
                      </div>
                      <div className="space-y-1 text-sm text-pantera-gray-warm">
                        <p>{office.address}</p>
                        <p>{office.phone}</p>
                        <p>{office.email}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center text-pantera-gray-warm">
            <MapPinIcon className="w-12 h-12 mx-auto mb-4" />
            <p className="text-lg">Carte Google Maps</p>
            <p className="text-sm">123 Architecture Avenue, New York, NY 10001</p>
          </div>
        </div>
      </section>
    </div>
  )
}
