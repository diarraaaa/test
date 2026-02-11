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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-senoris-navy/70 to-black">
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-senoris-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-senoris-gold/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-senoris-cyan/10 dark:border-senoris-cyan/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-senoris-gold/10 dark:border-senoris-gold/30 rounded-full"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated SENORIS Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 flex justify-center"
          >
            <div className="relative inline-flex items-center">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-senoris blur-3xl opacity-50 animate-pulse"></div>
              
              {/* Letters */}
              <div className="relative flex space-x-1 md:space-x-2">
                {letters.map((letter, index) => (
                  <motion.div
                    key={index}
                    variants={letterVariants as unknown as  Variants}
                    className="relative"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Letter Glow */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(0, 229, 255, 0.5)',
                          '0 0 40px rgba(212, 175, 55, 0.8)',
                          '0 0 20px rgba(0, 229, 255, 0.5)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className="absolute inset-0 rounded-xl blur-sm"
                    ></motion.div>

                    {/* Letter */}
                    <span className="relative text-6xl md:text-8xl font-display font-black bg-gradient-to-br from-senoris-cyan via-white to-senoris-gold bg-clip-text text-transparent drop-shadow-2xl">
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
                className="absolute -top-8 -left-8 w-16 h-16 border-2 border-senoris-cyan/30 rounded-full"
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
                className="absolute -bottom-8 -right-8 w-20 h-20 border-2 border-senoris-gold/30 rounded-full"
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
            <p className="text-sm md:text-base font-medium text-senoris-gold tracking-widest uppercase">
              {t('title')}
            </p>
            <Sparkles className="w-4 h-4 text-senoris-gold" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <span className="bg-gradient-to-r from-senoris-cyan via-senoris-navy to-senoris-gold bg-clip-text text-transparent">
              {t('subtitle')}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
          >
            {t('description')}
          </motion.p>

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
              className="group relative px-8 py-3.5 bg-gradient-senoris text-white rounded-xl font-semibold text-base shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>{t('cta')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>

            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group px-8 py-3.5 border-2 border-senoris-cyan text-senoris-cyan rounded-xl font-semibold text-base hover:bg-senoris-cyan/10 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <span className="flex items-center space-x-2">
                <span>{t('contact')}</span>
              </span>
            </button>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-10 animate-bounce delay-100">
            <div className="w-4 h-4 bg-senoris-cyan rounded-full shadow-lg"></div>
          </div>
          <div className="absolute top-1/3 right-20 animate-bounce delay-300">
            <div className="w-6 h-6 bg-senoris-gold rounded-full shadow-lg"></div>
          </div>
          <div className="absolute bottom-1/4 left-1/4 animate-bounce delay-500">
            <div className="w-3 h-3 bg-senoris-cyan rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-senoris-cyan rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-senoris-cyan rounded-full mt-2"
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}