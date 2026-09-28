import Image from "next/image";

export default function Marquee() {
  const words = ["DESIGN", "UI", "BRANDING", "UX", "WEBDEV"];
  // Repeat 10 times to ensure it covers even ultra-wide screens and loops seamlessly at 50%
  const repeatedWords = Array(10).fill(words).flat();

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden bg-white w-full">
      {/* Background Dark Band (Moving Right) */}
      <div className="absolute top-1/2 left-0 w-[110vw] -translate-x-[5vw] -translate-y-1/2 bg-dark -rotate-[3deg] flex py-4 lg:py-6 shadow-xl z-10 border-y border-white/10">
        <div className="flex w-max animate-marquee-right text-white font-black text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-none uppercase">
          {repeatedWords.map((word, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-6 md:mx-8 lg:mx-12">{word}</span>
              <span className="text-xl md:text-2xl lg:text-3xl text-white/40 mb-1">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Foreground Gradient Band (Moving Left) */}
      <div className="absolute top-1/2 left-0 w-[110vw] -translate-x-[5vw] -translate-y-1/2 bg-gradient-to-r from-[#B5C9FF] to-primary rotate-[2deg] flex py-4 lg:py-6 shadow-2xl z-20 border-y border-white/20">
        <div className="flex w-max animate-marquee-left text-white font-black text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-none uppercase tracking-tight">
          {repeatedWords.map((word, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-6 md:mx-8 lg:mx-12">{word}</span>
              <span className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-1">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
