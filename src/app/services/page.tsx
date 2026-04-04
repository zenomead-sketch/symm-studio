import { Metadata } from "next";
import { ServicesPageContent } from "@/components/ServicesPageContent";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Services: Brand Identity, Web Development & SEO | Symm Studios",
  description:
    "Brand identity, web development, UI/UX design, creative direction, app development, SEO strategy, and agentic automation. Serving Tampa Bay and clients worldwide.",
  alternates: { canonical: "https://www.symm.studio/services" },
  openGraph: {
    title: "Services: Brand Identity, Web Development & SEO | Symm Studios",
    description:
      "Full-service creative studio offering brand identity, web development, UI/UX design, app development, SEO, and automation. St. Petersburg, FL.",
    url: "https://www.symm.studio/services",
    type: "website",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.symm.studio/services#webpage",
      url: "https://www.symm.studio/services",
      name: "Services: Symm Studios",
      isPartOf: { "@id": "https://www.symm.studio/#website" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.symm.studio" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.symm.studio/services" },
        ],
      },
    },
    {
      "@type": "Service",
      name: "Brand Identity",
      provider: { "@id": "https://www.symm.studio/#organization" },
      description: "Logo design, visual identity systems, typography, colour palettes, and brand guidelines for ambitious businesses.",
      areaServed: "Worldwide",
      serviceType: "Brand Identity Design",
    },
    {
      "@type": "Service",
      name: "Web Development",
      provider: { "@id": "https://www.symm.studio/#organization" },
      description: "High-performance websites and web applications built with Next.js, React, and TypeScript. Optimised for speed, SEO, and conversions.",
      areaServed: "Worldwide",
      serviceType: "Web Development",
    },
    {
      "@type": "Service",
      name: "UI/UX Design",
      provider: { "@id": "https://www.symm.studio/#organization" },
      description: "User interface and experience design that converts: wireframes, prototypes, and polished production-ready interfaces.",
      areaServed: "Worldwide",
      serviceType: "UI/UX Design",
    },
    {
      "@type": "Service",
      name: "Creative Direction",
      provider: { "@id": "https://www.symm.studio/#organization" },
      description: "Unified creative vision across web, social, print, and digital channels. Strategy that makes your brand feel like one cohesive company.",
      areaServed: "Worldwide",
      serviceType: "Creative Direction",
    },
    {
      "@type": "Service",
      name: "SEO & Content Strategy",
      provider: { "@id": "https://www.symm.studio/#organization" },
      description: "Technical SEO, on-page optimisation, content strategy, and structured data to increase organic visibility and qualified traffic.",
      areaServed: "Worldwide",
      serviceType: "SEO",
    },
    {
      "@type": "Service",
      name: "App Development",
      provider: { "@id": "https://www.symm.studio/#organization" },
      description: "Custom web and mobile application development. From MVP to full-scale platforms built for performance and growth.",
      areaServed: "Worldwide",
      serviceType: "App Development",
    },
    {
      "@type": "Service",
      name: "Agentic Automation",
      provider: { "@id": "https://www.symm.studio/#organization" },
      description: "AI-powered automation workflows that eliminate manual overhead, speed up operations, and scale your business without adding headcount.",
      areaServed: "Worldwide",
      serviceType: "Business Automation",
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesSchema} />
      <ServicesPageContent />
    </>
  );
}
