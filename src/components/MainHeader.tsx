'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Menu, Moon, Sun, X, Globe } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useLanguage } from './Providers';

const navItems = [
  { key: 'home', href: '#hero' },
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'contact', href: '#contact' },
] as const;

export default function MainHeader() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTranslations('header');
  const { locale, setLocale } = useLanguage();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleLocale = () => {
    setLocale(locale === 'fr' ? 'en' : 'fr');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-blue/80 dark:bg-senoris-night/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3"
          >
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-senoris rounded-lg opacity-40 blur-lg" />
              <Image
                src="/Gemini_Generated_Image_5lmx2f5lmx2f5lmx.png"
                alt="Logo Senoris"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-display font-bold bg-gradient-senoris bg-clip-text text-transparent">
              Senoris
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-gray-700 dark:text-gray-300 hover:text-senoris-cyan dark:hover:text-senoris-cyan transition-colors font-medium relative group"
              >
                {t(`nav.${item.key}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-senoris group-hover:w-full transition-all duration-300" />
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
            {/* Language Toggle */}
            <button
              onClick={toggleLocale}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-blue dark:bg-senoris-navy/50 hover:bg-gray-200 dark:hover:bg-senoris-navy transition-colors text-sm font-medium"
              aria-label={t('language.label')}
            >
              <Globe className="w-4 h-4" />
              <span>{locale === 'fr' ? 'FR' : 'EN'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-blue dark:bg-senoris-navy/50 hover:bg-gray-200 dark:hover:bg-senoris-navy transition-colors"
              aria-label={theme === 'dark' ? t('theme.light') : t('theme.dark')}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-senoris-gold" />
              ) : (
                <Moon className="w-5 h-5 text-senoris-navy" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-senoris-navy/50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              <div className="flex flex-col space-y-4 bg-white/90 dark:bg-senoris-navy/90 backdrop-blur-lg rounded-lg p-6">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-700 dark:text-gray-300 hover:text-senoris-cyan dark:hover:text-senoris-cyan transition-colors font-medium py-2 border-b border-gray-200 dark:border-gray-700 last:border-0"
                  >
                    {t(`nav.${item.key}`)}
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

