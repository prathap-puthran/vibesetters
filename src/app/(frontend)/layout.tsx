import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vibesetters India - Your Moments • Our Magic • Endless Vibes',
  description: 'Professional event and creative services company specializing in videography, photography, dance choreography, branding, and event management. Transform your ideas into extraordinary experiences.',
  keywords: 'event management, videography, photography, dance choreography, branding, India, creative services',
  authors: [{ name: 'Vibesetters India' }],
  creator: 'Vibesetters India',
  openGraph: {
    title: 'Vibesetters India - Creative Event Services',
    description: 'Professional event and creative services company in India',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 