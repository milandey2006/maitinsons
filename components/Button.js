"use client";

import { motion } from "framer-motion";

export default function Button({ 
  children, 
  variant = "primary", 
  className = "", 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-300 transform active:scale-95 cursor-pointer";
  
  const variants = {
    primary: "gradient-primary text-white shadow-ambient",
    secondary: "bg-[#f7f2fa] text-[#004e85] hover:bg-[#ffffff] shadow-sm",
    tertiary: "bg-[#990032] text-white hover:bg-[#c60043] shadow-md",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
