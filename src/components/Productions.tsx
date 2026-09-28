"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Inside 71",
    expertise: "Branding",
    image: "/images/InMyMind.webp"
  },
  {
    title: "Selfiebox",
    expertise: "Développement Web",
    image: "/images/selfiebox-site.webp"
  },
  {
    title: "Dashboard SaaS",
    expertise: "Design UI & UX",
    image: "/images/dashboard-home.webp"
  },
  {
    title: "Configurateur Vélo",
    expertise: "Design UI & UX",
    image: "/images/configurator-bike.webp"
  }
];

export default function Productions() {
  return (
    <section id="portfolio" className="relative py-24 lg:py-32 text-dark overflow-hidden">
      
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EEF3FF] to-[#DCE6FF] -z-20" />
      
      {/* Static Pattern */}
      <div 
        className="absolute inset-0 opacity-40 -z-10 mix-blend-multiply" 
        style={{ 
          backgroundImage: "url('/images/patern.svg')", 
          backgroundRepeat: "repeat", 
          backgroundSize: "60px",
        }} 
      />

      <div className="max-w-[1296px] w-full mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-20">
          <h2 className="text-5xl lg:text-7xl font-light tracking-tight">
            Mes dernières <br />
            <span className="text-primary font-bold">Productions</span>
          </h2>
          <p className="max-w-xl text-lg text-dark/80 leading-relaxed font-medium">
            Lorem ipsum dolor sit amet consectetur. Duis morbi ut at commodo sem integer id tempor elit. Duis fringilla diam aliquet sit convallis facilisi. Hendrerit congue odio mollis bibendum nulla.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {projects.map((project, index) => (
            <motion.a 
              href="#"
              data-cursor-type="project"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-[40px] overflow-hidden mb-6 bg-gradient-to-br from-[#1D3C92] to-primary shadow-xl">
                {/* Image temporairement retirée à la demande */}
              </div>

              {/* Text */}
              <div className="px-2">
                <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-xl text-dark/70 font-medium">{project.expertise}</p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
