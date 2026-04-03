import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Symm Studios",
  description: "Terms of Service for Symm Studios.",
};

export default function TermsPage() {
  const updated = "March 28, 2026";
  return (
    <div className="min-h-screen" style={{ background: "#faf8f5" }}>
      <div className="max-w-3xl mx-auto px-6 md:px-10 pt-36 pb-28">
        <p className="text-[11px] tracking-[0.22em] uppercase text-muted mb-6">Legal</p>
        <h1 className="font-display font-bold text-paper text-4xl md:text-5xl mb-3" style={{ letterSpacing: "-0.03em" }}>
          Terms of Service
        </h1>
        <p className="text-muted text-sm mb-16">Last updated: {updated}</p>

        <div className="space-y-10 text-paper/70 text-sm leading-relaxed">
          <section>
            <h2 className="font-display font-bold text-paper text-lg mb-3">1. Services</h2>
            <p>Symm Studios LLC (&ldquo;we&rdquo;, &ldquo;us&rdquo;) provides brand identity, web development, UI/UX design, and related creative services. Specific terms for any engagement are detailed in individual project agreements or statements of work.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-paper text-lg mb-3">2. Project Agreements</h2>
            <p>All client projects are governed by a separate written agreement signed prior to commencement of work. These terms apply to general use of this website only and do not constitute a contract for services.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-paper text-lg mb-3">3. Intellectual Property</h2>
            <p>Unless explicitly transferred in a project agreement, all creative work, designs, and code produced by Symm Studios remain our intellectual property until full payment is received, at which point ownership transfers to the client as defined in the project agreement.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-paper text-lg mb-3">4. Website Use</h2>
            <p>This website is provided for informational purposes. You agree not to use it in any way that is unlawful, harmful, or disruptive to our services or other users.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-paper text-lg mb-3">5. Limitation of Liability</h2>
            <p>This website is provided &ldquo;as is&rdquo; without warranties of any kind. Symm Studios is not liable for any damages arising from your use of this site.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-paper text-lg mb-3">6. Governing Law</h2>
            <p>These terms are governed by the laws of the State of Florida, United States.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-paper text-lg mb-3">7. Contact</h2>
            <p>Questions about these terms? Email <a href="mailto:symmwebstudio@gmail.com" className="text-flame hover:underline">symmwebstudio@gmail.com</a>.</p>
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
