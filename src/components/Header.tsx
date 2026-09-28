"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const links = [
    { name: "Accueil", href: "#" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "À propos", href: "#about" },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-[110] py-8 pointer-events-none">
        <div className="max-w-[1296px] mx-auto px-6 flex justify-between items-center pointer-events-auto">
          {/* Logo Desktop */}
          <div className="relative z-[110]">
            <Image 
              src="/icons/logo.svg" 
              alt="Killian Lescure Logo" 
              width={180} 
              height={60} 
              className="h-14 w-auto transition-all duration-500"
              priority
            />
          </div>

          {/* Menu Hamburger / Close Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[110] w-12 h-12 flex justify-center items-center hover:opacity-70 transition-opacity group"
          >
            <div className="relative w-8 h-5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 9, backgroundColor: "#FFFFFF" } : { rotate: 0, y: 0, backgroundColor: "#0F1F4A" }}
                className="absolute left-0 top-0 w-full h-[2px] rounded-full"
                transition={{ duration: 0.4, ease: "anticipate" }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0, scaleX: 0, backgroundColor: "#FFFFFF" } : { opacity: 1, scaleX: 1, backgroundColor: "#0F1F4A" }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] rounded-full origin-center"
                transition={{ duration: 0.4, ease: "anticipate" }}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -9, backgroundColor: "#FFFFFF" } : { rotate: 0, y: 0, backgroundColor: "#0F1F4A" }}
                className="absolute left-0 bottom-0 w-full h-[2px] rounded-full"
                transition={{ duration: 0.4, ease: "anticipate" }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-primary z-[100] flex flex-col pt-32"
          >
            {/* Menu Links */}
            <div className="flex-1 flex flex-col justify-center items-center gap-6 lg:gap-10">
              {links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="group relative text-white text-5xl md:text-7xl lg:text-[6rem] font-normal tracking-wide"
                >
                  {link.name}
                  <span className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-1 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Socials */}
            <div className="pb-12 flex justify-center gap-6 text-white">
              <motion.a 
                href="#" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.7 }}
                className="hover:opacity-70 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </motion.a>
              <motion.a 
                href="#" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.8 }}
                className="hover:opacity-70 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
