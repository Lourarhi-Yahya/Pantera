'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  variant?: 'light' | 'dark'
}

export default function Logo({ className = '', size = 'md', showText = true, variant = 'dark' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  }

  return (
    <motion.div 
      className={`flex items-center space-x-3 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} flex-shrink-0`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Architectural building silhouette */}
          <g className="fill-pantera-gold">
            {/* Main building structure */}
            <path d="M8 32V18L20 8L32 18V32H28V22H24V32H20V26H16V32H12V20H8V32Z" />
            
            {/* Geometric accent lines */}
            <path d="M4 36H36M20 4V8M12 14L20 8L28 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Windows/details */}
            <rect x="10" y="24" width="2" height="2" />
            <rect x="14" y="24" width="2" height="2" />
            <rect x="26" y="24" width="2" height="2" />
            <rect x="30" y="24" width="2" height="2" />
            
            {/* P letter integration */}
            <path d="M6 12V8H10C11.1 8 12 8.9 12 10C12 11.1 11.1 12 10 12H8V16H6V12Z" />
          </g>
        </svg>
      </div>

      {/* Company Name */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-bold ${variant === 'dark' ? 'text-white' : 'text-pantera-charcoal'} ${textSizeClasses[size]} leading-none`}>
            PANTERA
          </span>
          <span className={`text-xs font-medium tracking-wider ${variant === 'dark' ? 'text-pantera-beige/80' : 'text-pantera-gray-warm'}`}>
            ARCHITECTURE
          </span>
        </div>
      )}
    </motion.div>
  )
}

// Simplified version for smaller spaces
export function LogoIcon({ className = '', size = 'md' }: { className?: string, size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <g className="fill-pantera-gold">
          <path d="M8 32V18L20 8L32 18V32H28V22H24V32H20V26H16V32H12V20H8V32Z" />
          <path d="M4 36H36M20 4V8M12 14L20 8L28 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="10" y="24" width="2" height="2" />
          <rect x="14" y="24" width="2" height="2" />
          <rect x="26" y="24" width="2" height="2" />
          <rect x="30" y="24" width="2" height="2" />
          <path d="M6 12V8H10C11.1 8 12 8.9 12 10C12 11.1 11.1 12 10 12H8V16H6V12Z" />
        </g>
      </svg>
    </div>
  )
}
