# Cosmo Granites

A premium granite solutions website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional layout with custom typography
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Smooth transitions powered by Framer Motion
- **Performance**: Optimized for speed and SEO
- **Accessibility**: Built with accessibility best practices

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Scroll Detection**: React Intersection Observer

## Theme Configuration

- **Primary Color**: #D32F2F (logo red)
- **Accent**: #A31621
- **Neutral**: #FAFAFA (stone white)
- **Dark**: #2E2E2E (granite grey)

## Typography

- **Headings**: Cormorant Garamond (serif)
- **Body**: Inter (sans-serif)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Add your assets**:
   - Replace `/public/assets/logo.png` with your Cosmo logo
   - Replace `/public/videos/hero-loop.mp4` with your background video

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
cosmo-granites/
├── app/
│   ├── globals.css          # Global styles and fonts
│   ├── layout.tsx           # Root layout with Navbar and Footer
│   └── page.tsx             # Home page
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── HeroSection.tsx      # Hero section with video background
│   ├── CatalogueGrid.tsx    # Granite catalogue grid
│   ├── AboutSection.tsx     # About us section
│   ├── ContactSection.tsx   # Contact form and info
│   └── Footer.tsx           # Footer component
├── public/
│   ├── assets/
│   │   └── logo.png         # Company logo
│   └── videos/
│       └── hero-loop.mp4    # Background video
└── tailwind.config.ts        # Tailwind configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors
Update the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#D32F2F',
  accent: '#A31621',
  neutral: '#FAFAFA',
  dark: '#2E2E2E',
}
```

### Typography
Modify fonts in `tailwind.config.ts`:

```typescript
fontFamily: {
  'heading': ['Cormorant Garamond', 'serif'],
  'body': ['Inter', 'sans-serif'],
}
```

## Next Steps

1. Replace placeholder images with actual granite photos
2. Add real content and copy
3. Implement contact form functionality
4. Add more granite varieties to the catalogue
5. Optimize images and videos for web
6. Add SEO meta tags and structured data
7. Implement analytics tracking

## Support

For questions or support, please contact the development team.
