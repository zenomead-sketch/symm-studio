import Link from "next/link";

export function StudioContent() {
  return (
    <section style={{ background: "#faf8f5" }} className="py-20 md:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid md:grid-cols-[1fr_1.6fr] gap-16 md:gap-24">

          {/* Left — label + heading */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-flame mb-6">
              Why Symm Studios
            </p>
            <h2
              className="font-display font-bold text-paper leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)", letterSpacing: "-0.025em" }}
            >
              The studio model that actually works for your business.
            </h2>

            <div className="mt-10 pt-10 border-t border-border space-y-3">
              {[
                ["Brand Identity", "/services"],
                ["Web Development", "/services"],
                ["UI/UX Design", "/services"],
                ["App Development", "/services"],
                ["SEO & Content Strategy", "/services"],
                ["Agentic Automation", "/services"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="flex items-center justify-between group py-2 border-b border-border hover:border-flame transition-colors duration-300"
                >
                  <span className="text-sm text-muted group-hover:text-paper transition-colors duration-300 tracking-wide">
                    {label}
                  </span>
                  <span className="text-flame opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right — editorial content */}
          <div className="space-y-8 text-muted leading-relaxed">
            <p className="text-paper text-lg leading-relaxed font-medium">
              Most agencies sell you a process. We sell you an outcome. Most clients only learn the difference after wasting money on the wrong partner.
            </p>

            <div>
              <h3 className="font-display font-bold text-paper text-base mb-3" style={{ letterSpacing: "-0.02em" }}>
                Two founders. Full accountability.
              </h3>
              <p>
                Symm Studios is led by Jacob Broerman and Zen Mead. Jacob is the CEO and lead developer. He combines expertise in business analytics, cybersecurity, and AI to build systems that are scalable from day one. Zen is our CMO, who built and scaled his own service business before co-founding Symm. That hands-on experience shows up in every SEO strategy, conversion funnel, and brand decision we make.
              </p>
              <p className="mt-4">
                When you work with Symm Studios, you work directly with us. No account managers passing notes, no junior designers shipping your final product without oversight. Every deliverable goes through the two people whose names are on the door.
              </p>
            </div>

            <div>
              <h3 className="font-display font-bold text-paper text-base mb-3" style={{ letterSpacing: "-0.02em" }}>
                Built for ambitious businesses, not average ones.
              </h3>
              <p>
                We are based in St. Petersburg, Florida, and serve clients across the United States and internationally. Our clients range from healthcare platforms in Los Angeles and ticket marketplace startups to competitive gaming communities. All of them need digital infrastructure built to handle real volume and real users.
              </p>
              <p className="mt-4">
                We have maintained 100% client retention since founding Symm Studios, with an average response time under 24 hours. These are not marketing claims. They are the direct result of treating every engagement like it is our own business on the line.
              </p>
            </div>

            <div>
              <h3 className="font-display font-bold text-paper text-base mb-3" style={{ letterSpacing: "-0.02em" }}>
                From brand identity to full-stack engineering.
              </h3>
              <p>
                Symm offers brand identity and logo design, custom web development using Next.js and React, UI/UX design, creative direction, app development, SEO strategy, and agentic AI automation. Most studios offer a slice of this. We cover the full stack because great digital products need design and engineering working from the same brief, by the same team, toward the same goal.
              </p>
              <p className="mt-4">
                If you are looking for a branding agency in Tampa Bay, a web development studio in St. Petersburg FL, or a partner who understands both design and the business metrics behind it: you have found us.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-flame hover:text-paper transition-colors duration-300"
              >
                See our case studies →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
