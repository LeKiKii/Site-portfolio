import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Presentation from "@/components/Presentation";
import Marquee from "@/components/Marquee";
import Parcours from "@/components/Parcours";
import Expertises from "@/components/Expertises";
import Productions from "@/components/Productions";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import SingleMarquee from "@/components/SingleMarquee";

export default function Home() {
  return (
    <main className="text-dark">
      <Header />
      <Hero />
      <Presentation />
      <Marquee />
      <Expertises />
      <Cta />
      <Productions />
      <Parcours />
      <SingleMarquee />
      <Footer />
    </main>
  );
}
