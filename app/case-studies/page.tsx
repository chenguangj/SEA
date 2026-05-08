import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: "01",
    client: "TokoBesar",
    country: "Indonesia",
    industry: "E-commerce",
    tag: "Real-time Chat · Multilingual KB · Proactive Outreach",
    headline: "73% fewer support tickets across 5K customers",
    challenge:
      "TokoBesar, Indonesia's second-largest e-commerce platform, was handling over 2.4 million customer support interactions per month across Bahasa Indonesia, Javanese, Sundanese, and English. Their 1,200-person support team was overwhelmed, average resolution time had climbed to 18 minutes, and CSAT scores were falling quarter over quarter.",
    solution:
      "We deployed Modules A, C, and D in a phased rollout over six weeks. The real-time engine handled tier-1 queries with full product catalog context injected per session. The multilingual knowledge base synchronized across four language variants within hours of any product policy change. The proactive outreach engine took over order status, shipping delay, and cart abandonment notifications — previously handled manually.",
    results: [
      { value: "73%", label: "Reduction in inbound support tickets" },
      { value: "4.2×", label: "Faster average resolution time" },
      { value: "91%", label: "CSAT score (up from 67%)" },
      { value: "$2.1M", label: "Annual support cost savings" },
    ],
    quote:
      "We went from drowning in tickets to having our team focus on genuinely complex cases. The multilingual sync alone saved us three full-time translators.",
    quoteName: "Head of Customer Operations, TokoBesar",
    modules: ["A", "C", "D"],
  },
  {
    id: "02",
    client: "VietPay",
    country: "Vietnam",
    industry: "Fintech / Digital Payments",
    tag: "All 4 Modules · Compliance-grade",
    headline: "99.2% compliance rate with zero manual review backlog",
    challenge:
      "VietPay processes over 8 million digital transactions daily and is subject to Vietnam's State Bank regulations on customer communication. Every AI-generated response touching account status, fraud alerts, or payment disputes had to meet strict compliance standards. Their previous chatbot solution failed regulatory audit twice in 18 months.",
    solution:
      "All four modules were deployed with a compliance layer built into the real-time engine's context injection. Policy documents, regulatory guidelines, and approved response templates were loaded into the 200K context window alongside live conversation history. The nightly batch engine audited every conversation against compliance rules and flagged deviations before the next business day. The multilingual KB maintained Vietnamese and English variants in lockstep.",
    results: [
      { value: "99.2%", label: "Regulatory compliance rate" },
      { value: "0", label: "Manual review backlog (down from 3,400/week)" },
      { value: "89%", label: "Customer satisfaction score" },
      { value: "60%", label: "Reduction in compliance operations cost" },
    ],
    quote:
      "The 200K context window is what made this possible. We can inject our entire compliance rulebook into every single conversation. No other platform could do that.",
    quoteName: "Chief Compliance Officer, VietPay",
    modules: ["A", "B", "C", "D"],
  },
  {
    id: "03",
    client: "LogiStar",
    country: "Thailand · Regional",
    industry: "Logistics & Supply Chain",
    tag: "Proactive Outreach · Multilingual KB · Batch Analytics",
    headline: "91% on-time notification rate across 6 countries",
    challenge:
      "LogiStar operates last-mile delivery across Thailand, Malaysia, Singapore, Vietnam, Cambodia, and Myanmar. With 340,000 daily shipments and customers expecting real-time updates in their native language, their legacy SMS notification system was generating 45,000 inbound 'where is my package' queries per day — consuming 60% of their support capacity.",
    solution:
      "Modules B, C, and D were deployed to transform LogiStar's notification infrastructure. The proactive outreach engine generated personalized shipment updates triggered by logistics events — pickup, in-transit, out-for-delivery, delivered, exception. The multilingual KB maintained localized templates across Thai, Malay, Vietnamese, Khmer, and Burmese. The nightly batch engine analyzed delivery exception patterns and updated routing logic weekly.",
    results: [
      { value: "91%", label: "On-time notification delivery rate" },
      { value: "45K→6K", label: "Daily inbound 'where is my package' queries" },
      { value: "6", label: "Countries, 5 languages, one platform" },
      { value: "38%", label: "Reduction in total support headcount" },
    ],
    quote:
      "Our customers in rural Thailand and Cambodia now get shipment updates in their own language before they even think to ask. That's a step change in service quality.",
    quoteName: "VP of Operations, LogiStar",
    modules: ["B", "C", "D"],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-24 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
            <span className="w-8 h-px bg-foreground/30" />
            Client Results
          </span>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight mb-8">
            Real deployments.
            <br />
            <span className="text-stroke">Measurable results.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            How enterprise clients across Southeast Asia use SEA FAN AI to
            reduce costs, improve compliance, and scale customer operations.
          </p>
        </div>
      </section>

      {/* Summary stats */}
      <section id="stats" className="border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-foreground/10">
            {[
              { value: "35+", label: "Enterprise clients deployed" },
              { value: "6", label: "Countries in production" },
              { value: "11", label: "Languages in active use" },
              { value: "99.9%", label: "Average platform uptime" },
            ].map((stat) => (
              <div key={stat.label} className="py-10 px-8 first:pl-0">
                <div className="font-display text-4xl lg:text-5xl mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section id="clients" className="py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-32">
          {caseStudies.map((cs) => (
            <article key={cs.id} className="grid lg:grid-cols-12 gap-12">
              {/* Left: meta */}
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <span className="font-mono text-xs text-muted-foreground block mb-4">
                    {cs.id}
                  </span>
                  <h2 className="font-display text-4xl lg:text-5xl mb-3">
                    {cs.client}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    {cs.country}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {cs.industry}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {cs.modules.map((m) => (
                      <span
                        key={m}
                        className="px-2 py-0.5 border border-foreground/20 text-xs font-mono"
                      >
                        Module {m}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                    {cs.tag}
                  </p>
                </div>
              </div>

              {/* Right: content */}
              <div className="lg:col-span-8">
                <h3 className="font-display text-3xl lg:text-4xl mb-10 leading-tight">
                  {cs.headline}
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/10 mb-12">
                  {cs.results.map((r) => (
                    <div key={r.label} className="bg-background p-6">
                      <div className="font-display text-3xl mb-2">{r.value}</div>
                      <div className="text-xs text-muted-foreground leading-snug">
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-8 mb-12">
                  <div>
                    <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                      Challenge
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                      Solution
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>
                </div>

                <blockquote className="border-l-2 border-foreground pl-6">
                  <p className="text-lg leading-relaxed mb-4">"{cs.quote}"</p>
                  <cite className="text-sm text-muted-foreground not-italic">
                    — {cs.quoteName}
                  </cite>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-foreground/10 bg-foreground/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-5xl lg:text-6xl tracking-tight mb-6">
            Your results, next.
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Most enterprise deployments go live within 6 weeks. Let's talk
            about your specific workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 h-14 text-base rounded-full hover:bg-foreground/90 transition-colors group"
            >
              Talk to Sales
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 border border-foreground/20 px-8 h-14 text-base rounded-full hover:bg-foreground/5 transition-colors"
            >
              Explore the Platform
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
