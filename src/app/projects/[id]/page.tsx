'use client'

import Link from 'next/link'
import { ArrowLeftIcon, MapPinIcon, CalendarIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'

import ProjectImageCarousel from '@/components/ProjectImageCarousel'

// Mock data - in a real app, this would come from a database or API
const projectData: { [key: string]: any } = {
  '101': {
    id: 101,
    title: 'Rabat Iconic Bridge',
    location: 'Rabat, Morocco',
    category: 'urban',
    year: '2024',
    size: '350 meters',
    status: 'In Progress',
    client: 'Bouregreg Valley Development Agency',
    architect: 'Marc Mimram',
    description: 'A landmark cable-stayed bridge spanning the Bouregreg river, symbolizing the connection between Rabat and Salé with modern Moroccan design.',
    challenge: 'Integrate advanced engineering with aesthetic harmony and minimal environmental impact.',
    solution: 'Elegant cable-stayed structure with pedestrian and vehicle lanes, iconic night lighting, and landscaped approaches.',
    materials: ['Steel cables', 'Reinforced concrete', 'Architectural lighting', 'Stone paving'],
    features: ['Cable-stayed main span', 'Pedestrian walkways', 'Iconic night illumination', 'Panoramic river views'],
    images: [
      '/images/R.jpeg',
      '/images/Vimi-Infrastuctures.jpg',
      '/images/204f3bef5e851991d09381152389a2c3.jpg',
      '/images/b181_4.jpg'
    ]
  },
  '102': {
    id: 102,
    title: 'Casablanca Marina Tower',
    location: 'Casablanca, Morocco',
    category: 'commercial',
    year: '2023',
    size: '50,000 sq m',
    status: 'Completed',
    client: 'Marina Casablanca',
    architect: 'Tebas Coiduras',
    description: 'A high-rise tower overlooking the Atlantic, designed for mixed-use with luxury offices and retail, forming a new icon on Casablanca’s skyline.',
    challenge: 'Create a modern landmark that balances commercial needs with architectural elegance on the waterfront.',
    solution: 'Sleek glass façade, panoramic sea views, and premium amenities for business and leisure.',
    materials: ['Glass curtain wall', 'Steel frame', 'High-performance concrete', 'Natural stone'],
    features: ['Mixed-use floors', 'Luxury offices', 'Retail promenade', 'Panoramic elevators'],
    images: [
      '/images/marina-tower-casablanca-05-scaled.jpg',
      '/images/marina-tower-casablanca-04-scaled.jpg',
      '/images/MARINA_01-scaled.jpg',
      '/images/3199.jpg'
    ]
  },

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
    solution: 'Innovative floor plans, floor-to-ceiling windows, and eco-friendly amenities.',
    materials: ['Glass', 'Steel', 'Concrete', 'Solar panels'],
    features: ['150 residential units', 'Rooftop pool', 'Integrated green spaces', 'Underground parking', 'Water recovery system'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '2': {
    id: 2,
    title: 'Manhattan Corporate Tower',
    location: 'New York, NY',
    category: 'commercial',
    year: '2023',
    size: '120,000 sq ft',
    status: 'Completed',
    client: 'Manhattan Business District',
    architect: 'David Thompson',
    description: 'A modern office tower that embodies architectural innovation in the heart of Manhattan. This 40-story skyscraper sets new standards for energy efficiency and urban design.',
    challenge: 'Design a high-performance building in one of the world\'s densest districts.',
    solution: 'Adaptive facade, intelligent energy management systems, and flexible workspaces.',
    materials: ['Aluminum facade', 'Triple-glazed glass', 'High-strength steel', 'Integrated LED systems'],
    features: ['40 floors of offices', 'LEED Platinum certification', 'Green terraces', 'Natural ventilation system', 'Coworking spaces'],
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '3': {
    id: 3,
    title: 'Eco Village Community',
    location: 'Portland, OR',
    category: 'sustainable',
    year: '2024',
    size: '75,000 sq ft',
    status: 'In Progress',
    client: 'Green Living Development',
    architect: 'Sarah Chen',
    description: 'A pioneering sustainable community that demonstrates the future of eco-friendly living. This innovative project integrates renewable energy, sustainable materials, and biophilic design principles.',
    challenge: 'Create a net-zero energy community while maintaining affordability and aesthetic appeal.',
    solution: 'Passive house design, integrated solar systems, rainwater harvesting, and community gardens.',
    materials: ['Reclaimed timber', 'Recycled steel', 'Natural insulation', 'Solar panels', 'Green roofing'],
    features: ['80 eco-friendly homes', 'Community center', 'Organic gardens', 'Electric vehicle charging', 'Waste management system'],
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '4': {
    id: 4,
    title: 'Downtown Cultural Center',
    location: 'Chicago, IL',
    category: 'urban',
    year: '2023',
    size: '95,000 sq ft',
    status: 'Completed',
    client: 'Chicago Arts Foundation',
    architect: 'Michael Rodriguez',
    description: 'A dynamic cultural hub that revitalizes downtown Chicago with world-class performance spaces, galleries, and community areas. The building serves as a catalyst for urban renewal.',
    challenge: 'Design a multifunctional cultural space that serves diverse community needs while respecting historic context.',
    solution: 'Flexible performance spaces, adaptive acoustics, and a striking glass atrium connecting all levels.',
    materials: ['Corten steel', 'Acoustic panels', 'Polished concrete', 'Art glass', 'Sustainable hardwood'],
    features: ['Concert hall (1,200 seats)', 'Art galleries', 'Community workshops', 'Rooftop terrace', 'Underground parking'],
    images: [
      'https://images.unsplash.com/photo-1440778303588-435521a205bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571055107734-8b3ad1c6b8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '5': {
    id: 5,
    title: 'Luxury Lakefront Residence',
    location: 'Lake Tahoe, CA',
    category: 'residential',
    year: '2024',
    size: '12,000 sq ft',
    status: 'In Progress',
    client: 'Private Client',
    architect: 'Elena Kowalski',
    description: 'An exclusive lakefront estate that seamlessly blends luxury living with natural beauty. The design maximizes lake views while creating intimate spaces for family life.',
    challenge: 'Balance privacy and openness while integrating with the sensitive lakefront environment.',
    solution: 'Cantilevered design, floor-to-ceiling windows, and natural stone integration with landscape.',
    materials: ['Natural stone', 'Cedar siding', 'Steel frame', 'Floor-to-ceiling glass', 'Sustainable decking'],
    features: ['6 bedrooms', 'Private dock', 'Infinity pool', 'Wine cellar', 'Home theater', 'Guest house'],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '6': {
    id: 6,
    title: 'Innovation Campus',
    location: 'Austin, TX',
    category: 'commercial',
    year: '2024',
    size: '200,000 sq ft',
    status: 'In Progress',
    client: 'Tech Innovation Group',
    architect: 'James Wilson',
    description: 'A cutting-edge technology campus designed to foster innovation and collaboration. The complex features flexible workspaces, research labs, and recreational facilities.',
    challenge: 'Create an inspiring environment that promotes creativity while accommodating rapid growth and changing needs.',
    solution: 'Modular design, collaborative spaces, biophilic elements, and advanced technology integration.',
    materials: ['Smart glass', 'Exposed concrete', 'Living walls', 'Recycled materials', 'Solar canopies'],
    features: ['Research laboratories', 'Co-working spaces', 'Innovation hub', 'Fitness center', 'Food court', 'Electric vehicle charging'],
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '7': {
    id: 7,
    title: 'Historic District Renovation',
    location: 'Boston, MA',
    category: 'sustainable',
    year: '2023',
    size: '85,000 sq ft',
    status: 'Completed',
    client: 'Boston Heritage Foundation',
    architect: 'Robert Kim',
    description: 'A sensitive renovation of historic buildings that preserves architectural heritage while introducing modern sustainability features. The project breathes new life into a cherished neighborhood.',
    challenge: 'Modernize historic structures while preserving their character and meeting contemporary building codes.',
    solution: 'Careful restoration, hidden modern systems, and sustainable upgrades that respect original design.',
    materials: ['Restored brick', 'Period-appropriate windows', 'Modern insulation', 'LED lighting', 'Geothermal systems'],
    features: ['Mixed-use spaces', 'Preserved facades', 'Modern amenities', 'Energy efficiency', 'Accessible design'],
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '8': {
    id: 8,
    title: 'Waterfront Mixed-Use Development',
    location: 'Miami, FL',
    category: 'urban',
    year: '2024',
    size: '150,000 sq ft',
    status: 'In Progress',
    client: 'Miami Waterfront Development',
    architect: 'Isabella Garcia',
    description: 'A vibrant mixed-use development that transforms Miami\'s waterfront with luxury residences, retail spaces, and public amenities. The design celebrates the city\'s tropical climate and maritime heritage.',
    challenge: 'Create a cohesive development that serves residents, visitors, and the broader community while addressing sea-level rise.',
    solution: 'Elevated design, flood-resistant materials, and integrated public spaces that connect land and water.',
    materials: ['Hurricane-resistant glass', 'Coral stone', 'Aluminum composite', 'Tropical hardwood', 'Permeable paving'],
    features: ['120 luxury condos', 'Retail promenade', 'Marina access', 'Public park', 'Flood protection', 'Rooftop amenities'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1440778303588-435521a205bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571055107734-8b3ad1c6b8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  }
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
        <Link 
          href="/projects" className="inline-flex items-center text-pantera-gold hover:text-pantera-charcoal transition-colors duration-200 mb-8">
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
          <div className="absolute bottom-8 left-8 z-10">
  <div className="bg-white/80 px-6 py-4 rounded-lg shadow-lg">
    <h1 className="font-display text-4xl md:text-5xl font-bold mb-2 text-pantera-charcoal">
      {project.title}
    </h1>
    <div className="flex items-center gap-4 text-lg text-pantera-gray-warm">
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
              <div
                className="bg-pantera-beige p-6 rounded-lg"
              >
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
                    <span className="font-medium text-pantera-charcoal">Superficie:</span>
                    <p className="text-pantera-gray-warm">{project.size}</p>
                  </div>
                  <div>
                    <span className="font-medium text-pantera-charcoal">Status:</span>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ml-2 ${
                      project.status === 'Terminé' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="bg-white border border-gray-200 p-6 rounded-lg"
              >
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
