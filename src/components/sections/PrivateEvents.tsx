"use client"
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const events = [
    {
        id: 1,
        tag: "Бизнес",
        title: "Корпоративы",
        description: "Тимбилдинг и партнёрские мероприятия для команды до 70 человек. Кулинарные соревнования, мастер-классы от шефов и гастрономические ужины.",
        cta: "Забронировать",
        imageUrl: "/images/food-2.jpg",
        accent: "#e36120",
    },
    {
        id: 2,
        tag: "Дети",
        title: "Детские праздники",
        description: "Дни рождения с мастер-классами от шеф-повара. Дети готовят, пробуют и уносят домой свои шедевры — незабываемые впечатления гарантированы.",
        cta: "Организовать",
        imageUrl: "/images/food-3.jpg",
        accent: "#c09e6a",
    },
    {
        id: 3,
        tag: "Личное",
        title: "Личные праздники",
        description: "Юбилеи, романтические ужины, девичники в необычном гастрономическом формате. Программа, меню и атмосфера — всё под ваш запрос.",
        cta: "Подробнее",
        imageUrl: "/images/food-4.jpg",
        accent: "#ffffff",
    },
    {
        id: 4,
        tag: "Свадьба",
        title: "Свадьбы",
        description: "Свадьба в гастрономическом стиле «под ключ». Брифинг, концепция, шеф, меню, декор, сервис — всё в одном месте в центре Екатеринбурга.",
        cta: "Узнать",
        imageUrl: "/images/food-5.jpg",
        accent: "#9e8e70",
    },
];

export const PrivateEvents = () => {
    return (
        <section id="private-events" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col items-start mb-14">
                    <span className="font-montserrat text-white/40 text-sm uppercase tracking-[0.4em] mb-4">
                        Частные мероприятия
                    </span>
                    <h2 className="font-montserrat font-bold text-3xl md:text-5xl uppercase text-white leading-tight mb-6">
                        Твои события<br className="hidden md:block" /> в студии
                    </h2>
                    <div className="w-16 h-[2px] bg-[#800020]" />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                    {events.map((event, idx) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative overflow-hidden rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all duration-500 flex flex-col"
                        >
                            {/* Image */}
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img
                                    src={event.imageUrl}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Tag */}
                                <div className="absolute top-4 left-4">
                                    <span className="font-montserrat text-xs uppercase tracking-[0.2em] text-white/70 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                                        {event.tag}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="font-montserrat font-bold text-xl uppercase text-white mb-3 group-hover:text-white transition-colors">
                                    {event.title}
                                </h3>
                                <p className="font-montserrat text-sm text-white/50 leading-relaxed mb-6 flex-1">
                                    {event.description}
                                </p>
                                <button className="flex items-center gap-2 text-sm font-montserrat font-bold uppercase tracking-wider text-white/70 hover:text-white transition-all group/btn">
                                    {event.cta}
                                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
