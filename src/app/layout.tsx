import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Pantera Architecture | Shaping America\'s Skylines with Vision & Precision',
  description: 'Premier architecture firm specializing in contemporary and urban design across the United States. Residential, commercial, and sustainable architecture solutions.',
  keywords: 'architecture, design, contemporary, urban, residential, commercial, sustainable, USA, Pantera',
  authors: [{ name: 'Pantera Architecture' }],
  openGraph: {
    title: 'Pantera Architecture',
    description: 'Shaping America\'s Skylines with Vision & Precision',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
