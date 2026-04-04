import { Metadata } from "next";
import { WorkPageContent } from "@/components/WorkPageContent";
import { JsonLd } from "@/components/JsonLd";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Case Studies & Portfolio | Symm Studios",
  description:
    "See how Symm Studios has built brand identities, web platforms, and digital products for real clients. Case studies: Lien On Us Medical, Ticket Snipes, Cod Master 8s.",
  alternates: { canonical: "https://www.symm.studio/work" },
  openGraph: {
    title: "Work — Case Studies & Portfolio | Symm Studios",
    description:
      "Real work for real clients. Brand identity, web development, and digital product case studies from Symm Studios.",
    url: "https://www.symm.studio/work",
    type: "website",
  },
};

export default function WorkPage() {
  const projects = getAllProjects();

  const workSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.symm.studio/work#webpage",
        url: "https://www.symm.studio/work",
        name: "Work — Case Studies & Portfolio | Symm Studios",
        isPartOf: { "@id": "https://www.symm.studio/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.symm.studio" },
            { "@type": "ListItem", position: 2, name: "Work", item: "https://www.symm.studio/work" },
          ],
        },
      },
      {
        "@type": "ItemList",
        name: "Symm Studios Case Studies",
        itemListElement: projects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.title,
          url: `https://www.symm.studio/work/${p.slug}`,
          description: p.desc,
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={workSchema} />
      <WorkPageContent />
    </>
  );
}
