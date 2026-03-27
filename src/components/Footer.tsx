'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, ChevronUp, ExternalLink } from 'lucide-react';
import { TikTokIcon } from './TikTokIcon';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');
  const navT = useTranslations('header.nav');
  const currentYear = new Date().getFullYear();

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subSuccess, setSubSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setIsSubscribing(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const data = await response.json();
      if (data.success) {
        setSubSuccess(true);
        setNewsletterEmail('');
        setTimeout(() => setSubSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsSubscribing(false);
    }
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1THZQkQK6q/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/senoris2026?igsh=MWxyNHZqZ2E0N285aQ==', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/senoris', label: 'LinkedIn' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@senoris2026', label: 'TikTok' },
  ];

  const quickLinks = [
    { key: 'home', href: '#hero' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-senoris-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-senoris-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand - Focus on Professionalism */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 bg-white rounded-xl p-2 shadow-2xl flex items-center justify-center transform rotate-3">
                <Image
                  src="/WhatsApp Image 2026-02-11 at 20.17.00.jpeg"
                  alt="Senoris"
                  fill
                  className="object-contain p-1.5"
                />
              </div>
              <span className="text-3xl font-display font-bold tracking-tighter">
                Senoris<span className="text-senoris-gold">.</span>
              </span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {t('description')}
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: '#d4af37' }}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 hover:border-senoris-gold/30 hover:bg-senoris-gold/5"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:pl-8">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-senoris-gold mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {navT(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">
              Contact
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-senoris-gold shrink-0 border border-white/10 group-hover:border-senoris-gold/30 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <p className="text-white font-medium mb-1">Dakar, Sénégal</p>
                  <p className="text-gray-400">HLM Grand Médine</p>
                </div>
              </li>
              <li className="flex items-start space-x-4 group">
                <a 
                  href="https://wa.me/221774830501" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 w-full"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-senoris-gold shrink-0 border border-white/10 group-hover:border-senoris-gold/30 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-sm">
                    <p className="text-white font-medium mb-1 group-hover:text-senoris-gold transition-colors">+221 77 483 05 01</p>
                    <p className="text-gray-400">WhatsApp / Direct</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start space-x-4 group">
                <a 
                  href="mailto:Senoris2026@gmail.com"
                  className="flex items-start space-x-4 w-full"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-senoris-gold shrink-0 border border-white/10 group-hover:border-senoris-gold/30 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-sm">
                    <p className="text-white font-medium mb-1 group-hover:text-senoris-gold transition-colors text-xs md:text-sm">Senoris2026@gmail.com</p>
                    <p className="text-gray-400">Support / Contact</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-8">
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">
                {t('newsletter.title')}
              </h4>
              <p className="text-gray-400 text-sm mb-6">
                Restez informé de nos dernières innovations et actualités tech.
              </p>
              <form onSubmit={handleSubscribe} className="relative group">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={t('newsletter.placeholder')}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-24 text-sm focus:outline-none focus:border-senoris-gold/50 transition-all duration-300 placeholder:text-gray-600"
                />
                <button 
                  type="submit"
                  disabled={isSubscribing || subSuccess}
                  className="absolute right-1 top-1 bottom-1 px-4 bg-senoris-gold text-black rounded-lg text-xs font-bold hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubscribing ? (
                    <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                  ) : subSuccess ? (
                    "✓"
                  ) : (
                    t('newsletter.button')
                  )}
                </button>
              </form>
              {subSuccess && (
                <p className="text-senoris-gold text-[10px] mt-2 animate-bounce">
                  C'est fait ! Merci de nous suivre.
                </p>
              )}
            </div>
            
            {/* Scroll to Top inside footer */}
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-xs font-bold text-gray-400 hover:text-white transition-colors duration-300 group uppercase"
            >
              <span>{t('rights').split('.')[0]}</span>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-senoris-gold transition-colors">
                <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <p className="text-gray-500 text-xs tracking-wide">
              &copy; {currentYear} Senoris Group. {t('rights')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-senoris-gold transition-colors text-xs uppercase tracking-widest">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-senoris-gold transition-colors text-xs uppercase tracking-widest">Terms</a>
            </div>
          </div>
          
          <div className="text-gray-600 flex items-center space-x-2 text-xs font-display">
            <span className="w-2 h-2 rounded-full bg-senoris-cyan animate-pulse"></span>
            <span className="uppercase tracking-[0.2em]">Crafting the future of Senegal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}