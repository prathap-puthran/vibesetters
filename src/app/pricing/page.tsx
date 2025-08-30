import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingSection from '@/components/PricingSection'

export const metadata = {
  title: 'Pricing - Vibesetters India',
  description: 'Transparent and affordable pricing for all our creative services. Get custom quotes for videography, photography, event management, and more.',
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PricingSection />
      <Footer />
    </main>
  )
} 