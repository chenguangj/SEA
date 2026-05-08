"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "In the first week after launch, our Thailand support team's ticket volume dropped 60%. The AI's accuracy far exceeded our expectations — customers didn't even realize they were talking to a machine.",
    author: "Zhang Wei",
    role: "Head of Customer Support",
    company: "Southeast Asia Cross-border E-commerce",
    metric: "Ticket volume down 60%",
  },
  {
    quote:
      "The nightly batch module auto-generates our daily ops report every morning. Something that used to take two people three hours — now zero manual effort.",
    author: "Nguyen Linh",
    role: "Operations Lead",
    company: "Vietnam Local Retail Brand",
    metric: "3 hours saved per day",
  },
  {
    quote:
      "Multilingual knowledge base sync was the core reason we chose SEA FAN AI. We operate in 6 countries. Before, we maintained 6 separate knowledge bases. Now we maintain one.",
    author: "Ahmad Rizal",
    role: "CTO",
    company: "Malaysia Fintech Company",
    metric: "Knowledge base cost −83%",
  },
  {
    quote:
      "The open rate on personalized notifications from the proactive outreach module is 4x higher than our old broadcast templates. Users say it feels like a real person is talking to them.",
    author: "Maria Santos",
    role: "Growth Lead",
    company: "Philippines E-commerce Platform",
    metric: "Notification open rate +4x",
  },
];

// 找出最长的 quote（用于占位撑高）
const longestQuoteIdx = testimonials.reduce(
  (maxIdx, t, idx, arr) =>
    t.quote.length > arr[maxIdx].quote.length ? idx : maxIdx,
  0,
);

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const switchTo = (idx: number) => {
    if (idx === activeIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(idx);
      setIsAnimating(false);
    }, 250);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (activeIndex + 1) % testimonials.length;
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(next);
        setIsAnimating(false);
      }, 250);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="relative py-32 lg:py-40 border-t border-foreground/10 lg:pb-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            What customers say
          </span>
          <div className="flex-1 h-px bg-foreground/10" />
          <span className="font-mono text-xs text-muted-foreground">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* ── Left col: quote + author ── */}
          <div className="lg:col-span-8">
            {/*
              策略：
              1. 用最长的那条做"幽灵占位层"（invisible），永远撑住最大高度
              2. 所有条目全部 absolute，叠在占位层上方
              3. 容器高度 = 最长条目高度，切换时绝对不变
            */}
            <div className="relative">
              {/* 幽灵占位层 —— 不可见，只撑高度 */}
              <div
                aria-hidden="true"
                className="invisible select-none pointer-events-none"
              >
                <blockquote>
                  <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight">
                    "{testimonials[longestQuoteIdx].quote}"
                  </p>
                </blockquote>
                <div className="mt-12 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full shrink-0" />
                  <div>
                    <p className="text-lg font-medium">
                      {testimonials[longestQuoteIdx].author}
                    </p>
                    <p>
                      {testimonials[longestQuoteIdx].role},{" "}
                      {testimonials[longestQuoteIdx].company}
                    </p>
                  </div>
                </div>
              </div>

              {/* 所有条目：全部 absolute，叠在占位层上 */}
              {testimonials.map((t, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={idx}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 transition-all duration-300 ${
                      isActive && !isAnimating
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-3 pointer-events-none"
                    }`}
                  >
                    <blockquote>
                      <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-foreground">
                        "{t.quote}"
                      </p>
                    </blockquote>
                    <div className="mt-12 flex items-center gap-6">
                      <div className="w-16 h-16 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center shrink-0">
                        <span className="font-display text-2xl text-foreground">
                          {t.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-lg font-medium text-foreground">
                          {t.author}
                        </p>
                        <p className="text-muted-foreground">
                          {t.role}, {t.company}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right col: metric card + dots ── */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="relative">
              {/* 幽灵占位层 */}
              <div
                aria-hidden="true"
                className="invisible select-none pointer-events-none p-8"
              >
                <span className="font-mono text-xs block mb-4">Key Result</span>
                <p className="font-display text-3xl md:text-4xl">
                  {
                    testimonials.reduce((a, b) =>
                      a.metric.length >= b.metric.length ? a : b,
                    ).metric
                  }
                </p>
              </div>

              {/* 所有条目：全部 absolute */}
              {testimonials.map((t, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={idx}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 p-8 border border-foreground/10 transition-all duration-300 ${
                      isActive && !isAnimating
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
                      Key Result
                    </span>
                    <p className="font-display text-3xl md:text-4xl text-foreground">
                      {t.metric}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Navigation dots */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => switchTo(idx)}
                  className={`h-2 transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-8 bg-foreground"
                      : "w-2 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-foreground/10">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8 text-center">
            Trusted by
          </p>
        </div>
      </div>

      {/* Company marquee */}
      <div className="w-full">
        <div className="flex gap-16 items-center marquee">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-16 items-center shrink-0">
              {[
                "Cross-border E-commerce Group",
                "Vietnam Retail Brand",
                "Malaysia Fintech",
                "Philippines E-commerce",
                "Thailand Logistics",
                "Indonesia SaaS",
                "Singapore Financial Institution",
                "Cambodia E-commerce",
              ].map((company) => (
                <span
                  key={`${setIdx}-${company}`}
                  className="font-display text-xl md:text-2xl text-foreground/30 whitespace-nowrap hover:text-foreground transition-colors duration-300"
                >
                  {company}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
