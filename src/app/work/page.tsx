import { Metadata } from "next";
import { WorkPageContent } from "@/components/WorkPageContent";

export const metadata: Metadata = {
  title: "Work | Symm Studios",
  description: "Past projects: Lien on Us Medical, Ticket Snipes, Cod Master 8s. Web and app development in Tampa Bay.",
};

export default function WorkPage() {
  return <WorkPageContent />;
}
