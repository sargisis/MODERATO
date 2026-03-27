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
        <section className="py-6 md:py-10 bg-[#0a0a0a] overflow-hidden border-b border-white/5 relative z-30">
            <div className="relative w-full flex items-center">
                {/* Left and Right Gradients for Fade Effect */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-56 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-56 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

                <div className="flex animate-marquee items-center opacity-70 hover:opacity-100 transition-opacity duration-700 min-w-max">
                    {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-32 md:w-48 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 mx-8 md:mx-12 cursor-default"
                        >
                            <img
                                src={partner.image}
                                alt="Moderato Group"
                                className="max-h-12 md:max-h-16 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
