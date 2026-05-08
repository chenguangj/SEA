"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";

const words = ["Thai", "Vietnamese", "Malay", "Indonesian", "Filipino"];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pb-40">
      {/* Animated sphere background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-none">
        <AnimatedSphere />
      </div>

      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{ top: `${12.5 * (i + 1)}%`, left: 0, right: 0 }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        {/* Eyebrow */}
        <div
          className={`mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30" />
            Custom AI Chatbot Development & Deployment for Enterprises
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-12">
          <h1
            className={`text-[clamp(3rem,10vw,8rem)] font-display leading-[0.9] tracking-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="block">AI Chatbots,</span>
            <span className="block">
              Built for{" "}
              <span className="relative inline-block">
                <span key={wordIndex} className="inline-flex">
                  {words[wordIndex].split("").map((char, i) => (
                    <span
                      key={`${wordIndex}-${i}`}
                      className="inline-block animate-char-in"
                      style={{ animationDelay: `${i * 60}ms` }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-foreground/10" />
              </span>
            </span>
          </h1>
        </div>

        {/* Description */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <p
            className={`text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            We provide professional AI chatbot development, customization, and
            deployment solutions — helping enterprises elevate customer service,
            streamline consulting workflows, and automate intelligent
            interactions.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
            >
              <a href="/case-studies" className="inline-flex items-center whitespace-nowrap">
                Book a Demo<ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
            >
              <a href="/contact">Contact Us
              </a>
              
            </Button>
          </div>
        </div>
      </div>

      {/* Stats marquee — 贴底部，上下 padding 留出呼吸空间，border-top 做视觉分隔 */}
      <div
        className={`absolute bottom-0 left-0 right-0 overflow-hidden transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="border-t border-foreground/10 py-8">
          <div className="relative h-16">
            {[0, 1].map((groupIdx) => (
              <div
                key={groupIdx}
                className="absolute top-0 flex items-start gap-12 whitespace-nowrap"
                style={{
                  animation: `marquee-slot 24s linear infinite`,
                  animationDelay: groupIdx === 0 ? "0s" : "-12s",
                  willChange: "transform",
                }}
              >
                {[
                  {
                    value: "50+",
                    label: "Enterprise clients",
                    company: "ENTERPRISE",
                  },
                  {
                    value: "11",
                    label: "SEA languages supported",
                    company: "LANGUAGES",
                  },
                  { value: "200K", label: "Context window", company: "CLAUDE" },
                  {
                    value: "99.9%",
                    label: "Service uptime",
                    company: "UPTIME",
                  },
                  {
                    value: "24/7",
                    label: "Always-on support",
                    company: "ALWAYS ON",
                  },
                  {
                    value: "30 min",
                    label: "Fastest onboarding",
                    company: "ONBOARDING",
                  },
                ].map((stat) => (
                  <div
                    key={stat.company}
                    className="flex flex-col gap-1 w-44 shrink-0"
                  >
                    <span className="text-4xl lg:text-5xl font-display leading-none">
                      {stat.value}
                    </span>
                    <span className="text-sm text-muted-foreground leading-tight">
                      {stat.label}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground/60">
                      {stat.company}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
