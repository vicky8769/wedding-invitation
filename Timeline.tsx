'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { config } from '@/lib/wedding-config';
import { formatDate, formatTime } from '@/lib/utils';

export default function Timeline() {
  return (
    <section className="py-20 bg-gradient-to-br from-blush-50 via-cream-50 to-gold-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Calendar className="w-12 h-12 text-gold-500 mx-auto mb-4" />
          <h2 className="section-title">Wedding Timeline</h2>
          <p className="text-gray-600 text-lg">Our journey to forever</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-400 to-blush-400 transform md:-translate-x-1/2"></div>

            {config.events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gold-500 border-4 border-white shadow-lg transform -translate-x-1/2 z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="card">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-5 h-5 text-gold-500" />
                      <span className="text-sm font-medium text-gold-600">{formatDate(event.date)}</span>
                    </div>
                    
                    <h3 className="text-2xl font-serif text-gold-700 mb-2">{event.name}</h3>
                    
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{formatTime(event.time)}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-gray-500">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
