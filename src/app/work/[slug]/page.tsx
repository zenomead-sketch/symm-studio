import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import { CaseStudyContent } from "@/components/CaseStudyContent";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const url = `https://www.symm.studio/work/${project.slug}`;

  return {
    title: `${project.title} — Case Study | Symm Studios`,
    description: `${project.desc} Built by Symm Studios — brand identity and web development studio based in St. Petersburg, FL.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — Case Study | Symm Studios`,
      description: project.desc,
      url,
      type: "article",
      images: [
        {
          url: project.img,
          width: 1200,
          height: 630,
          alt: `${project.title} — Symm Studios case study`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case Study | Symm Studios`,
      description: project.desc,
      images: [project.img],
    },
  };
}

export default async function CaseStudyPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const all = getAllProjects();
  const idx = all.findIndex((p) => p.slug === slug);
  const next = all[(idx + 1) % all.length];

  const url = `https://www.symm.studio/work/${project.slug}`;

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${project.title} — Case Study | Symm Studios`,
        description: project.desc,
        isPartOf: { "@id": "https://www.symm.studio/#website" },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.symm.studio" },
            { "@type": "ListItem", position: 2, name: "Work", item: "https://www.symm.studio/work" },
            { "@type": "ListItem", position: 3, name: project.title, item: url },
          ],
        },
      },
      {
        "@type": "CreativeWork",
        "@id": `${url}#project`,
        name: project.title,
        url,
        description: project.desc,
        creator: { "@id": "https://www.symm.studio/#organization" },
        image: `https://www.symm.studio${project.img}`,
        keywords: project.tags.join(", "),
        dateCreated: project.year,
        genre: project.category,
        about: {
          "@type": "Organization",
          name: project.client,
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={caseStudySchema} />
      <CaseStudyContent project={project} nextProject={next} />
    </>
  );
}
