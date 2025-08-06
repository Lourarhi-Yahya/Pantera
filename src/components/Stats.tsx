'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { id: 1, name: 'Projects Completed', value: 250, suffix: '+' },
  { id: 2, name: 'Years of Experience', value: 15, suffix: '' },
  { id: 3, name: 'Awards Won', value: 42, suffix: '' },
  { id: 4, name: 'Satisfied Clients', value: 98, suffix: '%' },
]

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isInView])

  return <span ref={ref}>{count}</span>
}

export default function Stats() {
  return (
    <section className="section-padding bg-pantera-beige">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-6">
            Excellence in Numbers
          </h2>
          <p className="text-body-lg max-w-4xl mx-auto">
            Our commitment to architectural excellence is reflected in every project we complete across America.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card bg-white/10 backdrop-blur-sm p-8 text-center border border-white/20"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                <Counter end={stat.value} duration={2000} />
                {stat.suffix}
              </div>
              <div className="text-lg font-semibold text-pantera-charcoal mb-1">
                {stat.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
