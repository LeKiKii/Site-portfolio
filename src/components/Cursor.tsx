"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Cursor() {
  const [cursorState, setCursorState] = useState<"default" | "hover" | "project">("default");
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the cursor
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX); 
      mouseY.set(e.clientY);
    };
    
    // Check if hovering over clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.closest('[data-cursor-type="project"]')) {
        setCursorState("project");
        return;
      }
      
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button')
      ) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  const isProject = cursorState === "project";
  const isHover = cursorState === "hover";

  return (
    <motion.div
      style={{
        left: cursorX,
        top: cursorY,
        x: "-50%",
        y: "-50%",
      }}
      animate={{
        width: isProject ? 80 : 20,
        height: isProject ? 80 : 20,
        scale: isProject ? 1 : (isHover ? 2 : 1),
        opacity: isProject ? 1 : (isHover ? 0.4 : 1),
      }}
      transition={{ duration: 0.2, type: "tween", ease: "easeOut" }}
      className="fixed bg-white mix-blend-difference rounded-full pointer-events-none z-[9999] hidden md:flex justify-center items-center"
    >
      <AnimatePresence>
        {isProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            <Image 
              src="/icons/arrow-up-right.svg?v=2" 
              alt="Go" 
              width={32} 
              height={32} 
              className="brightness-0 w-8 h-8" 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
