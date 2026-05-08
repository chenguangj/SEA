"use client";

import { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ArrowRight } from "lucide-react";

const featured = {
  slug: "why-200k-context-changes-enterprise-ai",
  category: "Engineering",
  date: "May 2, 2026",
  readTime: "8 min read",
  title: "Why 200K Context Changes Everything for Enterprise AI",
  excerpt:
    "Most enterprise AI deployments fail not because of model quality, but because of context limits. Here's how we built a four-module architecture that treats the 200K window as a first-class design constraint — and why it unlocks workloads that were previously impossible.",
};

const posts = [
  {
    slug: "nightly-batch-the-hidden-engine",
    category: "Product",
    date: "Apr 18, 2026",
    readTime: "6 min read",
    title: "Nightly Batch: The Hidden Engine Behind Our Token Economics",
    excerpt:
      "78% of our daily token load runs while your team sleeps. We explain why batch processing is the most underrated module in enterprise AI — and how it keeps costs predictable at scale.",
  },
  {
    slug: "sea-language-parity",
    category: "Languages",
    date: "Apr 4, 2026",
    readTime: "10 min read",
    title: "Achieving True Language Parity Across 11 Southeast Asian Languages",
    excerpt:
      "English-first AI platforms treat SEA languages as an afterthought. We built our multilingual knowledge base engine to treat Thai, Vietnamese, Malay, and eight others as first-class citizens — here's what that actually required.",
  },
  {
    slug: "proactive-outreach-vs-blast",
    category: "Product",
    date: "Mar 21, 2026",
    readTime: "5 min read",
    title: "Proactive Outreach vs. Broadcast Blasts: Why Personalization Wins",
    excerpt:
      "Generic notification campaigns get 8–12% open rates. Our proactive outreach engine averages 3–5× higher. The difference is context injection — and it changes how enterprises think about customer communication.",
  },
  {
    slug: "compliance-grade-ai-sea",
    category: "Compliance",
    date: "Mar 7, 2026",
    readTime: "7 min read",
    title: "Building Compliance-Grade AI for Southeast Asia's Regulatory Landscape",
    excerpt:
      "Vietnam's State Bank, Indonesia's OJK, Singapore's MAS — each has distinct requirements for AI-generated customer communications. We break down how we architect compliance into the model layer, not the review layer.",
  },
  {
    slug: "onboarding-enterprise-in-6-weeks",
    category: "Operations",
    date: "Feb 20, 2026",
    readTime: "4 min read",
    title: "How We Onboard Enterprise Clients in 6 Weeks or Less",
    excerpt:
      "Enterprise AI deployments have a reputation for 6-month timelines. Ours average 6 weeks. Here's the playbook: what we standardize, what we customizehere most projects lose time.",
  },
  {
    slug: "token-economics-enterprise",
    category: "Engineering",
    date: "Feb 6, 2026",
    readTime: "9 min read",
    title: "Token Economics at Enterprise Scale: How We Keep Costs Predictable",
    excerpt:
      "A single enterprise client processes ~410M tokens per day on our platform. At that scale, token efficiency isn't a nice-to-have — it's the difference between a viable business and a runaway cost center.",
  },
  {
    slug: "whatsapp-line-integration-sea",
    category: "Product",
    date: "Jan 24, 2026",
    readTime: "5 min read",
    title: "WhatsApp and LINE: Why Messaging Apps Are the Real Enterprise Channel in SEA",
    excerpt:
      "Email open rates in Southeast Asia average 18%. WhatsApp and LINE open rates average 92%. If your enterprise AI isn't deployed on the channels customers actually use, you're solving the wrong problem.",
  },
  {
    slug: "knowledge-base-cold-start",
    category: "Operations",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    title: "The Knowledge Base Cold Start Problem — and How We Solve It",
    excerpt:
      "Every new enterprise deployment starts with the e challenge: the AI knows nothing about your business. Here's the structured ingestion process we use to get a production-ready knowledge base in under two weeks.",
  },
  {
    slug: "sea-fintech-ai-regulation-2026",
    category: "Compliance",
    date: "Dec 19, 2025",
    readTime: "8 min read",
    title: "What the 2026 SEA Fintech AI Regulations Mean for Enterprise Deployments",
    excerpt:
      "Singapore, Vietnam, and Indonesia all updated their AI governance frameworks in late 2025. We break down what changed, what it means for AI-generated customer communications, and how our compliance architeeady covers the new requirements.",
  },
  {
    slug: "thai-language-nuance-ai",
    category: "Languages",
    date: "Dec 5, 2025",
    readTime: "7 min read",
    title: "Thai Language Nuance in AI: Why Politeness Levels Matter for Enterprise",
    excerpt:
      "Thai has five distinct politeness registers, each appropriate for different customer relationships. An AI that uses the wrong register doesn't just sound awkward — it signals disrespect. Here's how we handle register selection in production.",
  },
  {
    slug: "multi-tenant-architecture-isolation",
    category: "Engineering",
    date: "Nov 21, 2025",
    readTime: "10 min read",
    title: "Multi-Tenant Architecture: How We Keep 35 Enterprise Clients Isolated",
    excerpt:
      "When a single platform serves 35 enterprise clients — each with sensitive customer data, distinct compliance requirements, and different knowledge bases — data isolation isn't optional. Here's the architecture that makes it work.",
  },
];

const categories = ["All", "Engineering", "Product", "Languages", "Compliance", "Operations"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-40 pb-24 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-8">
            <span className="w-8 h-px bg-foreground/30" />
            Insights
          </span>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight mb-8">
            From the
            <br />
            <span className="text-stroke">SEA FAN team.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Engineering deep-dives, product thinking, and market insights on
            enterprise AI in Southeast Asia.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section id="featured" className="border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            className="grid lg:grid-cols-12 gap-8 py-16 lg:py-24 group"
          >
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-4">
                  Featured
                </span>
                <span className="px-2 py-0.5 border border-foreground/20 text-xs font-mono">
                  {featured.category}
                </span>
              </div>
              <div className="mt-8 lg:mt-0">
                <p className="text-xs text-muted-foreground font-mono">
                  {featured.date} · {featured.readTime}
                </p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2 className="font-display text-3xl lg:text-5xl leading-tight mb-6 group-hover:text-muted-foreground transition-colors">
                {featured.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                {featured.excerpt}
              </p>
              {/* <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                Read article
                <ArrowRight className="w-4 h-4" />
              </span> */}
            </div>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 py-6 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-mono whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? "bg-foreground text-background"
                    : "border border-foreground/20 text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-32 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {filtered.length === 0 ? (
            <div className="border border-foreground/10 bg-background p-16 text-center">
              <p className="text-sm text-muted-foreground font-mono mb-2">
                No articles in this category yet.
              </p>
              <p className="text-xs text-muted-foreground/60">
                Check back soon — new content is published twice a month.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10">
              {filtered.map((post) => (
                <div
                  key={post.slug}
                  className="bg-background p-8 lg:p-10 flex flex-col gap-6 hover:bg-foreground/[0.02] transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 border border-foreground/20 text-xs font-mono">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">
                      {post.readTime}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl lg:text-2xl leading-tight mb-4 group-hover:text-muted-foreground transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                    <span className="text-xs text-muted-foreground font-mono">
                      {post.date}
                    </span>
                    {/* <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /> */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-32 border-t border-foreground/10 bg-foreground/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
                Newsletter
              </span>
              <h2 className="font-display text-4xl lg:text-5xl tracking-tight mb-4">
                Stay current on
                <br />
                enterprise AI in SEA.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                New articles on engineering, compliance, and market trends —
                delivered twice a month. No noise.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@company.com"
                className="flex-1 bg-transparent border border-foreground/20 px-4 h-12 text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
              />
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 h-12 text-sm font-medium hover:bg-foreground/90 transition-colors whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
