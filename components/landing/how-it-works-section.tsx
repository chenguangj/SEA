"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const steps = [
  {
    number: "I",
    title: "Connect your business systems",
    description:
      "Import your brand playbook, product manuals, and historical conversation data. Supports API, CSV, and direct database connections. A dedicated customer success manager guides you through setup — live in 30 minutes.",
    visual: {
      type: "checklist",
      title: "Setup Checklist",
      items: [
        { label: "Brand voice & tone guide", done: true },
        { label: "Product manual / FAQ", done: true },
        { label: "Historical conversation data", done: true },
        { label: "Channel integration (LINE / WhatsApp)", done: true },
        { label: "Knowledge base language config", done: false, active: true },
        { label: "Pre-launch QA & sign-off", done: false },
      ],
      footer: "Estimated setup time: 30 minutes",
    },
  },
  {
    number: "II",
    title: "Configure your multilingual knowledge base",
    description:
      "Upload your primary knowledge base in any language. The system automatically translates and syncs to all 11 language versions. Each language is independently validated to ensure terminology, brand tone, and formatting stay consistent.",
    visual: {
      type: "languages",
      title: "Knowledge Base Sync Status",
      items: [
        {
          lang: "Chinese (Primary)",
          code: "ZH",
          status: "Primary",
          done: true,
        },
        { lang: "Thai", code: "TH", status: "Synced", done: true },
        { lang: "Vietnamese", code: "VI", status: "Synced", done: true },
        { lang: "Indonesian", code: "ID", status: "Synced", done: true },
        { lang: "Malay", code: "MS", status: "Synced", done: true },
        {
          lang: "Filipino",
          code: "TL",
          status: "Syncing…",
          done: false,
          active: true,
        },
      ],
      footer: "11 languages total — all automated",
    },
  },
  {
    number: "III",
    title: "All three modules run automatically",
    description:
      "Go live the moment setup is complete. Real-time chat responds 24/7, nightly batch processing analyzes all data automatically, and the proactive outreach engine sends personalized notifications on schedule. Zero manual intervention required.",
    visual: {
      type: "modules",
      title: "Module Status",
      items: [
        {
          label: "Real-time Chat Engine",
          sub: "340 concurrent sessions",
          status: "Running",
        },
        {
          label: "Nightly Batch Processor",
          sub: "Completed today at 02:30",
          status: "Done",
        },
        {
          label: "Proactive Outreach",
          sub: "102K notifications sent",
          status: "Running",
        },
        {
          label: "Multilingual Knowledge",
          sub: "11 languages · Up to date",
          status: "Synced",
        },
      ],
      footer: "Fully automated — no manual intervention needed",
    },
  },
];

function ChecklistVisual({ visual }: { visual: (typeof steps)[0]["visual"] }) {
  return (
    <div className="bg-background text-foreground overflow-hidden border border-background/10">
      <div className="px-6 py-4 border-b border-foreground/8 flex items-center justify-between">
        <span className="text-sm font-mono text-foreground/50">
          {visual.title}
        </span>
        <span className="text-xs font-mono text-foreground/40">
          Setup Wizard
        </span>
      </div>
      <div className="divide-y divide-foreground/6">
        {visual.items.map((item, i) => (
          <div
            key={i}
            className={`px-6 py-3.5 flex items-center gap-4 transition-colors ${"active" in item && item.active ? "bg-foreground/3" : ""}`}
          >
            <span
              className={`shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-all ${item.done ? "bg-foreground border-foreground" : "active" in item && item.active ? "border-foreground/60" : "border-foreground/20"}`}
            >
              {item.done && <Check className="w-3 h-3 text-background" />}
              {"active" in item && item.active && !item.done && (
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/60 animate-pulse" />
              )}
            </span>
            <span
              className={`text-sm transition-colors ${item.done ? "text-foreground/35 line-through" : "active" in item && item.active ? "text-foreground font-medium" : "text-foreground/40"}`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <div className="px-6 py-4 border-t border-foreground/8">
        <span className="text-xs font-mono text-foreground/45">
          {visual.footer}
        </span>
      </div>
    </div>
  );
}

function LanguagesVisual({ visual }: { visual: (typeof steps)[0]["visual"] }) {
  return (
    <div className="bg-background text-foreground overflow-hidden border border-background/10">
      <div className="px-6 py-4 border-b border-foreground/8 flex items-center justify-between">
        <span className="text-sm font-mono text-foreground/50">
          {visual.title}
        </span>
        <span className="flex items-center gap-2 text-xs font-mono text-green-600">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Syncing
        </span>
      </div>
      <div className="divide-y divide-foreground/6">
        {visual.items.map((item, i) => (
          <div
            key={i}
            className={`px-6 py-3.5 flex items-center justify-between transition-colors ${"active" in item && item.active ? "bg-foreground/3" : ""}`}
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-foreground/40 w-6">
                {item.code}
              </span>
              <span
                className={`text-sm ${item.done ? "text-foreground/70" : "active" in item && item.active ? "text-foreground font-medium" : "text-foreground/35"}`}
              >
                {item.lang}
              </span>
            </div>
            <span
              className={`text-xs font-mono px-2 py-0.5 rounded-sm ${item.done ? "text-green-700 bg-green-500/12" : "active" in item && item.active ? "text-foreground/70 bg-foreground/6" : "text-foreground/25"}`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
      <div className="px-6 py-4 border-t border-foreground/8">
        <span className="text-xs font-mono text-foreground/45">
          {visual.footer}
        </span>
      </div>
    </div>
  );
}

function ModulesVisual({ visual }: { visual: (typeof steps)[0]["visual"] }) {
  const statusColor: Record<string, string> = {
    Running: "text-green-700 bg-green-500/12",
    Done: "text-foreground/50 bg-foreground/6",
    Synced: "text-green-700 bg-green-500/12",
  };

  return (
    <div className="bg-background text-foreground overflow-hidden border border-background/10">
      <div className="px-6 py-4 border-b border-foreground/8 flex items-center justify-between">
        <span className="text-sm font-mono text-foreground/50">
          {visual.title}
        </span>
        <span className="flex items-center gap-2 text-xs font-mono text-green-600">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          All online
        </span>
      </div>
      <div className="divide-y divide-foreground/6">
        {visual.items.map((item, i) => (
          <div key={i} className="px-6 py-4 flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-foreground mb-0.5">
                {item.label}
              </div>
              <div className="text-xs font-mono text-foreground/50">
                {item.sub}
              </div>
            </div>
            <span
              className={`text-xs font-mono px-2.5 py-1 rounded-sm ${statusColor[item.status] ?? "text-foreground/40"}`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
      <div className="px-6 py-4 border-t border-foreground/8 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs font-mono text-foreground/50">
          {visual.footer}
        </span>
      </div>
    </div>
  );
}

function StepVisual({ visual }: { visual: (typeof steps)[0]["visual"] }) {
  if (visual.type === "checklist") return <ChecklistVisual visual={visual} />;
  if (visual.type === "languages") return <LanguagesVisual visual={visual} />;
  if (visual.type === "modules") return <ModulesVisual visual={visual} />;
  return null;
}

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-background/70 mb-6">
            <span className="w-8 h-px bg-background/50" />
            Onboarding
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Three steps to go live.
            <br />
            <span className="text-background/65">As fast as same day.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-0">
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`w-full text-left py-8 border-b border-background/10 transition-all duration-500 group ${activeStep === index ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
              >
                <div className="flex items-start gap-6">
                  <span className="font-display text-3xl text-background/30">
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <p className="text-background/75 leading-relaxed">
                      {step.description}
                    </p>
                    {activeStep === index && (
                      <div className="mt-4 h-px bg-background/20 overflow-hidden">
                        <div
                          className="h-full bg-background w-0"
                          style={{ animation: "progress 5s linear forwards" }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:sticky lg:top-32 self-start">
            <div
              key={activeStep}
              style={{
                animation:
                  "fadeSlideIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",
              }}
            >
              <StepVisual visual={steps[activeStep].visual} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(12px);
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
