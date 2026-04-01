import type { Metadata } from "next";
import { Geist, Cormorant_Garamond, Syne } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { StickyCTA } from "@/components/StickyCTA";
import { Cursor } from "@/components/Cursor";

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
  title: "Symm Studios | Brand Identity, Web Development & Creative Direction",
  description:
    "Symm Studios — world-class brand identity, web development, UI/UX design, and creative direction. Based in St. Petersburg, FL. Serving clients globally.",
  metadataBase: new URL("https://www.symm.studio"),
  openGraph: {
    title: "Symm Studios | Brand Identity, Web Development & Creative Direction",
    description:
      "World-class digital experiences for brands with global ambition. Brand identity, web development, UI/UX design, and creative direction.",
    url: "https://www.symm.studio",
    siteName: "Symm Studios",
    locale: "en_US",
    type: "website",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Symm Studios" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Symm Studios | Brand Identity & Web Development",
    description: "World-class digital experiences for brands with global ambition.",
    images: ["/opengraph-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
    </html>
  );
}
