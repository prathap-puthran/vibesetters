'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', data)
    setSubmitSuccess(true)
    reset()
    setIsSubmitting(false)
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  const contactInfo = [
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: 'Phone',
      value: '+91 94802 44135',
      link: 'tel:+919480244135'
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: 'Email',
      value: 'info@vibesetters.in',
      link: 'mailto:info@vibesetters.in'
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: 'Location',
      value: 'Mangalore, Karnataka, India',
      link: null
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: 'Business Hours',
      value: 'Mon - Sat: 9:00 AM - 7:00 PM',
      link: null
    }
  ]

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
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to create something extraordinary? Let's discuss your project and bring your vision to life. 
            We're here to help you every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-custom border border-primary-indigo/20 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 mb-6"
              >
                <p className="text-green-400 text-center">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Full Name *
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/10 border border-primary-indigo/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-indigo focus:border-transparent"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address *
                </label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/10 border border-primary-indigo/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-indigo focus:border-transparent"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">
                  Phone Number
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-white/10 border border-primary-indigo/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-indigo focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-primary-indigo/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-indigo focus:border-transparent resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white/5 backdrop-blur-custom border border-primary-indigo/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-indigo to-primary-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-white">
                        {info.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-primary-indigo hover:text-primary-accent transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-custom border border-primary-indigo/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/vibesetters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-primary-indigo to-primary-accent rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                  <span className="text-white text-xl">📷</span>
                </a>
                <a
                  href="https://facebook.com/vibesetters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-primary-indigo to-primary-accent rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                  <span className="text-white text-xl">📘</span>
                </a>
                <a
                  href="https://youtube.com/vibesetters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-primary-indigo to-primary-accent rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                  <span className="text-white text-xl">📺</span>
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            {/* <div className="bg-white/5 backdrop-blur-custom border border-primary-indigo/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Our Location</h3>
              <div className="aspect-video bg-gradient-to-br from-primary-indigo/20 to-primary-accent/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-gray-300 text-sm">Mangalore, Karnataka, India</p>
                  <p className="text-primary-indigo text-xs mt-1">Google Maps integration coming soon</p>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-indigo/20 to-primary-accent/20 border border-primary-indigo/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Create Unforgettable Moments Together!
            </h3>
            <p className="text-gray-300 mb-6">
              Whether you have a clear vision or just a spark of an idea, we're here to help you bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/pricing" className="btn-secondary">
                View Our Services
              </a>
              <a href="/portfolio" className="btn-primary">
                See Our Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection 