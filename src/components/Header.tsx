'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-purple/90 backdrop-blur-custom border-b border-primary-indigo/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/Vibesetter final logo.jpeg"
                alt="Vibesetters Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-primary-indigo transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-primary-indigo transition-colors duration-200"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary-purple/95 backdrop-blur-custom border-t border-primary-indigo/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-white hover:text-primary-indigo transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link href="/contact" className="btn-primary w-full text-center block">
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header 