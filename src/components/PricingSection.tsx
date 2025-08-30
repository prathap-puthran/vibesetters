'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface PricingCategory {
  id: string
  title: string
  icon: string
  services: Array<{
    name: string
    price: string
    description: string
  }>
}

const PricingSection = () => {
  const [openCategory, setOpenCategory] = useState<string | null>('videography')

  const pricingCategories: PricingCategory[] = [
    {
      id: 'videography',
      title: 'Videography & Editing',
      icon: '🎬',
      services: [
        {
          name: 'Video Shoot + Editing',
          price: '₹2,000 per minute',
          description: 'Professional video recording with post-production editing'
        },
        {
          name: 'Wedding Cinematography',
          price: '₹25,000 - ₹50,000',
          description: 'Full day coverage with cinematic editing and music'
        },
        {
          name: 'Corporate Event Video',
          price: '₹15,000 - ₹30,000',
          description: 'Professional event documentation and highlights'
        },
        {
          name: 'Music Video Production',
          price: '₹35,000 - ₹75,000',
          description: 'Concept development, shooting, and post-production'
        }
      ]
    },
    {
      id: 'photography',
      title: 'Audio & Photo Services',
      icon: '📸',
      services: [
        {
          name: 'Photography Session',
          price: '₹5,000 - ₹15,000',
          description: 'Professional photo shoots with editing'
        },
        {
          name: 'Audio Recording & Mixing',
          price: '₹3,000 - ₹8,000',
          description: 'Studio recording and audio post-production'
        },
        {
          name: 'Photo Editing & Retouching',
          price: '₹200 per photo',
          description: 'Professional photo enhancement and retouching'
        }
      ]
    },
    {
      id: 'design',
      title: 'Design & Invitations',
      icon: '🎨',
      services: [
        {
          name: 'Logo Design',
          price: '₹5,000 - ₹15,000',
          description: 'Custom logo creation with multiple concepts'
        },
        {
          name: 'Brand Identity Package',
          price: '₹25,000 - ₹50,000',
          description: 'Complete brand guidelines and assets'
        },
        {
          name: 'Wedding Invitations',
          price: '₹2,000 - ₹8,000',
          description: 'Custom design and printing'
        }
      ]
    },
    {
      id: 'dance',
      title: 'Dance & Performance',
      icon: '💃',
      services: [
        {
          name: 'Dance Choreography',
          price: '₹8,000 - ₹20,000',
          description: 'Custom routine creation and teaching'
        },
        {
          name: 'Live Performance',
          price: '₹15,000 - ₹35,000',
          description: 'Professional dancers with costumes'
        },
        {
          name: 'Dance Workshop',
          price: '₹5,000 - ₹12,000',
          description: 'Group or individual dance training'
        }
      ]
    },
    {
      id: 'mc',
      title: 'Commentary / MC Services',
      icon: '🎤',
      services: [
        {
          name: 'Event Hosting',
          price: '₹8,000 - ₹20,000',
          description: 'Professional MC services for events'
        },
        {
          name: 'Voice Over',
          price: '₹3,000 - ₹8,000',
          description: 'Professional voice recording for videos'
        }
      ]
    },
    {
      id: 'music',
      title: 'Music for Events',
      icon: '🎵',
      services: [
        {
          name: 'Live Music Performance',
          price: '₹20,000 - ₹50,000',
          description: 'Professional musicians and equipment'
        },
        {
          name: 'Custom Music Composition',
          price: '₹15,000 - ₹40,000',
          description: 'Original music creation for events'
        }
      ]
    }
  ]

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId)
  }

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-primary-purple to-primary-purple/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transparent & <span className="gradient-text">Affordable</span> Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            All services are customizable – mix and match for the perfect package. 
            Prices are starting points; contact us for a personalized quote.
          </p>
          <div className="bg-white/5 backdrop-blur-custom border border-primary-indigo/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-primary-gold font-medium">
              💡 We craft bespoke bundles to match your budget and vision
            </p>
          </div>
        </motion.div>

        {/* Pricing Categories */}
        <div className="space-y-6">
          {pricingCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-custom border border-primary-indigo/20 rounded-2xl overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                {openCategory === category.id ? (
                  <ChevronUpIcon className="w-6 h-6 text-primary-indigo" />
                ) : (
                                      <ChevronDownIcon className="w-6 h-6 text-primary-indigo" />
                )}
              </button>

              {/* Category Content */}
              <AnimatePresence>
                {openCategory === category.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-primary-indigo/20"
                  >
                    <div className="p-6">
                      <div className="grid gap-4">
                        {category.services.map((service, serviceIndex) => (
                          <motion.div
                            key={serviceIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: serviceIndex * 0.1 }}
                            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200"
                          >
                            <div className="flex-1 mb-3 sm:mb-0">
                              <h4 className="font-semibold text-white mb-1">{service.name}</h4>
                              <p className="text-gray-300 text-sm">{service.description}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-primary-gold">{service.price}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-indigo/20 to-primary-accent/20 border border-primary-indigo/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss your project and create a custom package that fits your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Your Free Quote
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection 