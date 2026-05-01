"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import mockData from '../../data/mockData.json';
import { X } from 'lucide-react';
import { Button } from '../ui/button';

type StudioCard = (typeof mockData.studios.cards)[number];

export const Studios = () => {
  const [activeStudio, setActiveStudio] = useState<StudioCard | null>(null);

  return (
    <section id="studios" className="py-24 md:py-32 bg-primary-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <span className="font-montserrat text-brand-gold text-lg mb-3 block lowercase tracking-wider">
            инфраструктура
          </span>
          <h2 className="font-montserrat font-bold text-3xl md:text-5xl uppercase text-white mb-6">
            {mockData.studios.title}
          </h2>
          <div className="w-16 h-[2px] bg-[#800020] mb-6"></div>
          <p className="font-montserrat text-white/70 text-base md:text-lg">
            {mockData.studios.subtitle}
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
          {mockData.studios.highlights.map((item: string, idx: number) => (
            <div
              key={idx}
              className="flex items-start gap-4"
            >
              <div className="mt-1 w-6 h-6 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0">
                <span className="w-1 h-1 bg-white/70 rounded-full" />
              </div>
              <p className="font-montserrat text-sm md:text-base text-white/60">{item}</p>
            </div>
          ))}
        </div>

        {/* Studio cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {mockData.studios.cards.map((studio: StudioCard) => (
            <motion.article
              key={studio.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-white/[0.02] border border-white/5 rounded-3xl hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col backdrop-blur-sm"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                onClick={() => setActiveStudio(studio)}
              >
                <img
                  src={studio.imageUrl}
                  alt={studio.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md text-white px-4 py-1.5 rounded-full font-bebas text-lg tracking-[0.18em] border border-white/10 z-10">
                  Студия {studio.code}
                </div>
              </div>

              <div className="p-7 md:p-8 flex flex-col gap-4 flex-1">
                <h3 className="font-montserrat font-bold text-xl md:text-2xl uppercase text-white mb-6 tracking-tight">
                  {studio.name}
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm font-montserrat text-white/60">
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-widest mb-1">
                      Площадь
                    </div>
                    <div className="text-white/80">{studio.area}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-widest mb-1">
                      Вместимость
                    </div>
                    <div className="text-white/80">{studio.capacity}</div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal with studio photo */}
      <AnimatePresence>
        {activeStudio && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/70 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveStudio(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full bg-primary-bg border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveStudio(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:bg-black"
              >
                <X size={20} />
              </button>
              <div className="aspect-video overflow-hidden">
                <img
                  src={activeStudio.imageUrl}
                  alt={activeStudio.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="font-montserrat font-bold text-xl md:text-2xl uppercase text-white mb-2">
                  {activeStudio.name}
                </h3>
                <p className="font-montserrat text-sm md:text-base text-white/80">
                  {activeStudio.area} · {activeStudio.capacity} · {activeStudio.layout}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

