export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  excerpt: string;
  date: string;
  author: string;
  status: "published" | "in-progress";
  readTime: string;
  content: ContentBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-healthcare-devpost-hackathon",
    title: "Inside the AI Healthcare Agency Endgame Hackathon",
    category: "Hackathon",
    tags: ["AI", "Healthcare", "Devpost", "Hackathon"],
    excerpt:
      "Symm Studios is competing in Devpost's Agency Endgame Hackathon — building an AI-powered healthcare tool from scratch. Here's what we're working on and why it matters.",
    date: "April 7, 2026",
    author: "Symm Studios",
    status: "in-progress",
    readTime: "5 min read",
    content: [
      {
        type: "callout",
        text: "Live Coverage — This post is updated as the hackathon progresses. Check back for milestone updates.",
      },
      {
        type: "paragraph",
        text: "Devpost's Agency Endgame Hackathon is one of the most competitive AI challenges running right now. The brief: build a production-ready AI application in the healthcare space, judged on technical depth, real-world impact, and execution quality. Teams from agencies around the world are competing. We're one of them.",
      },
      {
        type: "heading",
        text: "Why We Entered",
      },
      {
        type: "paragraph",
        text: "Healthcare is the domain where software has the highest ceiling and the highest stakes. A well-built tool can save hours per day for overworked clinicians. A poorly designed one can introduce friction that actively harms patient outcomes. We've already built in this space — our work on Lien On Us Medical showed us how much operational drag exists in healthcare provider workflows.",
      },
      {
        type: "paragraph",
        text: "When the Agency Endgame brief dropped, the healthcare track was the obvious fit. It's an area where we can draw on real client experience and build something that isn't just technically impressive — it's actually useful.",
      },
      {
        type: "heading",
        text: "What We're Building",
      },
      {
        type: "paragraph",
        text: "We're not ready to reveal the full scope yet, but the core problem we're solving is clinical documentation overhead. Physicians spend an estimated 34–55% of their workday on administrative tasks — primarily documentation. That's time taken away from patients. Our solution uses AI to close that gap.",
      },
      {
        type: "subheading",
        text: "The Technical Stack",
      },
      {
        type: "list",
        items: [
          "Next.js App Router with TypeScript for the web interface",
          "Claude API for intelligent document processing and structured output",
          "Supabase for real-time data sync and secure storage",
          "Tailwind CSS for a clean, clinical UI that doesn't feel like enterprise software",
        ],
      },
      {
        type: "paragraph",
        text: "The AI layer is doing the heavy lifting — parsing unstructured clinical notes, extracting structured data, and surfacing actionable summaries. The interface is intentionally minimal. Healthcare workers don't need more dashboard complexity. They need clarity.",
      },
      {
        type: "heading",
        text: "Current Status",
      },
      {
        type: "paragraph",
        text: "We're currently mid-build. The core AI pipeline is functional and processing test documents with strong accuracy. The interface is in active development. We're iterating fast — the hackathon deadline focuses the mind.",
      },
      {
        type: "subheading",
        text: "What's Done",
      },
      {
        type: "list",
        items: [
          "AI document ingestion and extraction pipeline",
          "Core data models and Supabase schema",
          "Authentication and user session management",
          "Initial UI layout and component system",
        ],
      },
      {
        type: "subheading",
        text: "What's In Progress",
      },
      {
        type: "list",
        items: [
          "Structured output refinement and edge case handling",
          "Dashboard UI for reviewing AI-generated summaries",
          "Export functionality for EHR-compatible formats",
          "Demo data and submission video",
        ],
      },
      {
        type: "heading",
        text: "Our Take on AI in Healthcare",
      },
      {
        type: "paragraph",
        text: "There's a lot of noise in the 'AI for healthcare' space. Most of it is either vaporware or enterprise tools that require six months of onboarding. The real opportunity is in the unglamorous middle — the workflows that every clinic deals with daily, where the cost of inefficiency is invisible until you measure it.",
      },
      {
        type: "paragraph",
        text: "AI doesn't need to replace clinical judgment. It needs to handle the administrative layer so clinicians can apply their judgment where it matters. That's the thesis behind what we're building, and it's the lens we're bringing to every design decision in this hackathon.",
      },
      {
        type: "callout",
        text: "Follow along — we'll post a full breakdown once submissions close, including what worked, what didn't, and the final product walkthrough.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}
