export type ProjectDetail = {
  slug: string;
  n: string;
  title: string;
  category: string;
  tags: string[];
  desc: string;
  href: string;
  live: boolean;
  year: string;
  accent: string;
  bg: string;
  img: string;
  client: string;
  role: string;
  duration: string;
  problem: string;
  solution: string;
  outcome: string;
  techStack: { label: string; items: string[] }[];
  features: { title: string; desc: string }[];
  images: { src: string; alt: string; caption?: string }[];
  testimonial?: { quote: string; author: string; role: string };
};

export const projects: ProjectDetail[] = [
  {
    slug: "lien-on-us-medical",
    n: "01",
    title: "Lien On Us Medical",
    category: "Healthcare Platform",
    tags: ["Web App", "Analytics", "Healthcare"],
    desc: "A medical referral platform featuring a provider dashboard with real-time analytics and case tracking — built to handle serious volume for Los Angeles healthcare providers.",
    href: "https://www.lienonusmedical.com/",
    live: true,
    year: "2024",
    accent: "#2a6496",
    bg: "from-[#04101f] to-[#faf8f5]",
    img: "/portfolio-lien-on-us.png",
    client: "Lien On Us Medical",
    role: "Lead Developer",
    duration: "6 weeks",
    problem:
      "Healthcare providers in Los Angeles needed a fast, reliable way to connect with clients and quantify their referral pipeline. Existing systems were slow, siloed, and offered no real visibility into how leads were arriving — making it impossible to optimize outreach or prove ROI to partners.",
    solution:
      "We built a full medical referral platform with integrated mapping APIs for instant provider discovery and a backend analytics dashboard that tracks every meaningful touchpoint: website clicks, phone calls, referrals, and emails. All data is sortable and exportable to CSV so providers can hand off clean reports to partners without extra work.",
    outcome:
      "Providers in the Los Angeles network can now surface actionable referral data in seconds — replacing manual tracking with a live dashboard that quantifies every channel and simplifies partner reporting.",
    techStack: [
      { label: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { label: "Backend", items: ["Supabase", "PostgreSQL", "Edge Functions"] },
      { label: "Integrations", items: ["Mapping APIs", "CSV Export", "Analytics Pipeline"] },
    ],
    features: [
      {
        title: "Provider Discovery Map",
        desc: "Integrated mapping APIs let clients locate and filter providers by specialty and proximity in real time.",
      },
      {
        title: "Analytics Dashboard",
        desc: "A live backend dashboard tracking clicks, phone calls, referrals, and emails — all in one place.",
      },
      {
        title: "Multi-Channel Tracking",
        desc: "Every inbound touchpoint is captured and attributed, giving providers a complete picture of their pipeline.",
      },
      {
        title: "CSV Export",
        desc: "Analytics can be sorted, filtered, and exported to CSV for clean delivery directly to provider partners.",
      },
    ],
    images: [
      { src: "/lien-1.png", alt: "Lien On Us Medical — homepage" },
      { src: "/lien-2.png", alt: "Lien On Us Medical — provider search" },
      { src: "/lien-3.png", alt: "Lien On Us Medical — analytics dashboard" },
      { src: "/lien-4.png", alt: "Lien On Us Medical — reporting" },
    ],
  },
  {
    slug: "ticket-snipes",
    n: "02",
    title: "Ticket Snipes",
    category: "Automation Platform",
    tags: ["Full Stack", "E-commerce", "Automation"],
    desc: "High-throughput ticket acquisition system engineered for speed, with fully automated purchasing workflows and real-time inventory monitoring.",
    href: "https://ticketsnipes.lovable.app/",
    live: true,
    year: "2024",
    accent: "#7b5ea7",
    bg: "from-[#0f0620] to-[#faf8f5]",
    img: "/portfolio-ticket-snipes.png",
    client: "Ticket Snipes",
    role: "Lead Developer",
    duration: "8 weeks",
    problem:
      "Concert discovery and fan-to-fan ticket trading were scattered across a dozen apps with no single social layer connecting fans. Buying presales, tracking upcoming tours, and connecting with other fans required jumping between platforms that didn't talk to each other.",
    solution:
      "We built an all-in-one platform that pulls live concert data — presales, resell inventory, upcoming tours — from Bandsintown, Ticketmaster, and other real-time APIs. On top of the data layer we built a full social platform: user profiles with custom music, friends, real-time chat, a peer-to-peer marketplace with a trust factor system, and artist tracking with push notifications.",
    outcome:
      "A single destination where fans discover concerts, trade tickets, and connect — replacing the fragmented multi-app workflow with one cohesive experience built around real-time data.",
    techStack: [
      { label: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { label: "Backend", items: ["Node.js", "PostgreSQL"] },
      { label: "Integrations", items: ["Bandsintown API", "Ticketmaster API", "Real-time APIs"] },
    ],
    features: [
      {
        title: "Live Concert Data",
        desc: "Real-time aggregation of presales, resell inventory, and upcoming tours from Bandsintown, Ticketmaster, and more.",
      },
      {
        title: "Location-Based Discovery",
        desc: "Find concerts near you with integrated location mapping and proximity filtering.",
      },
      {
        title: "P2P Marketplace",
        desc: "Fan-to-fan ticket trading with a trust factor system that scores sellers based on transaction history.",
      },
      {
        title: "Artist Tracking & Alerts",
        desc: "Follow artists and get push notifications the moment new tours, presales, or resell listings drop.",
      },
      {
        title: "Social Profiles",
        desc: "Fully customizable user profiles with music, friend connections, and a real-time community chat room.",
      },
    ],
    images: [
      { src: "/snipes-1.png", alt: "Ticket Snipes — homepage" },
      { src: "/snipes-2.png", alt: "Ticket Snipes — concert discovery" },
      { src: "/snipes-3.png", alt: "Ticket Snipes — user profile" },
      { src: "/snipes-4.png", alt: "Ticket Snipes — marketplace" },
    ],
  },
  {
    slug: "cod-masters-8",
    n: "03",
    title: "Cod Master 8s",
    category: "Community Platform",
    tags: ["Discord Bot", "Community", "Full Stack"],
    desc: "Full-stack gaming community platform integrated with a custom Discord bot for automated management, alerts, and live leaderboard tracking.",
    href: "https://codmaster8s.com/",
    live: true,
    year: "2023",
    accent: "#1a7a5e",
    bg: "from-[#03120d] to-[#faf8f5]",
    img: "/portfolio-cod-masters.png",
    client: "CoDMaster$",
    role: "Lead Developer",
    duration: "10 weeks",
    problem:
      "Organizing amateur Call of Duty money matches and Twitter tournaments was chaotic and entirely manual. No dedicated platform existed for small-scale wagers, bracket management, or in-Discord 8s — hosts were coordinating everything through DMs and spreadsheets, and payments had no trustless mechanism.",
    solution:
      "We built a full-stack platform purpose-built for the COD community and paired it with a custom Discord bot that fully automates the 4v4 process. The platform handles tournament brackets, a wheel spin for random team generation, Money 8s matching, leaderboards, match/side betting, and stream watching. The bot handles captain selection, voting, channel generation, and crypto escrow payments — eliminating the manual overhead entirely.",
    outcome:
      "200+ active Discord members. Wheel spin and Money 8s went fully live in March 2026 with multiple tournaments hosted weekly. The platform fills a genuine gap in the amateur competitive COD scene — giving everyday hosts a professional-grade tool for organized, trustless money matches.",
    techStack: [
      { label: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { label: "Backend", items: ["Node.js", "PostgreSQL"] },
      { label: "Bot & Automation", items: ["Discord.js", "Crypto Escrow", "Webhook Integrations"] },
    ],
    features: [
      {
        title: "Tournament Bracket System",
        desc: "Hosts create and manage full tournament brackets with automated progression and result tracking.",
      },
      {
        title: "Wheel Spin Team Generator",
        desc: "Random team generation via wheel spin — removes bias and speeds up the pre-match setup process.",
      },
      {
        title: "Money 8s",
        desc: "Instant matching for paid 4v4 wager matches. Players enter, get matched, and funds are held in escrow until a winner is declared.",
      },
      {
        title: "Discord Bot Automation",
        desc: "Fully automates the 4v4 process within Discord — captain selection, player voting, channel generation, and crypto escrow payments.",
      },
      {
        title: "Leaderboard & Match Betting",
        desc: "Live leaderboards track wins across the community. Side betting lets spectators wager on individual matches.",
      },
    ],
    images: [
      { src: "/cod-1.png", alt: "Cod Master 8s — homepage" },
      { src: "/cod-2.png", alt: "Cod Master 8s — tournaments" },
      { src: "/cod-3.png", alt: "Cod Master 8s — bracket view" },
      { src: "/cod-4.png", alt: "Cod Master 8s — leaderboard" },
      { src: "/cod-5.png", alt: "Cod Master 8s — money 8s" },
      { src: "/cod-6.png", alt: "Cod Master 8s — wheel spin" },
      { src: "/cod-7.png", alt: "Cod Master 8s — Discord bot" },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjects(): ProjectDetail[] {
  return projects;
}
