'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Smartphone, Shield, ArrowRight, Sparkles, Zap } from 'lucide-react';

export default function Services() {
  const t = useTranslations('services');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Code,
      key: 'web',
      features: ['E-commerce', 'Sites Vitrines', 'Portfolios', 'CV Interactifs'],
    },
    {
      icon: Smartphone,
      key: 'mobile',
      features: ['iOS & Android', 'Cross-platform', 'UI/UX Design', 'Performance'],
    },
    {
      icon: Shield,
      key: 'cyber',
      features: ['Audit Sécurité', 'Pentesting', 'Formation', 'Conformité'],
    },
  ];

  return (
    <section id="services" ref={ref} className="py-24 relative overflow-hidden bg-black">
      {/* Background - Noir profond */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-senoris-gold/5 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - Plus percutant */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Badge premium */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-senoris-gold/30 bg-senoris-gold/5 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-senoris-gold" />
            <span className="text-xs uppercase tracking-wider text-senoris-gold font-semibold">
              Services Premium
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
           
            <span className="bg-gradient-to-r from-senoris-gold via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card - Noir profond avec bordures dorées subtiles */}
              <div className="relative h-full bg-[#0A0A0A] rounded-3xl p-8 border border-white/5 group-hover:border-senoris-gold/30 transition-all duration-500 overflow-hidden">
                
                {/* Glow doré au hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-senoris-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Lignes de lumière */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-senoris-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-senoris-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon - Or pur */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mb-6"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-senoris-gold blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl"></div>
                    <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-senoris-gold/10 to-transparent border border-senoris-gold/30 rounded-2xl">
                      <service.icon className="w-8 h-8 text-senoris-gold" />
                    </div>
                  </div>
                </motion.div>

                {/* Title - Blanc pur, devient or au hover */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-senoris-gold group-hover:to-amber-400 group-hover:bg-clip-text transition-all duration-300">
                  {t(`${service.key}.title`)}
                </h3>

                {/* Description - Gris élégant */}
                <p className="text-gray-500 mb-6 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                  {t(`${service.key}.description`)}
                </p>

                {/* Features - Design épuré */}
                <div className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.2 + idx * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-1 h-1 bg-senoris-gold/70 rounded-full"></div>
                      <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA - Minimaliste */}
                <motion.button
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center space-x-2 text-sm font-medium text-senoris-gold/80 group-hover:text-senoris-gold transition-all duration-300 cursor-pointer"
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Principal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-senoris-gold to-amber-500 text-black font-bold text-lg rounded-2xl shadow-2xl shadow-senoris-gold/25 hover:shadow-senoris-gold/50 transition-all duration-300 hover:scale-105"
          >
            <span>Démarrer Votre Projet</span>
            <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Éléments flottants - Subtils */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-senoris-gold/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 border border-senoris-gold/10 rounded-full blur-2xl"></div>
    </section>
  );
}