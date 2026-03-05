"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from "../ui/button"
import mockData from '../../data/mockData.json';

export const Schedule = () => {
    const [activeMonth, setActiveMonth] = useState(mockData.schedule.months[0]);

    const filteredEvents = mockData.schedule.events.filter(
        event => event.month === activeMonth
    );

    const handleBooking = (eventName: string) => {
        console.log(`Booking requested for: ${eventName}`);
        // Here we would integrate YCLIENTS widget
        // For now, we simulate the widget opening
        const widgetContainer = document.getElementById('yclients_widget');
        if (widgetContainer) {
            widgetContainer.innerHTML = `<div class="p-4 bg-white text-black">YCLIENTS Widget Placeholder for ${eventName}</div>`;
        }
    };

    return (
        <section id="schedule" className="py-24 md:py-32 bg-primary-bg relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="font-montserrat font-bold text-3xl md:text-5xl uppercase mb-10 text-white">
                        РАСПИСАНИЕ СОБЫТИЙ
                    </h2>

                    {/* Month Tabs */}
                    <div className="flex justify-center space-x-8 border-b border-white/10 pb-4">
                        {mockData.schedule.months.map((month) => (
                            <button
                                key={month}
                                onClick={() => setActiveMonth(month)}
                                className={`font-montserrat text-lg uppercase tracking-wider pb-4 transition-all relative ${activeMonth === month ? 'text-brand-gold' : 'text-white/50 hover:text-white'
                                    }`}
                            >
                                {month}
                                {activeMonth === month && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 gap-8">
                    <AnimatePresence mode="wait">
                        {filteredEvents.map((event) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="group relative bg-white/5 border border-white/5 hover:border-brand-gold/50 transition-all duration-500 overflow-hidden"
                            >
                                <div className="flex flex-col md:flex-row h-full">
                                    {/* Image */}
                                    <div className="md:w-1/3 h-64 md:h-auto relative overflow-hidden">
                                        <img
                                            src={event.imageUrl}
                                            alt={event.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            referrerPolicy="no-referrer"
                                        />
                                        <div className="absolute top-4 left-4 bg-brand-gold text-primary-bg px-3 py-1 font-bebas text-xl">
                                            {event.date} / {event.time}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="md:w-2/3 p-8 flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-montserrat font-bold text-2xl uppercase mb-4 text-white group-hover:text-brand-gold transition-colors">
                                                {event.title}
                                            </h3>
                                            <ul className="space-y-2 mb-6">
                                                {event.dishes.map((item: string, idx: number) => (
                                                    <li key={idx} className="flex items-start text-white/70 font-montserrat text-sm">
                                                        <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 mr-3 flex-shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-col md:flex-row items-end md:items-center justify-between mt-6 pt-6 border-t border-white/10">
                                            <div className="mb-4 md:mb-0">
                                                <div className="font-bebas text-white/50 text-lg mb-1">
                                                    Осталось {event.spotsLeft} места из {event.spotsTotal}
                                                </div>
                                                <div className="font-montserrat font-bold text-2xl text-white">
                                                    {event.price.toLocaleString()} ₽/ЧЕЛ
                                                </div>
                                            </div>
                                            <Button onClick={() => handleBooking(event.title)}>
                                                Записаться
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Hidden YClients Container */}
            <div id="yclients_widget" className="fixed inset-0 z-[100] hidden pointer-events-none"></div>
        </section>
    );
};
