import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-8">
      <div className="max-w-[1296px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Image 
          src="/icons/logo.svg" 
          alt="Killian Lescure Logo" 
          width={180} 
          height={60} 
          className="h-14 w-auto drop-shadow-sm"
          priority
        />

        {/* Menu Hamburger */}
        <button className="hover:opacity-70 transition-opacity p-2">
          <Image src="/icons/burger.svg" alt="Menu" width={32} height={32} />
        </button>
      </div>
    </header>
  );
}
