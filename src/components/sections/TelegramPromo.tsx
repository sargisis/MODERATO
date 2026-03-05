"use client"
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import mockData from '../../data/mockData.json';

export const TelegramPromo = () => {
  const telegramLink = mockData.navigation.contacts.telegram;

  return (
    <section className="py-16 md:py-20 bg-primary-bg border-y border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-bebas text-brand-gold text-xl tracking-[0.24em] uppercase mb-4 block">
            Телеграм‑бот «Афиша Moderato»
          </span>
          <p className="font-montserrat text-base md:text-lg text-white/80 mb-2">
            {mockData.telegramPromo.title}
          </p>
          <p className="font-montserrat text-lg md:text-xl text-white font-semibold mb-8">
            {mockData.telegramPromo.subtitle}
          </p>
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button
              variant="outline"
              className=""
            >
              {mockData.telegramPromo.buttonText}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

