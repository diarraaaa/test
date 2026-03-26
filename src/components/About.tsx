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
      color: 'from-senoris-gold to-yellow-600',
      bg:'gold',
    },
    {
      icon: Rocket,
      title: t('mission'),
      description: t('missionText'),
      color: 'from-senoris-gold to-yellow-600',
      bg:'gold',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden bg-white dark:bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-senoris-blue/5 to-white dark:from-black dark:via-senoris-navy/20 dark:to-black"></div>
      
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
            <div className="p-3 bg-gradient-gold rounded-2xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-slate-900 dark:bg-white bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          
          <p className="text-xl text-white dark:text-senoris-gold font-medium mb-4">
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
              <div className="absolute inset-0 bg-gradient-to-r from-senoris-cyan/5 to-senoris-gold/5 dark:from-senoris-cyan/3 dark:to-senoris-gold/3 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              
              <div className="relative bg-gray-50 dark:bg-senoris-navy/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-senoris-cyan/20 hover:border-senoris-cyan dark:hover:border-senoris-gold transition-all duration-300 hover:shadow-2xl">
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
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border-2 border-senoris-gold/10 dark:border-senoris-gold/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 border-2 border-senoris-cyan/10 dark:border-senoris-cyan/20 rounded-full animate-pulse delay-500"></div>
    </section>
  );
}