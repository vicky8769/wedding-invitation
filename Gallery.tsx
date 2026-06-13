'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Image as ImageIcon, X } from 'lucide-react';
import { config } from '@/lib/wedding-config';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!config.gallery.enabled) return null;

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
          <ImageIcon className="w-12 h-12 text-gold-500 mx-auto mb-4" />
          <h2 className="section-title">Our Gallery</h2>
          <p className="text-gray-600 text-lg">Moments we cherish</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {config.gallery.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
              onClick={() => setSelectedImage(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-200 to-blush-200 flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-white/50" />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium">View Image</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gold-400 transition"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="max-w-4xl max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-br from-gold-200 to-blush-200 rounded-2xl aspect-square flex items-center justify-center">
                <ImageIcon className="w-24 h-24 text-white/50" />
              </div>
            </motion.div>

            {/* Navigation */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gold-400 transition"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((selectedImage - 1 + config.gallery.images.length) % config.gallery.images.length);
              }}
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gold-400 transition"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((selectedImage + 1) % config.gallery.images.length);
              }}
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
