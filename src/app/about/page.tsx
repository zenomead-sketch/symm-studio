import { Metadata } from "next";
import { AboutPageContent } from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About | Symm Studios",
  description: "Symm Studios — St. Petersburg, Florida. Brand identity, web development, and creative direction for the Tampa Bay area.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
