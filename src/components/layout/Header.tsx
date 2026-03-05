"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Gift, Menu, X } from 'lucide-react';
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary-bg/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="font-gothic text-2xl tracking-[0.2em] uppercase text-white">
                            Moderato
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex space-x-8 items-center">
                        {[mockData.navigation.group1, mockData.navigation.group2, mockData.navigation.group3].map((group, index) => (
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
                    <div className="hidden xl:flex items-center space-x-6">
                        <a href={`tel:${mockData.navigation.contacts.phone}`} className="flex items-center text-white hover:text-brand-gold transition-colors font-montserrat text-sm font-bold">
                            <Phone size={16} className="mr-2" />
                            {mockData.navigation.contacts.phone}
                        </a>
                        <Button variant="outline" size="sm" className="!px-6">
                            <Gift size={16} className="mr-2" />
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
                        className="xl:hidden bg-primary-bg border-t border-white/10 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-6">
                            {[mockData.navigation.group1, mockData.navigation.group2, mockData.navigation.group3].map((group, index) => (
                                <div key={index} className="space-y-3">
                                    <h3 className="text-brand-gold font-bebas text-xl tracking-wide">{group.title}</h3>
                                    <ul className="space-y-2 pl-4 border-l border-white/10">
                                        {group.items.map((item: string, idx: number) => (
                                            <li key={idx}>
                                                <a href="#" className="text-white/70 hover:text-white text-sm uppercase">
                                                    {item}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
                                <a href={`tel:${mockData.navigation.contacts.phone}`} className="flex items-center text-white font-bold">
                                    <Phone size={18} className="mr-3" />
                                    {mockData.navigation.contacts.phone}
                                </a>
                                <Button className="w-full">Сертификаты</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};
