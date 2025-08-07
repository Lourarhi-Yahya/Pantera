'use client'

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
    solution: 'Innovative floor plans, floor-to-ceiling windows, and eco-friendly amenities.',
    materials: ['Glass', 'Steel', 'Concrete', 'Solar panels'],
    features: ['150 residential units', 'Rooftop pool', 'Integrated green spaces', 'Underground parking', 'Water recovery system'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://cdn.pixabay.com/photo/2023/05/31/19/01/buildings-8032072_960_720.jpg',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
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
      'https://i.insider.com/577ff47bd7c3db1b008b4c12?width=1000&format=jpeg&auto=webp',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
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
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
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
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
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
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
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
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
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
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '8': {
    id: 8,
    title: 'Denver Cultural Center',
    location: 'Denver, CO',
    category: 'urban',
    year: '2022',
    size: '60,000 sq ft',
    status: 'Completed',
    client: 'Denver Arts Council',
    architect: 'Emily Carter',
    description: 'A modern cultural center in downtown Denver featuring versatile performance halls, galleries, and community spaces. The design celebrates Colorado’s artistic heritage and urban vibrancy.',
    challenge: 'Create a flexible, iconic space for arts and culture in a dense urban setting.',
    solution: 'Open-plan galleries, adaptable theaters, and a transparent facade connecting interior activities to the city.',
    materials: ['Glass curtain wall', 'Steel frame', 'Locally sourced stone', 'Sustainable wood'],
    features: ['Multi-purpose performance hall', 'Art galleries', 'Workshops', 'Outdoor plaza', 'Cafe and retail'],
    images: [
      'https://images.unsplash.com/photo-1571055107734-8b3ad1c6b8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1440778303588-435521a205bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '9': {
    id: 9,
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
      'https://images.unsplash.com/photo-1571055107734-8b3ad1c6b8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '10': {
    id: 10,
    title: 'Innovation Hub Dallas',
    location: 'Dallas, TX',
    category: 'commercial',
    year: '2024',
    size: '150,000 sq ft',
    status: 'In Progress',
    client: 'Dallas Innovation District',
    architect: 'Marcus Johnson',
    description: 'A mixed-use innovation and business center designed to foster entrepreneurship and collaboration in Dallas. The complex features flexible office spaces, co-working areas, and event facilities.',
    challenge: 'Create a dynamic environment that supports both established companies and startups while promoting innovation.',
    solution: 'Flexible floor plans, collaborative spaces, advanced technology infrastructure, and community amenities.',
    materials: ['Steel frame', 'Glass curtain wall', 'Sustainable concrete', 'Smart building systems'],
    features: ['Co-working spaces', 'Conference facilities', 'Innovation labs', 'Food court', 'Parking garage'],
    images: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '11': {
    id: 11,
    title: 'Atlantic Business Plaza',
    location: 'Boston, MA',
    category: 'commercial',
    year: '2023',
    size: '140,000 sq ft',
    status: 'Completed',
    client: 'Atlantic Development Group',
    architect: 'Jennifer Walsh',
    description: 'A premium office complex with stunning harbor views in downtown Boston. The building combines modern design with New England architectural traditions.',
    challenge: 'Design a contemporary office building that respects Boston\'s historic character while providing modern amenities.',
    solution: 'Brick and glass facade, efficient floor plates, and panoramic harbor views from all floors.',
    materials: ['Red brick', 'Floor-to-ceiling glass', 'Steel structure', 'Granite accents'],
    features: ['Premium office suites', 'Harbor views', 'Conference center', 'Fitness facility', 'Underground parking'],
    images: [
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '13': {
    id: 13,
    title: 'Green Valley Community',
    location: 'Austin, TX',
    category: 'sustainable',
    year: '2022',
    size: '95,000 sq ft',
    status: 'In Progress',
    client: 'Green Valley Developers',
    architect: 'Olivia Carter',
    description: 'Net-zero energy residential community featuring smart homes, green roofs, and shared gardens.',
    challenge: 'Achieve net-zero energy while providing luxury amenities and affordability.',
    solution: 'Passive solar design, geothermal heating/cooling, and community solar farm.',
    materials: ['Cross-laminated timber', 'Solar panels', 'Recycled steel', 'Green roofing'],
    features: ['120 smart homes', 'Community gardens', 'Recreation center', 'Bike paths', 'Rainwater harvesting'],
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://www.davidsmalldesigns.com/wp-content/uploads/2020/01/modern_landscape-1500x844.jpg',
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '14': {
    id: 14,
    title: 'Eco Urban Residences',
    location: 'Seattle, WA',
    category: 'sustainable',
    year: '2023',
    size: '80,000 sq ft',
    status: 'Completed',
    client: 'Urban Green Realty',
    architect: 'Lucas Nguyen',
    description: 'A high-rise residential tower with integrated vertical gardens and advanced water recycling.',
    challenge: 'Maximize green space in a dense urban context.',
    solution: 'Living walls, rooftop gardens, and smart irrigation systems.',
    materials: ['Glass', 'Steel', 'Living wall modules', 'Rainwater tanks'],
    features: ['Vertical gardens', 'Rooftop greenhouse', 'Fitness center', 'Solar panels'],
    images: [
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '15': {
    id: 15,
    title: 'Solaris Business Park',
    location: 'San Diego, CA',
    category: 'commercial',
    year: '2024',
    size: '120,000 sq ft',
    status: 'In Progress',
    client: 'Solaris Ventures',
    architect: 'Priya Patel',
    description: 'A business park powered entirely by solar energy, with flexible office modules and outdoor collaboration spaces.',
    challenge: 'Design for maximum solar gain and employee wellness.',
    solution: 'South-facing facades, solar canopies, and biophilic design.',
    materials: ['Photovoltaic glass', 'Concrete', 'Cedar', 'Native landscaping'],
    features: ['Flexible office modules', 'Outdoor meeting pods', 'Café', 'Fitness trail'],
    images: [
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '16': {
    // UPDATED IMAGES (user-provided + original)

    id: 16,
    title: 'Renewable Energy Campus',
    location: 'Sacramento, CA',
    category: 'sustainable',
    year: '2023',
    size: '105,000 sq ft',
    status: 'Completed',
    client: 'Sacramento State',
    architect: 'Megan Lee',
    description: 'A university campus extension with solar arrays, wind turbines, and energy-positive classrooms.',
    challenge: 'Achieve net-positive energy for a large educational facility.',
    solution: 'Solar/wind hybrid systems, energy storage, and smart building controls.',
    materials: ['Solar panels', 'Wind turbines', 'Mass timber', 'Recycled glass'],
    features: ['Energy-positive classrooms', 'Research labs', 'Student center', 'Green roof'],
    images: [
      'https://tse1.mm.bing.net/th/id/OIP.y7UAfoemVrSZbi8Jt_VyJgHaE8?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3',
      'https://www.upstateforever.org/files/images/DECSharedSolarSite_1200px.jpg',
      'https://www.ticktockenergy.com/wp-content/uploads/2018/07/community-solar-img-1.jpg',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '17': {
    id: 17,
    title: 'Harborview Residences',
    location: 'Baltimore, MD',
    category: 'residential',
    year: '2023',
    size: '70,000 sq ft',
    status: 'Completed',
    client: 'Harborview Realty',
    architect: 'Sofia Martinez',
    description: 'Luxury waterfront condos with panoramic harbor views and resort-style amenities.',
    challenge: 'Maximize water views and create a sense of privacy for each unit.',
    solution: 'Angled balconies, glass railings, and sound-insulated walls.',
    materials: ['Glass', 'Steel', 'Stone', 'Wood'],
    features: ['Infinity pool', 'Private marina', 'Spa & fitness center', 'Concierge', 'Underground parking'],
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '18': {
    id: 18,
    title: 'Urban Plaza Chicago',
    location: 'Chicago, IL',
    category: 'urban',
    year: '2023',
    size: '85,000 sq ft',
    status: 'In Progress',
    client: 'Chicago Urban Renewal',
    architect: 'Jacob Turner',
    description: 'A multi-modal transportation center and public plaza revitalizing Chicago’s downtown.',
    challenge: 'Integrate multiple transit modes and create a vibrant public space.',
    solution: 'Layered plazas, pedestrian bridges, and interactive art installations.',
    materials: ['Concrete', 'Steel', 'LED lighting', 'Public art'],
    features: ['Transit hub', 'Retail spaces', 'Public art', 'Green spaces', 'Event plaza'],
    images: [
      'https://images.unsplash.com/photo-1440778303588-435521a205bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571055107734-8b3ad1c6b8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '19': {
    id: 19,
    title: 'Riverside Park Pavilion',
    location: 'Philadelphia, PA',
    category: 'urban',
    year: '2023',
    size: '45,000 sq ft',
    status: 'Completed',
    client: 'Philadelphia Parks Department',
    architect: 'Henry Adams',
    description: 'Public waterfront development featuring retail, dining, and recreation spaces along the river.',
    challenge: 'Activate the waterfront and provide year-round amenities.',
    solution: 'Flexible pavilion design, outdoor seating, and all-weather landscaping.',
    materials: ['Steel', 'Glass', 'Wood', 'Stone'],
    features: ['Retail/dining spaces', 'Event lawn', 'Playground', 'Riverwalk'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '21': {
    id: 21,
    title: 'Pacific Green Tower',
    location: 'San Diego, CA',
    category: 'sustainable',
    year: '2022',
    size: '80,000 sq ft',
    status: 'In Progress',
    client: 'Green Pacific Group',
    architect: 'Natalie Brooks',
    description: 'Solar-powered residential community with smart home technology and shared amenities.',
    challenge: 'Design for energy independence and resident comfort.',
    solution: 'Solar arrays, battery storage, and eco-friendly building materials.',
    materials: ['Solar panels', 'Mass timber', 'Recycled steel'],
    features: ['Smart homes', 'Community pool', 'Fitness center', 'EV charging'],
    images: [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '22': {
    id: 22,
    title: 'Riverfront Innovation Center',
    location: 'Cincinnati, OH',
    category: 'commercial',
    year: '2024',
    size: '130,000 sq ft',
    status: 'In Progress',
    client: 'Cincinnati Innovation District',
    architect: 'Ethan Wright',
    description: 'A collaborative campus for startups and research organizations along the riverfront.',
    challenge: 'Foster innovation and community engagement in a single campus.',
    solution: 'Open labs, shared amenities, and riverfront public spaces.',
    materials: ['Glass', 'Steel', 'Wood', 'Green roofing'],
    features: ['Startup incubator', 'Research labs', 'Event space', 'Rooftop terrace'],
    images: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '23': {
    id: 23,
    title: 'Lakefront Estates',
    location: 'Seattle, WA',
    category: 'residential',
    year: '2023',
    size: '55,000 sq ft',
    status: 'Completed',
    client: 'Lakefront Estates LLC',
    architect: 'Rachel Evans',
    description: 'Premium lakefront residential development with private docks and panoramic views.',
    challenge: 'Maximize water views and privacy for each home.',
    solution: 'Tiered site plan, large windows, and private outdoor spaces.',
    materials: ['Glass', 'Stone', 'Wood', 'Steel'],
    features: ['Private docks', 'Clubhouse', 'Walking trails', 'Community gardens'],
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '24': {
    id: 24,
    title: 'Brooklyn Loft District',
    location: 'Brooklyn, NY',
    category: 'residential',
    year: '2023',
    size: '65,000 sq ft',
    status: 'Completed',
    client: 'Brooklyn Lofts LLC',
    architect: 'David Lee',
    description: 'Industrial loft conversion with modern amenities and open-plan living.',
    challenge: 'Preserve industrial character while creating comfortable homes.',
    solution: 'Exposed brick, open beams, and flexible layouts.',
    materials: ['Brick', 'Steel', 'Glass', 'Reclaimed wood'],
    features: ['Open-plan lofts', 'Rooftop terrace', 'Fitness center'],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '25': {
    id: 25,
    title: 'Harborview Residences',
    location: 'Baltimore, MD',
    category: 'residential',
    year: '2023',
    size: '70,000 sq ft',
    status: 'Completed',
    client: 'Harborview Realty',
    architect: 'Sofia Martinez',
    description: 'Luxury waterfront condos with panoramic harbor views and resort-style amenities.',
    challenge: 'Maximize water views and create a sense of privacy for each unit.',
    solution: 'Angled balconies, glass railings, and sound-insulated walls.',
    materials: ['Glass', 'Steel', 'Stone', 'Wood'],
    features: ['Infinity pool', 'Private marina', 'Spa & fitness center', 'Concierge', 'Underground parking'],
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '26': {
    id: 26,
    title: 'Midtown Business Center',
    location: 'Atlanta, GA',
    category: 'commercial',
    year: '2024',
    size: '160,000 sq ft',
    status: 'Completed',
    client: 'Midtown Business Group',
    architect: 'William Scott',
    description: 'High-rise business center in Midtown Atlanta with flexible office spaces and conference facilities.',
    challenge: 'Design for maximum flexibility and future growth.',
    solution: 'Modular office layouts and shared amenities.',
    materials: ['Glass', 'Steel', 'Concrete'],
    features: ['Flexible offices', 'Conference center', 'Fitness facility', 'Underground parking'],
    images: [
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '27': {
    id: 27,
    title: 'Desert Oasis Villas',
    location: 'Phoenix, AZ',
    category: 'residential',
    year: '2024',
    size: '35,000 sq ft',
    status: 'In Progress',
    client: 'Desert Living Group',
    architect: 'Ava Robinson',
    description: 'Luxury desert villas with sustainable design, private courtyards, and cooling water features.',
    challenge: 'Create comfortable outdoor spaces in a hot, arid climate.',
    solution: 'Shaded patios, evaporative cooling, and drought-tolerant landscaping.',
    materials: ['Stucco', 'Stone', 'Wood', 'Cactus garden'],
    features: ['Private courtyards', 'Infinity pool', 'Outdoor kitchen', 'Solar panels'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '28': {
    id: 28,
    title: 'Pacific Green Tower',
    location: 'San Diego, CA',
    category: 'sustainable',
    year: '2022',
    size: '80,000 sq ft',
    status: 'In Progress',
    client: 'Green Pacific Group',
    architect: 'Natalie Brooks',
    description: 'Solar-powered residential community with smart home technology and shared amenities.',
    challenge: 'Design for energy independence and resident comfort.',
    solution: 'Solar arrays, battery storage, and eco-friendly building materials.',
    materials: ['Solar panels', 'Mass timber', 'Recycled steel'],
    features: ['Smart homes', 'Community pool', 'Fitness center', 'EV charging'],
    images: [
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '30': {
    id: 30,
    title: 'Silicon Valley Tech Campus',
    location: 'San Francisco, CA',
    category: 'commercial',
    year: '2024',
    size: '200,000 sq ft',
    status: 'In Progress',
    client: 'SV Tech Partners',
    architect: 'Mason King',
    description: 'Innovative technology campus in Silicon Valley with collaborative workspaces and green courtyards.',
    challenge: 'Foster innovation and sustainability in a large tech campus.',
    solution: 'Flexible labs, open offices, and outdoor collaboration zones.',
    materials: ['Glass', 'Steel', 'Living walls', 'Solar panels'],
    features: ['Collaborative workspaces', 'Green courtyards', 'Café', 'Fitness center'],
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '31': {
    id: 31,
    title: 'Downtown Financial Center',
    location: 'Chicago, IL',
    category: 'commercial',
    year: '2023',
    size: '180,000 sq ft',
    status: 'Completed',
    client: 'Downtown Financial Group',
    architect: 'Linda Kim',
    description: 'State-of-the-art financial district headquarters with flexible trading floors and executive suites.',
    challenge: 'Integrate advanced technology and security into a welcoming, open environment.',
    solution: 'Smart building systems and open-plan trading floors.',
    materials: ['Glass', 'Steel', 'Concrete', 'Smart systems'],
    features: ['Trading floors', 'Executive suites', 'Conference center', 'Fitness facility'],
    images: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '32': {
    id: 32,
    title: 'Urban Arts Gallery',
    location: 'Austin, TX',
    category: 'urban',
    year: '2023',
    size: '60,000 sq ft',
    status: 'In Progress',
    client: 'Austin Arts Collective',
    architect: 'Jasmine Moore',
    description: 'Modern gallery space for contemporary art exhibitions and community events.',
    challenge: 'Create flexible gallery spaces and maximize natural light.',
    solution: 'Movable walls, skylights, and open-plan design.',
    materials: ['Glass', 'Steel', 'Polished concrete'],
    features: ['Exhibition halls', 'Event space', 'Art studios', 'Cafe'],
    images: [
      'https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://i.pinimg.com/736x/bb/81/cf/bb81cfa6b12ef546cb56354ec78d2893.jpg',
      'https://tse1.mm.bing.net/th/id/OIP.iWpiJPjx_hgoQlFQq1RIDAHaE8?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3',
      'https://tse4.mm.bing.net/th/id/OIP.AFR9n3WOJunJQrlaOEfhZgHaFy?cb=thfvnext&w=1536&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3'
    ]
  },

  '20': {
    id: 20,
    title: 'Denver Cultural Center',
    location: 'Denver, CO',
    category: 'urban',
    year: '2022',
    size: '60,000 sq ft',
    status: 'Completed',
    client: 'Denver Arts Council',
    architect: 'Emily Carter',
    description: 'A modern cultural center with versatile spaces for arts, performances, and community events in downtown Denver.',
    challenge: 'Create a flexible cultural venue that serves diverse artistic and community needs.',
    solution: 'Adaptable performance spaces, movable walls, and state-of-the-art acoustics.',
    materials: ['Glass curtain wall', 'Steel frame', 'Acoustic materials', 'Local stone'],
    features: ['Performance hall', 'Art galleries', 'Community spaces', 'Outdoor plaza', 'Cafe'],
    images: [
      'https://images.unsplash.com/photo-1571055107734-8b3ad1c6b8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1440778303588-435521a205bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '29': {
    id: 29,
    title: 'City Center Pavilion',
    location: 'Kansas City, MO',
    category: 'urban',
    year: '2024',
    size: '45,000 sq ft',
    status: 'In Progress',
    client: 'Kansas City Development Authority',
    architect: 'Patricia Lee',
    description: 'A modern urban pavilion serving as a community hub and event space in downtown Kansas City. The design emphasizes transparency and connection to the surrounding cityscape.',
    challenge: 'Create a landmark building that serves multiple community functions while enhancing the urban environment.',
    solution: 'Open-plan design, flexible event spaces, and extensive use of glass to create visual connections.',
    materials: ['Steel and glass structure', 'Natural stone', 'Sustainable wood', 'Green roof systems'],
    features: ['Multi-purpose event hall', 'Community meeting rooms', 'Public plaza', 'Green roof garden', 'Retail spaces'],
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '33': {
    id: 33,
    title: 'Innovation Labs',
    location: 'Raleigh, NC',
    category: 'commercial',
    year: '2024',
    size: '95,000 sq ft',
    status: 'In Progress',
    client: 'Research Triangle Institute',
    architect: 'Dr. Amanda Foster',
    description: 'A cutting-edge research and development facility designed to support innovation in biotechnology and advanced manufacturing. The building features specialized laboratories and collaborative workspaces.',
    challenge: 'Design a facility that meets stringent laboratory requirements while promoting collaboration between research teams.',
    solution: 'Modular lab design, central collaboration spaces, and advanced HVAC systems for precise environmental control.',
    materials: ['Laboratory-grade materials', 'Specialized flooring', 'Advanced glass systems', 'Stainless steel fixtures'],
    features: ['Research laboratories', 'Clean rooms', 'Collaboration spaces', 'Conference facilities', 'Equipment storage'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '21': {
    id: 21,
    title: 'Urban Greenhouse Center',
    location: 'Minneapolis, MN',
    category: 'community',
    year: '2024',
    size: '40,000 sq ft',
    status: 'In Progress',
    client: 'Minneapolis Urban Initiatives',
    architect: 'Laura Jensen',
    description: 'Urban greenhouse and community center supporting sustainable agriculture and local engagement.',
    challenge: 'Integrate advanced greenhouse technology with community spaces in a dense urban environment.',
    solution: 'Hybrid structure combining passive solar design, hydroponics, and flexible event spaces.',
    materials: ['Glass panels', 'Recycled steel', 'Green roofing', 'Sustainable wood'],
    features: ['Hydroponic greenhouse', 'Community classrooms', 'Farmers market space', 'Event pavilion', 'Rooftop gardens'],
    images: [
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  '50': {
    id: 50,
    title: 'Luxury Transitional Living Room',
    location: 'Chicago, IL',
    category: 'interior',
    year: '2025',
    size: '1,200 sq ft',
    status: 'Completed',
    client: 'Private Client',
    architect: 'Interior Studio',
    description: 'A sophisticated transitional living room blending classic and contemporary elements, featuring neutral tones, plush seating, and statement lighting.',
    challenge: 'Create a luxurious yet comfortable space that bridges classic and modern tastes.',
    solution: 'Custom millwork, layered lighting, and curated furniture selection.',
    materials: ['Hardwood floors', 'Velvet upholstery', 'Brass accents', 'Custom cabinetry'],
    features: ['Open concept', 'Statement chandelier', 'Large windows', 'Fireplace'],
    images: [
      'https://th.bing.com/th/id/R.2beb91ca052a68fac333901365655c15?rik=R4RiJDHrTUB5jg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f06%2fhome-interiors.jpg&ehk=ofwWOsm6BAGBgLGk1MtO65v3uYl6qufcif%2biGGleOUc%3d&risl=&pid=ImgRaw&r=0'
    ]
  },
  '51': {
    id: 51,
    title: 'Clarendon Hills Luxury Home Interior',
    location: 'Clarendon Hills, IL',
    category: 'interior',
    year: '2025',
    size: '2,000 sq ft',
    status: 'Completed',
    client: 'Clarendon Realty',
    architect: 'MM Architectural Photography',
    description: 'An elegant open-plan interior with custom millwork, marble finishes, and designer furnishings for a luxury residential experience.',
    challenge: 'Balance elegance and functionality in a family home.',
    solution: 'Use of premium materials and open layouts for flow and light.',
    materials: ['Marble', 'Custom millwork', 'Designer lighting', 'Hardwood floors'],
    features: ['Chef kitchen', 'Formal dining', 'Custom fireplace', 'Spa bathroom'],
    images: [
      'https://www.mmarchitecturalphotography.com/chicago-architectural-photographer/uploads/2016/01/clarendon-hills-luxury-home-interior.jpg'
    ]
  },
  '52': {
    id: 52,
    title: 'Transitional Interior Design',
    location: 'New York, NY',
    category: 'interior',
    year: '2025',
    size: '1,500 sq ft',
    status: 'Completed',
    client: 'NYC Interiors',
    architect: 'Transitional Design Group',
    description: 'A transitional interior with a harmonious blend of modern and traditional design, featuring soft textures and warm lighting.',
    challenge: 'Blend traditional and modern elements for a timeless look.',
    solution: 'Neutral palette, layered textiles, and mixed materials.',
    materials: ['Textiles', 'Wood', 'Glass', 'Metal'],
    features: ['Reading nook', 'Gallery wall', 'Ambient lighting', 'Built-in shelving'],
    images: [
      'https://www.deco-fr.net/wp-content/uploads/2022/12/design-dinterieur-transitionnel.jpg.webp'
    ]
  },
  '53': {
    id: 53,
    title: 'Modern Minimalist Living Room',
    location: 'San Francisco, CA',
    category: 'interior',
    year: '2025',
    size: '950 sq ft',
    status: 'Completed',
    client: 'Urban Living SF',
    architect: 'Minimal Studio',
    description: 'A modern minimalist living room with clean lines, open space, and a calming color palette for a serene urban retreat.',
    challenge: 'Maximize a small space for comfort and style.',
    solution: 'Open plan, hidden storage, and minimal décor.',
    materials: ['White oak', 'Matte paint', 'Glass', 'Steel'],
    features: ['Open shelving', 'Large windows', 'Minimalist furniture', 'Accent wall'],
    images: [
      'https://th.bing.com/th/id/R.ba019135bc5d2d9eb7da2ddcd63708c9?rik=gKYsagNW8fwNeQ&pid=ImgRaw&r=0'
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
