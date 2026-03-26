'use client';

import { useTranslations } from 'next-intl';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');

  const letters = "SENORIS".split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-white dark:bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-senoris-cyan/5 to-white dark:from-black dark:via-senoris-navy/50 dark:to-black">
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-senoris-cyan/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-senoris-gold/20 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-senoris-cyan/10 dark:border-senoris-cyan/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-senoris-gold/10 dark:border-senoris-gold/30 rounded-full"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated SENORIS Text - Style Logo */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 flex justify-center"
          >
            <div className="relative inline-flex items-center">
              {/* Letters avec couleur or simple */}
              <div className="relative flex space-x-1 md:space-x-3 tracking-wider">
                {letters.map((letter, index) => (
                  <motion.div
                    key={index}
                    variants={letterVariants as unknown as Variants}
                    className="relative"
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Letter avec couleur or unie */}
                    <span 
                      className="relative text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-wider"
                      style={{
                        color: '#d4af37',
                      }}
                    >
                      {letter}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -top-12 -left-12 w-20 h-20 border-2 border-senoris-gold/40 rounded-full"
              ></motion.div>

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -bottom-12 -right-12 w-24 h-24 border-2 border-senoris-gold/40 rounded-full"
              ></motion.div>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mb-6 flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-4 h-4 text-senoris-gold" />
            <p className="text-sm md:text-base font-medium tracking-widest uppercase text-senoris-gold">
              {t('title')}
            </p>
            <Sparkles className="w-4 h-4 text-senoris-gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-800 dark:text-white"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {t('subtitle')}
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative px-8 py-3.5 rounded-xl font-semibold text-base shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer"
              style={{
                background: '#d4af37',
                color: '#1a1a1a',
              }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>{t('cta')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>

            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group px-8 py-3.5 border-2 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                borderColor: '#d4af37',
                color: '#d4af37',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <span className="flex items-center space-x-2">
                <span>{t('contact')}</span>
              </span>
            </button>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-10 animate-bounce delay-100">
            <div className="w-4 h-4 bg-senoris-gold rounded-full shadow-lg"></div>
          </div>
          <div className="absolute top-1/3 right-20 animate-bounce delay-300">
            <div className="w-6 h-6 bg-senoris-gold rounded-full shadow-lg"></div>
          </div>
          <div className="absolute bottom-1/4 left-1/4 animate-bounce delay-500">
            <div className="w-3 h-3 bg-senoris-gold rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-6 h-10 rounded-full border border-senoris-gold/30 dark:border-senoris-gold/50 flex items-start justify-center p-1 group-hover:border-senoris-gold transition-colors duration-500 overflow-hidden shadow-lg">
            {/* The Dot */}
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1.5 h-1.5 bg-senoris-gold rounded-full shadow-[0_0_8px_#d4af37]"
            />
            
            {/* Inner Glow Line */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-senoris-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          <motion.div 
            animate={{ 
              opacity: [0.4, 0.8, 0.4],
              y: [0, 2, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-[10px] font-display text-senoris-gold tracking-[0.3em] font-bold uppercase transition-transform group-hover:scale-110"
          >
            Scroll
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}