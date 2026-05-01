import React from 'react';

const partners = [
    { image: "/images/partners/mw-stacked.png" },
    { image: "/images/partners/apple-transparent.png" },
    { image: "/images/partners/mw-horizontal.png" },
    { image: "/images/partners/apple-orange.png" },
    { image: "/images/partners/apple-teal.png" },
];

export const Partners = () => {
    return (
        <section className="py-12 md:py-16 bg-[#0a0a0a] overflow-hidden border-b border-white/5 relative z-30">
            <div className="relative w-full flex flex-col items-center">
                <div className="mb-10 opacity-30 text-[10px] uppercase tracking-[0.6em] font-montserrat text-white text-center">
                    Наши партнёры и проекты
                </div>
                
                <div className="relative w-full flex items-center">
                    {/* Left and Right Gradients for Fade Effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 pointer-events-none"></div>

                    <div className="flex animate-marquee items-center opacity-40 hover:opacity-100 transition-opacity duration-1000 min-w-max py-4">
                        {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-40 md:w-60 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700 mx-10 md:mx-16 cursor-default group"
                            >
                                <img
                                    src={partner.image}
                                    alt="Moderato Group"
                                    className="max-h-14 md:max-h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
