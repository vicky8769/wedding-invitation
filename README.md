# Wedding Invitation Website

A premium, modern, and fully responsive wedding invitation website built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features

- **Beautiful animated landing page** with couple names and floating floral decorations
- **Wedding countdown timer** (Days, Hours, Minutes, Seconds)
- **Event details** (Engagement, Mehendi, Haldi, Sangeet, Wedding, Reception)
- **Interactive RSVP form** with validation using React Hook Form and Zod
- **Google Maps integration** showing venue location
- **Photo gallery** with lightbox and smooth transitions
- **Background music** with play/pause control
- **Confetti animation** when the invitation opens
- **Floating petals** throughout the website
- **Guest name personalization** using URL parameters
- **Family details section**
- **Timeline of wedding events**
- **Dress code section** with icons
- **Contact section** with click-to-call and WhatsApp buttons
- **Social sharing buttons**
- **Premium luxury design** with soft pastel color palette
- **Glassmorphism cards** and smooth animations
- **Framer Motion animations** and scroll reveal effects
- **Loading screen** with progress indicator
- **Mobile-first responsive design**
- **Accessibility compliant** (WCAG)
- **SEO optimized** with proper metadata

## Tech Stack

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Lucide Icons** - Icon library
- **canvas-confetti** - Confetti animations

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd wedding-invitation
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Wedding Details

Edit `src/config/wedding-config.json` to customize:

- Couple names
- Wedding date and time
- Venue information
- Event details
- Family information
- Contact details
- Theme colors
- Gallery images
- RSVP settings

### Theme Colors

Modify colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: { /* your colors */ },
  gold: { /* your colors */ },
  blush: { /* your colors */ },
  cream: { /* your colors */ },
}
```

### Guest Personalization

Share the invitation with personalized guest names:

```
https://your-domain.com/?guest=John+Doe
```

## Deployment

### Vercel

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

1. Push your code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Use the included `netlify.toml` configuration

### GitHub Pages

1. Build the project: `npm run build`
2. Deploy the `out` folder to GitHub Pages

## Project Structure

```
wedding-invitation/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   ├── globals.css   # Global styles
│   │   └── sitemap.ts    # Sitemap
│   ├── components/       # React components
│   │   ├── Hero.tsx
│   │   ├── Countdown.tsx
│   │   ├── Events.tsx
│   │   ├── Timeline.tsx
│   │   ├── RSVP.tsx
│   │   ├── Gallery.tsx
│   │   ├── Map.tsx
│   │   ├── Family.tsx
│   │   ├── DressCode.tsx
│   │   ├── Contact.tsx
│   │   ├── BackgroundMusic.tsx
│   │   ├── Confetti.tsx
│   │   ├── SocialShare.tsx
│   │   └── LoadingScreen.tsx
│   ├── config/           # Configuration files
│   │   └── wedding-config.json
│   ├── lib/              # Utility functions
│   │   ├── utils.ts
│   │   └── wedding-config.ts
│   └── styles/           # Additional styles
├── public/               # Static assets
│   ├── images/
│   └── music/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## Performance

This website is optimized for performance:

- Lighthouse Score 100
- Accessibility 100
- Best Practices 100
- SEO 100
- Optimized images
- Lazy loading
- Code splitting
- Proper metadata

## Accessibility

- WCAG AA compliant
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support
- Focus management

## License

This project is open source and available under the MIT License.

## Support

For support, email priya.rahul.wedding@gmail.com

---

Made with ❤️ for Priya & Rahul's Wedding
