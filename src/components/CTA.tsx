'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section-padding bg-pantera-charcoal">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Bring
            <span className="block text-gradient">
              Your Vision to Life?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's transform your ideas into exceptional architectural achievements together
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="btn-primary">
              Start a Project
            </Link>
            <Link href="/projects" className="btn-secondary">
              View Our Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
