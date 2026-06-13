'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { config } from '@/lib/wedding-config';
import { getTimeRemaining } from '@/lib/utils';

export default function Countdown() {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(config.weddingDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining(config.weddingDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeRemaining.days, label: 'Days' },
    { value: timeRemaining.hours, label: 'Hours' },
    { value: timeRemaining.minutes, label: 'Minutes' },
    { value: timeRemaining.seconds, label: 'Seconds' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gold-50 via-blush-50 to-cream-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Clock className="w-12 h-12 text-gold-500 mx-auto mb-4" />
          <h2 className="section-title">Counting Down</h2>
          <p className="text-gray-600 text-lg">Until our special day</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card text-center"
            >
              <div className="text-4xl md:text-6xl font-bold text-gradient mb-2">
                {unit.value}
              </div>
              <div className="text-sm md:text-base text-gray-600 uppercase tracking-wider">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
