'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  const t = useTranslations('contact');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t('info.address'),
      value: 'Dakar, Sénégal',
      color: 'from-senoris-cyan to-blue-600',
    },
    {
      icon: Phone,
      label: t('info.phone'),
      value: '+221 XX XXX XX XX',
      color: 'from-senoris-gold to-yellow-600',
    },
    {
      icon: Mail,
      label: t('info.email'),
      value: 'Senoris2026@gmail.com',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1THZQkQK6q/', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/senoris2026?igsh=MWxyNHZqZ2E0N285aQ==', label: 'Instagram' },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-senoris-navy/70 to-black"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-senoris blur-2xl opacity-50"></div>
              <div className="relative p-4 bg-gradient-senoris rounded-2xl">
                <Mail className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-senoris-cyan via-senoris-navy to-senoris-gold bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>

          <p className="text-2xl text-senoris-gold dark:text-senoris-gold font-semibold mb-4">
            {t('subtitle')}
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-senoris-cyan/10 to-senoris-gold/10 rounded-3xl blur-2xl"></div>
            
            <form onSubmit={handleSubmit} className="relative bg-white dark:bg-senoris-navy/50 backdrop-blur-xl rounded-3xl p-8 border-2 border-gray-200 dark:border-senoris-cyan/20 shadow-2xl">
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {t('form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-senoris-night/50 border-2 border-gray-200 dark:border-senoris-cyan/20 rounded-xl focus:border-senoris-cyan dark:focus:border-senoris-gold focus:outline-none transition-colors text-gray-900 dark:text-white"
                    placeholder="Diarra Dieng"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {t('form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-senoris-night/50 border-2 border-gray-200 dark:border-senoris-cyan/20 rounded-xl focus:border-senoris-cyan dark:focus:border-senoris-gold focus:outline-none transition-colors text-gray-900 dark:text-white"
                    placeholder="senoris@example.com"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {t('form.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-senoris-night/50 border-2 border-gray-200 dark:border-senoris-cyan/20 rounded-xl focus:border-senoris-cyan dark:focus:border-senoris-gold focus:outline-none transition-colors text-gray-900 dark:text-white"
                    placeholder="Demande de devis"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {t('form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-senoris-night/50 border-2 border-gray-200 dark:border-senoris-cyan/20 rounded-xl focus:border-senoris-cyan dark:focus:border-senoris-gold focus:outline-none transition-colors text-gray-900 dark:text-black resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-senoris text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>{t('form.send')}</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-300`}></div>
                  
                  <div className="relative bg-blue dark:bg-senoris-navy/50 backdrop-blur-xl rounded-2xl p-6 border-2 border-gray-200 dark:border-senoris-cyan/20 group-hover:border-senoris-cyan dark:group-hover:border-senoris-gold transition-all duration-300 flex items-center space-x-4">
                    <div className={`p-3 bg-gradient-to-br ${info.color} rounded-xl`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {info.label}
                      </p>
                      <p className="text-lg font-bold text-gray-900 dark:text-white">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-senoris opacity-10 rounded-2xl blur-xl"></div>
              
              <div className="relative bg-blue dark:bg-senoris-navy/50 backdrop-blur-xl rounded-2xl p-8 border-2 border-gray-200 dark:border-senoris-cyan/20">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('info.social')}
                </h3>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-gradient-senoris rounded-xl text-white hover:shadow-lg transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Decorative Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="relative h-64 bg-gradient-to-br from-senoris-cyan/20 to-senoris-gold/20 dark:from-senoris-cyan/10 dark:to-senoris-gold/10 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-senoris-cyan dark:text-senoris-gold opacity-50" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-senoris-navy/80 to-transparent flex items-end p-6">
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  📍 Dakar, Sénégal
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}