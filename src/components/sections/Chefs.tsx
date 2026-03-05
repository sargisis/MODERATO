"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import mockData from '../../data/mockData.json';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Chefs = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerScreen, setItemsPerScreen] = useState(1);
    const chefs = mockData.chefs;

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

    const maxIndex = Math.max(0, chefs.length - itemsPerScreen);

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    return (
        <section className="py-24 md:py-32 bg-primary-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-16">
                    <h2 className="font-montserrat font-bold text-3xl md:text-5xl uppercase text-white">
                        НАШИ ШЕФЫ
                    </h2>
                    <div className="flex space-x-4">
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-accent-orange hover:border-accent-orange hover:text-white transition-all rounded-full disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white disabled:cursor-not-allowed"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={currentIndex === maxIndex}
                            className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-accent-orange hover:border-accent-orange hover:text-white transition-all rounded-full disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white disabled:cursor-not-allowed"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="relative overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{ x: `-${currentIndex * (100 / itemsPerScreen)}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {chefs.map((chef: any) => (
                            <div
                                key={chef.id}
                                className="flex-shrink-0 px-4"
                                style={{ width: `${100 / itemsPerScreen}%` }}
                            >
                                <div className="group relative cursor-pointer">
                                    <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                        <img
                                            src={chef.imageUrl}
                                            alt={chef.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            referrerPolicy="no-referrer"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="font-bebas text-accent-orange text-xl mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            {chef.regalia}
                                        </div>
                                        <h3 className="font-montserrat font-bold text-2xl uppercase text-white mb-2">
                                            {chef.name}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
