'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-background via-primary-background/95 to-primary-background/80">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { icon: '🎬', className: 'top-20 left-10 text-5xl text-primary-main/20', duration: 6 },
          { icon: '📸', className: 'top-40 right-20 text-4xl text-primary-accent/25', duration: 8, delay: 1 },
          { icon: '💃', className: 'bottom-40 left-20 text-4xl text-primary-highlight/25', duration: 7, delay: 2 },
          { icon: '⭐', className: 'bottom-20 right-10 text-5xl text-primary-main/20', duration: 9, delay: 3 },
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
              <span className="text-primary-highlight text-lg font-bold">✦</span>
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
          Welcome to <span className="font-semibold text-white">Vibesetters India</span>, your trusted partner in turning ideas into memorable experiences. From <span className="text-primary-accent">videography</span> and <span className="text-primary-accent">photography</span> to dance choreography, branding, and complete event management, we bring creativity and expertise together to make every celebration, corporate event, or project truly unforgettable.
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
