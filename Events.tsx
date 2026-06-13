'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Palette, Ring, Sun, Music, Heart, Champagne, Clock } from 'lucide-react';
import { config } from '@/lib/wedding-config';
import { formatDate, formatTime } from '@/lib/utils';

const iconMap = {
  ring: Ring,
  palette: Palette,
  sun: Sun,
  music: Music,
  heart: Heart,
  champagne: Champagne,
};

export default function Events() {
  return (
    <section className="py-20 bg-gradient-to-br from-cream-50 via-blush-50 to-gold-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Calendar className="w-12 h-12 text-gold-500 mx-auto mb-4" />
          <h2 className="section-title">Wedding Events</h2>
          <p className="text-gray-600 text-lg">Join us for these special celebrations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {config.events.map((event, index) => {
            const Icon = iconMap[event.icon as keyof typeof iconMap] || Calendar;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-400 to-blush-400 text-white">
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-serif text-center mb-2 text-gold-600">
                  {event.name}
                </h3>
                
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{formatTime(event.time)}</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-500 text-center">
                  {event.description}
                </p>

                <div className="mt-4 pt-4 border-t border-gold-200">
                  <p className="text-sm text-center">
                    <span className="font-medium text-gold-600">Dress Code:</span> {event.dressCode}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
