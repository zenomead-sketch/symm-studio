"use client";

const items = [
  "Brand Identity",
  "Web Development",
  "UI/UX Design",
  "Creative Direction",
  "App Development",
  "SEO & Content",
  "Virtual Agents",
  "SEO & Content",
  "Copywriting",
];

export function Marquee({ variant = "dark" }: { variant?: "dark" | "flame" }) {
  const tripled = [...items, ...items, ...items];

  return (
    <div
      className={`py-4 border-y overflow-hidden ${
        variant === "flame"
          ? "bg-flame border-flame/20"
          : "bg-surface border-border"
      }`}
    >
      <div className="marquee-inner">
        {tripled.map((item, i) => (
          <div key={i} className="flex items-center gap-0 flex-shrink-0">
            <span
              className={`text-[11px] tracking-[0.22em] uppercase font-medium px-6 ${
                variant === "flame" ? "text-void" : "text-muted"
              }`}
            >
              {item}
            </span>
            <span
              className={`text-xs ${
                variant === "flame" ? "text-void/40" : "text-border-light"
              }`}
            >
              /
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
