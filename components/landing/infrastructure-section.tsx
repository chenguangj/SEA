"use client";

import { useEffect, useState, useRef } from "react";

const languages = [
  { lang: "Thai", code: "TH", region: "Thailand", status: "Verified" },
  { lang: "Vietnamese", code: "VI", region: "Vietnam", status: "Verified" },
  { lang: "Indonesian", code: "ID", region: "Indonesia", status: "Verified" },
  {
    lang: "Malay",
    code: "MS",
    region: "Malaysia / Singapore",
    status: "Verified",
  },
  { lang: "Filipino", code: "TL", region: "Philippines", status: "Verified" },
  { lang: "Khmer", code: "KM", region: "Cambodia", status: "Verified" },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLanguage((prev) => (prev + 1) % languages.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="languages"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Language Coverage
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Southeast Asian
              <br />
              languages, native.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Not machine translation — genuine localized AI. Thai, Vietnamese,
              Malay, and 8 more languages have all passed native-speaker fluency
              tests. This capability is unique to Claude.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">11</div>
                <div className="text-sm text-muted-foreground">
                  Languages supported
                </div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">
                  200K
                </div>
                <div className="text-sm text-muted-foreground">
                  Context window
                </div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">28</div>
                <div className="text-sm text-muted-foreground">
                  Enterprise clients
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="border border-foreground/10">
              <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between">
                <span className="text-sm font-mono text-muted-foreground">
                  Language Support Status
                </span>
                <span className="flex items-center gap-2 text-xs font-mono text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  All online
                </span>
              </div>
              <div>
                {languages.map((language, index) => (
                  <div
                    key={language.code}
                    className={`px-6 py-5 border-b border-foreground/5 last:border-b-0 flex items-center justify-between transition-all duration-300 ${activeLanguage === index ? "bg-foreground/2" : ""}`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeLanguage === index ? "bg-foreground" : "bg-foreground/20"}`}
                      />
                      <div>
                        <div className="font-medium">{language.lang}</div>
                        <div className="text-sm text-muted-foreground">
                          {language.region}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-muted-foreground">
                        {language.code}
                      </span>
                      <span className="text-xs text-green-600 font-mono">
                        {language.status}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="px-6 py-4 text-sm text-muted-foreground font-mono text-center border-t border-foreground/5">
                  + Lao, Burmese, English, Japanese, Korean
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
