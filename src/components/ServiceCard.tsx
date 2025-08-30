'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

const ServiceCard = ({ icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-custom border border-primary-indigo/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 card-hover"
    >
      {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-indigo/20 to-primary-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-r from-primary-indigo to-primary-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <div className="text-white text-2xl">
            {icon}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-indigo transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>

        {/* Hover Arrow */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
          <div className="w-6 h-6 bg-primary-accent rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard 