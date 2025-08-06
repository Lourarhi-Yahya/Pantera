'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Logo from './Logo'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  PaintBrushIcon,
  HomeIcon
} from '@heroicons/react/24/outline'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Residential Architecture', href: '/services#residential' },
    { name: 'Commercial Architecture', href: '/services#commercial' },
    { name: 'Urban Planning', href: '/services#urban' },
    { name: 'Sustainable Renovation', href: '/services#sustainable' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
          <path
            fillRule="evenodd"
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.036.388a5.918 5.918 0 0 0-2.14 1.393A5.918 5.918 0 0 0 .388 4.036C.204 4.52.082 5.094.048 6.041.013 6.989 0 7.396 0 12.017c0 4.624.013 5.031.048 5.979.034.947.156 1.521.34 2.005a5.918 5.918 0 0 0 1.393 2.14 5.918 5.918 0 0 0 2.14 1.393c.484.184 1.058.306 2.005.34.948.035 1.355.048 5.979.048 4.624 0 5.031-.013 5.979-.048.947-.034 1.521-.156 2.005-.34a5.918 5.918 0 0 0 2.14-1.393 5.918 5.918 0 0 0 1.393-2.14c.184-.484.306-1.058.34-2.005.035-.948.048-1.355.048-5.979 0-4.621-.013-5.028-.048-5.976-.034-.947-.156-1.521-.34-2.005a5.918 5.918 0 0 0-1.393-2.14A5.918 5.918 0 0 0 19.982.388C19.498.204 18.924.082 17.977.048 17.029.013 16.622 0 12.001 0h.016zm-.117 2.164c4.506 0 5.04.018 6.816.095.647.03 1.26.137 1.95.287a3.32 3.32 0 0 1 1.898 1.898c.15.69.257 1.303.287 1.95.077 1.776.095 2.31.095 6.816 0 4.506-.018 5.04-.095 6.816-.03.647-.137 1.26-.287 1.95a3.32 3.32 0 0 1-1.898 1.898c-.69.15-1.303.257-1.95.287-1.776.077-2.31.095-6.816.095-4.506 0-5.04-.018-6.816-.095-.647-.03-1.26-.137-1.95-.287a3.32 3.32 0 0 1-1.898-1.898c-.15-.69-.257-1.303-.287-1.95-.077-1.776-.095-2.31-.095-6.816 0-4.506.018-5.04.095-6.816.03-.647.137-1.26.287-1.95a3.32 3.32 0 0 1 1.898-1.898c.69-.15 1.303-.257 1.95-.287 1.776-.077 2.31-.095 6.816-.095z"
            clipRule="evenodd"
          />
          <path d="M12.017 5.838a6.179 6.179 0 1 0 0 12.358 6.179 6.179 0 0 0 0-12.358zM12.017 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.624-10.5a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-pantera-charcoal text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Logo size="lg" showText={true} variant="dark" className="mb-4" />
              <p className="text-pantera-beige/80 mb-6 max-w-md">
                Contemporary architecture that transforms urban landscapes across America. 
                Creating spaces that inspire and endure.
              </p>
              <div className="space-y-2 text-gray-300">
                <p>📍 123 Architecture Ave, New York, NY 10001</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>✉️ contact@pantera-architecture.com</p>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-4">Navigation</h4>
              <ul className="space-y-2">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-pantera-beige/60 hover:text-pantera-gold transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-pantera-beige/60 hover:text-pantera-gold transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © 2024 Pantera Architecture. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-pantera-gold transition-colors duration-200"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
