'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, ExternalLink, ArrowRight, Layout, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const t = useTranslations('projects');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      id: 'cv-generator',
      key: 'cv_generator',
      icon: FileText,
      link: 'https://cv.senoris.net',
      tags: ['SaaS', 'Next.js', 'PDF Engine'],
      color: 'from-blue-500/20 to-senoris-gold/20',
    },
    // On pourrait ajouter d'autres projets ici plus tard
  ];

  return (
    <section id="projects" ref={ref} className="py-24 bg-gray-50 dark:bg-[#050505] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-senoris-gold/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-senoris-gold/20 bg-senoris-gold/5 mb-4">
            <Layout className="w-3.5 h-3.5 text-senoris-gold" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-senoris-gold font-bold">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 dark:text-white">
            {t('title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] border border-gray-200 dark:border-white/5 bg-white dark:bg-[#0A0A0A] p-1 shadow-xl">
                <div className="flex flex-col md:flex-row items-stretch min-h-[400px]">
                  {/* Visual Part */}
                  <div className={`md:w-1/2 relative overflow-hidden bg-gradient-to-br ${project.color} flex items-center justify-center p-12`}>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full aspect-[4/3] bg-white dark:bg-black rounded-xl shadow-2xl border border-white/10 overflow-hidden"
                    >
                      {/* Fake UI Representation */}
                      <div className="absolute inset-0 p-4 space-y-3">
                        <div className="h-4 w-1/3 bg-gray-100 dark:bg-white/10 rounded-full"></div>
                        <div className="flex space-x-4">
                           <div className="h-32 w-2/3 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/10"></div>
                           <div className="h-32 w-1/3 bg-gray-50 dark:bg-senoris-gold/10 rounded-lg border border-senoris-gold/20"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 pt-4">
                           {[1,2,3,4,5,6].map(i => (
                             <div key={i} className="h-12 bg-gray-50 dark:bg-white/5 rounded-md"></div>
                           ))}
                        </div>
                      </div>
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white text-black p-4 rounded-full shadow-xl"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Part */}
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-3xl font-bold mb-4 dark:text-white group-hover:text-senoris-gold transition-colors">
                      {t(`${project.key}.title`)}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                      {t(`${project.key}.description`)}
                    </p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 text-senoris-gold font-bold group/btn"
                    >
                      <span>{t(`${project.key}.cta`)}</span>
                      <div className="w-8 h-8 rounded-full border border-senoris-gold/30 flex items-center justify-center group-hover/btn:bg-senoris-gold group-hover/btn:text-black transition-all">
                        <ArrowRight className="w-4 h-4 ml-0.5" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
