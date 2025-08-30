import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PortfolioSection from '@/components/PortfolioSection'

export const metadata = {
  title: 'Portfolio - Vibesetters India',
  description: 'Explore our creative work across weddings, corporate events, branding, and more. See how we bring magic to every project.',
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PortfolioSection />
      <Footer />
    </main>
  )
} 