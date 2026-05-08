"use client";

import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ScrollReveal } from "@/components/landing/scroll-reveal";
import { ArrowRight } from "lucide-react";

const values = [
  {
    id: "01",
    title: "Multilingual-first",
    description:
      "Southeast Asia is not a monolith. We build every product decision around the reality that your customers speak Thai, Vietnamese, Malay, Indonesian, Filipino, and eight other languages — not just English.",
  },
  {
    id: "02",
    title: "Enterprise-grade reliability",
    description:
      "Our clients run mission-critical customer operations on our platform. 99.9% uptime is a floor, not a target. We design for the failure modes that matter at scale.",
  },
  {
    id: "03",
    title: "Token efficiency as a discipline",
    description:
      "AI cost is a real constraint for enterprise clients. We architect every module to maximize business output per token — batch processing, context reuse, and intelligent caching are core to how we build.",
  },
  {
    id: "04",
    title: "Compliance by design",
    description:
      "Financial services, healthcare, and government clients in SEA operate under strict regulatory frameworks. We treat compliance as an architectural requirement, not an afterthought.",
  },
];

const milestones = [
  { year: "2019", event: "SEA FAN (PTE. LTD.) incorporated in Singapore" },
  { year: "2020", event: "First enterprise deployment — regional e-commerce client in Indonesia" },
  { year: "2021", event: "Multilingual Knowledge Base engine launched, covering 7 SEA languages" },
  { year: "2022", event: "Nightly Batch Processing Engine released; 200K context architecture finalized" },
  { year: "2023", event: "Proactive Outreach Engine launched; client base reaches 20 enterprises" },
  { year: "2024", event: "11-language coverage achieved; expanded to Vietnam, Thailand, Philippines" },
  { year: "2025", event: "35+ enterprise clients; platform processes 14B+ tokens monthly" },
  { year: "2026", event: "Targeting $1M+ monthly revenue milestone with 35 anchor clients" },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-24 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up">
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
              <span className="w-8 h-px bg-foreground/30" />
              Company
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight mb-8">
              Built for
              <br />
              <span className="text-stroke">Southeast Asia.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              SEA FAN (PTE. LTD.) is a Singapore-based AI company specializing in
              enterprise chatbot development and deployment across Southeast Asia.
              We exist because the region's linguistic and regulatory complexity
              demands a platform built specifically for it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section id="privacy" className="py-32 lg:py-40 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
            <ScrollReveal direction="left">
              <div>
                <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
                  Mission
                </span>
                <h2 className="font-display text-5xl lg:text-6xl tracking-tight mb-8">
                  Make enterprise AI
                  <br />
                  work in SEA.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Most AI platforms are built for English-speaking markets and
                  retrofitted for the rest of the world. We started from the
                  opposite direction: 11 Southeast Asian languages, regional
                  compliance frameworks, and the operational realities of
                  enterprises running at scale in emerging markets.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our four-module platform — real-time conversation, nightly
                  batch processing, proactive outreach, and multilingual knowledge
                  management — was designed to handle the token volumes and
                  linguistic complexity that generic solutions cannot.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 gap-px bg-foreground/10">
              {[
                { value: "2019", label: "Founded in Singapore" },
                { value: "35+", label: "Enterprise clients" },
                { value: "11", label: "SEA languages" },
                { value: "14B+", label: "Tokens processed monthly" },
              ].map((stat, i) => (
                <ScrollReveal key={stat.label} direction="right" delay={i * 80}>
                  <div className="bg-background p-8 h-full">
                    <div className="font-display text-4xl lg:text-5xl mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="terms" className="py-32 lg:py-40 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up">
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-16">
              How We Work
            </span>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-px bg-foreground/10">
            {values.map((v, i) => (
              <ScrollReveal key={v.id} direction="up" delay={i * 80}>
                <div className="bg-background p-8 lg:p-12 h-full hover:bg-foreground/[0.02] transition-colors">
                  <span className="font-mono text-xs text-muted-foreground block mb-4">{v.id}</span>
                  <h3 className="font-display text-2xl lg:text-3xl mb-4">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 lg:py-40 border-b border-foreground/10 bg-foreground/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ScrollReveal direction="up">
            <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-16">
              Timeline
            </span>
          </ScrollReveal>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} direction="left" delay={i * 50}>
                <div className="grid grid-cols-12 gap-8 py-8 border-t border-foreground/10 group">
                  <div className="col-span-2 md:col-span-1">
                    <span className="font-mono text-sm text-muted-foreground">{m.year}</span>
                  </div>
                  <div className="col-span-10 md:col-span-11">
                    <p className="text-foreground/80 group-hover:text-foreground transition-colors leading-relaxed">
                      {m.event}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section id="security" className="py-32 lg:py-40 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <div>
                <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-8">
                  Company Details
                </span>
                <dl className="space-y-6">
                  {[
                    { label: "Legal Name", value: "SEA FAN (PTE. LTD.)" },
                    { label: "Incorporated", value: "2019, Singapore" },
                    { label: "Industry", value: "AI Chatbot Development & Deployment" },
                    { label: "Registered Address", value: "114 Ho Ching Road, #02-76 Corporation Court, Singapore 610114" },
                    { label: "Business Email", value: "service@seafanai.com" },
                    { label: "Contact", value: "+65 9881 4000" },
                  ].map((item) => (
                    <div key={item.label} className="grid grid-cols-2 gap-4 py-4 border-b border-foreground/10">
                      <dt className="text-sm text-muted-foreground font-mono">{item.label}</dt>
                      <dd className="text-sm">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-8">
                  Sales Region
                </span>
                <div className="space-y-4">
                  {["Indonesia", "Vietnam", "Thailand", "Malaysia", "Philippines", "Singapore", "Cambodia", "Myanmar"].map((country, i) => (
                    <div key={country} className="flex items-center gap-3 py-3 border-b border-foreground/10 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                      <span className="text-sm group-hover:text-foreground transition-colors">{country}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal direction="up">
            <h2 className="font-display text-5xl lg:text-6xl tracking-tight mb-6">Work with us.</h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
              Whether you're evaluating the platform or ready to deploy, our team
              is based in Singapore and available across SEA time zones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 h-14 text-base rounded-full hover:bg-foreground/90 transition-colors group">
                Get in Touch
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="/solutions" className="inline-flex items-center justify-center gap-2 border border-foreground/20 px-8 h-14 text-base rounded-full hover:bg-foreground/5 transition-colors">
                Explore the Platform
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
