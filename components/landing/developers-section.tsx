"use client";

import { useEffect, useRef, useState } from "react";

const modules = [
  {
    id: "A",
    label: "Module A",
    title: "Real-time Chat Engine",
    badge: "24/7 Live",
    description:
      "The moment a user reaches out, the AI loads the full brand playbook, conversation history, and product manual — ensuring every response is accurate, on-brand, and contextually aware. No shift scheduling, always on.",
    capabilities: [
      "Auto-detects user language, switches seamlessly across 11 SEA languages",
      "Long-context injection keeps conversations coherent across sessions",
      "Reads live order, logistics, and account status in real time",
      "Sensitive issues auto-escalate to human agents with full context handoff",
    ],
  },
  {
    id: "B",
    label: "Module B",
    title: "Nightly Batch Processor",
    badge: "Daily Auto",
    description:
      "Every night the system runs automatically — deep-analyzing all customer conversations, generating the next day's operations report, refreshing the knowledge base, and detecting emerging sentiment trends. Wake up to yesterday's full picture.",
    capabilities: [
      "Full conversation summarization, auto-generates daily ops report",
      "User sentiment trend analysis and churn risk alerts",
      "Knowledge base auto-refresh to keep content current",
      "Cross-channel data aggregation in a single report",
    ],
  },
  {
    id: "C",
    label: "Module C",
    title: "Proactive Outreach Engine",
    badge: "Smart Push",
    description:
      "Don't wait for customers to ask. Based on order status, user behavior, and churn risk signals, the engine auto-generates personalized notifications and sends them. Every message is tailored to that specific user — not a broadcast template.",
    capabilities: [
      "Auto-notifies on shipment, delivery, and order exceptions",
      "Intelligent retention campaigns for high-churn-risk users",
      "Personalized promotions — not mass-blast templates",
      "Multi-channel delivery: LINE, WhatsApp, SMS",
    ],
  },
  {
    id: "D",
    label: "Module D",
    title: "Multilingual Knowledge Hub",
    badge: "Always Synced",
    description:
      "Maintain one primary knowledge base. The system automatically translates and syncs to all 11 language versions. Every product update or policy change propagates across all languages instantly — no more managing 11 separate knowledge bases.",
    capabilities: [
      "One-click sync to 11 languages — no manual translation",
      "Preserves technical terms, brand voice, and formatting",
      "Auto re-embeds after every update to ensure consistency",
      "Version control with rollback and diff comparison",
    ],
  },
];

export function DevelopersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeModule, setActiveModule] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const current = modules[activeModule];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Module Details
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Every module
            <br />
            <span className="text-muted-foreground">
              solves a real problem.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Tab selector */}
          <div
            className={`lg:col-span-4 flex flex-row lg:flex-col gap-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {modules.map((module, index) => (
              <button
                key={module.id}
                type="button"
                onClick={() => setActiveModule(index)}
                className={`group flex-1 lg:flex-none text-left px-5 py-4 border transition-all duration-300 ${activeModule === index ? "border-foreground bg-foreground text-background" : "border-foreground/10 hover:border-foreground/30 hover:bg-foreground/2"}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <span
                      className={`block font-mono text-xs mb-1 transition-colors ${activeModule === index ? "text-background/60" : "text-muted-foreground"}`}
                    >
                      {module.label}
                    </span>
                    <span className="font-medium text-sm leading-tight">
                      {module.title}
                    </span>
                  </div>
                  <span
                    className={`hidden lg:block shrink-0 w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeModule === index ? "bg-background" : "bg-transparent"}`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div
            className={`lg:col-span-8 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div
              key={activeModule}
              className="border border-foreground/10 h-full"
              style={{
                animation:
                  "fadeSlideIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards",
              }}
            >
              <div className="px-8 py-6 border-b border-foreground/10 flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-muted-foreground block mb-2">
                    {current.label}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-display">
                    {current.title}
                  </h3>
                </div>
                <span className="shrink-0 mt-1 px-3 py-1 border border-foreground/15 text-xs font-mono text-muted-foreground">
                  {current.badge}
                </span>
              </div>

              <div className="px-8 py-6 border-b border-foreground/10">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {current.description}
                </p>
              </div>

              <div className="px-8 py-6">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-5">
                  Key Capabilities
                </span>
                <ul className="space-y-4">
                  {current.capabilities.map((cap, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4"
                      style={{
                        animation: `fadeSlideIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${i * 60}ms both`,
                      }}
                    >
                      <span className="shrink-0 mt-1.5 w-4 h-px bg-foreground/40" />
                      <span className="text-foreground/80 leading-relaxed">
                        {cap}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-8 py-5 border-t border-foreground/10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-muted-foreground">
                  Running
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
