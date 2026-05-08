import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ArrowRight, Zap, Moon, Bell, Globe } from "lucide-react";

const modules = [
  {
    id: "01",
    icon: Zap,
    name: "Real-time Conversation Engine",
    tag: "Module A",
    trigger: "User-triggered",
    description:
      "Delivers instant, context-aware responses by injecting full conversation history and enterprise knowledge into every reply. Handles compliance-grade customer service at scale with sub-second latency.",
    stats: [
      { value: "< 800ms", label: "Average response latency" },
      { value: "200K", label: "Context window tokens" },
      { value: "99.9%", label: "Uptime SLA" },
    ],
    features: [
      "Full-context injection per conversation turn",
      "Compliance-aware response filtering",
      "Real-time sentiment analysis and escalation routing",
      "Multi-channel support (web, app, WhatsApp, LINE)",
      "Live agent handoff with full context transfer",
    ],
  },
  {
    id: "02",
    icon: Moon,
    name: "Nightly Batch Processing Engine",
    tag: "Module B",
    trigger: "Scheduled — runs automatically",
    description:
      "Processes the full day's conversation corpus overnight. Generates analytics reports, updates routing rules, refreshes knowledge base entries, and surfaces anomalies — all without human intervention.",
    stats: [
      { value: "78%", label: "Share of daily token load" },
      { value: "~320M", label: "Tokens processed nightly" },
      { value: "< 4h", label: "Full corpus processing time" },
    ],
    features: [
      "Full-day conversation analysis and KPI extraction",
      "Automated report generation for enterprise dashboards",
      "Dynamic routing rule and policy updates",
      "Anomaly detection and escalation flagging",
      "Knowledge base gap identification and patching",
    ],
  },
  {
    id: "03",
    icon: Bell,
    name: "Proactive Outreach Engine",
    tag: "Module C",
    trigger: "Event-triggered automation",
    description:
      "Monitors business events and automatically generates personalized outreach — order confirmations, shipping updates, cart recovery messages, and churn-prevention campaigns — at enterprise scale.",
    stats: [
      { value: "3–5×", label: "Higher open rate vs. generic blasts" },
      { value: "< 2min", label: "Event-to-message latency" },
      { value: "11", label: "Languages per campaign" },
    ],
    features: [
      "Order and logistics notification generation",
      "Churn-risk user retention campaigns",
      "Personalized upsell and cross-sell messaging",
      "A/B variant generation at scale",
      "Delivery channel orchestration (SMS, email, push, chat)",
    ],
  },
  {
    id: "04",
    icon: Globe,
    name: "Multilingual Knowledge Base",
    tag: "Module D",
    trigger: "Brand-update triggered",
    description:
      "Maintains a synchronized, authoritative knowledge base across 11 Southeast Asian languages. When brand content changes, the engine propagates updates to all language variants automatically — no manual translation required.",
    stats: [
      { value: "11", label: "SEA languages supported" },
      { value: "< 6h", label: "Full sync after brand update" },
      { value: "98.4%", label: "Translation consistency score" },
    ],
    features: [
      "Thai, Vietnamese, Malay, Indonesian, Filipino, and 6 more",
      "Automatic propagation on brand content change",
      "Terminology consistency enforcement across variants",
      "Regional compliance variant management",
      "Version-controlled knowledge snapshots with rollback",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-24 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
            <span className="w-8 h-px bg-foreground/30" />
            Platform Architecture
          </span>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight mb-8">
            Four engines.
            <br />
            <span className="text-stroke">One platform.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            SEA FAN AI runs on four parallel modules — each triggered
            differently, each optimized for a distinct workload. Together they
            drive enterprise-grade AI operations across Southeast Asia.
          </p>
        </div>
      </section>

      {/* Key metrics bar */}
      <section id="metrics" className="border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-foreground/10">
            {[
              { value: "410M", label: "Tokens per client per day" },
              { value: "78%", label: "Batch processing share" },
              { value: "35+", label: "Enterprise clients" },
              { value: "$1M+", label: "Monthly revenue potential" },
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

      {/* Modules */}
      <section id="modules" className="py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-px">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.id}
                className="border border-foreground/10 p-8 lg:p-12 grid lg:grid-cols-2 gap-12 hover:bg-foreground/[0.02] transition-colors"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-xs text-muted-foreground">
                      {mod.id}
                    </span>
                    <span className="px-2 py-0.5 border border-foreground/20 text-xs font-mono">
                      {mod.tag}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {mod.trigger}
                    </span>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <Icon className="w-6 h-6 mt-1 shrink-0" />
                    <h2 className="font-display text-3xl lg:text-4xl leading-tight">
                      {mod.name}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {mod.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {mod.stats.map((s) => (
                      <div key={s.label}>
                        <div className="font-display text-2xl mb-1">
                          {s.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-6">
                    Capabilities
                  </h3>
                  <ul className="space-y-4">
                    {mod.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="w-1 h-1 rounded-full bg-foreground mt-2 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Claude */}
      <section id="why-claude" className="py-32 lg:py-40 border-t border-foreground/10 bg-foreground/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
                Technical Foundation
              </span>
              <h2 className="font-display text-5xl lg:text-6xl tracking-tight mb-8">
                Why Claude
                <br />
                200K context?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our four-module architecture is only possible because of
                Claude's 200K token context window. Nightly batch processing
                requires ingesting an entire day's conversation corpus in a
                single pass — no other model handles this reliably at
                production scale.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond context length, Claude's instruction-following
                consistency and native Southeast Asian language capability are
                non-negotiable for our compliance-grade enterprise clients.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "200K Context Window",
                  desc: "Ingest full conversation history and policy documents in a single pass",
                },
                {
                  title: "Long-text Stability",
                  desc: "Consistent output quality across the full context length — critical for batch jobs",
                },
                {
                  title: "Instruction Following",
                  desc: "Compliance-grade adherence to enterprise policy rules and tone guidelines",
                },
                {
                  title: "11 SEA Languages",
                  desc: "Native-quality Thai, Vietnamese, Malay, Indonesian, Filipino, and more",
                },
              ].map((item) => (
                <div key={item.title} className="border border-foreground/10 p-6">
                  <h3 className="font-medium text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-5xl lg:text-6xl tracking-tight mb-6">
            Ready to deploy?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Talk to our team about which modules fit your enterprise workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 h-14 text-base rounded-full hover:bg-foreground/90 transition-colors group"
            >
              Contact Sales
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 border border-foreground/20 px-8 h-14 text-base rounded-full hover:bg-foreground/5 transition-colors"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
