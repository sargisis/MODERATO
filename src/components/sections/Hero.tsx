"use client"
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import mockData from '../../data/mockData.json';

export const Hero = () => {
    const scrollToSchedule = () => {
        const scheduleSection = document.getElementById('schedule');
        if (scheduleSection) {
            scheduleSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] z-15 mix-blend-overlay pointer-events-none" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105"
                    poster="/images/hero-poster.jpg"
                >
                    <source src={(mockData.hero as any).videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 w-full max-w-4xl mx-auto px-10 sm:px-12 lg:px-8 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="font-montserrat font-extrabold text-[2.2rem] sm:text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight sm:tracking-tighter leading-[1.1] sm:leading-[0.95] mb-10 text-white drop-shadow-2xl">
                        {mockData.hero.title}
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="font-montserrat text-sm sm:text-xl md:text-2xl lg:text-3xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed font-medium drop-shadow-md">
                        {mockData.hero.usps}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="flex flex-col items-center gap-4 mb-14">
                        <div className="w-12 h-[1px] bg-[#800020]"></div>
                        <p className="font-montserrat text-[10px] sm:text-xs text-brand-gold lowercase tracking-[0.4em] font-bold uppercase opacity-60">
                            {mockData.hero.subtitle}
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Button size="lg" onClick={scrollToSchedule}>
                        {mockData.hero.buttonText}
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent opacity-50" />
            </motion.div>
        </section>
    );
};
