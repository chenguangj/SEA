"use client";

import { useEffect, useState, useRef } from "react";
import { Cpu, BookOpen, Globe, Zap } from "lucide-react";

const whyClaudeFeatures = [
  {
    icon: Cpu,
    title: "200K context window is an architectural requirement",
    description:
      "Module B's nightly analysis needs to ingest thousands of conversations from a single enterprise in one pass. GPT-4o's 128K window forces chunking, which breaks logical continuity across sessions.",
  },
  {
    icon: Zap,
    title: "Instruction-following stability",
    description:
      "100,000 proactive notifications must be generated 100% on-brand, every time. Claude's instruction adherence in long batch jobs is measurably more consistent than other models.",
  },
  {
    icon: Globe,
    title: "Southeast Asian language quality",
    description:
      "In human evaluations with native speakers of Thai, Vietnamese, and Malay, Claude ranked first for comprehension and generation quality. 11-language knowledge base sync depends on this capability.",
  },
  {
    icon: BookOpen,
    title: "Knowledge base sync accuracy",
    description:
      "When translating product docs into 11 languages, Claude preserves technical terminology, brand voice, and formatting. Other models tend to drift semantically on low-resource languages.",
  },
];

const certifications = [
  "SOC 2",
  "GDPR",
  "ISO 27001",
  "Data Localization",
  "End-to-End Encryption",
];

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="security"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-foreground/2 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Why Claude
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Not a preference.
              <br />A technical necessity.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              We tested every major model on the market. Claude's combined
              performance across Southeast Asian multilingual quality,
              long-context stability, and instruction following made it the only
              viable choice for our architecture.
            </p>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <span
                  key={cert}
                  className={`px-4 py-2 border border-foreground/10 text-sm font-mono transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {whyClaudeFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`p-6 border border-foreground/10 hover:border-foreground/20 transition-all duration-500 group ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-foreground/10 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
