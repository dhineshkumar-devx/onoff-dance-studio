import React from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({
  children,
  onClick,
  className = "",
  variant = "orange", // "orange" | "outline" | "glass"
  type = "button",
  disabled = false,
  ...props
}) {
  const getVariantStyles = () => {
    if (variant === "orange" || variant === "copper") {
      return "bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-display font-bold shadow-orange-sm hover:shadow-orange-md hover:from-orange-400 hover:to-orange-600";
    }
    if (variant === "outline") {
      return "bg-obsidian-900/90 text-silver hover:text-white border border-silver/20 hover:border-orange-500/60 font-display font-medium";
    }
    if (variant === "glass") {
      return "glass-panel text-silver hover:text-white border-orange-500/25 hover:border-orange-500/60 font-display font-medium";
    }
    return "";
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`relative inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 disabled:opacity-50 select-none cursor-pointer ${getVariantStyles()} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
