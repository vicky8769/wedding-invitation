'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { config } from '@/lib/wedding-config';

export default function Contact() {
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
          <Phone className="w-12 h-12 text-gold-500 mx-auto mb-4" />
          <h2 className="section-title">Contact Us</h2>
          <p className="text-gray-600 text-lg">Have questions? Reach out to us</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Phone */}
            <motion.a
              href={`tel:${config.contact.phone}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 flex items-center justify-center text-white group-hover:from-gold-500 group-hover:to-gold-600 transition">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-serif text-gold-700 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm">{config.contact.phone}</p>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href={`https://wa.me/${config.contact.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center text-white group-hover:from-green-500 group-hover:to-green-600 transition">
                <MessageCircle className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-serif text-green-700 mb-2">WhatsApp</h3>
              <p className="text-gray-600 text-sm">{config.contact.whatsapp}</p>
            </motion.a>

            {/* Email */}
            <motion.a
              href={`mailto:${config.contact.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-blush-400 to-blush-500 flex items-center justify-center text-white group-hover:from-blush-500 group-hover:to-blush-600 transition">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-serif text-blush-700 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">{config.contact.email}</p>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
