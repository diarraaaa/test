'use client';

import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (data.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Submission failed:', data.error);
        alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Une erreur est survenue. Veuillez vérifier votre connexion.');
    } finally {
      setIsSubmitting(false);
    }

    // Reset success message after 10 seconds
    setTimeout(() => setIsSuccess(false), 10000);
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
      color: 'from-senoris-gold to-yellow-600',
    },
    {
      icon: Phone,
      label: t('info.phone'),
      value: '+221 77 483 05 01 ',
      color: 'from-senoris-gold to-yellow-600',
    },
    {
      icon: Mail,
      label: t('info.email'),
      value: 'Senoris2026@gmail.com',
      color: 'from-senoris-gold to-yellow-600',
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1THZQkQK6q/', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/senoris2026?igsh=MWxyNHZqZ2E0N285aQ==', label: 'Instagram' },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 relative overflow-hidden bg-white dark:bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white dark:bg-black"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
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
              <div className="absolute inset-0 bg-gold blur-2xl opacity-50"></div>
              <div className="relative p-4 bg-gold rounded-2xl">
                <Mail className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="bg-senoris-gold bg-clip-text text-transparent">
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
            <div className="absolute inset-0 bg-gradient-to-br from-senoris-cyan/5 to-senoris-gold/5 rounded-3xl blur-xl"></div>
            
            <div className="relative bg-gray-50 dark:bg-senoris-navy/50 backdrop-blur-xl rounded-3xl p-8 border-2 border-gray-200 dark:border-senoris-cyan/20 shadow-2xl overflow-hidden min-h-[400px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
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
                    className="w-full px-4 py-3 bg-white dark:bg-senoris-night/50 border-2 border-gray-200 dark:border-senoris-cyan/20 rounded-xl focus:border-senoris-cyan dark:focus:border-senoris-gold focus:outline-none transition-colors text-gray-900 dark:text-white"
                    placeholder="Diarra Dieng"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-white mb-2">
                    {t('form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-senoris-night/50 border-2 border-gray-200 dark:border-senoris-cyan/20 rounded-xl focus:border-senoris-cyan dark:focus:border-senoris-gold focus:outline-none transition-colors text-gray-900 dark:text-white"
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
                    className="w-full px-4 py-3 bg-white dark:bg-senoris-night/50 border-2 border-gray-200 dark:border-senoris-cyan/20 rounded-xl focus:border-senoris-cyan dark:focus:border-senoris-gold focus:outline-none transition-colors text-gray-900 dark:text-white"
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
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-senoris-night/50 border-2 border-gray-200 dark:border-senoris-cyan/20 rounded-xl focus:border-senoris-cyan dark:focus:border-senoris-gold focus:outline-none transition-colors text-gray-900 dark:text-white resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-gold text-white rounded-xl font-bold text-lg hover:shadow-gold-lg hover:scale-[1.02] transition-all duration-300 transform disabled:opacity-70 disabled:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>{t('form.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t('form.send')}</span>
                    </>
                  )}
                </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6 py-12"
                  >
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-senoris-gold blur-2xl opacity-20 animate-pulse"></div>
                      <div className="relative w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto shadow-gold">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.2 }}
                        >
                          <Send className="w-10 h-10 text-white" />
                        </motion.div>
                      </div>
                    </div>
                    <div className="space-y-2 text-center">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {t('form.success').split('!')[0]}!
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 max-w-xs mx-auto text-center leading-relaxed">
                        {t('form.success').split('!')[1]}
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="text-senoris-gold font-bold hover:underline transition-all block mx-auto"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 rounded-2xl blur-lg transition-opacity duration-300`}></div>
                  
                  <div className="relative bg-gray-50 dark:bg-senoris-navy/50 backdrop-blur-xl rounded-2xl p-6 border-2 border-gray-200 dark:border-senoris-cyan/20 group-hover:border-senoris-cyan dark:group-hover:border-senoris-gold transition-all duration-300 flex items-center space-x-4">
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
              
              <div className="relative bg-gray-50 dark:bg-senoris-navy/50 backdrop-blur-xl rounded-2xl p-8 border-2 border-gray-200 dark:border-senoris-cyan/20">
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
                      className="p-3 bg-gradient-gold rounded-xl text-white hover:shadow-lg transition-all duration-300"
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