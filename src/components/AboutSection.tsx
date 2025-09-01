'use client'

import { motion } from 'framer-motion'
import { 
  HeartIcon, 
  LightBulbIcon, 
  StarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const AboutSection = () => {
  const teamMembers = [
    {
      name: 'Vishwas Shetty',
      role: 'Founder & Creative Director',
      bio: 'A visionary creative professional with over 8 years of experience in event management and creative services. Passionate about turning ideas into unforgettable experiences.',
      quote: '"Every event is a story waiting to be told, and we are the storytellers."',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sushanth Poojary',
      role: 'Co-Founder & Technical Director',
      bio: 'Expert in videography, photography, and technical production. Brings technical excellence and innovative solutions to every project.',
      quote: '"Technology meets creativity to create magic that lasts forever."',
      image: '/api/placeholder/300/300'
    }
  ]

  const milestones = [
    {
      year: '2025',
      title: 'Company Founded',
      description: 'Vibesetters India was established with a vision to revolutionize creative services in India.'
    },
    {
      year: '2019',
      title: 'First Major Event',
      description: 'Successfully managed our first large-scale corporate event, marking the beginning of our growth journey.'
    },
    {
      year: '2020',
      title: 'Digital Expansion',
      description: 'Adapted to the digital age, expanding our services to include virtual events and online content creation.'
    },
    {
      year: '2021',
      title: 'Portfolio Milestone',
      description: 'Reached 100+ successful projects across weddings, corporate events, and branding projects.'
    },
    {
      year: '2022',
      title: 'Team Expansion',
      description: 'Grew our team to include specialized professionals in every creative discipline.'
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Received multiple awards and recognition for excellence in creative services and event management.'
    },
    {
      year: '2024',
      title: 'National Expansion',
      description: 'Expanded our services across major cities in India, serving clients nationwide.'
    },
    {
      year: '2025',
      title: 'Innovation Hub',
      description: 'Launched our innovation lab to explore cutting-edge technologies in creative services.'
    }
  ]

  const values = [
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: 'Passion',
      description: 'We pour our heart into every project, ensuring every detail is perfect.'
    },
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Constantly exploring new ideas and technologies to deliver cutting-edge solutions.'
    },
    {
      icon: <StarIcon className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We never settle for anything less than exceptional quality in everything we do.'
    },
    {
      icon: <CheckCircleIcon className="w-8 h-8" />,
      title: 'Reliability',
      description: 'Your trust is our most valuable asset. We deliver on every promise.'
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
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="gradient-text">Vibesetters</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            We are a passionate team of creative professionals dedicated to transforming your ideas into extraordinary experiences. 
            Our journey is marked by innovation, excellence, and an unwavering commitment to creating magic.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-primary-indigo/20 to-primary-accent/20 border border-primary-indigo/30 rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
                To be the leading creative services company in India, known for our innovative approach, 
                exceptional quality, and ability to turn every event into an unforgettable experience. 
                We believe that every moment deserves to be magical, and we're here to make that happen.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our <span className="gradient-text">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-indigo to-primary-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-custom border border-primary-indigo/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-indigo/20 to-primary-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-6xl">👤</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-primary-indigo font-medium">{member.role}</p>
                </div>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {member.bio}
                </p>
                <blockquote className="text-center italic text-primary-gold font-medium">
                  "{member.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
              Ready to Work With Us?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's create something extraordinary together. Your vision, our expertise, endless possibilities.
            </p>
            <a href="/contact" className="btn-primary">
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection 