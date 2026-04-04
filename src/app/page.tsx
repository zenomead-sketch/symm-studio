import type { Metadata } from "next";
import { HeroWith3D } from "@/components/HeroWith3D";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Symm Studios | Brand Identity & Web Development — St. Petersburg, FL",
  description:
    "Symm Studios builds world-class brand identities, high-performance websites, and digital products for ambitious businesses. Based in St. Petersburg, FL. Serving clients worldwide.",
  alternates: { canonical: "https://www.symm.studio" },
  openGraph: {
    title: "Symm Studios | Brand Identity & Web Development — St. Petersburg, FL",
    description:
      "Boutique creative studio building brand identities, high-performance websites, and digital products. St. Petersburg, FL. 100% client retention.",
    url: "https://www.symm.studio",
    type: "website",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.symm.studio/#webpage",
  url: "https://www.symm.studio",
  name: "Symm Studios — Brand Identity & Web Development",
  description:
    "Boutique creative studio building brand identities, high-performance websites, and digital products for ambitious businesses worldwide.",
  isPartOf: { "@id": "https://www.symm.studio/#website" },
  about: { "@id": "https://www.symm.studio/#organization" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.symm.studio" },
    ],
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeSchema} />
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
