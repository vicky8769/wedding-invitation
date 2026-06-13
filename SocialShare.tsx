'use client';

import { motion } from 'framer-motion';
import { Share2, Facebook, Twitter, Mail as MailIcon, Link2 } from 'lucide-react';
import { useState } from 'react';

export default function SocialShare() {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`,
      color: 'from-sky-400 to-sky-500',
    },
    {
      name: 'Email',
      icon: MailIcon,
      url: `mailto:?subject=Wedding Invitation&body=You're invited to our wedding! ${encodeURIComponent(shareUrl)}`,
      color: 'from-gray-500 to-gray-600',
    },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

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
          <Share2 className="w-12 h-12 text-gold-500 mx-auto mb-4" />
          <h2 className="section-title">Share Our Joy</h2>
          <p className="text-gray-600 text-lg">Spread the love with friends and family</p>
        </motion.div>

        <div className="max-w-md mx-auto">
          <div className="flex justify-center gap-4 mb-8">
            {shareLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${link.color} text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow`}
                  aria-label={`Share on ${link.name}`}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={copyLink}
            className="w-full btn-secondary flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <span>✓ Copied!</span>
              </>
            ) : (
              <>
                <Link2 className="w-5 h-5" />
                Copy Link
              </>
            )}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
