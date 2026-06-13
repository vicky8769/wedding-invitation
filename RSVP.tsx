'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, CheckCircle2, Send } from 'lucide-react';
import { config } from '@/lib/wedding-config';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const rsvpSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  guests: z.number().min(1, 'At least 1 guest').max(10, 'Maximum 10 guests'),
  message: z.string().optional(),
  attending: z.enum(['yes', 'no']),
});

type RSVPFormData = z.infer<typeof rsvpSchema>;

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpSchema),
  });

  const onSubmit = async (data: RSVPFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('RSVP submitted:', data);
    setSubmitted(true);
  };

  if (!config.rsvp.enabled) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-gold-50 via-cream-50 to-blush-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Mail className="w-12 h-12 text-gold-500 mx-auto mb-4" />
          <h2 className="section-title">RSVP</h2>
          <p className="text-gray-600 text-lg">Please respond by {config.rsvp.deadline}</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card text-center py-12"
            >
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-serif text-gold-600 mb-2">Thank You!</h3>
              <p className="text-gray-600">Your response has been recorded. We look forward to seeing you!</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit(onSubmit)}
              className="card space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Will you be attending? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      value="yes"
                      {...register('attending')}
                      className="w-4 h-4 text-gold-600"
                    />
                    <span>Yes, I'll be there</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      value="no"
                      {...register('attending')}
                      className="w-4 h-4 text-gold-600"
                    />
                    <span>Sorry, can't make it</span>
                  </label>
                </div>
                {errors.attending && (
                  <p className="text-red-500 text-sm mt-1">{errors.attending.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register('name')}
                  className="w-full px-4 py-3 rounded-lg border border-gold-200 focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register('email')}
                  className="w-full px-4 py-3 rounded-lg border border-gold-200 focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="w-full px-4 py-3 rounded-lg border border-gold-200 focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition"
                  placeholder="+91 98765 43210"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Guests *
                </label>
                <input
                  type="number"
                  {...register('guests', { valueAsNumber: true })}
                  min="1"
                  max="10"
                  className="w-full px-4 py-3 rounded-lg border border-gold-200 focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition"
                  placeholder="1"
                />
                {errors.guests && (
                  <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gold-200 focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none transition resize-none"
                  placeholder="Any special requests or messages for the couple..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send RSVP
                  </>
                )}
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
