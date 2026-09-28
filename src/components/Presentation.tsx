"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Presentation() {
  return (
    <section id="about" className="py-24 lg:py-32 text-dark bg-white relative z-20">
      <div className="max-w-[1296px] w-full mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          {/* Tag / Qui suis-je ? */}
          <div className="flex items-center gap-3 text-dark font-medium text-lg">
            <Image 
              src="/icons/stars.svg?v=2" 
              alt="Stars" 
              width={24} 
              height={24} 
              className="w-6 h-6" 
            />
            <span>Qui suis-je ?</span>
          </div>

          {/* Main Text */}
          <p className="text-[32px] sm:text-[40px] md:text-[48px] font-light leading-[1.2] tracking-tight w-full">
            Hello, c'est <span className="text-primary font-normal">Killian</span> ! UI/UX Designer depuis 3 ans et bientôt diplômé de mon Master. Je conçois des interfaces modernes et intuitives pour <span className="text-primary font-normal">transformer vos idées en expériences digitales mémorables</span>.
          </p>

          {/* Button */}
          <div className="pt-6">
            <button className="group flex items-center gap-3 px-8 py-3.5 bg-dark text-white rounded-xl font-medium text-lg hover:bg-primary transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Découvrir mon profil
              <Image 
                src="/icons/arrow-up-right.svg?v=2" 
                alt="Flèche" 
                width={20} 
                height={20} 
                className="w-5 h-5 brightness-0 invert transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
