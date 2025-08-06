import Link from 'next/link'
import { ArrowLeftIcon, MapPinIcon, CalendarIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'
import ProjectImageCarousel from '@/components/ProjectImageCarousel'

// Mock data - in a real app, this would come from a database or API
const projectData: { [key: string]: any } = {
  '1': {
    id: 1,
    title: 'Skyline Residences',
    location: 'Los Angeles, CA',
    category: 'residential',
    year: '2023',
    size: '45,000 sq ft',
    status: 'Completed',
    client: 'Skyline Development Group',
    architect: 'Alexandra Martinez',
    description: 'A luxury residential complex that redefines urban living in Los Angeles. This iconic project combines contemporary design, sustainable technologies, and exceptional panoramic city views.',
    challenge: 'Create premium living spaces while respecting strict urban constraints and maximizing city views.',
    solution: 'Terraced architecture with suspended gardens, smart glass facades, and integrated common spaces.',
    materials: ['High-performance glass', 'Structural steel', 'Reinforced concrete', 'FSC certified wood'],
    features: ['150 residential units', 'Rooftop pool', 'Integrated green spaces', 'Underground parking', 'Water recovery system'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '2': {
    id: 2,
    title: 'Modern Office Complex',
    location: 'New York, NY',
    category: 'commercial',
    year: '2023',
    size: '120,000 sq ft',
    status: 'Completed',
    client: 'Metropolitan Business Group',
    architect: 'David Chen',
    description: 'A cutting-edge office complex designed for the future of work, featuring flexible spaces, advanced technology integration, and sustainable design principles.',
    challenge: 'Create a modern workspace that adapts to changing work patterns while maintaining energy efficiency.',
    solution: 'Modular design with movable partitions, smart building systems, and green roof technology.',
    materials: ['Glass curtain wall', 'Steel frame', 'Sustainable concrete', 'Bamboo flooring'],
    features: ['50 office suites', 'Conference facilities', 'Green roof garden', 'Smart building systems', 'Electric vehicle charging'],
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  }
}

// Generate static params for all project IDs
export async function generateStaticParams() {
  return Object.keys(projectData).map((id) => ({
    id: id,
  }))
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectData[params.id]

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-pantera-charcoal mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-pantera-gold hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="container-custom py-6">
        <Link href="/projects" className="inline-flex items-center text-pantera-gold hover:text-pantera-charcoal transition-colors duration-200 mb-8">
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Image Gallery */}
      <section className="relative">
        <div className="relative h-96 md:h-[500px]">
          <ProjectImageCarousel images={project.images} title={project.title} />
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Project Title Overlay */}
          <div className="absolute bottom-8 left-8 text-white z-10">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-2">
              {project.title}
            </h1>
            <div className="flex items-center gap-4 text-lg">
              <div className="flex items-center gap-1">
                <MapPinIcon className="w-5 h-5" />
                {project.location}
              </div>
              <div className="flex items-center gap-1">
                <CalendarIcon className="w-5 h-5" />
                {project.year}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-pantera-charcoal mb-4">
                  About the Project
                </h2>
                <p className="text-lg text-pantera-gray-warm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-pantera-charcoal mb-4">
                  Challenge
                </h3>
                <p className="text-pantera-gray-warm leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-pantera-charcoal mb-4">
                  Solution
                </h3>
                <p className="text-pantera-gray-warm leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-pantera-charcoal mb-4">
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-pantera-gray-warm">
                      <div className="w-2 h-2 bg-pantera-gold rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-pantera-beige p-6 rounded-lg">
                <h3 className="font-display text-xl font-bold text-pantera-charcoal mb-4">
                  Project Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="font-medium text-pantera-charcoal">Client:</span>
                    <p className="text-pantera-gray-warm">{project.client}</p>
                  </div>
                  <div>
                    <span className="font-medium text-pantera-charcoal">Lead Architect:</span>
                    <p className="text-pantera-gray-warm">{project.architect}</p>
                  </div>
                  <div>
                    <span className="font-medium text-pantera-charcoal">Size:</span>
                    <p className="text-pantera-gray-warm">{project.size}</p>
                  </div>
                  <div>
                    <span className="font-medium text-pantera-charcoal">Status:</span>
                    <p className="text-pantera-gray-warm">{project.status}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="font-display text-xl font-bold text-pantera-charcoal mb-4">
                  Materials Used
                </h3>
                <ul className="space-y-2">
                  {project.materials.map((material: string, index: number) => (
                    <li key={index} className="flex items-center text-pantera-gray-warm">
                      <BuildingOffice2Icon className="w-4 h-4 text-pantera-gold mr-2" />
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-pantera-charcoal">
        <div className="container-custom text-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Interested in a Similar Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something exceptional together
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
