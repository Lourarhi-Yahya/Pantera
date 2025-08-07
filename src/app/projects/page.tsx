'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline'

const projects = [
  // RESIDENTIAL PROJECTS
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
    id: 3,
    title: 'Pacific Heights Towers',
    location: 'San Francisco, CA',
    category: 'residential',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Modern high-rise residential towers with bay views.',
    size: '95,000 sq ft',
    status: 'In Progress'
  },
  {
    id: 4,
    title: 'Brooklyn Loft District',
    location: 'Brooklyn, NY',
    category: 'residential',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Industrial loft conversion with modern amenities.',
    size: '65,000 sq ft',
    status: 'Completed'
  },
  {
    id: 5,
    title: 'Desert Oasis Villas',
    location: 'Phoenix, AZ',
    category: 'residential',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Luxury desert villas with sustainable design.',
    size: '35,000 sq ft',
    status: 'In Progress'
  },
  {
    id: 6,
    title: 'Lakefront Estates',
    location: 'Seattle, WA',
    category: 'residential',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium lakefront residential development.',
    size: '55,000 sq ft',
    status: 'Completed'
  },

  // COMMERCIAL PROJECTS
  {
    id: 7,
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
    id: 8,
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
    id: 9,
    title: 'Downtown Financial Center',
    location: 'Chicago, IL',
    category: 'commercial',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'State-of-the-art financial district headquarters.',
    size: '180,000 sq ft',
    status: 'Completed'
  },
  {
    id: 10,
    title: 'Innovation Hub Dallas',
    location: 'Dallas, TX',
    category: 'commercial',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Mixed-use innovation and business center.',
    size: '150,000 sq ft',
    status: 'In Progress'
  },
  {
    id: 11,
    title: 'Atlantic Business Plaza',
    location: 'Boston, MA',
    category: 'commercial',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Premium office complex with harbor views.',
    size: '140,000 sq ft',
    status: 'Completed'
  },
  {
    id: 12,
    title: 'West Coast Media Center',
    location: 'Los Angeles, CA',
    category: 'commercial',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Modern media and entertainment complex.',
    size: '110,000 sq ft',
    status: 'In Progress'
  },

  // SUSTAINABLE PROJECTS
  {
    id: 13,
    title: 'Green Valley Community',
    location: 'Austin, TX',
    category: 'sustainable',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Eco-responsible and innovative community development.',
    size: '85,000 sq ft',
    status: 'Completed'
  },
  {
    id: 14,
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
    id: 15,
    title: 'Solar Village Colorado',
    location: 'Denver, CO',
    category: 'sustainable',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Net-zero energy residential community.',
    size: '95,000 sq ft',
    status: 'In Progress'
  },
  {
    id: 16,
    title: 'Renewable Energy Campus',
    location: 'Sacramento, CA',
    category: 'sustainable',
    year: '2023',
    image: 'https://tse1.mm.bing.net/th/id/OIP.y7UAfoemVrSZbi8Jt_VyJgHaE8?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Research facility for renewable energy technologies.',
    size: '75,000 sq ft',
    status: 'Completed'
  },
  {
    id: 17,
    title: 'Eco-Smart Office Park',
    location: 'Nashville, TN',
    category: 'sustainable',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'LEED Platinum certified office development.',
    size: '125,000 sq ft',
    status: 'In Progress'
  },
  {
    id: 18,
    title: 'Green Living Complex',
    location: 'Minneapolis, MN',
    category: 'sustainable',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Sustainable mixed-use development with urban farming.',
    size: '105,000 sq ft',
    status: 'Completed'
  },

  // URBAN PROJECTS
  {
    id: 19,
    title: 'Urban Plaza Chicago',
    location: 'Chicago, IL',
    category: 'urban',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1440778303588-435521a205bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Modern public space in downtown Chicago.',
    size: '25,000 sq ft',
    status: 'In Progress'
  },
  {
    id: 20,
    title: 'Denver Cultural Center',
    location: 'Denver, CO',
    category: 'urban',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1571055107734-8b3ad1c6b8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Modern cultural center with versatile spaces.',
    size: '60,000 sq ft',
    status: 'Completed'
  },
  {
    id: 21,
    title: 'Metropolitan Transit Hub',
    location: 'Washington, DC',
    category: 'urban',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Multi-modal transportation center and public space.',
    size: '85,000 sq ft',
    status: 'In Progress'
  },
  {
    id: 22,
    title: 'Riverside Park Pavilion',
    location: 'Philadelphia, PA',
    category: 'urban',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Community pavilion and recreational facility.',
    size: '35,000 sq ft',
    status: 'Completed'
  },
  {
    id: 23,
    title: 'Downtown Revitalization',
    location: 'Detroit, MI',
    category: 'urban',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Mixed-use development for urban renewal.',
    size: '200,000 sq ft',
    status: 'In Progress'
  },
  {
    id: 24,
    title: 'Waterfront Promenade',
    location: 'San Diego, CA',
    category: 'urban',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Public waterfront development with retail and dining.',
    size: '45,000 sq ft',
    status: 'Completed'
  },
  // --- ADDITIONAL PROJECTS ---
  {
    id: 25,
    title: 'Harborview Residences',
    location: 'Baltimore, MD',
    category: 'residential',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Luxury apartments overlooking the Inner Harbor.',
    size: '70,000 sq ft',
    status: 'Completed'
  },
  {
    id: 26,
    title: 'Canyon Creek Villas',
    location: 'Salt Lake City, UT',
    category: 'residential',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Mountain-view villas with eco-friendly design.',
    size: '40,000 sq ft',
    status: 'In Progress'
  },
  {
    id: 27,
    title: 'Midtown Business Center',
    location: 'Atlanta, GA',
    category: 'commercial',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'High-rise business center in Midtown Atlanta.',
    size: '160,000 sq ft',
    status: 'Completed'
  },
  {
    id: 28,
    title: 'Pacific Green Tower',
    location: 'San Diego, CA',
    category: 'sustainable',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'LEED-certified green skyscraper downtown.',
    size: '130,000 sq ft',
    status: 'Completed'
  },
  {
    id: 29,
    title: 'City Center Pavilion',
    location: 'Kansas City, MO',
    category: 'urban',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1460474647541-4edd0cd0c746?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Urban event and community pavilion.',
    size: '55,000 sq ft',
    status: 'In Progress'
  },
  {
    id: 30,
    title: 'Lakeshore Office Park',
    location: 'Madison, WI',
    category: 'commercial',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Modern office park with lake views.',
    size: '100,000 sq ft',
    status: 'Completed'
  },
  {
    id: 31,
    title: 'Sunrise Eco Residences',
    location: 'Orlando, FL',
    category: 'sustainable',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Solar-powered residential community.',
    size: '80,000 sq ft',
    status: 'In Progress'
  },
  {
    id: 32,
    title: 'Urban Arts Gallery',
    location: 'Austin, TX',
    category: 'urban',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Downtown arts and culture gallery.',
    size: '22,000 sq ft',
    status: 'Completed'
  },
  {
    id: 33,
    title: 'Innovation Labs',
    location: 'Raleigh, NC',
    category: 'commercial',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3e16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Flexible lab and office space for startups.',
    size: '90,000 sq ft',
    status: 'In Progress'
  },
  {
    id: 34,
    title: 'Forestview Residences',
    location: 'Portland, OR',
    category: 'residential',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Residences nestled in forested landscape.',
    size: '38,000 sq ft',
    status: 'Completed'
  },
  {
    id: 35,
    title: 'Riverfront Urban Lofts',
    location: 'St. Louis, MO',
    category: 'urban',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Modern lofts along the riverfront.',
    size: '60,000 sq ft',
    status: 'In Progress'
  },
  {
    id: 36,
    title: 'Summit View Tower',
    location: 'Denver, CO',
    category: 'commercial',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Downtown office tower with mountain views.',
    size: '140,000 sq ft',
    status: 'Completed'
  },
  {
    id: 37,
    title: 'Urban Greenhouse Center',
    location: 'Minneapolis, MN',
    category: 'sustainable',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1460474647541-4edd0cd0c746?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Urban greenhouse and community center.',
    size: '50,000 sq ft',
    status: 'In Progress'
  },
  {
    id: 38,
    title: 'Bayview Commercial Plaza',
    location: 'San Francisco, CA',
    category: 'commercial',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Harborfront commercial and retail plaza.',
    size: '120,000 sq ft',
    status: 'Completed'
  },
  {
    id: 39,
    title: 'Civic Arts Pavilion',
    location: 'Columbus, OH',
    category: 'urban',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Civic pavilion for arts and events.',
    size: '34,000 sq ft',
    status: 'In Progress'
  },
  {
    id: 40,
    title: 'Sunset Ridge Villas',
    location: 'Santa Barbara, CA',
    category: 'residential',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Luxury villas on the California coast.',
    size: '48,000 sq ft',
    status: 'Completed'
  },
  {
    id: 50,
    title: 'Luxury Transitional Living Room',
    location: 'Chicago, IL',
    category: 'interior',
    year: '2025',
    image: 'https://th.bing.com/th/id/R.2beb91ca052a68fac333901365655c15?rik=R4RiJDHrTUB5jg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f06%2fhome-interiors.jpg&ehk=ofwWOsm6BAGBgLGk1MtO65v3uYl6qufcif%2biGGleOUc%3d&risl=&pid=ImgRaw&r=0',
    description: 'A sophisticated transitional living room blending classic and contemporary elements, featuring neutral tones, plush seating, and statement lighting.',
    size: '1,200 sq ft',
    status: 'Completed'
  },
  {
    id: 51,
    title: 'Clarendon Hills Luxury Home Interior',
    location: 'Clarendon Hills, IL',
    category: 'interior',
    year: '2025',
    image: 'https://www.mmarchitecturalphotography.com/chicago-architectural-photographer/uploads/2016/01/clarendon-hills-luxury-home-interior.jpg',
    description: 'An elegant open-plan interior with custom millwork, marble finishes, and designer furnishings for a luxury residential experience.',
    size: '2,000 sq ft',
    status: 'Completed'
  },
  {
    id: 52,
    title: 'Transitional Interior Design',
    location: 'New York, NY',
    category: 'interior',
    year: '2025',
    image: 'https://www.deco-fr.net/wp-content/uploads/2022/12/design-dinterieur-transitionnel.jpg.webp',
    description: 'A transitional interior with a harmonious blend of modern and traditional design, featuring soft textures and warm lighting.',
    size: '1,500 sq ft',
    status: 'Completed'
  },
  {
    id: 53,
    title: 'Modern Minimalist Living Room',
    location: 'San Francisco, CA',
    category: 'interior',
    year: '2025',
    image: 'https://th.bing.com/th/id/R.ba019135bc5d2d9eb7da2ddcd63708c9?rik=gKYsagNW8fwNeQ&pid=ImgRaw&r=0',
    description: 'A modern minimalist living room with clean lines, open space, and a calming color palette for a serene urban retreat.',
    size: '950 sq ft',
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
