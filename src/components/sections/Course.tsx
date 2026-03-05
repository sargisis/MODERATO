"use client"
import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import mockData from '../../data/mockData.json';

export const Course = () => {
    return (
        <section className="py-24 md:py-32 bg-primary-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
                            <img
                                src={mockData.premiumCourse.imageUrl}
                                alt={mockData.premiumCourse.title}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-brand-gold/30 -z-10 hidden md:block" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-olive/10 -z-10 hidden md:block" />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <span className="font-bebas text-brand-gold text-2xl tracking-widest mb-4">
                            Премиальное направление
                        </span>
                        <h2 className="font-montserrat font-bold text-3xl md:text-5xl uppercase leading-tight mb-8 text-white">
                            {mockData.premiumCourse.title}
                        </h2>
                        <p className="font-montserrat text-white/80 text-lg leading-relaxed mb-10">
                            {mockData.premiumCourse.description}
                        </p>
                        <div>
                            <Button>
                                {mockData.premiumCourse.buttonText}
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
