'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-purple/95 border-t border-primary-indigo/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/Vibesetter final logo.jpeg"
                  alt="Vibesetters Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-white font-bold text-xl">Vibesetters</div>
                <div className="text-sm text-primary-indigo">India</div>
              </div>
            </div>
            <p className="text-gray-300 max-w-md">
              Your ultimate partner for transforming ideas into extraordinary experiences. 
              We deliver top-tier creative services at unbeatable prices.
            </p>
            <div className="mt-4 text-sm text-primary-gold">
              Your Moments • Our Magic • Endless Vibes
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-indigo transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-primary-indigo transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-primary-indigo transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-indigo transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-indigo transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Phone: +91 94802 44135</p>
              <p>Email: info@vibesetters.in</p>
              <div className="pt-2">
                <a 
                  href="https://instagram.com/vibesetters" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-indigo hover:text-primary-accent transition-colors duration-200"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Separator */}
        <div className="mt-8 pt-8 border-t border-primary-indigo/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Vibesetters India. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <Link href="/contact" className="btn-secondary text-sm">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 