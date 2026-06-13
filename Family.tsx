'use client';

import { motion } from 'framer-motion';
import { Users, Heart } from 'lucide-react';
import { config } from '@/lib/wedding-config';

export default function Family() {
  return (
    <section className="py-20 bg-gradient-to-br from-gold-50 via-blush-50 to-cream-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Users className="w-12 h-12 text-gold-500 mx-auto mb-4" />
          <h2 className="section-title">Our Families</h2>
          <p className="text-gray-600 text-lg">With love and blessings from our families</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Bride's Family */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blush-400 to-blush-500 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif text-blush-600 mb-4">
                {config.couple.bride.firstName}'s Family
              </h3>
              
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-800">Parents</p>
                  <p className="text-gray-600">{config.family.brideParents.father}</p>
                  <p className="text-gray-600">{config.family.brideParents.mother}</p>
                </div>
                
                {config.family.grandparents && (
                  <div>
                    <p className="font-medium text-gray-800 mt-4">Grandparents</p>
                    <p className="text-sm text-gray-500">{config.family.grandparents.paternal}</p>
                    <p className="text-sm text-gray-500">{config.family.grandparents.maternal}</p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Groom's Family */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif text-gold-600 mb-4">
                {config.couple.groom.firstName}'s Family
              </h3>
              
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-800">Parents</p>
                  <p className="text-gray-600">{config.family.groomParents.father}</p>
                  <p className="text-gray-600">{config.family.groomParents.mother}</p>
                </div>
                
                {config.family.grandparents && (
                  <div>
                    <p className="font-medium text-gray-800 mt-4">Grandparents</p>
                    <p className="text-sm text-gray-500">{config.family.grandparents.paternal}</p>
                    <p className="text-sm text-gray-500">{config.family.grandparents.maternal}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
