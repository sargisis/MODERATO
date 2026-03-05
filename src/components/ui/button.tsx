import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends React.ComponentProps<typeof motion.button> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-montserrat font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer";

    const variants = {
        primary: "bg-white text-black hover:bg-black hover:text-white",
        outline: "border border-white text-white hover:bg-white hover:text-black",
        ghost: "text-white hover:text-white/60"
    };

    const sizes = {
        sm: "text-xs px-4 py-2",
        md: "text-sm px-8 py-4",
        lg: "text-base px-10 py-5"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};
