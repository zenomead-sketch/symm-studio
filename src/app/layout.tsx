import type { Metadata } from "next";
import { Geist, Cormorant_Garamond, Syne } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { StickyCTA } from "@/components/StickyCTA";
import { Cursor } from "@/components/Cursor";
import { JsonLd } from "@/components/JsonLd";
import { GoogleAnalytics } from "@next/third-parties/google";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Symm Studios | Brand Identity & Web Development",
    template: "%s | Symm Studios",
  },
  description:
    "Boutique creative studio building brand identities, websites, and digital products for ambitious businesses. St. Petersburg, FL.",
  metadataBase: new URL("https://www.symm.studio"),
  keywords: [
    "brand identity St Petersburg FL",
    "web development Tampa Bay",
    "creative studio Florida",
    "UI UX design agency",
    "digital products",
    "branding agency",
    "web design St Petersburg",
    "Symm Studios",
  ],
  authors: [
    { name: "Jacob Broerman", url: "https://www.linkedin.com/in/jacob-broerman" },
    { name: "Zen Mead", url: "https://www.linkedin.com/in/zen-mead" },
  ],
  creator: "Symm Studios",
  publisher: "Symm Studios",
  alternates: { canonical: "https://www.symm.studio" },
  icons: {
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Symm Studios | Brand Identity & Web Development",
    description:
      "Boutique creative studio building brand identities, websites, and digital products for ambitious businesses. St. Petersburg, FL. Serving clients worldwide.",
    url: "https://www.symm.studio",
    siteName: "Symm Studios",
    locale: "en_US",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Symm Studios: Brand Identity & Web Development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Symm Studios | Brand Identity & Web Development",
    description:
      "Boutique creative studio building brand identities, websites, and digital products. St. Petersburg, FL.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "Creative Agency",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://www.symm.studio/#organization",
      name: "Symm Studios",
      url: "https://www.symm.studio",
      logo: {
        "@type": "ImageObject",
        url: "https://www.symm.studio/opengraph-image.png",
        width: 1200,
        height: 630,
      },
      description:
        "Symm Studios is a boutique creative studio based in St. Petersburg, FL building brand identities, high-performance websites, and digital products for ambitious businesses worldwide.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "St. Petersburg",
        addressRegion: "FL",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 27.7731,
        longitude: -82.6400,
      },
      areaServed: [
        { "@type": "City", name: "St. Petersburg", containedInPlace: { "@type": "State", name: "Florida" } },
        { "@type": "City", name: "Tampa" },
        { "@type": "Country", name: "United States" },
        { "@type": "Place", name: "Worldwide" },
      ],
      founder: [
        {
          "@type": "Person",
          "@id": "https://www.symm.studio/#jacob-broerman",
          name: "Jacob Broerman",
          jobTitle: "CEO & Lead Developer",
          url: "https://www.linkedin.com/in/jacob-broerman",
          sameAs: ["https://www.linkedin.com/in/jacob-broerman"],
        },
        {
          "@type": "Person",
          "@id": "https://www.symm.studio/#zen-mead",
          name: "Zen Mead",
          jobTitle: "Co-founder & Chief Marketing Officer",
          url: "https://www.linkedin.com/in/zen-mead",
          sameAs: ["https://www.linkedin.com/in/zen-mead"],
        },
      ],
      sameAs: [
        "https://instagram.com/symmwebstudio",
        "https://github.com/zenomead-sketch/symm-studio",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Creative Studio Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Identity" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Creative Direction" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & Content Strategy" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "App Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agentic Automation" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.symm.studio/#website",
      url: "https://www.symm.studio",
      name: "Symm Studios",
      publisher: { "@id": "https://www.symm.studio/#organization" },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body
        className={`${geist.variable} ${cormorant.variable} ${syne.variable} antialiased text-paper flex flex-col min-h-screen`}
        style={{ background: "#faf8f5" }}
      >
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <StickyCTA />
        </SmoothScroll>
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
