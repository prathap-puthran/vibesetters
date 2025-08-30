'use client'

import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'
import { 
  VideoCameraIcon, 
  MusicalNoteIcon, 
  CalendarDaysIcon,
  PaintBrushIcon,
  DocumentTextIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline'

const Services = () => {
  const services = [
    {
      icon: <VideoCameraIcon className="w-8 h-8" />,
      title: "Videography & Photography",
      description: "Professional shoots and edits that capture the essence of your story with stunning clarity."
    },
    {
      icon: <MusicalNoteIcon className="w-8 h-8" />,
      title: "Dance Choreography & Performance",
      description: "Custom routines and live shows that energize any occasion, complete with costume support."
    },
    {
      icon: <CalendarDaysIcon className="w-8 h-8" />,
      title: "Event Management & Decorations",
      description: "End-to-end planning, from venue setup to thematic decor, ensuring flawless execution."
    },
    // {
    //   icon: <PaintBrushIcon className="w-8 h-8" />,
    //   title: "Logo Designing & Branding",
    //   description: "Creative designs that build your brand's identity and leave a lasting impression."
    // },
    // {
    //   icon: <DocumentTextIcon className="w-8 h-8" />,
    //   title: "Invitations & Creative Media Editing",
    //   description: "Personalized invites and expert editing for photos, videos, and audio to polish your content."
    // },
    // {
    //   icon: <ComputerDesktopIcon className="w-8 h-8" />,
    //   title: "Website Creation & Promotions",
    //   description: "Custom sites and marketing strategies to boost your online presence."
    // }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-primary-purple to-primary-purple/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to execution, we bring your vision to life with our comprehensive range of creative services
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            Ready to transform your ideas into extraordinary experiences?
          </p>
          <a href="/contact" className="btn-primary text-lg px-8 py-4">
            Get Your Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 