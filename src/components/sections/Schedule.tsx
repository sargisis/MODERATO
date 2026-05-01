"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from "../ui/button"
import mockData from '../../data/mockData.json';

export const Schedule = () => {
    const [activeMonth, setActiveMonth] = useState(mockData.schedule.months[0]);

    const filteredEvents = mockData.schedule.events.filter(
        (event: any) => event.month === activeMonth
    );

    const handleBooking = (eventName: string) => {
        console.log(`Booking requested for: ${eventName}`);
        const widgetContainer = document.getElementById('yclients_widget');
        if (widgetContainer) {
            widgetContainer.innerHTML = `<div class="p-4 bg-white text-black">YCLIENTS Widget Placeholder for ${eventName}</div>`;
        }
    };

    return (
        <section id="schedule" className="py-16 md:py-32 bg-primary-bg relative scroll-mt-24 overflow-hidden z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 lg:mb-14 text-center">
                    <div className="flex flex-col items-center mb-8">
                        <h2 className="font-montserrat font-bold text-3xl md:text-5xl uppercase text-white leading-tight mb-6">
                            РАСПИСАНИЕ МАСТЕР-КЛАССОВ
                        </h2>
                        <div className="w-16 h-[2px] bg-[#800020]"></div>
                    </div>

                    <div className="flex flex-col items-center border-b border-white/10 pb-6 mb-8 gap-6 w-full">
                        {/* Month Tabs */}
                        <div className="flex overflow-x-auto space-x-6 md:space-x-8 scrollbar-hide w-full justify-center px-4 relative pt-2">
                            {mockData.schedule.months.map((month) => (
                                <button
                                    key={month}
                                    onClick={() => setActiveMonth(month)}
                                    className={`font-montserrat text-lg whitespace-nowrap uppercase tracking-wider pb-4 transition-all relative ${activeMonth === month ? 'text-brand-gold' : 'text-white/50 hover:text-white'
                                        }`}
                                >
                                    {month}
                                    {activeMonth === month && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#800020]"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Mobile: Swipeable Cards */}
                    <div className="flex md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4 pb-8 min-h-[400px]">
                        <div className="flex gap-4 snap-x snap-mandatory w-max">
                            <AnimatePresence mode="popLayout">
                                {filteredEvents.map((event: any) => (
                                    <motion.div
                                        key={`mobile-${event.id}`}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="group relative bg-[#080808] border border-white/10 hover:border-brand-gold/50 transition-all duration-500 overflow-hidden shrink-0 w-[85vw] max-w-[340px] snap-center rounded-2xl flex flex-col"
                                    >
                                        {/* Image */}
                                        <div className="h-52 relative overflow-hidden flex-shrink-0 bg-black/40">
                                            <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
                                            <div className="absolute top-4 left-4 bg-white/95 text-black px-3 py-1 font-bebas text-lg tracking-wider rounded-md">
                                                {event.date}
                                            </div>
                                            <div className="absolute top-4 right-4 bg-black/70 text-brand-gold px-3 py-1 font-bebas text-lg tracking-wider rounded-md border border-white/10">
                                                {event.time}
                                            </div>
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="p-6 flex flex-col justify-between flex-grow">
                                            <div>
                                                <h3 className="font-montserrat font-bold text-lg uppercase mb-4 text-white line-clamp-2">
                                                    {event.title}
                                                </h3>
                                                <ul className="space-y-2 mb-6">
                                                    {event.dishes.map((item: string, idx: number) => (
                                                        <li key={idx} className="flex items-start text-white/70 font-montserrat text-sm">
                                                            <span className="w-1 h-1 bg-brand-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                                                <div>
                                                    <div className="font-bebas text-white/50 text-sm tracking-widest mb-1">
                                                        МЕСТ: <span className={event.spotsLeft <= 3 ? "text-accent-orange" : "text-white/90"}>{event.spotsLeft}</span>/{event.spotsTotal}
                                                    </div>
                                                    <div className="font-montserrat font-bold text-xl text-white">
                                                        {event.price} ₽
                                                    </div>
                                                </div>
                                                <Button onClick={() => handleBooking(event.title)} size="sm" className="whitespace-nowrap">Запись</Button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                        {filteredEvents.length === 0 && (
                            <div className="w-full text-center py-20">
                                <p className="text-white/50 font-montserrat text-lg">В этом месяце нет мастер-классов.</p>
                            </div>
                        )}
                    </div>

                    {/* Desktop: Compact Horizontal Rows */}
                    <div className="hidden md:block min-h-[400px]">
                        <div className="flex flex-col gap-3 w-full">
                            <AnimatePresence mode="popLayout">
                                {filteredEvents.map((event: any, idx: number) => (
                                    <motion.div
                                        key={`desktop-${event.id}`}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ duration: 0.2, delay: idx * 0.02 }}
                                        className="flex items-center gap-6 lg:gap-10 bg-[#0a0a0a] border border-white/5 p-4 md:p-5 rounded-[2rem] transition-all duration-300 group"
                                    >
                                        {/* Thumbnail */}
                                        <div className="w-40 h-32 lg:w-48 lg:h-36 shrink-0 rounded-[2.5rem] overflow-hidden relative bg-black">
                                            <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                            <div className="absolute top-3 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium z-10">
                                                {event.date}
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div className="flex-grow flex flex-col justify-center py-2">
                                            <h4 className="font-montserrat font-bold text-lg lg:text-xl uppercase text-white mb-3">
                                                {event.title}
                                            </h4>
                                            <div className="flex gap-4 text-sm text-white/50 font-montserrat mb-4">
                                                <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-white/40 mr-2"></span> {event.time}</span>
                                                <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent-orange mr-2"></span> Мест: {event.spotsLeft} из {event.spotsTotal}</span>
                                            </div>
                                            <p className="text-sm font-montserrat text-white/40 line-clamp-2 max-w-2xl">
                                                {event.dishes.join(' • ')}
                                            </p>
                                        </div>

                                        {/* Call to Action */}
                                        <div className="flex flex-col items-center justify-center shrink-0 pr-4 lg:pr-8 min-w-[140px]">
                                            <div className="font-montserrat font-bold text-2xl text-white mb-4 whitespace-nowrap">
                                                {event.price} <span className="text-xl">₽</span>
                                            </div>
                                            <Button onClick={() => handleBooking(event.title)} className="w-full rounded-xl bg-white text-black hover:bg-white/90 font-bold tracking-wide">ЗАПИСЬ</Button>
                                        </div>
                                    </motion.div>
                                ))}
                                {filteredEvents.length === 0 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="w-full text-center py-20 bg-white/5 rounded-2xl border border-white/10"
                                    >
                                        <p className="text-white/50 font-montserrat text-lg">В этом месяце нет мастер-классов по выбранному направлению.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hidden YClients Container */}
            <div id="yclients_widget" className="fixed inset-0 z-[100] hidden pointer-events-none"></div>
        </section>
    );
};
