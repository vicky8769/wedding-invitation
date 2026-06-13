'use client';

import { motion } from 'framer-motion';
import { Shirt, Sparkles, Crown } from 'lucide-react';
import { config } from '@/lib/wedding-config';

export default function DressCode() {
  const dressCodes = [
    {
      event: 'Engagement',
      code: 'Ethnic Wear',
      icon: Shirt,
      color: 'from-gold-400 to-gold-500',
      description: 'Traditional ethnic attire'
    },
    {
      event: 'Mehendi',
      code: 'Yellow/Green',
      icon: Sparkles,
      color: 'from-green-400 to-green-500',
      description: 'Bright and colorful'
    },
    {
      event: 'Haldi',
      code: 'Yellow',
      icon: Sparkles,
      color: 'from-yellow-400 to-yellow-500',
      description: 'All shades of yellow'
    },
    {
      event: 'Sangeet',
      code: 'Glamorous Ethnic',
      icon: Crown,
      color: 'from-purple-400 to-purple-500',
      description: 'Dress to impress'
    },
    {
      event: 'Wedding',
      code: 'Traditional Indian',
      icon: Crown,
      color: 'from-red-400 to-red-500',
      description: 'Formal traditional wear'
    },
    {
      event: 'Reception',
      code: 'Formal/Party Wear',
      icon: Shirt,
      color: 'from-blush-400 to-blush-500',
      description: 'Elegant party attire'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cream-50 via-gold-50 to-blush-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Shirt className="w-12 h-12 text-gold-500 mx-auto mb-4" />
          <h2 className="section-title">Dress Code</h2>
          <p className="text-gray-600 text-lg">What to wear for each celebration</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {dressCodes.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.event}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-lg font-serif text-gold-700 mb-1">{item.event}</h3>
                <p className="text-sm font-medium text-gray-800 mb-2">{item.code}</p>
                <p className="text-xs text-gray-500">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
