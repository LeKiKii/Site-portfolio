"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Cta() {
  return (
    <section className="relative py-32 lg:py-48 bg-dark text-white overflow-hidden">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary rounded-full blur-[150px] opacity-30" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-[#B5C9FF] rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="max-w-[1296px] w-full mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <Image 
            src="/icons/stars.svg?v=2" 
            alt="Stars" 
            width={64} 
            height={64} 
            className="w-12 h-12 md:w-16 md:h-16 brightness-0 invert opacity-80" 
          />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[2.5rem] sm:text-[4rem] lg:text-[5.5rem] leading-[1.1] font-light mb-8 tracking-tight"
        >
          Vous avez un projet ?<br />
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B5C9FF]">Créons-le ensemble.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 font-medium leading-relaxed"
        >
          Qu'il s'agisse de refondre une interface complexe ou de créer une toute nouvelle expérience utilisateur, je suis à votre écoute pour donner vie à vos idées.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-dark rounded-xl font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(55,110,254,0.4)] hover:-translate-y-1">
            Me contacter
            <Image 
              src="/icons/arrow-up-right.svg?v=2" 
              alt="Flèche" 
              width={20} 
              height={20} 
              className="w-5 h-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:brightness-0 group-hover:invert" 
            />
          </button>
          
          <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-xl font-medium text-lg hover:border-white transition-all duration-300 hover:-translate-y-1">
            Voir mes offres
          </button>
        </motion.div>

      </div>
    </section>
  );
}
