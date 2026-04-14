'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const navItems = [
  { key: 'home', href: '#hero', isExternal: false },
  { key: 'about', href: '#about', isExternal: false },
  { key: 'services', href: '#services', isExternal: false },
  { key: 'cv', href: 'https://cv.senoris.net', isExternal: true },
  { key: 'contact', href: '#contact', isExternal: false },
] as const;

export default function MainHeader() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const t = useTranslations('header');

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };



  return (
    <motion.header
      initial={{ y: -100, x: '-50%' }}
      animate={{ y: 0, x: '-50%' }}
      className={`fixed top-4 left-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 rounded-2xl ${
        scrolled
          ? 'bg-white/70 dark:bg-senoris-night/80 backdrop-blur-xl border border-senoris-gold/30 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,229,255,0.05)] py-2'
          : 'bg-white/5 dark:bg-transparent backdrop-blur-sm border border-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo - Version Dorée */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className={`relative transition-all duration-500 ${scrolled ? 'w-8 h-8' : 'w-10 h-10'}`}>
              <div className="absolute inset-0 bg-senoris-gold/30 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src="/WhatsApp Image 2026-02-11 at 20.17.00.jpeg"
                alt="Logo Senoris"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className={`font-display font-bold bg-gradient-to-r from-senoris-gold via-yellow-400 to-amber-500 bg-clip-text text-transparent transition-all duration-500 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
              Senoris
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`text-gray-700 dark:text-gray-300 hover:text-senoris-gold transition-colors font-medium relative group ${item.isExternal ? 'text-senoris-gold font-bold' : ''}`}
              >
                {t(`nav.${item.key}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-senoris-gold to-amber-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center space-x-2 md:space-x-4"
          >
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gradient-to-r from-senoris-gold/10 to-amber-500/10 dark:from-senoris-gold/5 dark:to-amber-500/5 hover:from-senoris-gold/20 hover:to-amber-500/20 border border-senoris-gold/20 transition-colors"
              aria-label={resolvedTheme === 'dark' ? t('theme.light') : t('theme.dark')}
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="w-5 h-5 text-senoris-gold" />
              ) : (
                <Moon className="w-5 h-5 text-senoris-gold" />
              )}
            </button>

            {/* Mobile Menu Toggle - Style doré */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gradient-to-r from-senoris-gold/10 to-amber-500/10 dark:from-senoris-gold/5 dark:to-amber-500/5 border border-senoris-gold/20"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? 
                <X className="w-6 h-6 text-senoris-gold" /> : 
                <Menu className="w-6 h-6 text-senoris-gold" />
              }
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col space-y-4 bg-white/95 dark:bg-black/95 backdrop-blur-lg rounded-lg border border-senoris-gold/20 p-6 shadow-2xl">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-700 dark:text-gray-300 hover:text-senoris-gold transition-colors font-medium py-2 border-b border-senoris-gold/10 dark:border-senoris-gold/20 last:border-0 group"
                  >
                    <span className="group-hover:bg-gradient-to-r group-hover:from-senoris-gold group-hover:to-amber-500 group-hover:bg-clip-text group-hover:text-transparent">
                      {t(`nav.${item.key}`)}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}