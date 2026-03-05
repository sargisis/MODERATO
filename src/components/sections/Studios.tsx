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
    <section className="py-24 md:py-32 bg-primary-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <span className="font-bebas text-brand-gold text-2xl tracking-[0.2em] mb-3 block">
            Инфраструктура
          </span>
          <h2 className="font-montserrat font-bold text-3xl md:text-5xl uppercase text-white mb-6">
            {mockData.studios.title}
          </h2>
          <p className="font-montserrat text-white/70 text-base md:text-lg">
            {mockData.studios.subtitle}
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {mockData.studios.highlights.map((item: string, idx: number) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-white/5 border border-white/5 px-5 py-4 md:px-6 md:py-5"
            >
              <div className="mt-1 w-8 h-8 rounded-full border border-brand-gold/60 flex items-center justify-center flex-shrink-0">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
              </div>
              <p className="font-montserrat text-sm md:text-base text-white/80">{item}</p>
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
              className="group bg-white/5 border border-white/5 hover:border-brand-gold/60 transition-all duration-500 overflow-hidden flex flex-col"
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
                <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 font-bebas text-lg tracking-[0.18em]">
                  Студия {studio.code}
                </div>
              </div>

              <div className="p-7 md:p-8 flex flex-col gap-4 flex-1">
                <h3 className="font-montserrat font-bold text-2xl uppercase text-white mb-2">
                  {studio.name}
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm font-montserrat text-white/70 mb-3">
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-[0.18em]">
                      Площадь
                    </div>
                    <div>{studio.area}</div>
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-[0.18em]">
                      Вместимость
                    </div>
                    <div>{studio.capacity}</div>
                  </div>
                </div>
                <p className="font-montserrat text-sm md:text-base text-white/80 mb-4">
                  {studio.layout}
                </p>

                <div className="mt-auto flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveStudio(studio)}
                    className="!border-brand-gold !text-brand-gold hover:!bg-brand-gold hover:!text-primary-bg"
                  >
                    Смотреть фото
                  </Button>
                  <Button
                    size="sm"
                    className="!bg-brand-gold !text-black hover:!bg-white hover:!text-black"
                  >
                    {mockData.studios.ctaText}
                  </Button>
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

