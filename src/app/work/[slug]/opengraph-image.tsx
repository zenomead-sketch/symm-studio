import { ImageResponse } from "next/og";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  const title = project?.title ?? "Case Study";
  const category = project?.category ?? "Project";
  const desc = (project?.desc ?? "").slice(0, 120);
  const accent = project?.accent ?? "#e8541a";
  const tags = project?.tags ?? [];

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0f0e0d",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Top label */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 40, height: 3, background: "#e8541a", display: "flex" }} />
          <span style={{ color: "#e8541a", fontSize: 13, letterSpacing: "0.22em" }}>
            SYMM STUDIOS: CASE STUDY
          </span>
        </div>

        {/* Project info */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span
            style={{
              fontSize: 13,
              letterSpacing: "0.22em",
              color: "rgba(250,248,245,0.4)",
            }}
          >
            {category.toUpperCase()}
          </span>
          <span
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "#faf8f5",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </span>
          <span
            style={{
              fontSize: 20,
              color: "rgba(250,248,245,0.4)",
              fontWeight: 300,
              marginTop: 8,
            }}
          >
            {desc}{(project?.desc ?? "").length > 120 ? "…" : ""}
          </span>
        </div>

        {/* Bottom: tags + domain */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", gap: 12 }}>
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  border: `1px solid ${accent}`,
                  color: accent,
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  padding: "6px 14px",
                }}
              >
                {tag.toUpperCase()}
              </div>
            ))}
          </div>
          <span style={{ color: "rgba(250,248,245,0.2)", fontSize: 13, letterSpacing: "0.1em" }}>
            symm.studio
          </span>
        </div>

        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 4,
            height: "100%",
            background: accent,
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
