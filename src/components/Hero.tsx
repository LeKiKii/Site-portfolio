"use client";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const { scrollY } = useScroll();
  const bubbleY = useTransform(scrollY, [0, 800], [0, -150]);
  const photoY = useTransform(scrollY, [0, 800], [0, 80]); // Moves down slowly

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const bubbleMouseX = useTransform(smoothMouseX, [-0.5, 0.5], [-30, 30]);
  const bubbleMouseY = useTransform(smoothMouseY, [-0.5, 0.5], [-30, 30]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth) - 0.5;
    const y = (e.clientY / innerHeight) - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section onMouseMove={handleMouseMove} className="min-h-screen flex items-center relative overflow-hidden pt-32 pb-0 text-dark">
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
            className="text-dark max-w-xl text-base lg:text-[1.05rem] leading-[1.2] mb-10 font-medium"
          >
            Créatif et curieux, je combine design graphique, interfaces intuitives et web pour donner vie à des expériences visuelles cohérentes et engageantes.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button className="group flex items-center gap-3 px-6 py-3 bg-dark text-white rounded-xl font-semibold hover:bg-primary transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Télécharger mon CV 
              <Image src="/icons/file-down.svg" alt="Télécharger" width={20} height={20} className="w-5 h-5" />
            </button>
            <button className="group flex items-center gap-3 px-6 py-3 border border-dark text-dark rounded-xl font-semibold hover:bg-primary hover:border-primary hover:text-white transition-all hover:-translate-y-0.5">
              Voir mes projets 
              <Image src="/icons/arrow-up-right.svg?v=2" alt="Flèche" width={20} height={20} className="w-5 h-5 group-hover:brightness-0 group-hover:invert transition-all" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Image Content - Outside the grid to prevent cropping, but positioned relative to center on ultra-wide */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-0 right-[-10%] sm:right-[-5%] lg:right-[calc(50vw-800px)] w-[90%] sm:w-[60%] lg:w-[850px] h-[55vh] lg:h-[880px] max-h-[90vh] flex justify-end items-end z-10 pointer-events-none"
      >
        {/* Tooltip bubble with Parallax & Mouse tracking */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ y: bubbleY }}
          className="absolute top-[2%] lg:top-[3%] right-[10%] lg:right-[22%] z-30 hidden sm:block pointer-events-none"
        >
          <motion.div style={{ x: bubbleMouseX, y: bubbleMouseY }}>
            <Image 
              src="/images/mouse-name.svg" 
              alt="Killian Lescure" 
              width={180} 
              height={60} 
              className="w-32 lg:w-40 h-auto drop-shadow-xl"
            />
          </motion.div>
        </motion.div>
        
        <motion.div style={{ y: photoY }} className="h-full w-auto">
          <Image 
            src="/images/moi-v2.webp" 
            alt="Killian Lescure" 
            width={850} 
            height={880} 
            className="object-contain object-right-bottom h-full w-auto drop-shadow-2xl"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
