import { Metadata } from "next";
import { ContactPageContent } from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | Symm Studios",
  description: "Get in touch. St. Petersburg, Florida. Monday–Friday 7am–5pm. Serving Tampa Bay.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
