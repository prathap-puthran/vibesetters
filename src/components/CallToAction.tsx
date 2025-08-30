'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-indigo/20 via-primary-accent/20 to-primary-indigo/20 border-y border-primary-indigo/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main CTA */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create <span className="gradient-text">Magic</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your ideas into extraordinary experiences. Whether it's a wedding, corporate event, 
            or brand project, we're here to make it unforgettable. Let's start your journey today!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Get Free Consultation
            </Link>
            <Link href="/portfolio" className="btn-secondary text-lg px-8 py-4">
              View Our Work
            </Link>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="text-3xl">⚡</div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast Response</h3>
              <p className="text-gray-300 text-sm">Get a response within 24 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="text-3xl">💎</div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Premium Quality</h3>
              <p className="text-gray-300 text-sm">Professional results guaranteed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="text-3xl">🎯</div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Custom Solutions</h3>
              <p className="text-gray-300 text-sm">Tailored to your specific needs</p>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 bg-white/5 backdrop-blur-custom border border-primary-indigo/20 rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Quick Contact:</strong> Call us directly at{' '}
              <a href="tel:+919480244135" className="text-primary-indigo hover:text-primary-accent transition-colors duration-200">
                +91 94802 44135
              </a>
            </p>
            <p className="text-gray-300">
              <strong className="text-white">Email:</strong>{' '}
              <a href="mailto:info@vibesetters.in" className="text-primary-indigo hover:text-primary-accent transition-colors duration-200">
                info@vibesetters.in
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction 