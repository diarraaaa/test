'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Rocket, Shield, Zap } from 'lucide-react';

export default function About() {
  const t = useTranslations('about');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Target,
      title: t('vision'),
      description: t('visionText'),
      color: 'from-senoris-cyan to-blue-600',
    },
    {
      icon: Rocket,
      title: t('mission'),
      description: t('missionText'),
      color: 'from-senoris-gold to-yellow-600',
    },
  ];

  const stats = [
    { value: '50+', label: 'Projets Réalisés' },
    { value: '30+', label: 'Clients Satisfaits' },
    { value: '5+', label: 'Années d\'Expérience' },
    { value: '100%', label: 'Engagement Qualité' },
  ];

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-senoris-navy/40 to-black"></div>
      
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
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="p-3 bg-gradient-senoris rounded-2xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-senoris-cyan to-senoris-gold bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          
          <p className="text-xl text-senoris-gold dark:text-senoris-gold font-medium mb-4">
            {t('subtitle')}
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-senoris-cyan/20 to-senoris-gold/20 dark:from-senoris-cyan/10 dark:to-senoris-gold/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              
              <div className="relative bg-blue dark:bg-senoris-navy/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-senoris-cyan/20 hover:border-senoris-cyan dark:hover:border-senoris-gold transition-all duration-300 hover:shadow-2xl">
                <div className={`inline-block p-4 bg-gradient-to-br ${feature.color} rounded-xl mb-6 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-senoris-cyan dark:border-senoris-gold rounded-tr-2xl opacity-20"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-senoris rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="relative bg-white dark:bg-senoris-navy/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-senoris-cyan/20 text-center hover:border-senoris-cyan dark:hover:border-senoris-gold transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-senoris bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border-2 border-senoris-gold/20 dark:border-senoris-gold/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 border-2 border-senoris-cyan/20 dark:border-senoris-cyan/30 rounded-full animate-pulse delay-500"></div>
    </section>
  );
}