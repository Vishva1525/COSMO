import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#c9252c', // Updated to match reference red
        accent: '#c9252c', // Same red for consistency
        neutral: '#FAFAFA',
        dark: '#6d6e71', // Updated to match reference gray
        'cosmo-cream': '#FAF9F7', // Keep cream background
        'cosmo-gray': '#6d6e71', // Updated to match reference gray
        'cosmo-gray-light': '#8a8b8e', // Lighter shade of the gray
        'accent-cosmo-red': '#c9252c', // Updated to match reference red
        'brand-red': '#c9252c', // New brand red
        'brand-gray': '#6d6e71', // New brand gray
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.4s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
        'tilt-hover': 'tiltHover 0.3s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        tiltHover: {
          '0%': { transform: 'rotateY(0deg) scale(1)' },
          '100%': { transform: 'rotateY(3deg) scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
