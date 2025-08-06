'use client'

import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'

const team = [
  {
    name: 'Alexandra Martinez',
    role: 'Principal Architect & Founder',
    education: 'M.Arch, Harvard GSD',
    speciality: 'Contemporary architecture',
    experience: '15 years',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    bio: 'Visionary of modern architecture, Alexandra has led over 200 iconic projects across the United States.'
  },
  {
    name: 'David Thompson',
    role: 'Design Director',
    education: 'M.Arch, MIT',
    speciality: 'Sustainable urbanism',
    experience: '12 years',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    bio: 'Expert in sustainable urban development, David integrates technological innovation with environmental respect.'
  },
  {
    name: 'Sarah Kim',
    role: 'Senior Architect',
    education: 'M.Arch, Columbia GSAPP',
    speciality: 'Residential architecture',
    experience: '10 years',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    bio: 'Specialist in high-end residential spaces, Sarah creates exceptional living environments.'
  },
  {
    name: 'Marcus Johnson',
    role: 'Technical Architect',
    education: 'M.Eng, Stanford',
    speciality: 'Green technologies',
    experience: '8 years',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    bio: 'Engineer-architect passionate about eco-responsible solutions and energy efficiency.'
  }
]

const values = [
  {
    title: 'Innovation',
    description: 'We push the boundaries of architectural design with creative and avant-garde solutions.'
  },
  {
    title: 'Sustainability',
    description: 'Every project integrates ecological principles for minimal environmental impact.'
  },
  {
    title: 'Excellence',
    description: 'Our commitment to quality is reflected in every detail of our achievements.'
  },
  {
    title: 'Collaboration',
    description: 'We work closely with our clients to bring their vision to life.'
  }
]

const timeline = [
  { year: '2009', event: 'Foundation of Pantera Architecture by Alexandra Martinez' },
  { year: '2012', event: 'First major commercial project in Manhattan' },
  { year: '2015', event: 'Expansion to the West Coast - Los Angeles Office' },
  { year: '2018', event: 'Excellence in Sustainable Architecture Award' },
  { year: '2021', event: 'LEED Platinum certification for 95% of our projects' },
  { year: '2024', event: '250+ projects completed across the United States' }
]

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')` 
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
              About
              <span className="block text-pantera-gold">Pantera</span>
            </h1>
            <p className="text-xl text-pantera-beige/90 max-w-3xl mx-auto">
              Since 2009, we have been shaping America's architectural future with passion, innovation, and an unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold text-pantera-charcoal mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-pantera-gray-warm mb-6">
                To transform American urban spaces by creating contemporary architectures that combine functionality, aesthetics, and sustainability. We believe that every project should contribute positively to its environment and the community it serves.
              </p>
              <p className="text-lg text-pantera-gray-warm">
                Our holistic approach integrates the latest technological innovations, sustainable development principles, and a deep understanding of human needs to create exceptional spaces.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div 
                className="h-96 bg-cover bg-center rounded-lg shadow-xl"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </h2>
            <p className="text-lg text-pantera-gray-warm max-w-2xl mx-auto">
              The fundamental principles that guide each of our decisions and achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-pantera-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-pantera-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="text-pantera-gray-warm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our History
            </h2>
            <p className="text-lg text-pantera-gray-warm max-w-2xl mx-auto">
              15 years of innovation and growth in American architecture
            </p>
          </motion.div>

          <div className="w-full px-4">
            {/* Horizontal Timeline Container */}
            <div className="relative">
              {/* Horizontal Line */}
              <div className="absolute top-12 left-16 right-16 h-0.5 bg-pantera-gold/30"></div>
              
              {/* Timeline Items */}
              <div className="flex justify-between items-start relative px-16">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center flex-1 mx-4"
                  >
                    {/* Year Badge */}
                    <div className="bg-pantera-gold text-white px-4 py-2 rounded-full font-bold text-sm mb-4 shadow-lg z-10 relative">
                      {item.year}
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="w-4 h-4 bg-pantera-gold rounded-full border-4 border-white shadow-lg z-10 relative mb-4"></div>
                    
                    {/* Event Content */}
                    <div className="bg-white rounded-lg p-4 shadow-md border border-pantera-gray-warm/10 hover:shadow-lg transition-shadow duration-300">
                      <p className="text-pantera-charcoal text-sm font-medium leading-relaxed">
                        {item.event}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
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
              Our Team
            </h2>
            <p className="text-lg text-pantera-gray-warm max-w-2xl mx-auto">
              Passionate and experienced architects serving your most ambitious projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div 
                  className="w-24 h-24 rounded-full mx-auto mb-4 bg-cover bg-center"
                  style={{ backgroundImage: `url('${member.image}')` }}
                />
                <h3 className="font-display text-lg font-semibold text-pantera-charcoal mb-1">
                  {member.name}
                </h3>
                <p className="text-pantera-gold font-medium mb-2">{member.role}</p>
                <div className="text-sm text-pantera-gray-warm space-y-1 mb-3">
                  <p>{member.education}</p>
                  <p>{member.speciality}</p>
                  <p>{member.experience} of experience</p>
                </div>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
