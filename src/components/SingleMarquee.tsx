export default function SingleMarquee() {
  const words = ["DESIGN", "UI", "BRANDING", "UX", "WEBDEV"];
  const repeatedWords = Array(10).fill(words).flat();

  return (
    <section className="relative pt-16 pb-0 lg:pt-24 lg:pb-0 overflow-hidden bg-dark w-full">
      {/* Foreground Gradient Band (Moving Left, Straight) */}
      <div className="w-full bg-gradient-to-r from-[#B5C9FF] to-primary flex py-3 lg:py-5 shadow-2xl z-20">
        <div className="flex w-max animate-marquee-left text-white font-black text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-none uppercase tracking-tight">
          {repeatedWords.map((word, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-6 md:mx-8 lg:mx-12">{word}</span>
              <span className="text-xl md:text-2xl lg:text-3xl text-white mb-1">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
