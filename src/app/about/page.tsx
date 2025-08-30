import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutSection from '@/components/AboutSection'

export const metadata = {
  title: 'About Us - Vibesetters India',
  description: 'Learn about Vibesetters India, our mission, team, and journey in creating extraordinary experiences through creative services.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutSection />
      <Footer />
    </main>
  )
} 