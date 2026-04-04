import { Metadata } from "next";
import { AboutPageContent } from "@/components/AboutPageContent";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About — Our Story & Team | Symm Studios",
  description:
    "Meet Jacob Broerman and Zen Mead, the two founders behind Symm Studios. A lean, St. Petersburg-born creative studio with 100% client retention and a focus on results.",
  alternates: { canonical: "https://www.symm.studio/about" },
  openGraph: {
    title: "About Symm Studios — Founders, Story & Mission",
    description:
      "Two founders. One mission. Jacob Broerman and Zen Mead built Symm Studios to close the gap between great products and weak digital presence.",
    url: "https://www.symm.studio/about",
    type: "website",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.symm.studio/about#webpage",
      url: "https://www.symm.studio/about",
      name: "About Symm Studios — Founders & Story",
      isPartOf: { "@id": "https://www.symm.studio/#website" },
      about: { "@id": "https://www.symm.studio/#organization" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.symm.studio" },
          { "@type": "ListItem", position: 2, name: "About", item: "https://www.symm.studio/about" },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.symm.studio/#jacob-broerman",
      name: "Jacob Broerman",
      jobTitle: "CEO & Lead Developer",
      description:
        "Jacob Broerman is the CEO and lead developer of Symm Studios. He combines a background in business and data analytics with cybersecurity and AI to build scalable, high-performance digital systems.",
      worksFor: { "@id": "https://www.symm.studio/#organization" },
      url: "https://www.linkedin.com/in/jacob-broerman",
      sameAs: ["https://www.linkedin.com/in/jacob-broerman"],
      knowsAbout: ["Web Development", "Data Analytics", "Cybersecurity", "AI", "Next.js", "TypeScript"],
    },
    {
      "@type": "Person",
      "@id": "https://www.symm.studio/#zen-mead",
      name: "Zen Mead",
      jobTitle: "Co-founder & Chief Marketing Officer",
      description:
        "Zen Mead is the co-founder and CMO of Symm Studios. He built and scaled his own service business before joining Symm, bringing hands-on expertise in SEO, conversion strategy, and full-funnel growth.",
      worksFor: { "@id": "https://www.symm.studio/#organization" },
      url: "https://www.linkedin.com/in/zen-mead",
      sameAs: ["https://www.linkedin.com/in/zen-mead"],
      knowsAbout: ["Brand Identity", "SEO", "Conversion Optimisation", "Marketing Strategy", "UI/UX Design"],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <AboutPageContent />
    </>
  );
}
