'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-cream-50 via-blush-50 to-gold-50">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gold-400 opacity-20 pulse-ring"></div>
            <div className="relative w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-gold-400 to-blush-400 flex items-center justify-center shadow-2xl">
              <span className="text-4xl">💍</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-3xl md:text-4xl font-script text-gold-600 mb-4"
        >
          Priya & Rahul
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-gray-600 mb-8 font-serif"
        >
          Loading your invitation...
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
          className="w-64 h-2 mx-auto bg-gray-200 rounded-full overflow-hidden"
        >
          <div className="h-full bg-gradient-to-r from-gold-400 to-blush-400 rounded-full"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-4 text-sm text-gray-500"
        >
          {progress}%
        </motion.p>
      </div>
    </div>
  );
}
