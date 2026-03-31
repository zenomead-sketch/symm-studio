import { Metadata } from "next";
import { PricingPageContent } from "@/components/PricingPageContent";

export const metadata: Metadata = {
  title: "Pricing | Symm Studios",
  description: "Transparent, fixed-price packages for websites, automation, and creative work. No surprises.",
};

export default function PricingPage() {
  return <PricingPageContent />;
}
