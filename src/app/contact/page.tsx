import { Metadata } from "next";
import { ContactPageContent } from "@/components/ContactPageContent";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact: Start Your Project | Symm Studios",
  description:
    "Ready to build something real? Contact Symm Studios in St. Petersburg, FL. We respond within 24 hours. Let's talk brand identity, web development, or your next digital product.",
  alternates: { canonical: "https://www.symm.studio/contact" },
  openGraph: {
    title: "Contact Symm Studios: Start Your Project",
    description:
      "Get in touch with Symm Studios. St. Petersburg, FL. Response within 24 hours. Brand identity, web development, and digital product enquiries welcome.",
    url: "https://www.symm.studio/contact",
    type: "website",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.symm.studio/contact#webpage",
      url: "https://www.symm.studio/contact",
      name: "Contact Symm Studios",
      isPartOf: { "@id": "https://www.symm.studio/#website" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.symm.studio" },
          { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.symm.studio/contact" },
        ],
      },
    },
    {
      "@type": "ContactPage",
      name: "Contact Symm Studios",
      url: "https://www.symm.studio/contact",
      description: "Get in touch with Symm Studios to start your brand identity, web development, or digital product project.",
      mainEntity: { "@id": "https://www.symm.studio/#organization" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How quickly does Symm Studios respond to enquiries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We respond to all enquiries within 24 hours, Monday through Friday.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Symm Studios located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Symm Studios is based in St. Petersburg, Florida, and serves clients worldwide.",
          },
        },
        {
          "@type": "Question",
          name: "Does Symm Studios work with clients outside of Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. While we are based in St. Petersburg, FL, we work with clients across the United States and internationally.",
          },
        },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactPageContent />
    </>
  );
}
