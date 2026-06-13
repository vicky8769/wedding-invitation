'use client';

import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import Events from '@/components/Events';
import Timeline from '@/components/Timeline';
import RSVP from '@/components/RSVP';
import Gallery from '@/components/Gallery';
import Map from '@/components/Map';
import Family from '@/components/Family';
import DressCode from '@/components/DressCode';
import Contact from '@/components/Contact';
import BackgroundMusic from '@/components/BackgroundMusic';
import Confetti from '@/components/Confetti';
import SocialShare from '@/components/SocialShare';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <main className="min-h-screen">
      <Confetti />
      <BackgroundMusic />
      
      <Hero />
      <Countdown />
      <Events />
      <Timeline />
      <Family />
      <DressCode />
      <Gallery />
      <Map />
      <RSVP />
      <Contact />
      <SocialShare />
      
      {/* Footer */}
      <footer className="py-12 bg-gradient-to-br from-gold-100 via-blush-100 to-cream-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-script text-gold-600 mb-4">
            Priya & Rahul
          </p>
          <p className="text-gray-600 mb-2">
            December 15, 2025 • Mumbai
          </p>
          <p className="text-sm text-gray-500">
            Made with ❤️ for our special day
          </p>
        </div>
      </footer>
    </main>
  );
}
