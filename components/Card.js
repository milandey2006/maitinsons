"use client";

import { motion } from "framer-motion";

export default function Card({ 
  children, 
  className = "", 
  elevation = "low", 
  hoverEffect = true,
  ...props 
}) {
  const baseStyles = "rounded-xl overflow-hidden transition-all duration-300 relative border-none";
  
  const elevations = {
    low: "bg-[#ffffff] shadow-ambient", // surface-container-lowest
    medium: "bg-[#ffffff] shadow-lg",
    brand: "gradient-primary text-white",
    glass: "glass-panel shadow-ambient"
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -8, scale: 1.01 } : {}}
      className={`${baseStyles} ${elevations[elevation]} ${className}`}
      {...props}
    >
      <div className="p-8 md:p-12 h-full flex flex-col items-start">
        {children}
      </div>
    </motion.div>
  );
}

export function StatusChip({ children, type = "default" }) {
  const styles = {
    default: "bg-[#506072]/10 text-[#506072]",
    urgent: "bg-[#990032]/10 text-[#990032]",
    success: "bg-green-500/10 text-green-700",
    info: "bg-[#004e85]/10 text-[#004e85]",
  };

  return (
    <span className={`${styles[type]} px-4 py-1.5 rounded-full text-[0.7rem] font-bold uppercase tracking-widest`}>
      {children}
    </span>
  );
}
