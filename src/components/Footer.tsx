import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-dark pt-12 lg:pt-16 px-6 border-t border-dark/10 relative overflow-hidden">

      <div className="max-w-[1296px] w-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 relative z-10">
          
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-xl mb-2 text-dark">Menu</h4>
            <Link href="/" className="text-dark/70 hover:text-primary hover:translate-x-1 transition-all w-fit font-medium">Accueil</Link>
            <Link href="#expertises" className="text-dark/70 hover:text-primary hover:translate-x-1 transition-all w-fit font-medium">Expertises</Link>
            <Link href="#productions" className="text-dark/70 hover:text-primary hover:translate-x-1 transition-all w-fit font-medium">Productions</Link>
            <Link href="#parcours" className="text-dark/70 hover:text-primary hover:translate-x-1 transition-all w-fit font-medium">Parcours</Link>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-xl mb-2 text-dark">Réseaux</h4>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-dark/70 hover:text-primary hover:translate-x-1 transition-all w-fit font-medium">LinkedIn</a>
            <a href="https://malt.fr" target="_blank" rel="noreferrer" className="text-dark/70 hover:text-primary hover:translate-x-1 transition-all w-fit font-medium">Malt</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="text-dark/70 hover:text-primary hover:translate-x-1 transition-all w-fit font-medium">Behance</a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="text-dark/70 hover:text-primary hover:translate-x-1 transition-all w-fit font-medium">Dribbble</a>
          </div>
          
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-xl mb-2 text-dark">Contact</h4>
            <a href="mailto:hello@killianlescure.com" className="text-dark/70 hover:text-primary hover:translate-x-1 transition-all w-fit font-medium">hello@killianlescure.com</a>
            <p className="text-dark/70 font-medium">Bordeaux, France</p>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-xl mb-2 text-dark">Disponibilité</h4>
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <p className="text-dark/70 font-medium">Disponible pour de nouveaux projets</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1296px] w-full mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-dark/10 mb-12 relative z-10 text-sm text-dark/40">
        <p>© {new Date().getFullYear()} Killian Lescure. Tous droits réservés.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/" className="hover:text-primary transition-colors">Mentions légales</Link>
          <Link href="/" className="hover:text-primary transition-colors">Politique de confidentialité</Link>
        </div>
      </div>

      {/* Huge Typography (Cropped at bottom) */}
      <div className="w-full text-center relative z-0 flex flex-col items-center justify-end -mb-[10vw] lg:-mb-[11vw]">
        <h2 className="text-[25vw] md:text-[27vw] lg:text-[29vw] font-black leading-none tracking-tighter text-[#8BA7FF] select-none w-full text-center whitespace-nowrap pt-8">
          Killian
        </h2>
      </div>
    </footer>
  );
}
