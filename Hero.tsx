'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { config } from '@/lib/wedding-config';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    setMounted(true);
    const params = new URLSearchParams(window.location.search);
    const guest = params.get('guest');
    if (guest) {
      setGuestName(guest);
    }
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 via-blush-50 to-gold-50">
      {/* Floating petals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -20,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: window.innerHeight + 20,
              rotate: Math.random() * 360 + 360,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            🌸
          </motion.div>
        ))}
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-blush-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Top decoration */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold-400"></div>
            <Sparkles className="w-6 h-6 text-gold-500" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold-400"></div>
          </div>
        </motion.div>

        {/* Guest name personalization */}
        {guestName && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-6 font-serif"
          >
            Dear {guestName},
          </motion.p>
        )}

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-script text-gradient mb-6"
        >
          {config.couple.bride.firstName} <span className="text-4xl md:text-6xl">&</span> {config.couple.groom.firstName}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-700 mb-4 font-serif"
        >
          Request the pleasure of your company
        </motion.p>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-2xl md:text-3xl font-serif text-gold-600 mb-2">
            December 15, 2025
          </p>
          <p className="text-lg text-gray-600">
            {config.venue.name}, Mumbai
          </p>
        </motion.div>

        {/* Heart decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-12"
        >
          <Heart className="w-12 h-12 text-blush-400 mx-auto fill-current animate-pulse-slow" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-sm text-gray-500">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gold-400 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-gold-400 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
