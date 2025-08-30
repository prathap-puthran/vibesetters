'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya & Raj',
      event: 'Wedding',
      content: 'Vibesetters turned our wedding into a dream! The videography was cinematic, the photography captured every precious moment, and the dance performance was absolutely mesmerizing. Our guests still talk about how magical the whole experience was.',
      rating: 5,
      image: '/api/placeholder/100/100'
    },
    {
      id: 2,
      name: 'TechCorp India',
      event: 'Corporate Event',
      content: 'Professional, creative, and absolutely reliable. Vibesetters managed our product launch event flawlessly. The branding was on point, and the event execution was seamless. Highly recommended for any corporate event!',
      rating: 5,
      image: '/api/placeholder/100/100'
    },
    {
      id: 3,
      name: 'Sarah & Michael',
      event: 'Destination Wedding',
      content: 'Our beach wedding in Goa was made perfect by Vibesetters. The drone cinematography was breathtaking, and the editing was world-class. They truly understand how to capture the essence of love and celebration.',
      rating: 5,
      image: '/api/placeholder/100/100'
    },
    {
      id: 4,
      name: 'Fashion Forward',
      event: 'Brand Launch',
      content: 'The team at Vibesetters created an incredible brand identity for our fashion label. From logo design to the launch event, everything was executed with creativity and precision. Our brand has never looked better!',
      rating: 5,
      image: '/api/placeholder/100/100'
    },
    {
      id: 5,
      name: 'Cultural Society',
      event: 'Dance Performance',
      content: 'The classical dance performance organized by Vibesetters was absolutely stunning. The choreography, costumes, and overall presentation exceeded our expectations. They truly bring culture and art to life.',
      rating: 5,
      image: '/api/placeholder/100/100'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-primary-purple/90 to-primary-purple">
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
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients have to say about their experiences with Vibesetters.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-custom border border-primary-indigo/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 card-hover"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-primary-gold" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-200 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-indigo/20 to-primary-accent/20 rounded-full flex items-center justify-center">
                  <div className="text-2xl">👤</div>
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-primary-indigo">{testimonial.event}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Feed Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Follow Our <span className="gradient-text">Creative Journey</span>
          </h3>
          <div className="bg-white/5 backdrop-blur-custom border border-primary-indigo/20 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-gradient-to-br from-primary-indigo/20 to-primary-accent/20 rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-200"
                >
                  <div className="text-3xl">📸</div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="https://instagram.com/vibesetters"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Follow @vibesetters on Instagram
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 