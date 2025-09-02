'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-background via-primary-background/95 to-primary-background/80 mt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { 
            icon: (
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ), 
            className: 'top-20 left-10 text-primary-main/20', 
            duration: 6 
          },
          { 
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ), 
            className: 'top-40 right-20 text-primary-accent/25', 
            duration: 8, 
            delay: 1 
          },
          { 
            icon: (
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ), 
            className: 'bottom-40 left-20 text-primary-highlight/25', 
            duration: 7, 
            delay: 2 
          },
          { 
            icon: (
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ), 
            className: 'bottom-20 right-10 text-primary-main/20', 
            duration: 9, 
            delay: 3 
          },
          { 
            icon: (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ), 
            className: 'top-60 left-1/3 text-primary-accent/15', 
            duration: 5, 
            delay: 0.5 
          },
          { 
            icon: (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ), 
            className: 'bottom-60 right-1/4 text-primary-highlight/18', 
            duration: 10, 
            delay: 4 
          },
        ].map(({ icon, className, duration, delay = 0 }, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
            className={`absolute ${className}`}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-0" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 drop-shadow-xl">
            <Image
              src="/Vibesetter final logo.jpeg"
              alt="Vibesetters Logo"
              fill
              className="object-contain rounded-full"
              priority
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4 drop-shadow-md uppercase bg-gradient-to-r from-white via-primary-highlight to-primary-accent bg-clip-text text-transparent"
        >
          Vibe Setters India
        </motion.h1>

                  {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-sm sm:text-base md:text-sm">
              <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300">
                Your Moments
              </span>
              <span className="text-primary-highlight text-lg font-bold">✦</span>
              <span className="px-3 py-1.5 bg-primary-highlight/10 backdrop-blur-sm rounded-full border border-primary-highlight/30 text-primary-highlight font-medium hover:bg-primary-highlight/20 transition-all duration-300">
                Our Magic
              </span>
              <span className="text-primary-highlight text-lg font-bold hidden min-[430px]:inline">✦</span>
              <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300">
                Endless Vibes
              </span>
            </div>
          </motion.div>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-10"
        >
          Welcome To <span className="font-semibold text-white">Vibesetters India</span>, The One-Stop Destination For All Your Event Needs. Whether It's A <span className="text-primary-accent">Wedding</span>, <span className="text-primary-accent">Corporate Function</span>, Or <span className="text-primary-accent">Personal Celebration</span>, We Take Care Of Everything—From Concept To Execution. With <span className="text-primary-highlight">Creativity</span>, <span className="text-primary-highlight">Passion</span>, And <span className="text-primary-highlight">Attention To Detail</span>, We Ensure Your Event Is As Unique As Your Story.
        </motion.p>


        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="btn-primary px-8 py-4 text-lg shadow-lg hover:shadow-xl transition"
          >
            ✨ Create Magic With Us
          </Link>
          <Link
            href="#services"
            className="btn-secondary px-8 py-4 text-lg shadow-md hover:shadow-xl transition"
          >
            📌 Explore Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
