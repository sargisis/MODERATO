"use client"
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import mockData from '../../data/mockData.json';
import { Check } from 'lucide-react';

export const LeadMagnet = () => {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');

        // Simulate API call
        setTimeout(() => {
            console.log('Lead Magnet Form Submitted:', { email });
            setFormState('success');
        }, 1500);
    };

    return (
        <section className="py-24 bg-secondary-olive/20 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-montserrat font-bold text-3xl md:text-5xl uppercase mb-6 text-white">
                        ПОДПИШИТЕСЬ НА РАССЫЛКУ
                    </h2>
                    <p className="font-montserrat text-xl text-white/80 mb-12">
                        {mockData.leadMagnet.text}
                    </p>

                    {formState === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-secondary-olive/40 border border-secondary-olive p-8 rounded-sm inline-flex flex-col items-center"
                        >
                            <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mb-4">
                                <Check size={32} className="text-primary-bg" />
                            </div>
                            <h3 className="font-montserrat font-bold text-xl uppercase text-white mb-2">Спасибо!</h3>
                            <p className="text-white/80">Рецепты отправлены на вашу почту.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
                            <input
                                type="email"
                                placeholder="Ваш Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 bg-white/10 border border-white/20 px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-brand-gold transition-colors font-montserrat"
                            />
                            <Button type="submit" disabled={formState === 'submitting'}>
                                {formState === 'submitting' ? 'Отправка...' : mockData.leadMagnet.buttonText}
                            </Button>
                        </form>
                    )}
                </motion.div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold rounded-full blur-[150px]" />
            </div>
        </section>
    );
};
