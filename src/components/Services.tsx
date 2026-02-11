'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Smartphone, Shield, ArrowRight } from 'lucide-react';

export default function Services() {
  const t = useTranslations('services');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Code,
      key: 'web',
      gradient: 'from-blue-500 via-senoris-cyan to-teal-500',
      bgGradient: 'from-blue-500/10 to-senoris-cyan/10',
      features: ['E-commerce', 'Sites Vitrines', 'Portfolios', 'CV Interactifs'],
    },
    {
      icon: Smartphone,
      key: 'mobile',
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      features: ['iOS & Android', 'Cross-platform', 'UI/UX Design', 'Performance'],
    },
    {
      icon: Shield,
      key: 'cyber',
      gradient: 'from-senoris-gold via-orange-500 to-red-500',
      bgGradient: 'from-senoris-gold/10 to-orange-500/10',
      features: ['Audit Sécurité', 'Pentesting', 'Formation', 'Conformité'],
    },
  ];

  return (
    <section id="services" ref={ref} className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-senoris-navy/60 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: 'spring' }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-senoris blur-2xl opacity-50"></div>
              <div className="relative p-4 bg-gradient-senoris rounded-2xl">
                <Code className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-senoris-cyan via-senoris-navy to-senoris-gold bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>

              {/* Card */}
              <div className="relative h-full bg-black/40 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/10 group-hover:border-transparent transition-all duration-500 overflow-hidden">
                {/* Animated Border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                <div className="absolute inset-[2px] bg-black/80 backdrop-blur-xl rounded-3xl -z-10"></div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="mb-6"
                >
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-senoris-cyan group-hover:to-senoris-gold group-hover:bg-clip-text transition-all duration-300">
                  {t(`${service.key}.title`)}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {t(`${service.key}.description`)}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + idx * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-senoris-cyan to-senoris-gold rounded-full"></div>
                      <span className="text-sm text-gray-400 font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-senoris-cyan group-hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-senoris-cyan/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-senoris-gold/10 to-transparent rounded-full blur-3xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
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
            className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-senoris text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-senoris-cyan/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
          >
            <span>Démarrer Votre Projet</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-40 right-20 w-20 h-20 bg-senoris-cyan/20 rounded-2xl rotate-12 blur-sm"
      ></motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-40 left-20 w-16 h-16 bg-senoris-gold/20 rounded-2xl -rotate-12 blur-sm"
      ></motion.div>
    </section>
  );
}