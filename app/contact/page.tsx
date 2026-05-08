"use client";

import { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ArrowRight, Check } from "lucide-react";

const inquiryTypes = [
  "Enterprise deployment",
  "Pricing & plans",
  "Technical integration",
  "Partnership",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    inquiry: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!form.email.trim()) next.email = "Please enter a valid work email.";
    if (!form.company.trim()) next.company = "Please enter your company name.";
    if (!form.message.trim()) next.message = "Please enter a message.";
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setSubmitted(true);
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-24 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
            <span className="w-8 h-px bg-foreground/30" />
            Contact
          </span>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight mb-8">
            Let's talk
            <br />
            <span className="text-stroke">enterprise AI.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Our team is based in Singapore and covers all SEA time zones. Most
            enterprise deployments go live within 6 weeks of first contact.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Contact info */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-12">
                <div>
                  <h2 className="font-display text-2xl mb-6">
                    Singapore HQ
                  </h2>
                  <address className="not-italic space-y-2 text-sm text-muted-foreground">
                    <p>SEA FAN (PTE. LTD.)</p>
                    <p>114 Ho Ching Road</p>
                    <p>#02-76 Corporation Court</p>
                    <p>Singapore 610114</p>
                  </address>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">
                      Business Email
                    </p>
                    <a
                      href="mailto:service@seafanai.com"
                      className="text-sm hover:text-muted-foreground transition-colors"
                    >
                      service@seafanai.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:+6598814000"
                      className="text-sm hover:text-muted-foreground transition-colors"
                    >
                      +65 9881 4000
                    </a>
                  </div>
                  {/* <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">
                      UEN
                    </p>
                    <p className="text-sm text-muted-foreground">201923085W</p>
                  </div> */}
                </div>

                <div>
                  <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                    Response Time
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: "Enterprise inquiries", time: "< 4 hours" },
                      { label: "Technical questions", time: "< 24 hours" },
                      { label: "General inquiries", time: "1–2 business days" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between text-sm py-2 border-b border-foreground/10"
                      >
                        <span className="text-muted-foreground">
                          {item.label}
                        </span>
                        <span className="font-mono text-xs">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="flex flex-col items-start gap-6 py-16">
                  <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                    <Check className="w-6 h-6 text-background" />
                  </div>
                  <h2 className="font-display text-4xl">Message received.</h2>
                  <p className="text-muted-foreground max-w-md leading-relaxed">
                    Thank you for reaching out. Our team will get back to you
                    within 4 hours for enterprise inquiries, or by the next
                    business day for general questions.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setErrors({});
                      setForm({
                        name: "",
                        email: "",
                        company: "",
                        country: "",
                        inquiry: "",
                        message: "",
                      });
                    }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`w-full bg-transparent border px-4 h-12 text-sm focus:outline-none transition-colors placeholder:text-muted-foreground/50 ${errors.name ? "border-red-500" : "border-foreground/20 focus:border-foreground"}`}
                      />
                      {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3"
                      >
                        Work Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={`w-full bg-transparent border px-4 h-12 text-sm focus:outline-none transition-colors placeholder:text-muted-foreground/50 ${errors.email ? "border-red-500" : "border-foreground/20 focus:border-foreground"}`}
                      />
                      {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3"
                      >
                        Company *
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className={`w-full bg-transparent border px-4 h-12 text-sm focus:outline-none transition-colors placeholder:text-muted-foreground/50 ${errors.company ? "border-red-500" : "border-foreground/20 focus:border-foreground"}`}
                      />
                      {errors.company && <p className="mt-1.5 text-xs text-red-500">{errors.company}</p>}
                    </div>
                    <div>
                      <label
                        htmlFor="country"
                        className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3"
                      >
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        className="w-full bg-background border border-foreground/20 px-4 h-12 text-sm focus:outline-none focus:border-foreground transition-colors text-foreground"
                      >
                        <option value="" className="text-muted-foreground">
                          Select country
                        </option>
                        {[
                          "Singapore",
                          "Indonesia",
                          "Vietnam",
                          "Thailand",
                          "Malaysia",
                          "Philippines",
                          "Cambodia",
                          "Myanmar",
                          "Other",
                        ].map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                      Inquiry Type
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() =>
                            setForm((prev) => ({ ...prev, inquiry: type }))
                          }
                          className={`px-4 py-2 text-sm border transition-colors ${
                            form.inquiry === type
                              ? "border-foreground bg-foreground text-background"
                              : "border-foreground/20 hover:border-foreground/50"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your use case, current scale, and what you're trying to solve."
                      className={`w-full bg-transparent border px-4 py-3 text-sm focus:outline-none transition-colors resize-none placeholder:text-muted-foreground/50 ${errors.message ? "border-red-500" : "border-foreground/20 focus:border-foreground"}`}
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 h-14 text-base rounded-full hover:bg-foreground/90 transition-colors group"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
