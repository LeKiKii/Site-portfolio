"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Bloquer le scroll pendant le chargement
    document.body.style.overflow = "hidden";
    
    // Durée du chargement (2 secondes)
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-primary"
        >
          {/* Logo Animation Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative flex flex-col items-center"
          >
            <div className="relative w-20 md:w-28 lg:w-32 aspect-square">
              {/* Background (Empty) Logo */}
              <svg viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full opacity-20">
                <path d="M31.7269 23.7611L40.1899 38.5067H25.4443L17.0176 23.8229H14.7605V38.5792C6.6048 38.5792 0 31.968 0 23.8144V0H14.7605V10.2784L22.6581 0.00639974H40.1877L21.9243 23.7632H31.7248L31.7269 23.7611Z" fill="#D4E0FF"/>
              </svg>
              
              {/* Foreground (Filling) Logo */}
              <motion.svg 
                viewBox="0 0 41 39" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="absolute inset-0 w-full h-full"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              >
                <path d="M31.7269 23.7611L40.1899 38.5067H25.4443L17.0176 23.8229H14.7605V38.5792C6.6048 38.5792 0 31.968 0 23.8144V0H14.7605V10.2784L22.6581 0.00639974H40.1877L21.9243 23.7632H31.7248L31.7269 23.7611Z" fill="#D4E0FF"/>
              </motion.svg>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
