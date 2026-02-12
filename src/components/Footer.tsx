'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image'; // Ajouter l'import Image

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1THZQkQK6q/', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/senoris2026?igsh=MWxyNHZqZ2E0N285aQ==', label: 'Instagram' },
  ];

  const quickLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'À Propos', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-blue text-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-gold rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                {/* Logo du groupe - remplace le "S" */}
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 bg-gradient-gold rounded-2xl blur-xl opacity-60"></div>
                  <div className="relative w-full h-full bg-image-/WhatsApp Image 2026-02-11 at 20.17.00.jpeg rounded-2xl p-2 shadow-2xl flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src="/WhatsApp Image 2026-02-11 at 20.17.00.jpeg" // Remplacez par le chemin de votre logo de groupe
                        alt="Groupe Senoris"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <span className="text-3xl font-display font-bold bg-gradient-gold bg-clip-text text-transparent">
                  Senoris
                </span>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('description')}
              </p>

              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-senoris-gold" />
                  <span>Dakar, Sénégal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-senoris-gold" />
                  <span>+221 77 483 05 01</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-senoris-gold" />
                  <span>Senoris2026@gmail.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-senoris-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
              {t('followUs')}
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-gradient-gold transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter (Optional) */}
            <div className="mt-8">
              <p className="text-sm text-gray-400 mb-3">
                Inscrivez-vous à notre newsletter
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-lg focus:outline-none focus:border-senoris-gold text-white placeholder-gray-400 text-sm"
                />
                <button className="px-4 py-2 bg-gradient-gold rounded-r-lg hover:shadow-lg transition-all duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Groupe Senoris. {t('rights')}
            </p>

            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-senoris-gold transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-senoris-gold transition-colors">
                Conditions d'utilisation
              </a>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center mt-6">
            <p className="text-sm font-medium bg-gradient-gold bg-clip-text text-transparent">
              INGENIUM. SECURITAS. FUTURUM.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold"></div>
    </footer>
  );
}