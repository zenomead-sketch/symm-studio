import { Metadata } from "next";
import { BlogPageContent } from "@/components/BlogPageContent";

export const metadata: Metadata = {
  title: "Blog | Symm Studios",
  description:
    "Articles, case studies, and behind-the-scenes updates from Symm Studios — a creative development agency based in St. Petersburg, FL.",
};

export default function BlogPage() {
  return <BlogPageContent />;
}
