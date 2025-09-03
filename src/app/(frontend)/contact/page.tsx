import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'

export const metadata = {
  title: 'Contact Us - Vibesetters India',
  description: 'Get in touch with Vibesetters India for your creative services needs. Contact us for a free consultation and quote.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactSection />
      <Footer />
    </main>
  )
} 