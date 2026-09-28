"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function ScrollToTop() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show after scrolling past roughly the Hero section
    if (latest > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-dark rounded-full flex justify-center items-center text-white shadow-xl z-50 hover:bg-primary hover:scale-110 transition-all ${!isVisible && "pointer-events-none"}`}
      aria-label="Remonter en haut"
    >
      <Image 
        src="/icons/arrow-up-right.svg?v=2" 
        alt="Haut" 
        width={24} 
        height={24} 
        className="w-6 h-6 brightness-0 invert -rotate-45" 
      />
    </motion.button>
  );
}
