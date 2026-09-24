"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-32 pb-0 text-dark">
      <div className="max-w-[1296px] w-full mx-auto px-6 z-10 relative h-full flex items-center">
        
        {/* Text Content */}
        <div className="flex flex-col z-20 w-full lg:w-[65%] pb-20 lg:pb-0">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[4rem] sm:text-[6rem] lg:text-[8rem] xl:text-[176px] uppercase leading-[0.82] tracking-tighter"
          >
            <span className="block text-primary font-[800]">Creative</span>
            <span className="block text-dark font-[900]">Designer</span>
          </motion.h1>
          
          {/* Fine Separator Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="h-[1px] w-full max-w-[500px] bg-dark/30 my-8 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-dark max-w-xl text-base lg:text-[1.05rem] leading-relaxed mb-10 font-medium"
          >
            Créatif et curieux, je combine design graphique, interfaces intuitives et web pour donner vie à des expériences visuelles cohérentes et engageantes.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button className="flex items-center gap-3 px-6 py-3 bg-dark text-white rounded-xl font-semibold hover:bg-dark/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Télécharger mon CV 
              <Image src="/icons/file-down.svg" alt="Télécharger" width={20} height={20} className="w-5 h-5 invert" />
            </button>
            <button className="flex items-center gap-3 px-6 py-3 border border-dark text-dark rounded-xl font-semibold hover:bg-dark/5 transition-all hover:-translate-y-0.5">
              Voir mes projets 
              <Image src="/icons/arrow-up-right.svg" alt="Flèche" width={20} height={20} className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Image Content - Outside the grid to prevent cropping, but positioned relative to center on ultra-wide */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-0 right-[-10%] sm:right-[-5%] lg:right-[calc(50vw-680px)] w-[90%] sm:w-[60%] lg:w-[790px] h-[55vh] lg:h-[826px] max-h-[85vh] flex justify-end items-end z-10 pointer-events-none"
      >
        {/* Tooltip bubble */}
        <div className="absolute top-[10%] lg:top-[15%] right-[20%] lg:right-[40%] bg-primary text-white px-5 py-2 rounded-2xl font-bold text-sm shadow-xl hidden sm:block z-30">
          Killian Lescure
          {/* pointer */}
          <div className="absolute -bottom-2 left-6 w-5 h-5 bg-primary rotate-[60deg] skew-x-12 rounded-sm"></div>
        </div>
        
        <Image 
          src="/images/moi.webp" 
          alt="Killian Lescure" 
          width={790} 
          height={826} 
          className="object-contain object-right-bottom h-full w-auto drop-shadow-2xl"
          priority
        />
      </motion.div>
    </section>
  );
}
