"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Clock, Phone, Instagram } from "lucide-react";
import { useState } from "react";

export function ContactPageContent() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unknown error");
      setStatus("sent");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "#faf8f5" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-44 pb-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>

          <h1
            className="font-display font-bold text-paper leading-[0.92]"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            Let&apos;s build<br />
            <em className="not-italic text-flame">something great.</em>
          </h1>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24 md:pb-36">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 md:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16,1,0.3,1] }}
          >
            <p className="text-muted text-base leading-relaxed mb-12">
              Tell us about your project and we&apos;ll follow up within one business day.
            </p>
            <div className="space-y-7 border-t border-border pt-8">
              <div className="flex gap-4 items-start">
                <MapPin size={15} className="text-muted mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-paper text-sm font-medium">St. Petersburg, Florida</p>
                  <p className="text-muted text-xs mt-0.5">Serving clients globally</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Mail size={15} className="text-muted mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@symm.studio" className="text-paper text-sm font-medium hover:text-flame transition-colors">
                  contact@symm.studio
                </a>
              </div>
              <div className="flex gap-4 items-start">
                <Phone size={15} className="text-muted mt-0.5 flex-shrink-0" />
                <div className="space-y-1.5">
                  <div>
                    <p className="text-paper text-sm font-medium">Zen M.</p>
                    <a href="tel:+17277737325" className="text-muted text-xs hover:text-flame transition-colors">(727) 773-7325</a>
                  </div>
                  <div>
                    <p className="text-paper text-sm font-medium">Jacob B.</p>
                    <a href="tel:+17276577841" className="text-muted text-xs hover:text-flame transition-colors">(727) 657-7841</a>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Instagram size={15} className="text-muted mt-0.5 flex-shrink-0" />
                <a
                  href="https://instagram.com/symmwebstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-paper text-sm font-medium hover:text-flame transition-colors"
                >
                  @symmwebstudio
                </a>
              </div>
              <div className="flex gap-4 items-start">
                <Clock size={15} className="text-muted mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-paper text-sm font-medium">Monday – Friday</p>
                  <p className="text-muted text-xs mt-0.5">7:00 AM – 5:00 PM EST</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16,1,0.3,1] }}
          >
            {status === "sent" ? (
              <div className="border border-border p-16 text-center">
                <p className="font-display font-bold text-3xl text-paper mb-3">Message received.</p>
                <p className="text-muted text-sm">We&apos;ll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-8">
                <Field label="Name" id="name" name="name" value={form.name} onChange={onChange} placeholder="Your name" />
                <Field label="Email" id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="your@email.com" />

                <div>
                  <label htmlFor="service" className="block text-xs tracking-[0.18em] uppercase text-muted mb-2">
                    Service
                  </label>
                  <select
                    id="service" name="service" value={form.service} onChange={onChange}
                    className="w-full py-3 border-b border-border bg-transparent text-paper text-sm outline-none focus:border-flame transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-void">Select a service…</option>
                    {["Brand Identity", "Web Development", "UI/UX Design", "App Development", "SEO & Content", "Other"].map((s) => (
                      <option key={s} value={s} className="bg-void">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs tracking-[0.18em] uppercase text-muted mb-2">
                    Message
                  </label>
                  <textarea
                    id="message" name="message" value={form.message} onChange={onChange}
                    required rows={5}
                    placeholder="Tell us about your project…"
                    className="w-full py-3 border-b border-border bg-transparent text-paper text-sm outline-none focus:border-flame transition-colors resize-none placeholder:text-muted/30"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-gold">{errorMsg}</p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  data-cursor="SEND"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-flame text-void font-display font-bold text-[13px] tracking-[0.12em] uppercase hover:bg-paper transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending…" : "Send Message"}
                  {status !== "loading" && (
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label, id, name, type = "text", value, onChange, placeholder,
}: {
  label: string; id: string; name: string; type?: string;
  value: string; onChange: React.ChangeEventHandler<HTMLInputElement>; placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs tracking-[0.18em] uppercase text-muted mb-2">
        {label}
      </label>
      <input
        id={id} name={name} type={type} value={value} onChange={onChange} required
        placeholder={placeholder}
        className="w-full py-3 border-b border-border bg-transparent text-paper text-sm outline-none focus:border-flame transition-colors placeholder:text-muted/30"
      />
    </div>
  );
}
