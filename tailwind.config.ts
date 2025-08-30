import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Extracted from Vibesetter Logo
        brand: {
          // Primary Logo Colors (extracted from actual logo)
          dominant: '#12084a',        // Main dominant color from logo
          coral: '#dd717e',           // Coral pink from logo
          brightBlue: '#24a4ef',      // Bright blue accent
          electricPurple: '#4f56e4',  // Electric purple
          deepBlack: '#080614',       // Deep black/dark
          mutedPurple: '#654654',     // Muted purple-brown
          lavender: '#68598b',        // Lavender accent
          forestGreen: '#205835',     // Forest green accent
          
          // Legacy color names for backward compatibility
          electricBlue: '#24a4ef',    // Same as brightBlue
          magentaPurple: '#4f56e4',   // Same as electricPurple
          darkPurple: '#12084a',      // Same as dominant
          deepPurple: '#080614',      // Same as deepBlack
        },
        
        // Semantic Color System - Updated with Logo Colors
        primary: {
          // Main brand colors (extracted from logo)
          main: '#12084a',            // Dominant color - Primary brand color
          secondary: '#4f56e4',       // Electric Purple - Secondary brand color
          accent: '#dd717e',          // Coral - Accent color
          highlight: '#24a4ef',       // Bright Blue - Highlight color
          
          // Background colors
          background: '#12084a',      // Dominant color - Main background
          surface: '#080614',         // Deep Black - Surface background
          
          // Legacy support (will be deprecated)
          purple: '#12084a',
          blue: '#24a4ef',
          indigo: '#4f56e4',
          violet: '#4f56e4',
          orange: '#dd717e',
          gold: '#24a4ef',
        },
        
        // UI Colors - Updated with Logo Colors
        ui: {
          // Text colors
          text: {
            primary: '#FFFFFF',       // White text
            secondary: '#F3F4F6',     // Light gray text
            muted: '#9CA3AF',         // Muted text
            accent: '#24a4ef',         // Bright Blue accent text
          },
          
          // Interactive colors
          interactive: {
            hover: '#4f56e4',         // Electric Purple hover state
            active: '#dd717e',         // Coral active state
            focus: '#24a4ef',          // Bright Blue focus ring
          },
          
          // Status colors
          status: {
            success: '#205835',        // Forest Green success
            warning: '#dd717e',        // Coral warning
            error: '#dd717e',          // Coral error
            info: '#24a4ef',          // Bright Blue info
          },
        },
        
        text: {
          white: '#FFFFFF',
          light: '#F3F4F6',
          muted: '#9CA3AF',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-vibes': 'linear-gradient(135deg, #12084a 0%, #24a4ef 50%, #dd717e 100%)',
        'gradient-logo': 'linear-gradient(135deg, #24a4ef 0%, #4f56e4 50%, #dd717e 100%)',
        'gradient-brand': 'linear-gradient(135deg, #4f56e4 0%, #dd717e 100%)',
        'gradient-dominant': 'linear-gradient(135deg, #12084a 0%, #080614 100%)',
        'gradient-accent': 'linear-gradient(135deg, #24a4ef 0%, #4f56e4 100%)',
      },
    },
  },
  plugins: [],
}
export default config 