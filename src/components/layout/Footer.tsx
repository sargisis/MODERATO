import React from 'react';
import mockData from '../../data/mockData.json';
import { Instagram, Send } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-black py-16 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Logo & Address */}
                    <div className="md:col-span-1">
                        <a href="#" className="font-gothic text-2xl tracking-[0.2em] uppercase text-white block mb-6">
                            Moderato
                        </a>
                        <address className="not-italic text-white/60 font-montserrat text-sm space-y-2">
                            <p>Екатеринбург, Бажова 75</p>
                            <p>
                                <a href={`tel:${mockData.navigation.contacts.phone}`} className="hover:text-brand-gold transition-colors">
                                    {mockData.navigation.contacts.phone}
                                </a>
                            </p>
                            <p>
                                <a href={mockData.navigation.contacts.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                                    Telegram
                                </a>
                            </p>
                        </address>
                    </div>

                    {/* Navigation Columns */}
                    {[mockData.navigation.group1, mockData.navigation.group2, mockData.navigation.group3].map((group, index) => (
                        <div key={index} className="md:col-span-1">
                            <h4 className="font-bebas text-white/40 text-lg mb-6 tracking-wider">
                                {group.title}
                            </h4>
                            <ul className="space-y-3">
                                {group.items.map((item: string, idx: number) => (
                                    <li key={idx}>
                                        <a href="#" className="text-white/80 hover:text-brand-gold transition-colors font-montserrat text-sm uppercase">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-white/30 text-xs font-montserrat mb-4 md:mb-0">
                        © 2009—{new Date().getFullYear()} Moderato Culinary Studio. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-white/50 hover:text-brand-gold transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="text-white/50 hover:text-brand-gold transition-colors">
                            <Send size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
