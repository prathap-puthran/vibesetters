'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PlayIcon, EyeIcon } from '@heroicons/react/24/outline'

interface PortfolioItem {
  id: string
  title: string
  category: string
  description: string
  image: string
  type: 'image' | 'video'
  videoUrl?: string
}

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const filters = [
    { id: 'all', name: 'All Work' },
    // { id: 'weddings', name: 'Weddings' },
    // { id: 'corporate', name: 'Corporate' },
    // { id: 'branding', name: 'Branding' },
    // { id: 'events', name: 'Events' },
    { id: 'dance', name: 'Dance' }
  ]

  const portfolioItems: PortfolioItem[] = [
    // {
    //   id: '1',
    //   title: 'Priya & Raj Wedding',
    //   category: 'weddings',
    //   description: 'A magical wedding celebration captured with cinematic beauty',
    //   image: '/api/placeholder/600/400',
    //   type: 'video',
    //   videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    // },
    {
      id: '1',
      title: 'The Duet Delights',
      category: 'dance',
      description: 'Experience the magic of "The Duet Delights" as they deliver a breathtaking couple dance performance. This stunning choreography blends romance, passion, and elegance, making it a must-watch for dance lovers!',
      image: '/api/placeholder/600/400',
      type: 'video',
      videoUrl: 'https://www.youtube.com/watch?v=88zHkG9M5UY'
    },
    {
      id: '2',
      title: 'APL 2023 season',
      category: 'dance',
      description: '',
      image: '/api/placeholder/600/400',
      type: 'video',
      videoUrl: 'https://www.youtube.com/shorts/tsZYyraRnbA'
    },

  ]

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-primary-purple to-primary-purple/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our creative work across weddings, corporate events, branding, and more. 
            See how we bring magic to every project.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-primary-indigo to-primary-accent text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="break-inside-avoid mb-6"
              >
                <div className="group relative bg-white/5 backdrop-blur-custom border border-primary-indigo/20 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {/* Image/Video Placeholder */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-primary-indigo/20 to-primary-accent/20 flex items-center justify-center">
                    <div className="text-6xl text-white/30">
                      {item.type === 'video' ? '🎬' : '📸'}
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => setSelectedItem(item)}
                        className="bg-white/20 backdrop-blur-custom rounded-full p-4 hover:bg-white/30 transition-colors duration-200"
                      >
                        {item.type === 'video' ? (
                          <PlayIcon className="w-8 h-8 text-white" />
                        ) : (
                          <EyeIcon className="w-8 h-8 text-white" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                    <span className="inline-block px-3 py-1 bg-primary-indigo/20 text-primary-indigo text-xs rounded-full">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-2xl font-semibold text-white mb-2">No projects found</h3>
            <p className="text-gray-300">Try selecting a different category or check back later for new work.</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-indigo/20 to-primary-accent/20 border border-primary-indigo/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss your project and add it to our portfolio of success stories.
            </p>
            <a href="/contact" className="btn-primary">
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-custom"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full bg-primary-purple border border-primary-indigo/30 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-custom rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
              >
                ✕
              </button>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{selectedItem.title}</h3>
                <p className="text-gray-300 mb-6">{selectedItem.description}</p>
                
                {selectedItem.type === 'video' && selectedItem.videoUrl ? (
                  <div className="aspect-video bg-black rounded-xl overflow-hidden">
                    <iframe
                      src={selectedItem.videoUrl}
                      title={selectedItem.title}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-primary-indigo/20 to-primary-accent/20 rounded-xl flex items-center justify-center">
                    <div className="text-8xl text-white/30">📸</div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default PortfolioSection 