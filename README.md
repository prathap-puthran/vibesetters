# Vibesetters India - Creative Services Website

A stunning, professionally designed Next.js website for Vibesetters India, an event and creative services company. This website features a modern, vibrant design with smooth animations, gradient backgrounds, and an engaging user experience.

## 🎨 Design Features

- **Modern Aesthetic**: Senior designer-level UI/UX with vibrant colors and smooth animations
- **Color Scheme**: Deep purple (#2A0A5E) background with gradient accents (blue #00BFFF to orange #FF4500)
- **Typography**: High-quality fonts (Poppins for headings, Roboto for body text)
- **Responsive Design**: Fully mobile-first design that works across all devices
- **Animations**: Smooth Framer Motion animations and CSS transitions
- **Interactive Elements**: Hover effects, sliders, and engaging user interactions

## 🚀 Features

### Core Pages
- **Home**: Hero section, services overview, and call-to-action
- **Services**: Interactive service cards with detailed descriptions
- **Pricing**: Collapsible pricing categories with transparent pricing
- **Portfolio**: Filterable gallery with lightbox modal for projects
- **About**: Company overview, team information, and company timeline
- **Contact**: Contact form with validation and contact information

### Technical Features
- **Next.js 14**: Latest version with App Router
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **React Hook Form**: Form handling with validation
- **Heroicons**: Beautiful SVG icons
- **Swiper**: Touch-enabled sliders
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Meta tags and structured content
- **Performance**: Optimized images and fast loading

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Forms**: React Hook Form
- **Sliders**: Swiper
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vibesetters
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
vibesetters/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── pricing/           # Pricing page
│   │   ├── portfolio/         # Portfolio page
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Services.tsx       # Services section
│   │   ├── ServiceCard.tsx    # Individual service card
│   │   ├── PricingSection.tsx # Pricing section
│   │   ├── PortfolioSection.tsx # Portfolio section
│   │   ├── AboutSection.tsx   # About section
│   │   └── ContactSection.tsx # Contact section
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## 🎯 Key Components

### Header Component
- Fixed navigation with logo
- Responsive mobile menu
- Call-to-action button
- Smooth transitions

### Hero Section
- Animated background elements
- Company logo and tagline
- Introduction text
- Call-to-action buttons
- Scroll indicator

### Services Section
- 6 main service categories
- Interactive service cards
- Hover effects and animations
- Responsive grid layout

### Pricing Section
- Collapsible service categories
- Transparent pricing information
- Interactive accordion design
- Call-to-action section

### Portfolio Section
- Filterable project gallery
- Masonry grid layout
- Lightbox modal for projects
- Category filters

### About Section
- Company mission and values
- Team member profiles
- Company timeline
- Animated milestones

### Contact Section
- Contact form with validation
- Contact information
- Social media links
- Map placeholder

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    purple: '#2A0A5E',    // Main background
    blue: '#00BFFF',      // Primary accent
    orange: '#FF4500',    // Secondary accent
    gold: '#FFD700',      // Highlights
  }
}
```

### Typography
- **Headings**: Poppins font family
- **Body Text**: Roboto font family
- **Custom Classes**: `.gradient-text`, `.text-shadow`

### Animations
- **Framer Motion**: Page transitions and scroll animations
- **CSS Animations**: Hover effects and micro-interactions
- **Custom Keyframes**: Floating animations and transitions

## 📱 Responsive Design

The website is built with a mobile-first approach:

- **Mobile**: Single column layouts, stacked components
- **Tablet**: Two-column grids, optimized spacing
- **Desktop**: Multi-column layouts, enhanced hover effects

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `out`
- **AWS Amplify**: Connect your repository and deploy
- **Traditional Hosting**: Build with `npm run build` and upload the `out` folder

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 📋 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions:
- **Phone**: +91 94802 44135
- **Email**: info@vibesetters.in
- **Website**: [vibesetters.in](https://vibesetters.in)

## 🎉 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Heroicons** for beautiful SVG icons

---

**Vibesetters India** - Your Moments • Our Magic • Endless Vibes ✨ 