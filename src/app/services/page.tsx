import { Metadata } from "next";
import { ServicesPageContent } from "@/components/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services | Symm Studios",
  description: "Brand identity, web development, UI/UX design, creative direction, content creation, app development, SEO, and more. Serving Tampa Bay.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
