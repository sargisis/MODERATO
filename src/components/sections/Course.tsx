"use client"
import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import mockData from '../../data/mockData.json';

export const Course = () => {
    return (
        <section className="py-24 md:py-32 bg-primary-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center mb-16 text-center">
                    <span className="font-montserrat text-brand-gold text-lg mb-4 lowercase tracking-wider">
                        учеба и развитие
                    </span>
                    <h2 className="font-montserrat font-bold text-3xl md:text-5xl uppercase text-white mb-6">
                        {mockData.courses.title}
                    </h2>
                    <div className="w-16 h-[2px] bg-[#800020]"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                    {mockData.courses.items.map((course, idx) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-gold/60 transition-all duration-500 group flex flex-col h-full"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img
                                    src={course.imageUrl}
                                    alt={course.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>

                            <div className="p-8 md:p-10 flex flex-col flex-1">
                                <h3 className="font-montserrat font-bold text-2xl md:text-3xl uppercase text-white mb-4">
                                    {course.title}
                                </h3>
                                <p className="font-montserrat text-white/80 text-base leading-relaxed mb-8 flex-1">
                                    {course.description}
                                </p>
                                <div>
                                    <Button className="w-full md:w-auto">
                                        {course.buttonText}
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
