'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-background via-primary-background/90 to-primary-background/80">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Icons */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-10 text-primary-main/20 text-4xl"
        >
          🎬
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 text-primary-accent/20 text-3xl"
        >
          📸
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 3, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-20 text-primary-highlight/20 text-3xl"
        >
          💃
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 25, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-20 right-10 text-primary-main/20 text-4xl"
        >
          ⭐
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-background/50 via-transparent to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32">
              <Image
                src="/Vibesetter final logo.jpeg"
                alt="Vibesetters Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Company Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4 text-shadow"
          >
            Vibesetters
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-primary-highlight font-medium mb-8"
          >
            Your Moments • Our Magic • Endless Vibes
          </motion.p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Welcome to Vibesetters India, your ultimate partner for transforming ideas into extraordinary experiences. 
            Specializing in videography, photography, dance choreography, branding, event management, and more, 
            we deliver top-tier creative services at unbeatable prices. Our passionate team blends innovation and 
            expertise to make every wedding, corporate gathering, or brand project truly unforgettable.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Ready to Create Magic? Contact Us Today!
          </Link>
          <Link href="#services" className="btn-secondary text-lg px-8 py-4">
            Explore Our Services
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-main rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary-main rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 