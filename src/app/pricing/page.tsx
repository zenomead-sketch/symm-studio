import { Metadata } from "next";
import { PricingPageContent } from "@/components/PricingPageContent";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pricing — Transparent Fixed-Price Packages | Symm Studios",
  description:
    "Clear, fixed-price packages for brand identity, web development, and digital products. No retainer bloat, no surprise invoices. See exactly what you get and what it costs.",
  alternates: { canonical: "https://www.symm.studio/pricing" },
  openGraph: {
    title: "Pricing — Transparent Fixed-Price Packages | Symm Studios",
    description:
      "Fixed-price packages for websites, branding, automation, and creative work. No surprise invoices. Symm Studios, St. Petersburg, FL.",
    url: "https://www.symm.studio/pricing",
    type: "website",
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.symm.studio/pricing#webpage",
      url: "https://www.symm.studio/pricing",
      name: "Pricing — Symm Studios",
      isPartOf: { "@id": "https://www.symm.studio/#website" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.symm.studio" },
          { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.symm.studio/pricing" },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Symm Studios charge by the hour or use fixed pricing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Symm Studios uses transparent, fixed-price packages. You know exactly what you are paying before any work begins — no hourly billing, no surprise invoices.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in a Symm Studios website package?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Website packages include design, development, SEO setup, mobile optimisation, and launch support. Specific deliverables depend on the package selected.",
          },
        },
        {
          "@type": "Question",
          name: "Can Symm Studios build custom solutions outside of standard packages?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. For projects that require custom scope, we offer bespoke pricing. Contact us to discuss your specific requirements.",
          },
        },
      ],
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <JsonLd data={pricingSchema} />
      <PricingPageContent />
    </>
  );
}
