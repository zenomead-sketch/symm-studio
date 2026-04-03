import { HeroWith3D } from "@/components/HeroWith3D";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <HeroWith3D />
      <Marquee />
      <Services />
      <Portfolio />
      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
}
