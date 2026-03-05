"use client"
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import mockData from '../../data/mockData.json';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

type Review = (typeof mockData.reviews)[number];

export const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerScreen, setItemsPerScreen] = useState(1);
  const reviews = mockData.reviews as Review[];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerScreen(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerScreen(2);
      } else {
        setItemsPerScreen(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - itemsPerScreen);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const getPreviewText = (text: string, id: number) => {
    if (expandedId === id) return text;
    if (text.length <= 180) return text;
    return text.slice(0, 180) + '…';
  };

  return (
    <section className="py-24 md:py-32 bg-primary-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="font-bebas text-brand-gold text-2xl tracking-[0.2em] mb-3 block">
              Отзывы
            </span>
            <h2 className="font-montserrat font-bold text-3xl md:text-5xl uppercase text-white">
              Что говорят гости
            </h2>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-11 h-11 border border-white/20 flex items-center justify-center text-white hover:bg-accent-orange hover:border-accent-orange hover:text-white transition-all rounded-full disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white disabled:cursor-not-allowed"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="w-11 h-11 border border-white/20 flex items-center justify-center text-white hover:bg-accent-orange hover:border-accent-orange hover:text-white transition-all rounded-full disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white disabled:cursor-not-allowed"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * (100 / itemsPerScreen)}%` }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 px-3 md:px-4"
                style={{ width: `${100 / itemsPerScreen}%` }}
              >
                <article className="h-full bg-white/5 border border-white/5 hover:border-brand-gold/60 transition-colors duration-500 p-6 md:p-7 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-bebas text-brand-gold text-xl tracking-[0.2em] uppercase">
                        {review.name}
                      </div>
                      <div className="text-white/50 text-xs font-montserrat mt-1">
                        {review.date}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < review.rating ? 'text-brand-gold' : 'text-white/20'
                          }
                          fill={i < review.rating ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    className="text-left mb-3 font-montserrat text-sm md:text-base text-white hover:text-brand-gold transition-colors"
                  >
                    {review.workshopTitle}
                  </button>

                  <p className="font-montserrat text-sm md:text-base text-white/80 flex-1">
                    {getPreviewText(review.text, review.id)}
                  </p>

                  <button
                    onClick={() =>
                      setExpandedId((prev) => (prev === review.id ? null : review.id))
                    }
                    className="mt-4 text-xs font-montserrat uppercase tracking-[0.18em] text-white/60 hover:text-brand-gold transition-colors self-start"
                  >
                    {expandedId === review.id ? 'Свернуть' : 'Читать полностью'}
                  </button>
                </article>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

