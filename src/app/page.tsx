import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import {
  Bonuses,
  Changes,
  Compare,
  Faq,
  Premium,
  Shorts,
  Sources,
  StatsBar,
  Ticker,
  Timeline,
  WhoAffected,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <StatsBar />
        <Changes />
        <Compare />
        <Shorts />
        <Premium />
        <Bonuses />
        <Timeline />
        <WhoAffected />
        <Faq />
        <Sources />
      </main>
      <Footer />
    </>
  );
}
