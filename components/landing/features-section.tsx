"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "Service 01",
    title: "Custom Chatbot Development",
    description:
      "We design and build AI chatbots tailored to your brand, workflows, and customer base. From conversational flow design to system integration, every bot is built to your exact specifications — not a generic template.",
    badge: "Custom",
    visual: "realtime",
  },
  {
    number: "Service 02",
    title: "Intelligent Customer Service",
    description:
      "Deploy AI-powered customer service that handles inquiries 24/7 with accuracy and consistency. Reduce ticket volume, cut response times, and free your human agents to focus on complex cases that need a personal touch.",
    badge: "Live",
    visual: "batch",
  },
  {
    number: "Service 03",
    title: "Smart Consulting Automation",
    description:
      "Automate pre-sales consulting, product recommendations, and FAQ resolution. The chatbot qualifies leads, answers detailed product questions, and guides users through decision flows — all without human intervention.",
    badge: "Automated",
    visual: "proactive",
  },
  {
    number: "Service 04",
    title: "Multilingual Knowledge Hub",
    description:
      "Maintain one primary knowledge base and let the system automatically translate and sync to all supported language versions. Every product update or policy change propagates across all languages instantly.",
    badge: "Continuous",
    visual: "knowledge",
  },
];

function RealtimeVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <rect
        x="20"
        y="20"
        width="110"
        height="28"
        rx="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <text
        x="75"
        y="39"
        textAnchor="middle"
        fontSize="9"
        fontFamily="monospace"
        fill="currentColor"
        opacity="0.7"
      >
        User: Where is my order?
      </text>
      <rect
        x="70"
        y="60"
        width="110"
        height="28"
        rx="14"
        fill="currentColor"
        opacity="0.15"
      >
        <animate
          attributeName="opacity"
          values="0.15;0.3;0.15"
          dur="2s"
          repeatCount="indefinite"
        />
      </rect>
      <text
        x="125"
        y="79"
        textAnchor="middle"
        fontSize="9"
        fontFamily="monospace"
        fill="currentColor"
        opacity="0.7"
      >
        AI: Checking now...
      </text>
      <rect
        x="20"
        y="100"
        width="130"
        height="28"
        rx="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.6"
      >
        <animate
          attributeName="opacity"
          values="0.6;1;0.6"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </rect>
      <text
        x="85"
        y="119"
        textAnchor="middle"
        fontSize="9"
        fontFamily="monospace"
        fill="currentColor"
        opacity="0.7"
      >
        AI: Your order shipped ✓
      </text>
      <circle cx="170" cy="140" r="4" fill="currentColor">
        <animate
          attributeName="r"
          values="4;7;4"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

function BatchVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <text x="160" y="35" fontSize="22" fill="currentColor" opacity="0.4">
        🌙
      </text>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect
            x="20"
            y={30 + i * 22}
            width="140"
            height="14"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.2"
          />
          <rect
            x="20"
            y={30 + i * 22}
            width="0"
            height="14"
            rx="3"
            fill="currentColor"
            opacity="0.5"
          >
            <animate
              attributeName="width"
              values={`0;${60 + i * 16};${60 + i * 16}`}
              dur="3s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
            />
          </rect>
        </g>
      ))}
      <text
        x="20"
        y="148"
        fontSize="9"
        fontFamily="monospace"
        fill="currentColor"
        opacity="0.5"
      >
        Batch analysis complete ✓
      </text>
    </svg>
  );
}

function ProactiveVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <circle cx="100" cy="70" r="14" fill="currentColor" opacity="0.9" />
      <text x="100" y="75" textAnchor="middle" fontSize="12" fill="white">
        📢
      </text>
      {[30, 50, 70].map((r, i) => (
        <circle
          key={i}
          cx="100"
          cy="70"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0"
        >
          <animate
            attributeName="r"
            values={`${r - 10};${r}`}
            dur="2s"
            begin={`${i * 0.5}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.5;0"
            dur="2s"
            begin={`${i * 0.5}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i * 72 - 90) * (Math.PI / 180);
        return (
          <circle
            key={i}
            cx={100 + Math.cos(angle) * 75}
            cy={70 + Math.sin(angle) * 60}
            r="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.5"
          >
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur="2s"
              begin={`${i * 0.3}s`}
              repeatCount="indefinite"
            />
          </circle>
        );
      })}
    </svg>
  );
}

function KnowledgeVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">
      <rect
        x="10"
        y="50"
        width="40"
        height="50"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <text
        x="30"
        y="80"
        textAnchor="middle"
        fontSize="9"
        fontFamily="monospace"
        fill="currentColor"
        opacity="0.6"
      >
        ZH
      </text>
      <line
        x1="52"
        y1="75"
        x2="75"
        y2="75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 2"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;-10"
          dur="0.8s"
          repeatCount="indefinite"
        />
      </line>
      {[
        { lang: "TH", y: 20 },
        { lang: "VI", y: 45 },
        { lang: "ID", y: 70 },
        { lang: "MS", y: 95 },
        { lang: "TL", y: 120 },
      ].map(({ lang, y }, i) => (
        <g key={lang}>
          <rect
            x="80"
            y={y}
            width="36"
            height="20"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.6"
          >
            <animate
              attributeName="opacity"
              values="0.4;0.9;0.4"
              dur="2s"
              begin={`${i * 0.2}s`}
              repeatCount="indefinite"
            />
          </rect>
          <text
            x="98"
            y={y + 14}
            textAnchor="middle"
            fontSize="9"
            fontFamily="monospace"
            fill="currentColor"
            opacity="0.8"
          >
            {lang}
          </text>
          <line
            x1="116"
            y1={y + 10}
            x2="140"
            y2={y + 10}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.3"
          />
          <rect
            x="140"
            y={y + 3}
            width="50"
            height="14"
            rx="2"
            fill="currentColor"
            opacity="0.08"
          >
            <animate
              attributeName="opacity"
              values="0.08;0.18;0.08"
              dur="2s"
              begin={`${i * 0.2}s`}
              repeatCount="indefinite"
            />
          </rect>
        </g>
      ))}
    </svg>
  );
}

function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "realtime":
      return <RealtimeVisual />;
    case "batch":
      return <BatchVisual />;
    case "proactive":
      return <ProactiveVisual />;
    case "knowledge":
      return <KnowledgeVisual />;
    default:
      return <RealtimeVisual />;
  }
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-20 border-b border-foreground/10">
        <div className="shrink-0 flex flex-col gap-2">
          <span className="font-mono text-sm text-muted-foreground">
            {feature.number}
          </span>
          <span className="inline-block px-2 py-0.5 border border-foreground/20 text-xs font-mono text-muted-foreground">
            {feature.badge}
          </span>
        </div>
        <div className="flex-1 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-display mb-4 group-hover:translate-x-2 transition-transform duration-500">
              {feature.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-48 h-40 text-foreground">
              <AnimatedVisual type={feature.visual} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
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

  return (
    <section id="features" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Core Modules
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            What we build for you.
            <br />
            <span className="text-muted-foreground">Each service, essential.</span>
          </h2>
        </div>
        <div>
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
