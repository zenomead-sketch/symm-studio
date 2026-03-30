import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Symm Studios",
  description: "Privacy Policy for Symm Studios — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  const updated = "March 28, 2026";
  return (
    <div className="min-h-screen" style={{ background: "#faf8f5" }}>
      <div className="max-w-3xl mx-auto px-6 md:px-10 pt-36 pb-28">
        <p className="text-[11px] tracking-[0.22em] uppercase text-muted mb-6">Legal</p>
        <h1 className="font-display font-bold text-paper text-4xl md:text-5xl mb-3" style={{ letterSpacing: "-0.03em" }}>
          Privacy Policy
        </h1>
        <p className="text-muted text-sm mb-16">Last updated: {updated}</p>

        <div className="prose-symm space-y-10 text-paper/70 text-sm leading-relaxed">
          <section>
            <h2 className="font-display font-bold text-paper text-lg mb-3">1. Information We Collect</h2>
            <p>When you submit our contact form, we collect your name, email address, and the content of your message. We do not collect any payment information or create user accounts.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-paper text-lg mb-3">2. How We Use Your Information</h2>
            <p>Information you submit through the contact form is used solely to respond to your inquiry. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-paper text-lg mb-3">3. Email Communications</h2>
            <p>If you contact us, we may respond via email. We will not add you to any mailing list without your explicit consent.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-paper text-lg mb-3">4. Cookies & Analytics</h2>
            <p>This site may use essential cookies to ensure basic functionality. We do not currently use third-party analytics tracking.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-paper text-lg mb-3">5. Data Security</h2>
            <p>We take reasonable measures to protect your information. However, no method of transmission over the internet is 100% secure. Contact form submissions are transmitted via Resend, a transactional email provider.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-paper text-lg mb-3">6. Your Rights</h2>
            <p>You may request deletion of any personal data you have submitted to us by emailing <a href="mailto:symmwebstudio@gmail.com" className="text-flame hover:underline">symmwebstudio@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-paper text-lg mb-3">7. Contact</h2>
            <p>For any privacy-related questions, email us at <a href="mailto:symmwebstudio@gmail.com" className="text-flame hover:underline">symmwebstudio@gmail.com</a>.</p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <Link href="/" className="text-[11px] tracking-widest uppercase text-muted hover:text-paper transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
