"use client"
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Flame, Sun, ChefHat, Users } from 'lucide-react';

// 🔧 УПРАВЛЕНИЕ: чтобы скрыть баннер в несезон — поставьте false
const CAMP_ENABLED = true;

const features = [
    { icon: Sun, label: "Июнь — Август" },
    { icon: Users, label: "Дети 7–15 лет" },
    { icon: ChefHat, label: "Шефы-наставники" },
    { icon: Flame, label: "Ежедневные готовки" },
];

export const SummerCamp = () => {
    if (!CAMP_ENABLED) return null;

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="py-10 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1a0a00] via-[#2a1000] to-[#0a0a0a] border border-[#e36120]/20 p-8 md:p-14">

                    {/* Glow */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#e36120] opacity-10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[200px] bg-[#800020] opacity-10 rounded-full blur-[80px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-10 justify-between">

                        {/* Left */}
                        <div className="flex-1 max-w-2xl">
                            <div className="inline-flex items-center gap-2 bg-[#e36120]/10 border border-[#e36120]/30 text-[#e36120] font-montserrat text-xs uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-6">
                                <Sun size={14} />
                                Летний сезон
                            </div>
                            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl lg:text-5xl uppercase text-white leading-tight mb-4">
                                Детский<br />кулинарный лагерь
                            </h2>
                            <p className="font-montserrat text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                                Три недели летних приключений на профессиональной кухне Moderato. Дети готовят блюда со всего мира, участвуют в гастрономических квестах и уходят с настоящими кулинарными навыками.
                            </p>

                            {/* Features pills */}
                            <div className="flex flex-wrap gap-3 mb-10">
                                {features.map((feat, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-montserrat text-white/70">
                                        <feat.icon size={14} className="text-[#e36120]" />
                                        {feat.label}
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 flex-wrap">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center font-montserrat font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-xl bg-[#e36120] text-white hover:bg-[#c8501a] transition-all duration-300 cursor-pointer"
                                >
                                    Записать ребёнка
                                </a>
                                <a href="#" className="font-montserrat text-sm text-white/50 hover:text-white transition-colors uppercase tracking-wider">
                                    Узнать программу →
                                </a>
                            </div>
                        </div>

                        {/* Right — image */}
                        <div className="w-full lg:w-[380px] xl:w-[440px] shrink-0">
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                                <img
                                    src="/images/event-camp.jpg"
                                    alt="Детский кулинарный лагерь Moderato"
                                    className="w-full h-full object-cover brightness-90"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = '/images/food-1.jpg';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/10">
                                    <div className="font-montserrat text-xs text-white/50 uppercase tracking-wider mb-1">Стоимость смены</div>
                                    <div className="font-montserrat font-bold text-xl text-white">от 24 900 ₽</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </motion.section>
    );
};
