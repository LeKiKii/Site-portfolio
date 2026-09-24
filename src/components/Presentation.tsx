"use client";
import { motion } from "framer-motion";

export default function Presentation() {
  return (
    <section className="py-24 text-slate-900">
      <div className="max-w-[1296px] w-full mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">À propos</h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            {/* User's text goes here */}
            Je suis passionné par la conception d'interfaces qui ont du sens...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
