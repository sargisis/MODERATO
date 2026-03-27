"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Gift, Menu, X, Send, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import mockData from '../../data/mockData.json';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-[#0a0a0a]/95 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-6'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center gap-4 lg:gap-8">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="block">
                            <img src="/images/logo-horizontal.png" alt="Moderato" className="h-8 md:h-10 w-auto object-contain" />
                            <span className="sr-only">Moderato</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex space-x-4 lg:space-x-6 items-center flex-shrink-0">
                        {[mockData.navigation.group1, mockData.navigation.group2, mockData.navigation.group3, mockData.navigation.group4].map((group, index) => (
                            <div key={index} className="relative group">
                                <button className="text-sm font-montserrat font-medium text-white/80 hover:text-brand-gold transition-colors uppercase tracking-wide">
                                    {group.title}
                                </button>
                                <div className="absolute top-full left-0 mt-2 w-48 bg-primary-bg/95 border border-white/10 rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-4">
                                    {group.items.map((item: string, idx: number) => (
                                        <a
                                            key={idx}
                                            href="#"
                                            className="block py-2 text-xs text-white/70 hover:text-brand-gold transition-colors uppercase"
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="hidden xl:flex items-center space-x-4 lg:space-x-6 flex-shrink-0">
                        <div className="flex items-center space-x-3 border-r border-white/20 pr-4 lg:pr-6">
                            <a href={mockData.navigation.contacts.telegram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-gold transition-colors" title="Telegram">
                                <Send size={18} />
                            </a>
                            <a href={(mockData.navigation.contacts as any).whatsapp} target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-gold transition-colors" title="WhatsApp">
                                <MessageCircle size={18} />
                            </a>
                        </div>
                        <a href={`tel:${mockData.navigation.contacts.phone}`} className="flex items-center text-white hover:text-brand-gold transition-colors font-montserrat text-sm font-bold whitespace-nowrap">
                            <Phone size={16} className="mr-2 flex-shrink-0" />
                            <span>{mockData.navigation.contacts.phone}</span>
                        </a>
                        <Button variant="outline" size="sm" className="!px-6 whitespace-nowrap flex-shrink-0">
                            <Gift size={16} className="mr-2 flex-shrink-0" />
                            Сертификаты
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="xl:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white hover:text-brand-gold transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-[#0a0a0a] border-t border-white/10 overflow-hidden relative overflow-y-auto max-h-[85vh] shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                    >
                        <div className="px-4 py-10 space-y-10 flex flex-col items-center">
                            {[mockData.navigation.group1, mockData.navigation.group2, mockData.navigation.group3, mockData.navigation.group4].map((group, index) => (
                                <div key={index} className="w-full flex flex-col items-center text-center space-y-4">
                                    <h3 className="text-brand-gold font-bebas text-2xl tracking-widest">{group.title}</h3>
                                    <div className="w-8 h-[1px] bg-[#800020] mb-2"></div>
                                    <ul className="space-y-4 w-full">
                                        {group.items.map((item: string, idx: number) => (
                                            <li key={idx}>
                                                <a href="#" className="block py-2 text-white/80 hover:text-brand-gold active:text-brand-gold transition-colors font-montserrat text-base md:text-lg uppercase tracking-wider">
                                                    {item}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            
                            <div className="w-full pt-8 border-t border-white/10 flex flex-col items-center space-y-8">
                                <Button variant="outline" className="w-[85vw] max-w-sm justify-center py-6 rounded-xl border-white/20 text-md tracking-wider">
                                    <Gift size={20} className="mr-3" />
                                    Сертификаты
                                </Button>

                                <div className="flex flex-col items-center space-y-5 w-full">
                                    <a href={`tel:${mockData.navigation.contacts.phone}`} className="flex items-center text-white hover:text-brand-gold transition-colors font-montserrat text-xl md:text-2xl font-bold tracking-widest">
                                        <Phone size={20} className="mr-3 text-brand-gold" />
                                        {mockData.navigation.contacts.phone}
                                    </a>
                                    <div className="flex justify-center space-x-10 w-full pt-2 pb-8">
                                        <a href={mockData.navigation.contacts.telegram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-gold transition-colors transform hover:scale-110" title="Telegram">
                                            <Send size={30} />
                                        </a>
                                        <a href={(mockData.navigation.contacts as any).whatsapp} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-gold transition-colors transform hover:scale-110" title="WhatsApp">
                                            <MessageCircle size={30} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};
